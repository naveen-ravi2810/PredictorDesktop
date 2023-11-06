import pandas as pd
from sklearn.preprocessing import LabelEncoder
import uuid, datetime
from Models.DB import conn, cursor
def Preprocessing(file, misingValue,encodingtonumbers,outputcolumn,name,description):
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
    id = str(uuid.uuid4())
    # Datatime = 
    # cursor.execute("drop table Models")
    cursor.execute("Create Table IF NOT EXISTS Models(id TEXT primary key, name text, description text, Datetime TIMESTAMP , outputcolumn text, inputcolumn text)")
    # conn.commit()
    cursor.execute("insert into Models(id,name,description, Datetime, outputcolumn, inputcolumn) values(?,?,?,?,?,?)",(id, name, description, datetime.datetime.now(),outputcolumn, 'null'))
    conn.commit()
    df.to_csv(f"/media/naveen/Personal/tauri/LocalBackend/Data/PreprocessedData/{id}.csv", index=False)
  
    return {'file_path' : f"/media/naveen/Personal/tauri/LocalBackend/Data/PreprocessedData/{id}.csv", 'id' : id}