import React, { useState, useEffect } from 'react'
import "./Edit.css"
import axios from 'axios'

const Edit = ({userID}) => {

  const [aboutme, setAboutme] = useState("No information")
  const [img, setImg] = useState()
  const [DP, setDP] = useState()


  useEffect(() => {
    axios.get(`http://localhost:3001/users/getUser/${userID}`).then((response) => {
      setDP(response.data.picture);
        });
    }, [userID])

  const handleAboutMe = () => {
    axios.put(`http://localhost:3001/users/updateUser/${userID}`, {
        aboutMe: aboutme
      }).then((response) => {
        window.location.reload()
        alert("About me is updated")
      })
  }

  // const [img, setImg] = useState({
  //   file: [],
  // })
  
  // const handleImg = (e) => {
  //   setImg({
  //     ...img,
  //     file:e.target.files[0]
  //   })
  // }

  // const submitImage = async () => {
  //   // const imgData = new FormData();
  //   // imgData.append("picture", img.file)

  //   // axios.post("http://localhost:3001/img", imgData, {
  //   //   headers: {"Content-Type": "multipart/img-data"}
  //   // })
  //   // .then(res => {
  //   //   console.warn(res)
  //   // })

  // }

  const submitImage = (img) => {
    axios.put(`http://localhost:3001/users/updateUser/${userID}`, {
      picture: img
      }).then((response) => {
      if(response.data.message){
        console.log(response.data.message)
      } else {
        setDP(img)
      }
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
          <img src={DP} alt="" width="200" height="180"/>
          <input type="text"  className='imgInput' onChange={(e) => setImg(e.target.value)}/>
          <button type='submit' onClick={() => submitImage(img)}>Change</button>
        </div>
    </div>
  )
}

export default Edit