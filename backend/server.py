from flask import jsonify
from flask import Flask
from flask_cors import CORS

app = Flask(__name__)
cors = CORS(app)

@app.route("/echo/<message>")
def init_game(message: str) -> None:
    return {
        "helloWorld": "hello world!",
        "message": message
    }