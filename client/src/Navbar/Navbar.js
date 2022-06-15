import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <nav>
        <h1>RateMyResearch</h1>
        <div className='links'>
            <a href="/">Home</a>
            <a href="/request">Request</a>
            <a href="/profile">My Profile</a>
            <a href="/aboutus">About Us</a>
            <button className='login'>Login</button>
        </div>
    </nav>
  )
}

export default Navbar