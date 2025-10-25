import json
from flask import Flask, jsonify, request
from flask_cors import CORS


app = Flask(__name__)
CORS(app)

@app.route('/predict', methods = ['POST'])
def prediction():
    data = request.get_json()
    symptom_ids = data.get('symptom_ids', [])
    print("Received symptom IDs:", symptom_ids)
    print("Number of symptoms:", len(symptom_ids))
    
    # Send back a dummy response to test
    dummy_predictions = [
        {"disease": "Test Disease 1", "confidence": 0.75},
        {"disease": "Test Disease 2", "confidence": 0.15},
        {"disease": "Test Disease 3", "confidence": 0.10}
    ]
    
    return jsonify({'predictions': dummy_predictions})
    #predictions = model.predict(symptom_ids)

    #raise jsonify({'predictions':predictions})

if __name__ == "__main__":
    app.run(debug=True, port=5000)