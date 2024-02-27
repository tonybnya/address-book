import React from 'react'
import logo from '../assets/logo.png'
import '../styles/navbar.css'

function Navbar() {
  return (
    <nav>
      <div className="navbar">
        <img className="logo" src={logo} alt="logo" />
        <h1 className="title">Contact List</h1>
      </div>
      <hr />
    </nav>
  )
}

export default Navbar