import React from 'react';
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react';
import { BrowserRouter, Route, Link, useRouteMatch, Switch, Router } from 'react-router-dom';
import { useState } from "react";
import Axios from "axios";


function SignupForm() {
  const [signupName, setSignupName] = useState("");
  const [signupPassword, setSignupPassword] = useState("");
  const [data, setData] = useState(null);
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
      window.location.href= '/login';
    });
  };


  // const login = () => {
  //   Axios({
  //     method: "POST",
  //     data: {
  //       username: loginName,
  //       password: loginPassword,
  //     },
  //     withCredentials: true,
  //     url: "/login",
  //   }).then((res) => {
  //     console.log(res)
  //     window.location.href= '/resources';
      
    
  //   });
  // };
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
              Sign Up for FREE!
            </Header>
              <Form.Input 
              fluid icon='user' 
              iconPosition='left' 
              placeholder='Username' 
              onChange={(e) => setSignupName(e.target.value)}/>
              <Form.Input
                fluid
                icon='lock'
                iconPosition='left'
                placeholder='Password'
                type='password'
                onChange={(e) => setSignupPassword(e.target.value)}
              />
    
              <Button color='teal' fluid size='large' onClick={signup}>
                <Link to="/login">Let's Begin!</Link>
              </Button>
              {data ? <h1>Welcome Back {data.username}</h1> : null}
            </Segment>
          </Form>
          <Message>
            Already have an account? <Link to="/login">Login</Link>
            <br/>
            <br/>
            Homepage:  <Link to="/">Go Home</Link>
          </Message>
        </Grid.Column>
      </Grid>
    )


}


export default SignupForm