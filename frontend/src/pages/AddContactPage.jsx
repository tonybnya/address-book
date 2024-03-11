import { useState } from 'react'
import '../styles/addcontact.css'

function AddContactPage() {
  const [ firstName, setFirstName ] = useState("");
  const [ lastName, setLastName ] = useState("");
  const [ email, setEmail ] = useState("");
  const [ role, setRole ] = useState("");
  const [ phoneNumber, setPhoneNumber ] = useState("");
  const [ category, setCategory ] = useState("");
  const [ bio, setBio ] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();

    const data = {
      firstName,
      lastName,
      email,
      role,
      phoneNumber,
      category,
      bio
    };

    const url = "http://127.0.0.1:5555/create_contact";
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    }
    const response = await fetch(url, options);

    if (response.status !== 201 && response.status !== 200) {
      const data = await response.json();
      alert(data.message);
    } else {
      alert('Contact added!');
    }
  }

  return (
    <form id="add-contact-form" onSubmit={onSubmit}>
      <h1>Register a contact</h1>
      <fieldset>
          <label htmlFor="firstName">First Name:</label>
          <input type="text" value={firstName} id="firstName" onChange={(e) => setFirstName(e.target.value)} required />

          <label htmlFor="lastName">Last Name:</label>
          <input type="text" value={lastName} id="lastName" onChange={(e) => setLastName(e.target.value)} required />

          <label htmlFor="email">Email:</label>
          <input type="email" value={email} id="email" onChange={(e) => setEmail(e.target.value)} required />

          <label htmlFor="role">Job/Role:</label>
          <input type="text" value={role} id="role" onChange={(e) => setRole(e.target.value)} required />

          <label htmlFor="phone-number">Phone Number:</label>
          <input type="text" value={phoneNumber} id="phoneNumber" onChange={(e) => setPhoneNumber(e.target.value)} required />
      </fieldset>

      <hr />

      <fieldset>
          <label htmlFor="category">Category:</label>
          <select name="category" id="category" onChange={(e) => setCategory(e.target.value)}>
              <option value="">(Select one category)</option>
              <option value="educational">educational</option>
              <option value="personal">personal</option>
              <option value="professional">professional</option>
              <option value="social">social</option>
          </select>
          <label htmlFor="bio">Provide a bio:</label>
          <textarea name="bio" id="bio" onChange={(e) => setBio(e.target.value)} cols="30" rows="10" placeholder='Write your bio...'></textarea>
      </fieldset>
      <input id="submit-btn" type="submit" value="Create" />
    </form>
  )
}

export default AddContactPage