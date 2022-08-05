import React from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom'

const Navbar = ({admin}) => {

  return (
    <nav>
        <h1>RateMyResearch</h1>
        <div className='links'>
            <Link to="/">Home</Link>
            {admin ? 
              <>
                <Link to="/add">Add Papers</Link>
                <Link to="/userlist">User List</Link>
              </>
            :
              <>
                <Link to="/request">Request</Link>
                <Link to="/profile">My Profile</Link>
              </>
            }
            <button className='login'>Logout</button>
        </div>
    </nav>
  )
}

export default Navbar