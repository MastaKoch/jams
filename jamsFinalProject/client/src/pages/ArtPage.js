import React from "react";
import { Container, Header, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import UserContext from "../../utils/contexts/UserContext";
import { useContext } from "react";


export default function Science() {
    const { path } = useRouteMatch();
    const user = useContext(UserContext);
  
    console.log(user);
    return (
      <Container text className="container">
      <Header as="h2" className="head">
        JAMS
      </Header>
      <Header as="h3" className="motto">
        "Helping families find their voices and access to literacy resources
        since 2021."
      </Header>

      <Button color="blue" fluid size="large" >
            <Link to="https://www.youtube.com/watch?v=QZQyV9BB50E">ART</Link>
      </Button>

      </Container>

    );
  }