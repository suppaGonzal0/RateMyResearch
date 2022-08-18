import React, { useState } from 'react'
import "./Edit.css"
import axios from 'axios'

const Edit = ({userID}) => {

  const [aboutme, setAboutme] = useState("No information")

  const handleAboutMe = () => {
    axios.put(`http://localhost:3001/users/updateUser/${userID}`, {
        aboutMe: aboutme
      }).then((response) => {
        window.location.reload()
        alert("About me is updated")
      })
  }

  const [img, setImg] = useState({
    file: [],
  })
  
  const handleImg = (e) => {
    setImg({
      ...img,
      file:e.target.files[0]
    })
  }

  const submitImage = async () => {
    const imgData = new FormData();
    imgData.append("picture", img.file)

    axios.post("http://localhost:3001/img", imgData, {
      headers: {"Content-Type": "multipart/img-data"}
    })
    .then(res => {
      console.warn(res)
    })

  }

  return (
    <div className='editSection'>
        <div className="editAbout">
          <h3>Edit about me</h3>
          <textarea
            onChange={(e) => setAboutme(e.target.value)}/>
          <button onClick={handleAboutMe}>Edit</button>
        </div>
        <div className="dpChange">
          <h3>Change profile picture</h3>
          <input type="file" className='imgInput' onChange={handleImg}/>
          <button type='submit' onClick={() => submitImage()}>Change</button>
        </div>
    </div>
  )
}

export default Edit