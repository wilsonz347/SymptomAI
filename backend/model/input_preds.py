import torch
import ML_files.src.config as Config
import pandas as pd
from sklearn.preprocessing import LabelEncoder
import numpy as np


class DiseasePredictor:
    def __init__(self, model_path=Config.Config.MODEL_SAVE_PATH, training_data_path=Config.Config.PROCESSED_TRAIN_PATH):
        self.device = torch.device(Config.Config.DEVICE)
        if training_data_path:
            df = pd.read_csv(training_data_path)
            self.symptom_columns = df.columns.drop("diseases")

            self.le = LabelEncoder()
            self.le.fit(df["diseases"])
            output_dim = len(self.le.classes_)

            input_dim = len(self.symptom_columns)

        else:
            raise ValueError("Training data path must be provided to initialize the predictor.")
        
        hidden_dim = 256
        self.model = torch.load(model_path)
        self.model.load_state_dict(self.model)
        self.model.eval()

        print(f"✓ Model loaded from '{model_path}' on {self.device}")
        print(f"  - Total symptoms: {len(self.symptom_columns)}")
        print(f"  - Total diseases: {output_dim}")
    
    def format_symptoms(self, symptom_list):
        vector = np.zeros(len(self.symptom_columns), dtype=int)
        recognized = []
        unrecognized = []

        for symptom in symptom_list:
            symptom_formatted = symptom.replace(' ', '_')
            if symptom_formatted in self.symptom_columns:
                idx = self.symptom_columns.get_loc(symptom_formatted)
                vector[idx] = 1
                recognized.append(symptom)
            else:
                unrecognized.append(symptom)
        
        if unrecognized:
            print(f"⚠️  Warning: {len(unrecognized)} symptom(s) not recognized: {unrecognized}")
        if recognized:
            print(f"✓ Recognized {len(recognized)} symptom(s): {recognized}")
        
        # Convert to tensor with correct shape for batch processing
        tensor = torch.tensor(vector, dtype=torch.float32).unsqueeze(0).to(self.device)
        return tensor
    
    def get_top_predictions(self, symptom_list, top_k=3):
        
        input_tensor = self.format_symptoms(symptom_list)
        with torch.no_grad():
            outputs = self.model(input_tensor)
            probs = torch.softmax(outputs, dim=1)
            
            # Get top k predictions
            topk_probs, topk_indices = torch.topk(probs, k=min(top_k, probs.shape[1]), dim=1)
            
            topk_probs = topk_probs.cpu().numpy()[0]
            topk_indices = topk_indices.cpu().numpy()[0]
            
            # Convert indices to disease names
            topk_diseases = self.le.inverse_transform(topk_indices)
        
        results = []
        for i, (disease, prob) in enumerate(zip(topk_diseases, topk_probs)):
            results.append({
                "disease": disease,
                "confidence": float(prob)
            })
        print(results)
        return results

if __name__ == "__main__":
    predictor = DiseasePredictor(
        model_path='model.pth',  # Your saved model
        training_data_path=Config.Config.PROCESSED_TRAIN_PATH  # Same CSV used for training
    )
    sample_symptoms = ["fever", "cough", "headache"]
    predictions = predictor.get_top_predictions(sample_symptoms, top_k=3)

