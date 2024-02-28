import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'
import '../styles/navbar.css'

function Navbar() {
  return (
    <nav>
      <div className="navbar">
        <Link className="brand">
          <img className="logo" src={logo} alt="logo" />
          <h1 className="title">Contactio</h1>
        </Link>
      </div>
      <hr />
    </nav>
  )
}

export default Navbar