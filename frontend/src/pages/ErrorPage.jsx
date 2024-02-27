import React from 'react'
import { Link } from 'react-router-dom'
import error from '../assets/error.png'
import '../styles/error.css'

function ErrorPage() {
  return (
    <div>
      <img src={error} alt="error 404 image" />
      <h2>Error, the page is not found...</h2>
      <p>
        <Link to="/" className='link'>Return to the homepage</Link>
      </p>
    </div>
  )
}

export default ErrorPage