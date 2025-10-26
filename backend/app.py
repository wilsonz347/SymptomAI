import sys
import os
import json
from pathlib import Path

BASE_DIR = Path(__file__).resolve().parent  # backend/
ROOT_DIR = BASE_DIR.parent  # root/
sys.path.insert(0, str(ROOT_DIR))

from flask import Flask, jsonify, request
from flask_cors import CORS
from model.input_preds import DiseasePredictor
import ML_files.src.config as Config

# backend/model/model.pth
model_path = os.path.join(BASE_DIR, "model", "model.pth")

'''
import json
from flask import Flask, jsonify, request
from flask_cors import CORS
from model.input_preds import DiseasePredictor
import ML_files.src.config as Config
import os

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
model_path = os.path.join(BASE_DIR, "model.pth")
'''
app = Flask(__name__)
CORS(app)

# Initialize the predictor
predictor = DiseasePredictor(
    model_path=model_path,
    training_data_path=Config.Config.PROCESSED_TRAIN_PATH
)

@app.route('/predict', methods = ['POST'])
def prediction():
    try:
        data = request.get_json()
        symptoms = data.get('symptom_ids', [])

        predictions = predictor.get_top_predictions(symptoms, top_k=3)
            
        return jsonify({'predictions': predictions}), 200
    
    except Exception as e:
        print(f"Error: {str(e)}")
        return jsonify({'error': str(e)}), 500

if __name__ == "__main__":
    app.run(debug=True, port=5000)