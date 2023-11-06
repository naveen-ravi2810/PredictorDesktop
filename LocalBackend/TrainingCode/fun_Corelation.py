from flask import jsonify
import pandas as pd
from Models.DB import cursor
def co_relation(id, path):
    df = pd.read_csv(path)
    cursor.execute('select outputcolumn from Models where id = ?',(id,))
    outputcolumn = cursor.fetchone()
    correlation_matrix = df.corr()[outputcolumn]
    correlation_dict = correlation_matrix.to_dict()
    return correlation_dict