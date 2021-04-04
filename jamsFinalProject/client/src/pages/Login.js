import React from 'react';
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react';
import { StateBrowserRouter, Route, Link, useRouteMatch, Switch, Router } from 'react-router-dom';
import { useState } from "react";
import Axios from "axios";
// import SignupForm from "./Signup";

function LoginForm() {

  const [loginName, setloginName] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [data, setData] = useState(null);

  const login = () => {
    Axios({
      method: "POST",
      data: {
        username: loginName,
        password: loginPassword,
      },
      withCredentials: true,
      url: "/login",
    }).then((res) => {
      console.log(res)
      window.location.href= '/';
      
    
    });
  };



  
  // const getUser = () => {
  //   Axios({
  //     method: "GET",
  //     withCredentials: true,
  //     url: "http://localhost:8000/user",
  //   }).then((res) => {
  //     setData(res.data);
  //     console.log(res.data);
  //   });
  // };

  return (
    <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
      <Grid.Column style={{ maxWidth: 450 }}>
        <Form size='large'>
          <Segment stacked>
          <Header as='h2' color='teal' textAlign='center'>
          Log-in to your account
          </Header>
            <Form.Input fluid icon='user' 
              iconPosition='left' 
              placeholder='Username' 
              onChange={(e) => setloginName(e.target.value)}
            />
            <Form.Input
              fluid
              icon='lock'
              iconPosition='left'
              placeholder='Password'
              type='password'
              onChange={(e) => setLoginPassword(e.target.value)}
            />

            <Button color='teal' fluid size='large' onClick={login}>
              Login
            </Button>
            {data ? <h1>Welcome Back {data.username}</h1> : null}
          </Segment>
        </Form>
        <Message>
          New to us? <Link to="/signup">Sign Up</Link>
          <br/>
          <br/>
          Homepage:  <Link to="/">Go Home</Link>
        </Message>
      </Grid.Column>
    </Grid>
  )

}


export default LoginForm