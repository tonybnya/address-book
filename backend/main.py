"""
This module contains the main routes/endpoints
of the API (CRUD backend).
"""
from config import app, db
from flask import jsonify, request
from models import Contact


if __name__ == "__main__":
  with app.app_context():
    db.create_all()

  app.run(host="0.0.0.0", debug=True)