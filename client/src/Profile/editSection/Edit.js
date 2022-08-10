import React, { useState } from 'react'
import "./Edit.css"
import axios from 'axios'

const Edit = () => {

  //set aboutme function
  const [aboutme, setAboutme] = useState("No information")
  const [img, setImg] = useState({
    file: [],
  })
  
  const handleImg = (e) => {
    setImg({
      ...img,
      file:e.target.files[0]
    })
  }

  const submit = async () => {
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
            onChange={(e) => setAboutme(e)}/>
          <button>Edit</button>
        </div>
        <div className="dpChange">
          <h3>Change profile picture</h3>
          <input type="file" className='imgInput' onChange={handleImg}/>
          <button type='submit' onClick={() => submit()}>Change</button>
        </div>
    </div>
  )
}

export default Edit