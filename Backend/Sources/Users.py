from flask_restful import Resource

class LoginResource(Resource):
    def post(self):
        return {'status':True}