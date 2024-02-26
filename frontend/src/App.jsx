import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    fetchContacts();
  });

  const fetchContacts = async () => {
    const log = (arg) => console.log(arg);
    const response = await fetch("http://127.0.0.1:5555/contacts");
    const data = await response.json();
    setContacts(data.contacts);
    log(data.contacts);
  };
  return (
    <>
    </>
  )
}

export default App
