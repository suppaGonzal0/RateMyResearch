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
            <Link to="/add">Add Papers</Link>
            <button className='login'>Logout</button>
        </div>
    </nav>
  )
}

export default Navbar