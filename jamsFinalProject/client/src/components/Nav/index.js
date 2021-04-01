import React from "react";
import { Button, Menu } from 'semantic-ui-react';
import './style.css';
import { BrowserRouter, Route, Link, useRouteMatch, Switch, Router } from 'react-router-dom';
import UserContext from '../../utils/contexts/UserContext';
import { useContext } from 'react';

export default function Nav() {
  const { path } = useRouteMatch();
  const user = useContext(UserContext);

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
              <Link to="/">
                <Button>Log Out</Button>
              </Link>
            </Menu.Item>
          </div>
        )}
      </div>
    </Menu>
  );
}

