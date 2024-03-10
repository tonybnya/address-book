import React from 'react'
import '../styles/addcontact.css'

function AddContactPage() {
  return (
    <div>
        <form action="" method="post">
          <fieldset>
              <label htmlFor="first-name">First Name:</label>
              <input type="text" name="first-name" id="firstName" required />
              <label htmlFor="last-name">Last Name:</label>
              <input type="text" name="last-name" id="lastName" required />
              <label htmlFor="email">Email:</label>
              <input type="email" name="email" id="email" />
              <label htmlFor="role">Job/Role:</label>
              <input type="text" name="role" id="role" />
              <label htmlFor="phone-number">Phone Number:</label>
              <input type="text" name="phone-number" id="phoneNumber" />
              <label htmlFor="category">Category:</label>
              <select name="category" id="category">
                  <option value="">(Select one category)</option>
                  <option value="1">educational</option>
                  <option value="2">personal</option>
                  <option value="3">professional</option>
                  <option value="4">social</option>
              </select>
        </fieldset>

          <fieldset>
              <label htmlFor="profile-picture">Upload a profile picture: <input type="file" name="file" id="profile-picture" /></label>
              <label htmlFor="bio">Provide a bio:</label>
              <textarea name="bio" id="bio" cols="30" rows="10" placeholder='Write your bio...'></textarea>
          </fieldset>
          <input type="submit" value="Submit" />
        </form>
    </div>
  )
}

export default AddContactPage