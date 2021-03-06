import React from "react";
import { Container, Header, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import LandingPage from './LandingPage';


// import { useState, useEffect} from 'react';
// import API from '../utils/API';
// import ResourceItems from '../components/ResourceItems/ResourceItems';


export default function Resources() {
    // const [resources, setResources]= useState([{name: "Alex", age: 25}]);
    // useEffect(()=> {
    //     getResources()
    // }, [])

    // const getResources = () => {
    //     API.getResources().then(res => {
    //         console.log(res)
    //         setResources(res.data)
    //     })
    // }
    return (
      <div>
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
            <h2>
              The Importance of Literacy and Access to Supporting Resources from
              Jams
            </h2>
            <br />
            <p>
              Learning to read and write is an ongoing process. Contrary to
              popular belief, it does not suddenly begin in kidergarten or first
              grade. From the earliest years, everything that adults do to
              support children's langauge and literacy counts contributed by
              Hart and Risley, 1995. The link between supportive parental
              involvement and children's early literacy development is well
              established. Studies have shown that children from homes where
              parents model the uses of literacy and engage children in
              activities that promote basic understanding about literacy and its
              uses are better prepared for school. Visit our Jams Resources to
              check out some helpful information on getting started with your
              child's early literacy development.
            </p>
          </div>
          {/* <ResourceItems resources={resources}/> */}
          {/* <br />
          <br />
          <br /> */}
          
          {/* <h2>Subjects of Interest</h2> */}
          {/* <Button color="blue" fluid size="large">
            <Link to="/science">Science</Link>
          </Button>
          <br />
 
          <Button color="red" fluid size="large">
            <Link to="/technology">Technology</Link>
          </Button>
          <br />
    
          <Button color="green" fluid size="large">
            <Link to="/reading">Reading</Link>
          </Button> 
          <br />
          <Button color="yellow" fluid size="large">
            <Link to="/art">Art</Link>
          </Button> 


          <Header as="h3" className="motto">
            To get return to our homepage, please click the button below.
          </Header>

          <Button color="teal" fluid size="large" onClick={LandingPage}>
            <Link to="/">Back to Homepage</Link>
          </Button> */}
          <br />
        </Container>
        <br />
        <br />
      </div>
    );
}
