"""
This module contains the model of our database
which consists of one Contact Class.
"""
from config import db
from typing import Dict


class Contact(db.Model):
  id: int = db.Column(db.Integer, primary_key=True)
  first_name: str = db.Column(db.String(80), unique=False, nullable=False)
  last_name: str = db.Column(db.String(80), unique=False, nullable=False)
  email: str = db.Column(db.String(120), unique=True, nullable=False)
  role: str = db.Column(db.String(80), unique=False, nullable=False)
  phone_number: str = db.Column(db.String(80), unique=False, nullable=False)
  category: str = db.Column(db.String(80), unique=False, nullable=False)
  bio: str = db.Column(db.String(500), unique=False, nullable=False)

  def to_json(self) -> Dict[str, str]:
    return {
      "id": self.id,
      "firstName": self.first_name,
      "lastName": self.last_name,
      "email": self.email,
      "role": self.role,
      "phoneNumber": self.phone_number,
      "category": self.category,
      "bio": self.bio
    }