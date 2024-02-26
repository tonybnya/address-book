import logo from '../assets/logo.png'
import Search from './Search'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <nav>
      <div className="container">
        <NavLink to="/" className="navbar">
          <img src={logo} alt="logo" />
        </NavLink>
        <h1>Navbar</h1>

        <Search />
      </div>
    </nav>
  )
}

export default Navbar