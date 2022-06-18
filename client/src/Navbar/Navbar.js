import React from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
        <h1>RateMyResearch</h1>
        <div className='links'>
            <Link to="/">Home</Link>
            <Link to="/request">Request</Link>
            <Link to="/profile">My Profile</Link>
            <Link to="/aboutus">About Us</Link>
            <button className='login'>Login</button>
        </div>
    </nav>
  )
}

export default Navbar