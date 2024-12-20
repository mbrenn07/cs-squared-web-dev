from flask import Flask
from flask_cors import CORS
import mailtrap as mt
from dotenv import load_dotenv
import os

app = Flask(__name__)
cors = CORS(app)

load_dotenv()

@app.route("/echo/<message>")
def echo(message: str) -> None:
    return {
        "helloWorld": "hello world!",
        "message": message
    }

@app.route("/submitContactForm/<formData>")
def submitContactForm(formData: str) -> None:
    mail = mt.Mail(
        sender=mt.Address(email=os.getenv('SENDER'), name="Mailtrap Test"),
        to=[mt.Address(email=os.getenv('RECIEVER'))],
        subject="You are awesome!",
        text="Congrats for sending test email with Mailtrap!",
        category="Integration Test",
    )

    client = mt.MailtrapClient(token=os.getenv('MAILTRAP_KEY'))
    response = client.send(mail)

    print(response)

    return ""