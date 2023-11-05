from flask import Flask
from flask_restful import Api

app = Flask(__name__)
api = Api(app)

@app.route('/test')
def test():
    return {'status':True}

from Sources.Users import LoginResource
api.add_resource(LoginResource, '/login')