import './App.css';
import Navbar from './Navbar/Navbar';
import Home from './Home/Home';
import PaperDetails from './PaperDetails/PaperDetails';
import Request from './Request/Request';
import Profile from './Profile/Profile';
import PaperRequests from './PaperRequests/PaperRequests';
import Login from './Login/Login';
import UserList from './UserList/UserList';
import Unauthorized from './Unauthorized/Unauthorized';
import {BrowserRouter, Routes, Route } from "react-router-dom"
import Notifications from './Notifications/Notifications';
import { useEffect, useState } from 'react';

function App() {

  //check user logged in or not
  // const userLoggedIn = true;
  // const admin = false;

  const [userLoggedIn, setUserLoggedIn] = useState()
  const [admin, setAdmin] = useState()


  useEffect(() => {
    if(JSON.parse(window.localStorage.getItem("userInfo")) )
      {
        setUserLoggedIn(true) 
        const user = JSON.parse(window.localStorage.getItem("userInfo"))
        user.isAdmin ? setAdmin(true) : setAdmin(false)
        
      } else{
        setUserLoggedIn(false)
      }
    
  }, [userLoggedIn, admin])
  

  return (
    <div className="App">
        <BrowserRouter>
          {userLoggedIn && <Navbar admin={admin} setUserLoggedIn={setUserLoggedIn}/>}
            <Routes>
              {userLoggedIn ? 
                <>
                  <Route path="/" element={<Home admin={admin}/>}/>
                  <Route path="/paper/:id" element={<PaperDetails/>}/>
                  <Route path="/request" element={<Request admin={admin}/>}/>
                  <Route path="/profile" element={<Profile/>}/>
                  <Route path="/paperReq" element={<PaperRequests/>}/>
                  <Route path="/userlist" element={<UserList/>}/>
                  <Route path="/notifications" element={<Notifications/>}/>
                  <Route path="/unauthorized" element={<Unauthorized />}/>
                </> : 
                  <Route path= "*" element={<Login setUserLoggedIn={setUserLoggedIn}/>}/>}
              </Routes>
            </BrowserRouter>  
     </div>
  );
}

export default App;
