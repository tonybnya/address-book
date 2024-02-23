"""
This module contains the main configurations
of the app (CRUD backend).
"""
from flask import Flask
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy

app: Flask = Flask(__name__)
CORS(app)

app.config["SQLALCHEMY_DATABASE_URI"]: str = "sqlite:///database.db" # type: ignore
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"]: bool = False # type: ignore

db: SQLAlchemy = SQLAlchemy(app)