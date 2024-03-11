import { useState, useEffect } from 'react'
import SearchBar from '../components/SearchBar'
import Filter from '../components/Filter'
import Button from '../components/Button'
import '../styles/contactspage.css'

function ContactsPage() {
  const [ contacts, setContacts ] = useState([]);

  useEffect(() => {
    fetchContacts()
  }, []);

  const fetchContacts = async () => {
    try {
      const response = await fetch("http://127.0.0.1:5555/contacts");
      if (!response.ok) {
        throw new Error('Failed to fetch contacts');
      }
      const data = await response.json();
      setContacts(data.contacts);
    } catch (error) {
      alert(error.message);
    }
  };

  const updateContact = (id) => {}
  const onDelete = (id) => {}
  const showContact = (id) => {}

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
            <p className='number'>Number of contacts: <span className='num'>{contacts.length}</span></p>
            {contacts.map((contact) => (
              <div className="contact-row" key={contact.id}>
                <div className="data">
                  <i className="fa fa-user"></i>
                  <div className='name-phone'>
                    <span className='fullname'>
                      {contact.firstName + ' ' + contact.lastName}
                    </span>
                    <span className='phone'>
                      {contact.phoneNumber}
                    </span>
                  </div>
                </div>
                <div className="tag"><span className="category">{contact.category}</span></div>
                <div className="controls">
                  <button className="update-btn"onClick={() => updateContact(contact.id)}>Update</button>
                  <button className="delete-btn"onClick={() => onDelete(contact.id)}>Delete</button>
                  <button className="show-btn"onClick={() => showContact(contact.id)}>More</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Button text='+' url='/add_contact' className='add-btn' />
    </div>
  )
}

export default ContactsPage