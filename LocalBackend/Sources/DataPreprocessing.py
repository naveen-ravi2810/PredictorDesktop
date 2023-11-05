from flask_restful import Resource, request
from flask import send_file, jsonify
import os
from TrainingCode.DataPreprocessing import Preprocessing
class DataPreprocessingResource(Resource):
    def post(self):
        try:
            dataForm = request.form
            files = request.files
            dataset = files['file']
            misingValue = dataForm['misingValue']
            encodingtonumbers = dataForm['encodingtonumbers']
            outputcolumn = dataForm['outputcolumn']
            preprocessingResult = Preprocessing(file = dataset, misingValue = misingValue, encodingtonumbers = encodingtonumbers, outputcolumn = outputcolumn )
            response_data = {
                'status':True,
                # 'preprocessed_data' : preprocessingResult
            }
            return jsonify(response_data)
        except Exception as e:
            return {'status':False, 'message':f'{e}'}