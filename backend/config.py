"""
This module contains the main configurations
of the app (CRUD backend).
"""
from flask import Flask
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy

# create an instance of a Flask application
app: Flask = Flask(__name__)
# enable Cross-Origin Resource Sharing (CORS)
CORS(app)

# configure the SQLAlchemy database URI
app.config["SQLALCHEMY_DATABASE_URI"]: str = "sqlite:///database.db" # type: ignore
# disable modifications tracking for SQLAlchemy to suppress warning
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"]: bool = False # type: ignore

# initialize an instance of the SQLAlchemy database 
db: SQLAlchemy = SQLAlchemy(app)
