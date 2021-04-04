// Packages
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useEffect, useState } from 'react';

// Files
import Nav from "./components/Nav";
import LandingPage from './pages/LandingPage';
import Login from './pages/Login';
import Signup from './pages/Signup';
import EduResources from './pages/EduResources';
import UserContext from './utils/contexts/UserContext';
import Footer from './components/Footer'
import API from './utils/API';

// Styling
import './index.css';

// Font Awesome imports
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';

// Library Creation
library.add(fab, fas);

function App() {
const [user, setUser] = useState(null);
useEffect(()=> {
  API.getLoggedInUser().then((res)=>{
    if(res.data){
      console.log(res.data);
      setUser(res.data);
    }
  })
  
}, [])

  return (
    <Router>
      <div>
        <UserContext.Provider value={user}>
          <Nav />
          <Switch>
            <Route exact path="/">
              <LandingPage />
            </Route>
            <Route exact path="/signup">
              <Signup />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/resources">
              <EduResources />
            </Route>
          </Switch>
        </ UserContext.Provider>
        <br />
        <br />
        <br />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
