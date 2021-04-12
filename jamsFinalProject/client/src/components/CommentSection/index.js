import React, { useState } from "react";
import { Container, Header, Button } from "semantic-ui-react";
import axios from "axios";

function CreateComments () {

  const [input, setInput] = useState({
    comment:''
  });

  function handleChange(event) {
      const {name, value} = event.target;

      setInput(prevInput => {
        return {
          ...prevInput,
          [name]: value
        };
      });
  };

  function handleClick(event) {
    event.preventDefault();
    console.log(input);
    const newComment ={
      comment: input.comment
    }
    axios.post("https://localhost:3001/api/resources/:id",newComment)
  };

    return (
        <div>
        <h3>Place your Comment in the textbox below</h3>
        <form>
          <div>
            <textarea 
              onChange={handleChange} 
              name="comment" 
              value={input.comment} 
              className="comment" 
              type="text" 
              placeholder="Enter Your Response Here"
            />
          </div>

          <Button color="black" fluid size="large" onClick={handleClick}>
            Submit Response
          </Button>
          
        </form>

        
       
    </div>
    );
}

export default CreateComments;