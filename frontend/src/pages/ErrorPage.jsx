import React from 'react'
import { Link } from 'react-router-dom'
import error from '../assets/error.png'
import '../styles/error.css'

function ErrorPage() {
  return (
    <div>
      <img src={error} alt="error 404 image" />
      <h2>Error - The page is not found!</h2>
      <Link to="/" className='link'>
        <span>Go back to the homepage</span>
      </Link>
    </div>
  )
}

export default ErrorPage