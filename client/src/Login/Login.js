import React from 'react'
import './Login.css'
import { useState } from 'react'

const Login = () => {
    const [content, setContent] = useState("login")
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [pass, setPass] = useState()

    let sectionContent 

    if(content === "login"){
        sectionContent = <div className='content'>
                <h3>Login</h3>
                <div className="reqField">
                        <label>Email</label>
                        <input type="text" required
                            onChange={(e) => {
                            setEmail(e.target.value);
                            }} />
                    </div>
                    <div className="reqField">
                        <label>Password</label>
                        <input type="text" required
                            onChange={(e) => {
                            setPass(e.target.value);
                            }} />
                    </div>
                    <button className='button'>Login</button>
                <h4 onClick={() => setContent("register")}>
                    Create an account</h4>
            </div>
    } else if(content === "register"){
        sectionContent = <div className='content'>
            <h3>Create An Account</h3>
            <div className="reqField">
                        <label>Name</label>
                        <input type="text" required
                            onChange={(e) => {
                            setName(e.target.value);
                            }} />
                    </div>
            <div className="reqField">
                        <label>Email</label>
                        <input type="text" required
                            onChange={(e) => {
                            setEmail(e.target.value);
                            }} />
                    </div>
                    <div className="reqField">
                        <label>Password</label>
                        <input type="text" required
                            onChange={(e) => {
                            setPass(e.target.value);
                            }} />
                    </div>
                    <button className='button'>create</button>
                <h4 onClick={() => setContent("login")}>
                    Already have an account</h4>
            </div>
    }

  return (
    <div className='login'>

      <div className="sectionLeft">
        <div className='leftContent'>
        <h1>RateMyResearch</h1>
        <h2>Search and discover relevant research in over 78 million Open Access articles and article records</h2>
        </div>
      </div>

      <div className="sectionRight">
        {sectionContent}
      </div>

    </div>
  )
}

export default Login