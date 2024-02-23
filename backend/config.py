"""
This module contains the main configurations
of the app (CRUD backend).
"""
from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS

app: Flask = Flask(__name__)
CORS(app)

app.config["SQLALCHEMY_DATABASE_URI"]: str = "sqlite:///database.db" # type: ignore
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"]: bool = False # type: ignore

db: SQLAlchemy = SQLAlchemy(app)