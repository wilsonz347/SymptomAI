import torch
from ML_files.src.config import Config
import pickle
from sklearn.preprocessing import LabelEncoder


# --- Export model and label encoder ---

le = LabelEncoder()
with open("label_encoder.pkl", "wb") as f:
    pickle.dump(le, f)
print("\n💾 Saved model as 'best_disease_model.pt' and label encoder as 'label_encoder.pkl'")

# --- Load best model ---
model = torch.load(Config.MODEL_SAVE_PATH)
model.load_state_dict(model)

# --- Final evaluation ---
model.eval()
y_pred_list, y_true_list = [], []
with torch.no_grad():
    for batch_X, batch_y in test_loader:
        batch_X = batch_X.to(device)
        outputs = model(batch_X)
        preds = torch.argmax(outputs, dim=1).cpu().numpy()
        y_pred_list.extend(preds)
        y_true_list.extend(batch_y.numpy())

acc = accuracy_score(y_true_list, y_pred_list)
print("\n✅ Final Test Accuracy:", acc)

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
print("\nClassification Report (per class):")
print(class_rows)