import './App.css';
import Navbar from './Navbar/Navbar';
import Home from './Home/Home';
import PaperDetails from './PaperDetails/PaperDetails';
import Request from './Request/Request';
import Profile from './Profile/Profile';
import AddPapers from './AddPapers/AddPapers';
import Login from './Login/Login';
import UserList from './UserList/UserList';
import Unauthorized from './Unauthorized/Unauthorized';
import {BrowserRouter, Routes, Route } from "react-router-dom"

function App() {

  //check user logged in or not
  const userLoggedIn = true;
  const admin = true;

  return (
    <div className="App">
        <BrowserRouter>
          <Navbar admin={admin}/>
            <Routes>
              {userLoggedIn ? 
                <>
                  <Route path="/" element={<Home admin={admin}/>}/>
                  <Route path="/paper/:id" element={<PaperDetails/>}/>
                  <Route path="/request" element={<Request/>}/>
                  <Route path="/profile" element={<Profile/>}/>
                  <Route path="/add" element={<AddPapers/>}/>
                  <Route path="/userlist" element={<UserList/>}/>
                  <Route path="/unauthorized" element={<Unauthorized />}/>
                  <Route path="/" element={<Home />}/>
                </> : 
                  <Login/>}
              </Routes>
            </BrowserRouter>  
     </div>
  );
}

export default App;
