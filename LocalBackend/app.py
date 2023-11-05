from flask import Flask, request
from flask_cors import CORS
from flask_restful import Api
import os
app = Flask(__name__)
CORS(app)
api = Api(app)
from Sources.DataPreprocessing import DataPreprocessingResource
api.add_resource(DataPreprocessingResource, '/datapreprocessing')


@app.route('/test')
def test():
    return {'status':True}