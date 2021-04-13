import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from "axios";



export default function CreateForm() {
  
    const [input, setInput] = useState({
      username: '',
      comments: ''
    })
    
    function handleChange(event) {
      const {username, value} = event.target;
    
      setInput(prevInput => {
        return {
          ...prevInput,
          [username]: value
        }
      })
    }
  
    function handleClick(event) {
      event.preventDefault();
      const newComment ={
          username: input.username,
          comments: input.comments
      }
        axios.post('http://localhost:3001/', newComment)
    }


  return (<div>
    <Form>
  <Form.Group controlId="Form.ControlInputname">
    <Form.Label>Name</Form.Label>
    <Form.Control type="Name" placeholder="username" onChange={handleChange}/>
  </Form.Group>
  <Form.Group controlId="Form.ControlSelections">
    <Form.Label>Agree or Disagree</Form.Label>
    <Form.Control as="select">
      <option>Agree</option>
      <option>Disagree</option>
    </Form.Control>
  </Form.Group>
  <Form.Group controlId="Form.ControlTextarea">
    <Form.Label>Please include Comment</Form.Label>
    <Form.Control as="textarea" rows={3} onChange={handleChange}/>
  </Form.Group>
  <Button onClick={handleClick} variant="primary" type="submit">
    Post
  </Button>
</Form>
</div>
  )
}
