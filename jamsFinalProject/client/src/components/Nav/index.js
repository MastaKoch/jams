import React from "react";
import { Button, Menu } from 'semantic-ui-react';
import './style.css';
import { BrowserRouter, Route, Link, useRouteMatch, Switch, Router } from 'react-router-dom';


export default function Nav() {
  const { path } = useRouteMatch();
  return (
      <Menu className="navMenu">
        <Menu.Item>
          
              <Link to="/signup"><Button primary>Sign up</Button></Link>
      
        </Menu.Item>

        <Menu.Item>
  
        <Link to="/login"><Button>Log-in</Button></Link>

        </Menu.Item>
        <div className="jamDiv">
           <h1 className="navLogo">JAMS</h1>
        </div>
      </Menu>

  );
}

