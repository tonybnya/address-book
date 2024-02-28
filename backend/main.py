"""
This module contains the main routes/endpoints
of the API (CRUD backend).
"""
from config import app, db
from flask import jsonify, request
from models import Contact
from typing import Dict, List, Tuple


@app.route('/create_contact', methods=['POST'])
def create_contact() -> Tuple[str, int]:
    """
    Endpoint to create a new contact by providing the required details

    :return json: a JSON response with a message indicating the success
                  or the failure of the operation
    """
    # extract required details from the request body
    first_name: str = request.json.get('firstName')
    last_name: str = request.json.get('lastName')
    email: str = request.json.get('email')
    role: str = request.json.get('role')
    phone_number: str = request.json.get('phoneNumber')
    category: str = request.json.get('category')
    bio: str = request.json.get('bio')

    # check if all the required fields are provided
    if not all([first_name, last_name, email, role, phone_number, category, bio]):
        return jsonify({"message": "You must enter all the fiels"}), 400

    # create a new contact object
    new_contact: Contact = Contact(first_name=first_name, last_name=last_name, email=email, role=role, phone_number=phone_number, category=category, bio=bio)

    try:
        # add the new contact to the staging area
        db.session.add(new_contact)
        # write the new contact in the database
        db.session.commit()
    except Exception as e:
        # catching an eventually error and return it
        return jsonify({"message", str(e)}), 400

    # send back a JSON message for the success
    return jsonify({"message": "Contact successfully created!"}), 201


@app.route('/contacts', methods=['GET'])
def get_contacts() -> Tuple[str, int]:
    """
    Endpoint to retrieve all contacts in the database

    :return json: a JSON response containing a list of all the contacts
    """
    # query all contacts of the database
    contacts: List[Contact] = Contact.query.all()
    # json_contacts = list(map(lambda x: x.to_json(), contacts))
    # convert the rerieved contacts to a JSON format
    json_contacts: List[Dict[str, str]] = [contact.to_json() for contact in contacts]

    # send back a JSON message for the success
    return jsonify({"contacts": json_contacts}), 200


@app.route('/update_contact/<int:contact_id>', methods=['PUT'])
def update_contact(contact_id: int) -> Tuple[str, int]:
    """
    Endpoint to update an existing contact by its id

    :return json: a JSON response containing a message about the success or the failure of the operation
    """
    # get the contact with the given id
    contact: Contact = Contact.query.get(contact_id)

    # check if this contact does not exist
    # and send back a JSON message for the failure
    if not contact:
        return jsonify({"message": "Contact not found!"}), 404

    # parse the data of the request body to JSON format
    data: Dict[str, str] = request.json

    # then get each item and change its value the corresponding value
    # otherwise set the same existing value
    contact.first_name: str = data.get("firstName", contact.first_name)
    contact.last_name: str = data.get("lastName", contact.last_name)
    contact.email: str = data.get("email", contact.email)
    contact.role: str = data.get("role", contact.role)
    contact.phone_number: str = data.get("phoneNumber", contact.phone_number)
    contact.category: str = data.get("category", contact.category)
    contact.bio: str = data.get("bio", contact.bio)

    # since the contact already exists, just write it to the database
    db.session.commit()

    # send back a JSON message for the success
    return jsonify({"message": "Contact successfully updated!"}), 200


@app.route('/delete_contact/<int:contact_id>', methods=["DELETE"])
def delete_contact(contact_id: int) -> Tuple[str, str]:
    """
    Endpoint to delete an existing contact by its id

    :return json: a JSON response containing a message about the success or the failure of the operation
    """
    # get the contact with the given id
    contact: Contact = Contact.query.get(contact_id)

    # check if this contact does not exist
    # and send back a JSON message for the failure
    if not contact:
        return jsonify({"message": "Contact not found!"}), 404

    # delete the contact
    db.session.delete(contact)
    # update the database
    db.session.commit()

    # send back a JSON message for the success
    return jsonify({"message": "Contact successfully deleted!"}), 200


if __name__ == "__main__":
    # check the context to avoid creating a new database if
    # there is already an existing one
    with app.app_context():
        db.create_all()

    # run the Flask app with on localhost and the IP of the current machine
    # the chosen port is 5555, and enable debug mode for development
    app.run(host="0.0.0.0", port=5555, debug=True)
