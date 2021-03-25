import React from "react";
import { Container, Header } from 'semantic-ui-react';





export default function landingPage() {

    return (
      <div>
        <Container text className="container">
          <Header as="h2" className="head">JAMS</Header>
          <Header as="h3" className="motto">"Helping children find their voice since 2021."</Header>
          <p className="aboutJams"><span className="acronym">J</span>ustify yourself.</p>
          <p className="aboutJams"><span className="acronym">A</span>spire for greater.</p>
          <p className="aboutJams"><span className="acronym">M</span>ake use of your platform.</p>
          <p className="aboutJams"><span className="acronym">S</span>ee both sides.</p>
          <hr />

          <Header as="h2" className="head">"What is JAMS?"</Header>
          <p className="aboutJams">
          
            JAMS is a creative outlet for students and educators. It gives students the freedom
            to post their opinions and upvote on their classmates responses on any given topic assigned by their teacher. 
            
            Here's how it works:
          </p>
          <ul>
              <li>
              There is a section for teachers to post articles 
              "For" or "Against" a certain topic.
              </li>
          </ul>
        </Container>

        {/* 
            
            What framework?*


            add a blurb about the compnay "catch phrase"
            
            ROW - what makes us so great!

            Currently Signed up Users...
    
            about the team

            FAQ
             */}
      </div>
    );
}
