import React from 'react'
import './Profile.css'
import { useState } from 'react'
import Edit from './editSection/Edit'
import Mypapers from './mypapersSection/Mypapers'
import Saved from './savedSection/Saved'

const Profile = () => {

  const [section, setSection] = useState('edit')

  //fetch aboutme from db in useEffect
  const aboutme = "No information"

  let sectionContent = <Edit/>

  if(section === "mypapers"){
    sectionContent = <Mypapers/>
  } else if(section === "saved"){
    sectionContent = <Saved/>
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

      <hr />

      <div className="section">
        {sectionContent}
      </div>

    </div>
  )
}

export default Profile