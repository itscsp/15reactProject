import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../cocktail.gif'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <Link to="/">
          <img src={logo} alt="CSP cocktail" className="logo" />
        </Link>
        <ul className="nav-links">
          <li className="nav-item">
            <Link to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about">
              About
            </Link>
          </li>
        </ul>
      </div>



    </nav>
  )
}

export default Navbar
