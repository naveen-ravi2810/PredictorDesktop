from flask_restful import Resource
from flask import request, jsonify
from TrainingCode.fun_Corelation import co_relation
class CoRelationResource(Resource):
    def get(self):
        id = request.args.get('id')
        path = request.args.get('preprocessed_data_path')
        co_relation_data = co_relation(id=id,path=path)
        print(type(co_relation_data))
        return jsonify(co_relation_data)
