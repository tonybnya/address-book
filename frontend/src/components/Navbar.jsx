import React from 'react'
import Search from '../components/Search'
import logo from '../assets/logo.png'
import '../styles/navbar.css'

function Navbar() {
  return (
    <nav>
      <div className="navbar">
        <div className="brand">
          <img className="logo" src={logo} alt="logo" />
          <h1 className="title">contacto</h1>
        </div>
        <Search />
      </div>
      <hr />
    </nav>
  )
}

export default Navbar