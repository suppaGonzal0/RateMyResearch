import React from 'react'
import './Unauthorized.css'
import  { Link } from 'react-router-dom'

const Unauthorized = () => {
  return (
    <div className='unauth'>
        <h1>403</h1>
        <h2>Access Forbidden</h2>
        <Link to = "/"><button>Go Home</button></Link>
    </div>
  )
}

export default Unauthorized