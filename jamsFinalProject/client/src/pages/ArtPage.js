import React from "react";
import { Container, Header, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";
import UserContext from "../utils/contexts/UserContext";
import { useContext } from "react";
import Wrapper from "../components/Wrapper/index";
import "../index.css";
import Form from '../components/Form';

// import Comments from "../components/CommentSection/index"



export default function Art() {
  // const { path } = useRouteMatch();
  const user = useContext(UserContext);
  // this is for the form ---
  // const {register, handleSubmit, errors} = useForm;
  // const onSubmit = (data) => {
  //   console.log(data);
  // }
  console.log(user);
  // Please include to Open link in New Tab ---
  const OpenInNewTab = (url) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };
  return (
    <Container text className="container">
      <Header as="h2" className="head">
        JAMS
      </Header>
      <Header as="h3" className="motto">
        "Helping families find their voices and access to literacy resources
        since 2021."
      </Header>
      <br />
      <br />
      <div>

      </div>


      <div>
        <h2>Resources Instructions</h2>
        <Wrapper />
        <br />
        <p>
          Using your critical thinking and writing skills - how did the
          information from the resource improve your understanding of the topic?
        </p>
      </div>
      <div>
        <Button
          color="black"
          fluid
          size="large"
          onClick={() =>
            OpenInNewTab("https://www.youtube.com/watch?v=QZQyV9BB50E")
          }
        >
          Click here to View Resource
        </Button>
        <Form />
        {/* <Comments /> */}

        {/* form does not have handle click submit yet */}
        {/* <h3>Place your Comment in the textbox below</h3>


      <div>
        <h2>Resources Instructions</h2>
        <Wrapper />
        <br />
        <p>
          Using your critical thinking and writing skills - how did the
          information from the resource improve your understanding of the topic?
        </p>
      </div>
      <div>
        <Button
          color="black"
          fluid
          size="large"
          onClick={() =>
            OpenInNewTab("https://www.youtube.com/watch?v=QZQyV9BB50E")
          }
        >
          Click here to View Resource
        </Button>

        {/* form does not have handle click submit yet */}
        {/* <h3>Place your Comment in the textbox below</h3>

        <textarea className="comment" type="text" />

        <Button color="black" fluid size="large">
          Submit Response

        </Button>  */}

        {/* </Button> */}

      </div>
    </Container>
  );
}
