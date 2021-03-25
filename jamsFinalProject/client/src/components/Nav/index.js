import React from "react";
import { Button, Menu } from 'semantic-ui-react';
import './style.css';

function Nav() {
  return (
      <Menu className="navMenu">
        <Menu.Item>
          <Button primary>Sign up</Button>
        </Menu.Item>

        <Menu.Item>
          <Button>Log-in</Button>
        </Menu.Item>
        <div className="jamDiv">
           <h1 className="navLogo">JAMS</h1>
        </div>
       
      </Menu>

  );
}

export default Nav;
