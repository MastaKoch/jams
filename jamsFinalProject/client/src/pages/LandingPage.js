import React from "react";
import { Container, Header } from 'semantic-ui-react';
import Carousel from '../components/Carousel/index';
import Wrapper from '../components/Wrapper/index';




export default function landingPage() {

    return (
      <div className="landingPageBox">
        <Container text className="container">
          <Header as="h2" className="head">JAMS</Header>
          <Header as="h3" className="motto">"Helping children find their voice since 2021."</Header>
          <p className="aboutJams"><span className="acronymJ">J</span> ust be yourself.</p>
          <p className="aboutJams"><span className="acronymA">A</span> cknowledge your greatness.</p>
          <p className="aboutJams"><span className="acronymM">M</span> ake your voice heard.</p>
          <p className="aboutJams"><span className="acronymS">S</span> ee both sides.</p>
          <hr />

          <Header as="h2" className="head">"What is JAMS?"</Header>
          <p className="aboutJams">
          
            JAMS is a creative outlet for students and educators. It gives students the freedom
            to post their opinions and upvote on their classmates responses on any given topic assigned by their teacher. 
            <br/>
            <br/>


            Here's how it works:
          </p>
          
        <Wrapper />
        <br/>
        <br/>
        < Carousel />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
       

        </Container>
      </div>
    );
}
