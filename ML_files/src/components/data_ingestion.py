# 1️⃣ Drop rows with missing disease labels
import pandas as pd
import sys
import os
sys.path.append(os.path.join(os.path.dirname(__file__), "../../"))
from ML_files.src.exception import CustomException
from ML_files.src.config import Config
from sklearn.model_selection import train_test_split

class CSVDataIngestion:
    def __init__(self):
        self.ingestion_config = Config()
    
    def load_and_split_data(self):
        try:
            print("Entered the data ingestion method or component")
            df = pd.read_csv(Config.RAW_DATA_PATH)
            
            os.makedirs(os.path.dirname(Config.PROCESSED_TRAIN_PATH), exist_ok=True)
            os.makedirs(os.path.dirname(Config.PROCESSED_TEST_PATH), exist_ok=True)

            df.to_csv(self.ingestion_config.RAW_DATA_PATH, index=False)
            
            df = df.dropna(subset=["diseases"])

            # 2️⃣ Ensure all symptom columns are numeric
            symptom_columns = df.columns.drop("diseases")
            df[symptom_columns] = df[symptom_columns].apply(pd.to_numeric, errors='coerce')
            df[symptom_columns] = df[symptom_columns].fillna(0).astype(int)

            # 3️⃣ Remove duplicates (entire row)
            df = df.drop_duplicates()

            df.columns = df.columns.str.replace(' ', '_')

            df = df.loc[:, df.nunique() != 1] #remove constant columns
            print(f"Shape of the cleaned dataset {df.shape}")

            columns_str = ",".join(df.columns)
            with open("columns.txt", "w") as f:
                f.write(columns_str)
            print("Columns written to columns.txt")

            train_df, test_df = train_test_split(df, test_size=0.2, random_state=42)
            
            train_df.to_csv(self.ingestion_config.PROCESSED_TRAIN_PATH, index=False)
            test_df.to_csv(self.ingestion_config.PROCESSED_TEST_PATH, index=False)
            
            print("Data ingestion completed successfully.")
        except Exception as e:
            raise CustomException(e, sys)

if __name__ == "__main__":
    obj = CSVDataIngestion()
    obj.load_and_split_data()