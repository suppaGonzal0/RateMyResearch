import React from 'react'
import './Login.css'
import { useState } from 'react'
import axios from "axios"

const Login = () => {
  const [content, setContent] = useState("login")
  const [name, setName] = useState()
  const [loginEmail, setLoginEmail] = useState()
  const [loginPass, setLoginPass] = useState()
  const [regEmail, setRegEmail] = useState()
  const [regPass, setRegPass] = useState()

  const login = (e) => {
    e.preventDefault()
    axios.post("http://localhost:3001/auth/login", {
      email: loginEmail,
      password: loginPass,
      }).then((response) => {
        if(response.data.message) {
          console.log(response.data.message)
        } else {
          const {email, username, _id, isAdmin} = response.data
          localStorage.setItem("userInfo", JSON.stringify({email, username, _id, isAdmin}));
        }
      });
  }  

  const register = (e) => {
    e.preventDefault()
    axios.post("http://localhost:3001/auth/register", {
      username: name,
      email: regEmail,
      password: regPass,
      }).then((response) => {
        if(response.data.message) {
          console.log(response.data.message)
        } else {
          console.log("registered")
        }
      });
  }  
    

    let sectionContent 

    if(content === "login"){
        sectionContent = <div className='content'>
                <h3>Login</h3>
                <div className="reqField">
                        <label>Email</label>
                        <input type="text" required
                            onChange={(e) => {
                            setLoginEmail(e.target.value);
                            }} />
                    </div>
                    <div className="reqField">
                        <label>Password</label>
                        <input type="text" required
                            onChange={(e) => {
                            setLoginPass(e.target.value);
                            }} />
                    </div>
                    <button className='button' onClick={(e) => login(e)}>Login</button>
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
                            setRegEmail(e.target.value);
                            }} />
                    </div>
                    <div className="reqField">
                        <label>Password</label>
                        <input type="text" required
                            onChange={(e) => {
                            setRegPass(e.target.value);
                            }} />
                    </div>
                    <button className='button' onClick={(e) => register(e)}>create</button>
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