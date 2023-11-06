from flask import Flask, request
from flask_cors import CORS
from flask_restful import Api
import os
app = Flask(__name__)
CORS(app)
api = Api(app)
from Sources.DataPreprocessing import DataPreprocessingResource
from Sources.DataModels import ModelsResource
from Sources.Co_relation import CoRelationResource
api.add_resource(DataPreprocessingResource, '/datapreprocessing')
api.add_resource(ModelsResource, '/Models')
api.add_resource(CoRelationResource ,'/getcorelation')


@app.route('/test')
def test():
    return {'status':True}