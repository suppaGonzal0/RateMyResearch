import React, { useState } from 'react'
import "./Edit.css"

const Edit = () => {

  //set aboutme function
  const [aboutme, setAboutme] = useState("No information")

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
          <button>Change</button>
        </div>
    </div>
  )
}

export default Edit