import React from 'react'
import Button from '../components/Button'
import '../styles/button.css'

function LandingPage() {
  return (
    <div className='hero'>
      <div className="content">
        <h1>A Contact List Web App</h1>
        <hr />
        <hr />
        <p className='intro'>
          <span className='name'>Contactio</span> - a web application as a straightforward tool designed to help users manage their contacts digitally. It provides a user-friendly interface for viewing, adding, editing, and deleting contacts.
        </p>
        <Button text='Start' url='/contacts' />
      </div>
    </div>
  )
}

export default LandingPage