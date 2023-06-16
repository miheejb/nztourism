import React from 'react'
import "./navbar.css"
import Home from '../../pages/home/Home'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <div className="navbar">
    <div className="navContainer">
        <Link to ="/" className="logo" > 
        Tourism New Zealand
        </Link> 
        <div className="navItems">
            <button className="navButton">Register</button>
            <button className="navButton">Login</button>
        </div>
    </div>
    </div>
  )
}

export default Navbar
