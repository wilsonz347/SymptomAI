#### SymptomAI

A machine learning-based web application that predicts potential diseases based on user-reported symptoms. The system uses a neural network model trained on medical symptom-disease relationships to provide the top 3 most likely diagnoses with confidence scores.

# Features
- Symptom-based Disease Prediction: Input multiple symptoms and receive top 3 disease predictions
- Confidence Scoring: Each prediction includes a probability score
- 328 Symptoms Database: Comprehensive symptom recognition system
- 761 Diseases: Extensive disease classification capability
- Web Interface: User-friendly frontend for symptom selection
- REST API: Flask-based backend for predictions

# Local Deployment

## Create a virtual environment
```
python -3 -m venv .venv
```

## Activate the environment
```
.venv\Scripts\activate
```

## Install Modules
When inside the environment, install required modules.

```
pip install -r requirements.txt
```

## Run the files (optional if you want to split the data + train module)
```
python -m ML_files.src.components.data_ingestion
python -m ML_files.src.components.train_cnn
```

## Start Flask Server
Start the server with:
```
cd backend
python app.py
```

## Start Web Server
```
Install the Live Server extension
Run it on the frontend/index.html
```

