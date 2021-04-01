import React from 'react';
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react';
import { BrowserRouter, Route, Link, useRouteMatch, Switch, Router } from 'react-router-dom';
import { useState } from "react";
import Axios from "axios";


function SignupForm() {
  const [signupName, setSignupName] = useState("");
  const [signupPassword, setSignupPassword] = useState("");

  const signup = () => {
    Axios({
      method: "POST",
      data: {
        username: signupName,
        password: signupPassword,
      },
      withCredentials: true,
      url: "http://localhost:8000/signup",
    }).then((res) => console.log(res));
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
          <Header as='h2' color='teal' textAlign='center'>
            <Image src='/logo.png' /> Sign Up for FREE!
          </Header>
          <Form size='large'>
            <Segment stacked>
              <Form.Input 
              fluid icon='user' 
              iconPosition='left' 
              placeholder='E-mail address' 
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
                Let's Begin!
              </Button>
            </Segment>
          </Form>
          <Message>
            Already have an account? <Link to="/login">Login</Link>
            <br/>
            <br/>
            <br/>
            <br/>
            Homepage:  <Link to="/">Go Home</Link>
          </Message>
        </Grid.Column>
      </Grid>
    )


}


export default SignupForm