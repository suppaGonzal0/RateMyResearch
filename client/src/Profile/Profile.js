import React from 'react'
import './Profile.css'
import Edit from './editSection/Edit'
import Mypapers from './mypapersSection/Mypapers'
import Saved from './savedSection/Saved'
import { useEffect, useState } from 'react'
import axios from 'axios'

const Profile = () => {

  const [section, setSection] = useState('edit')

  const [aboutMe, setAboutMe] = useState('No Information')

  const userInfo = JSON.parse(window.localStorage.getItem("userInfo"))

  useEffect(() => {
    axios.get(`http://localhost:3001/users/getUser/${userInfo._id}`).then((response) => {
      setAboutMe(response.data.aboutMe);
        });
    }, [userInfo._id])

  let sectionContent = <Edit userID = {userInfo._id} aboutMe={aboutMe} setAboutMe={setAboutMe}/>

  if(section === "mypapers"){
    sectionContent = <Mypapers userID = {userInfo._id}/>
  } else if(section === "saved"){
    sectionContent = <Saved userID = {userInfo._id}/>
  }
  
  return (
    <main className='profileMain'>
      
      <div className="profileContainer">
        <h2>{userInfo.username}</h2>
        <h3>{userInfo.email}</h3>

        <p className='aboutme'>{aboutMe}</p>

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

    </main>
  )
}

export default Profile