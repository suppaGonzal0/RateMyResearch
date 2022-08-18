import React from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom'

const Navbar = ({admin, setUserLoggedIn}) => {

  const handleLogout = () => {
    window.localStorage.clear()
    setUserLoggedIn(false)
  }

  return (
    <nav>
        <h1>RateMyResearch</h1>
        <div className='links'>
            <Link to="/">Home</Link>
            {admin ? 
              <>
                <Link to="/paperReq">Paper Requests</Link>
                <Link to="/request">Add Papers</Link>
                <Link to="/profile">My Profile</Link>
                <Link to="/userlist">User List</Link>
              </>
            :
              <>
                <Link to="/request">Request</Link>
                <Link to="/profile">My Profile</Link>
                <Link to="/notifications">Notifications</Link>
              </>
            }
            <button className='login' onClick={handleLogout}>Logout</button>
        </div>
    </nav>
  )
}

export default Navbar