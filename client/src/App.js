import './App.css';
import Navbar from './Navbar/Navbar';
import Home from './Home/Home';
import PaperDetails from './PaperDetails/PaperDetails';
import Request from './Request/Request';
import Profile from './Profile/Profile';
import AddPapers from './AddPapers/AddPapers';
import Login from './Login/Login';
import UserList from './UserList/UserList';
import {BrowserRouter as Router, Route, Switch } from "react-router-dom"

function App() {

  //check user logged in or not
  const userLoggedIn = true;
  const admin = false

  return (
    <Router>
      <div className="App">
        {userLoggedIn ? <Navbar admin={admin}/>: ""}
        <div className='content'>
          <Switch>
              <Route exact path="/">
                <Home admin={admin}/>
              </Route>
              <Route path="/paper/:id">
                <PaperDetails/>
              </Route>
              <Route exact path="/request">
                <Request/>
              </Route>
              <Route exact path="/profile">
                <Profile/>
              </Route>
              <Route exact path="/add">
                <AddPapers/>
              </Route>
              <Route exact path="/login">
                <Login/>
              </Route>
              <Route exact path="/userlist">
                <UserList/>
              </Route>
          </Switch>
        </div>
     </div>
    </Router>
  );
}

export default App;
