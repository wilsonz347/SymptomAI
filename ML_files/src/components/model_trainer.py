import os
import sys
from dataclasses import dataclass

from sklearn.ensemble import (
    AdaBoostRegressor,
    GradientBoostingRegressor,
    RandomForestRegressor
)
from sklearn.linear_model import LinearRegression, LogisticRegression
from sklearn.metrics import r2_score
from sklearn.neighbors import KNeighborsRegressor
from sklearn.tree import DecisionTreeRegressor
from sklearn.model_selection import GridSearchCV
#from xgboost import XGBRegressor

from src.exception import CustomException

from src.utils import save_object

@dataclass
class ModelTrainerConfig:
    trained_model_file_path = os.path.join("artifacts", "model.pkl")

class ModelTrainer:
    def __init__(self):
        self.model_trainer_config = ModelTrainerConfig()
    
    def initiate_model_trainer(self, train_array, test_array):
        try:
            X_train, y_train = train_array[:,:-1], train_array[:,-1]
            X_test, y_test = test_array[:,:-1], test_array[:,-1]

            models = {

                "Random Forest": RandomForestRegressor(),
                "Decision Tree": DecisionTreeRegressor(),
                "Gradient Boosting": GradientBoostingRegressor(),
                "Linear Regression": LinearRegression(),
                "K-Neighbors Regressor": KNeighborsRegressor(),
                "AdaBoost Regressor": AdaBoostRegressor(),
                "Logistic Regression": LogisticRegression()
                # "XGB Regressor": XGBRegressor()
            }

            params = {
                "Random Forest": {
                    'n_estimators': [50, 100, 200],
                    'max_depth': [None, 10, 20],
                },
                "Decision Tree": {
                    'max_depth': [None, 10, 20],
                    'min_samples_split': [2, 5, 10],
                },
                "Gradient Boosting": {
                    'n_estimators': [50, 100, 200],
                    'learning_rate': [0.01, 0.1, 0.2],
                },
                "Linear Regression": {},
                "K-Neighbors Regressor": {
                    'n_neighbors': [3, 5, 7],
                    'weights': ['uniform', 'distance'],
                },
                "AdaBoost Regressor": {
                    'n_estimators': [50, 100, 200],
                    'learning_rate': [0.01, 0.1, 0.2],
                },
                "Logistic Regression": {
                    'C': [0.01, 0.1, 1, 10],
                    'solver': ['liblinear', 'lbfgs'],
                },
                # "XGB Regressor": {
                #     'n_estimators': [50, 100, 200],
                #     'learning_rate': [0.01, 0.1, 0.2],
                # },
            }

            model_report: dict = evaluate_models(X_train, y_train, X_test, y_test, models, params)

            best_model_score = max(sorted(model_report.values()))

            best_model_name = list(model_report.keys())[list(model_report.values()).index(best_model_score)]

            best_model = models[best_model_name]

            if best_model_score < 0.6:
                raise CustomException("No best model found")

            print(f"Best model found: {best_model_name} with score {best_model_score}")
        
        except Exception as e:
            raise CustomException(e, sys) from e
        

def evaluate_models(X_train, y_train, X_test, y_test, models, params):
    try:

        report={}

        for i in range(len(list(models))):
            model = list(models.values())[i]
            para = params[list(models.keys())[i]]

            gs = GridSearchCV(model, para, cv=3)
            gs.fit(X_train, y_train)

            model.set_params(**gs.best_params_)
            model.fit(X_train, y_train)

            y_train_pred = model.predict(X_train)

            y_test_pred = model.predict(X_test)

            train_model_score = r2_score(y_train, y_train_pred)

            test_model_score = r2_score(y_test, y_test_pred)

            report[list(models.keys())[i]] = test_model_score
        
        return report
    
    except Exception as e:
        raise CustomException(e, sys) from e
    

if __name__ == "__main__":
    obj = ModelTrainer()
    obj.initiate_model_trainer()