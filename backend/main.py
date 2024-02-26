"""
This module contains the main routes/endpoints
of the API (CRUD backend).
"""
from config import app, db
from flask import jsonify, request
from models import Contact

@app.route('/create_contact', methods=['POST'])
def create_contact():
    """
    Endpoint to create a new contact by providing the required details

    :return json: a JSON response with a message indicating the success or the failure of the operation
    """
    # extract required details from the request body
    first_name = request.json.get('firstName')
    last_name = request.json.get('lastName')
    email = request.json.get('email')
    role = request.json.get('role')
    phone_number = request.json.get('phoneNumber')
    category = request.json.get('category')
    bio = request.json.get('category')

    # check if all the required fields are provided
    if not first_name or not last_name or not email or not role or not phone_number or not category or not bio:
        return jsonify({"message": "You must enter all the fiels"}), 400

    # create a new contact object
    new_contact = Contact(first_name=first_name, last_name=last_name, email=email, role=role, phone_number=phone_number, category=category, bio=bio)

    try:
        # add the new contact to the database
        db.session.add(new_contact)
        db.session.commit()
    except Exception as e:
        return jsonify({"message", str(e)}), 400


@app.route('/contacts', methods=['GET'])
def get_contacts():
    """
    Endpoint to retrieve all contacts in the database

    :return json: a JSON response containing a list of all the contacts
    """
    # query all contacts of the database
    contacts = Contact.query.all()
    # json_contacts = list(map(lambda x: x.to_json(), contacts))
    # convert the rerieved contacts to a JSON format
    json_contacts = [contact.to_json() for contact in contacts]

    return jsonify({"contacts": json_contacts})


if __name__ == "__main__":
    with app.app_context():
        db.create_all()

    # run the Flask app with on localhost and the IP of the current machine
    # the chosen port is 5555, and enable debug mode for development
    app.run(host="0.0.0.0", port=5555, debug=True)
