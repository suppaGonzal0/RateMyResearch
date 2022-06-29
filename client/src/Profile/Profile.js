import React from 'react'
import './Profile.css'
import { useState } from 'react'

const Profile = () => {

  const [section, setSection] = useState('edit')
  const [aboutme, setAboutme] = useState("No information")

  const edit = () => {
    return (
      <div>
        edit
      </div>
    )
  }

  const mypapers = () => {
    return (
      <div>
        mypapers
      </div>
    )
  }

  const saved = () => {
    return (
      <div>
        saved
      </div>
    )
  }

  let sectionContent = <div>{edit()}</div>

  if(section === "mypapers"){
    sectionContent = <div>{mypapers()}</div>
  } else if(section === "saved"){
    sectionContent = <div>{saved()}</div>
  }
  
  return (
    <div className='mainDiv'>
      
      <h2>User Name</h2>

      <p className='aboutme'>{aboutme}</p>

      <div className='sectionbar'>    
        <p onClick={() => setSection('edit')}>Edit Profile</p>
        <p onClick={() => setSection('mypapers')}>My Papers</p>
        <p onClick={() => setSection('saved')}>Saved Papers</p>
      </div>

      <div className="section">
        {sectionContent}
      </div>

    </div>
  )
}

export default Profile