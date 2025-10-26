import os
from dataclasses import dataclass
import torch

@dataclass
class Config:
    RAW_DATA_PATH = os.path.join('ML_files', 'data', 'raw', 'data.csv')
    PROCESSED_TRAIN_PATH = os.path.join('ML_files','data', 'processed', 'train.csv')
    PROCESSED_TEST_PATH = os.path.join('ML_files','data', 'processed', 'test.csv')
    DEVICE = 'mps' if torch.backends.mps.is_available() else 'cuda' if torch.cuda.is_available() else 'cpu'
    MODEL_SAVE_PATH = os.path.join('ML_files', 'data', "model.pth")