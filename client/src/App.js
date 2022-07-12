import './App.css';
import Navbar from './Navbar/Navbar';
import Home from './Home/Home';
import PaperDetails from './PaperDetails/PaperDetails';
import Request from './Request/Request';
import Profile from './Profile/Profile';
import AddPapers from './AddPapers/AddPapers';
import {BrowserRouter as Router, Route, Switch } from "react-router-dom"

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <div className='content'>
          <Switch>
              <Route exact path="/">
                <Home/>
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
          </Switch>
        </div>
     </div>
    </Router>
  );
}

export default App;
