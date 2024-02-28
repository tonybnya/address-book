import React, { useState, useEffect } from 'react'
import SearchBar from '../components/SearchBar'
import Filter from '../components/Filter'
import '../styles/contactspage.css'

function ContactsPage() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    fetchContacts()
  }, []);

  const fetchContacts = async () => {
    const response = await fetch("http://127.0.0.1:5000/contacts");
    const data = await response.json();
    setContacts(data.contacts);
  };

  return (
    <div id='content'>
      <div className='contacts-container'>
        <div className="banner">
          <SearchBar />
        </div>
        <div id="contacts">
          <Filter />
          <div className="contacts">
            <h1>Contacts</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactsPage