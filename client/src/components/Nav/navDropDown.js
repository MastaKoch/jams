import React from 'react';
// import { Dropdown } from 'semantic-ui-react';
import { Button } from 'semantic-ui-react';
import { StateBrowserRouter, Route, Link, useRouteMatch, Switch, Router } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
import "./style.css";


export default function NavDropDown() {

    
    return (
   
<Dropdown className="dropdownNav">
  <Dropdown.Toggle variant="danger" id="dropdown-basic">
    Check out our Resources!
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item as = {Link} to = "/science"><span className="label">Science</span></Dropdown.Item>
    <Dropdown.Item as = {Link} to = "/technology"><span className="label">Technology</span></Dropdown.Item>
    <Dropdown.Item as = {Link} to = "/reading"><span className="label">Reading</span></Dropdown.Item>
    <Dropdown.Item as = {Link} to = "/engineering"><span className="label">Engineering</span></Dropdown.Item>
    <Dropdown.Item as = {Link} to = "/art"><span className="label">The Arts</span></Dropdown.Item>
    <Dropdown.Item as= {Link} to ="/math"><span className="label">Mathematics</span></Dropdown.Item>
</Dropdown.Menu>
</Dropdown>



    );
  }
  