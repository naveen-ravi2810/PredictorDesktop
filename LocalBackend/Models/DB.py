import sqlite3
import os

db_directory = '/media/naveen/Personal/tauri/LocalBackend/Data/Database/'
os.makedirs(db_directory, exist_ok=True)

db_file = os.path.join(db_directory, 'mydb.db')

conn = sqlite3.connect(db_file,check_same_thread=False)
conn.row_factory = sqlite3.Row
cursor = conn.cursor()

