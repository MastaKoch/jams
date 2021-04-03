import React from "react";
import { Button, Menu } from 'semantic-ui-react';
import './style.css';
import { BrowserRouter, Route, Link, useRouteMatch, Switch, Router } from 'react-router-dom';
import UserContext from '../../utils/contexts/UserContext';
import { useContext } from 'react';
import Axios from "axios";
import Signup from '../../pages/Signup';



export default function Nav() {
  const { path } = useRouteMatch();
  const user = useContext(UserContext);
  // const signOff = ()=> {   
  //     localStorage.clear();
  //     window.location.href = '/';  
  // }

  const logout = () => {
    Axios({
      method: "GET",
      withCredentials: true,
      url: "/api/logout",
    }).then((res) => {
      console.log(res)
      window.location.href= '/';
      
    
    });
  };


  const signup = () => {
    Axios({
      method: "POST",
      data: {
        username: signupName,
        password: signupPassword,
      },
      withCredentials: true,
      url: "/api/signup",
    }).then((res) => 
    {
      console.log(res)
      window.location.href= '/resources';
    });
  };

  console.log(user);
  return (
    <Menu className="navMenu">
      {!user && (
        <div>
          <Menu.Item>
            <Link to="/signup">
              <Button primary>Sign up</Button>
            </Link>
          </Menu.Item>

          <Menu.Item>
            <Link to="/login">
              <Button>Log-in</Button>
            </Link>
          </Menu.Item>
        </div>
      )}

      <div className="jamDiv">
        <h1 className="navLogo">JAMS</h1>
        {user && (
          <div className="welcomePane">

            <p className="welcome">Welcome, {user.username}! </p>
            <Menu.Item>
              {/* <Link to="/">
              <a href="/" onClick={() => signOff()}> */}
                <Button 
                onClick= {logout}>Log Out</Button>
                {/* </a>
              </Link> */}
            </Menu.Item>
          </div>
        )}
      </div>
    </Menu>
  );
}

