# Contact List Web App

This is a simple web app for a Contact List.

I assume you already have `python3` and `pip3` installed on your system.

The app uses ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) for the frontend and ![Flask](https://img.shields.io/badge/flask-%23000.svg?style=for-the-badge&logo=flask&logoColor=white) for the API (CRUD backend) that can communicate with a ![SQLite](https://img.shields.io/badge/sqlite-%2307405e.svg?style=for-the-badge&logo=sqlite&logoColor=white) database.

The features of the app are:

- [ ] create a new contact
- [ ] read the contacts list
- [ ] update an existing contact
- [ ] delete an existing contact
- [ ] search a specific contact
- [ ] filter contacts by category
- [ ] generate a QR code for a contact

To test the app in development environment:

1. Go to the backend directory:

```sh
cd backend
pip3 install -r requirements.txt
```

2. Then, go back to the frontend directory:

```sh
cd ../frontend
npm run dev
```
