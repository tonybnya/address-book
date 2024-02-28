import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/landing.css'

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
        <Link to='contacts' className='btn'>
          Start
        </Link>
      </div>
    </div>
  )
}

export default LandingPage