import pandas as pd
import numpy as np
import torch
import torch.nn as nn
import sys
import os
import torch.optim as optim
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import LabelEncoder
from sklearn.metrics import accuracy_score, classification_report
from torch.utils.data import DataLoader, TensorDataset
from tqdm import tqdm
from ML_files.src.config import Config
sys.path.append(os.path.join(os.path.dirname(__file__), "../../"))

# --- Load and preprocess ---
df = pd.read_csv(Config.PROCESSED_TRAIN_PATH)

# Features and labels
X = df.drop(columns=["diseases"]).values
y = df["diseases"].values

# Encode labels
le = LabelEncoder()
y_encoded = le.fit_transform(y)

# Split data
X_train, X_test, y_train, y_test = train_test_split(
    X, y_encoded, test_size=0.2, random_state=42
)

# --- Convert to tensors ---
X_train = torch.tensor(X_train, dtype=torch.float32)
y_train = torch.tensor(y_train, dtype=torch.long)
X_test = torch.tensor(X_test, dtype=torch.float32)
y_test = torch.tensor(y_test, dtype=torch.long)

# --- Use GPU if available ---
device = torch.device(Config.DEVICE)
print(f"Using device: {device}")

# --- Create Datasets & Loaders ---
train_dataset = TensorDataset(X_train, y_train)
test_dataset = TensorDataset(X_test, y_test)

train_loader = DataLoader(train_dataset, batch_size=256, shuffle=True)
test_loader = DataLoader(test_dataset, batch_size=512)

# --- Define Fast Neural Network ---
class FastDiseaseNet(nn.Module):
    def __init__(self, input_dim, hidden_dim, output_dim):
        super(FastDiseaseNet, self).__init__()
        self.net = nn.Sequential(
            nn.Linear(input_dim, hidden_dim),
            nn.BatchNorm1d(hidden_dim),
            nn.ReLU(),
            nn.Dropout(0.3),

            nn.Linear(hidden_dim, hidden_dim // 2),
            nn.BatchNorm1d(hidden_dim // 2),
            nn.ReLU(),
            nn.Dropout(0.2),

            nn.Linear(hidden_dim // 2, hidden_dim //4),
            nn.BatchNorm1d(hidden_dim // 4),
            nn.ReLU(),
            nn.Dropout(0.1),

            nn.Linear(hidden_dim // 4, output_dim)
        )

    def forward(self, x):
        return self.net(x)

# --- Initialize model ---
input_dim = X_train.shape[1]
output_dim = len(np.unique(y_encoded))
hidden_dim = 256
model = FastDiseaseNet(input_dim, hidden_dim, output_dim).to(device)

# --- Loss, optimizer, scheduler ---
criterion = nn.CrossEntropyLoss()
optimizer = optim.AdamW(model.parameters(), lr=0.001, weight_decay=1e-4)
scheduler = optim.lr_scheduler.ReduceLROnPlateau(optimizer, mode="max", factor=0.5, patience=3)

# --- Early stopping setup ---
best_acc = 0
patience, patience_counter = 7, 0

# --- Mixed precision (for GPU) ---
scaler = torch.amp.GradScaler(enabled=(device.type == 'cuda'))

# --- Training loop ---
epochs = 50
for epoch in range(epochs):
    model.train()
    total_loss = 0

    for batch_X, batch_y in tqdm(train_loader, desc=f"Epoch {epoch+1}/{epochs}", leave=False):
        batch_X, batch_y = batch_X.to(device), batch_y.to(device)

        optimizer.zero_grad()
        with torch.amp.autocast(device_type=device.type, enabled=(device.type != "cpu")):
            outputs = model(batch_X)
            loss = criterion(outputs, batch_y)
        scaler.scale(loss).backward()
        scaler.step(optimizer)
        scaler.update()

        total_loss += loss.item()

    # --- Evaluate each epoch ---
    model.eval()
    y_pred_list, y_true_list = [], []
    all_top3_preds = []
    all_top3_probs = []
    
    with torch.no_grad():
        for batch_X, batch_y in test_loader:
            batch_X = batch_X.to(device)
            y_output_logits = model(batch_X)
            
            # Get probabilities from logits
            probs = torch.softmax(y_output_logits, dim=1)
            
            # Get top 3 predictions
            topk_probs, topk_indices = torch.topk(probs, k=3, dim=1)
            topk_probs = topk_probs.cpu().numpy()
            topk_indices = topk_indices.cpu().numpy()
            
            # Convert indices to labels
            top3_labels = le.inverse_transform(topk_indices.flatten()).reshape(topk_indices.shape)
            
            # Get the single best prediction (FIX: use softmax, not sigmoid)
            preds = torch.argmax(probs, dim=1).cpu().numpy()
            
            y_pred_list.extend(preds)
            y_true_list.extend(batch_y.numpy())
            all_top3_preds.extend(top3_labels)
            all_top3_probs.extend(topk_probs)

    acc = accuracy_score(y_true_list, y_pred_list)
    scheduler.step(acc)
    print(f"Epoch {epoch+1:02d} | Loss: {total_loss/len(train_loader):.4f} | Val Acc: {acc:.4f}")
    
    # Display sample top 3 predictions for first 5 test samples
    if epoch == 0 or (epoch + 1) % 10 == 0:  # Show every 10 epochs
        print("\n--- Sample Top 3 Predictions (first 5 test samples) ---")
        for i in range(min(5, len(all_top3_preds))):
            true_label = le.inverse_transform([y_true_list[i]])[0]
            print(f"Sample {i+1} - True: {true_label}")
            for j in range(3):
                print(f"  #{j+1}: {all_top3_preds[i][j]} (prob: {all_top3_probs[i][j]:.3f})")
        print()

    # --- Early stopping ---
    if acc > best_acc:
        best_acc = acc
        patience_counter = 0
        torch.save(model.state_dict(), Config.MODEL_SAVE_PATH)
    else:
        patience_counter += 1
        if patience_counter >= patience:
            print("⏹ Early stopping triggered.")
            break

torch.save(model.state_dict(), Config.MODEL_SAVE_PATH)

# --- Load best model ---
#model.load_state_dict(torch.load("best_disease_model.pt"))

# --- Final evaluation with detailed predictions ---
print("\n=== FINAL EVALUATION ===")
model.eval()
y_pred_list, y_true_list = [], []
all_top3_preds = []
all_top3_probs = []

with torch.no_grad():
    for batch_X, batch_y in test_loader:
        batch_X = batch_X.to(device)
        outputs = model(batch_X)
        
        # Get probabilities
        probs = torch.softmax(outputs, dim=1)
        
        # Get top 3 predictions
        topk_probs, topk_indices = torch.topk(probs, k=3, dim=1)
        topk_probs = topk_probs.cpu().numpy()
        topk_indices = topk_indices.cpu().numpy()
        
        # Convert to labels
        top3_labels = le.inverse_transform(topk_indices.flatten()).reshape(topk_indices.shape)
        
        # Get single best prediction
        preds = torch.argmax(probs, dim=1).cpu().numpy()
        
        y_pred_list.extend(preds)
        y_true_list.extend(batch_y.numpy())
        all_top3_preds.extend(top3_labels)
        all_top3_probs.extend(topk_probs)

acc = accuracy_score(y_true_list, y_pred_list)
print(f"\n✅ Final Test Accuracy: {acc:.4f}")

# --- Display detailed top 3 predictions for a sample ---
print("\n--- Detailed Top 3 Predictions (first 10 test samples) ---")
for i in range(min(10, len(all_top3_preds))):
    true_label = le.inverse_transform([y_true_list[i]])[0]
    pred_label = le.inverse_transform([y_pred_list[i]])[0]
    is_correct = "✓" if y_true_list[i] == y_pred_list[i] else "✗"
    
    print(f"\nSample {i+1} {is_correct}")
    print(f"  True label: {true_label}")
    print(f"  Top 3 predictions:")
    for j in range(3):
        marker = "→" if all_top3_preds[i][j] == true_label else " "
        print(f"    {marker} {j+1}. {all_top3_preds[i][j]:<30} (prob: {all_top3_probs[i][j]:.3%})")

# --- Classification report ---
labels_in_test_or_pred = np.unique(np.concatenate([y_true_list, y_pred_list]))
target_names_filtered = le.inverse_transform(labels_in_test_or_pred)

report_dict = classification_report(
    y_true_list, y_pred_list,
    labels=labels_in_test_or_pred,
    target_names=target_names_filtered,
    output_dict=True,
    zero_division=0
)

report_df = pd.DataFrame(report_dict).transpose()
class_rows = report_df.iloc[:-3]
print("\n=== Classification Report (per class) ===")
print(class_rows)

# --- Top 3 accuracy metric ---
print("\n=== Top-3 Accuracy Analysis ===")
top3_correct = 0
for i in range(len(y_true_list)):
    true_label = le.inverse_transform([y_true_list[i]])[0]
    if true_label in all_top3_preds[i]:
        top3_correct += 1

top3_accuracy = top3_correct / len(y_true_list)
print(f"Top-1 Accuracy: {acc:.4f}")
print(f"Top-3 Accuracy: {top3_accuracy:.4f}")
print(f"Improvement from Top-1 to Top-3: +{(top3_accuracy - acc):.4f}")
