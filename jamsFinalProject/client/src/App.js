// Packages
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useEffect, useState } from 'react';

// Files
import Nav from "./components/Nav";
import LandingPage from './pages/LandingPage';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Resources from './pages/Resources';
import UserContext from './utils/contexts/UserContext';
import Footer from './components/Footer'
import API from './utils/API';

// 7 subjects import here
// import Science from './pages/SciencePage';
// import Technology from './pages/TechnologyPage';
// import Reading from './pages/ReadingPage';
// import Engineering from './pages/EngineeringPage';
import Art from './pages/ArtPage';
// import Math from './pages/MathPage';
// import Writing from './pages/WritingPage';


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
              <Resources />
            </Route>
            {/* <Route exact path="/science">
              {/* insert component here */}
            {/* </Route>
            <Route exact path="/technology"> */}
              {/* insert component here */}
            {/* </Route>
            <Route exact path="/reading"> */}
              {/* insert component here */}
            {/* </Route>
            <Route exact path="/engineering"> */}
              {/* insert component here */}
            {/* </Route> */}
            <Route exact path="/art"> 
              <Art />
            </Route>
            {/*<Route exact path="/math"> */}
              {/* insert component here */}
            {/* </Route>
            <Route exact path="/writing"> */}
              {/* insert component here */}
            {/* </Route> */} 
          </Switch>
        </UserContext.Provider>
        <br />
        <br />
        <br />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
