import pandas as pd
from sklearn.preprocessing import LabelEncoder
def Preprocessing(file, misingValue,encodingtonumbers,outputcolumn):
    df = pd.read_csv(file)
    if encodingtonumbers == "onehotencoding":
        pass
    elif encodingtonumbers == "labelencoding":
        string_columns = df.select_dtypes(include=['object'])
        string_column_names = string_columns.columns.tolist()
        label_encoder = LabelEncoder()
        columns_to_encode = string_column_names
        for column in columns_to_encode:
            df[column] = label_encoder.fit_transform(df[column])
    if misingValue == "mean/median":
        df= df.fillna(df.mean())
    elif misingValue == "removerow":
        # code to perform remove row that contains null value
        pass
    df.to_csv(f"./Data/PreprocessedData/{file.filename}", index=False)
    return df.to_csv(index=False)