from Models.DB import cursor, conn
from flask_restful import Resource
from flask import jsonify
class ModelsResource(Resource):
    def get(self):
        cursor.execute('select* from Models')
        PreprocessedModels = cursor.fetchall()
        results = [dict(row) for row in PreprocessedModels]
        return jsonify({'status':True, 'Models':results})