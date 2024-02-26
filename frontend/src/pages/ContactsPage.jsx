import React, { useState, useEffect } from 'react'

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
    <div>ContactsPage</div>
  )
}

export default ContactsPage