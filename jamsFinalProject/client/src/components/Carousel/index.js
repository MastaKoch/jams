// Packages
import React from "react";

// Files
import Carousel from 'react-bootstrap/Carousel';
import './styles.css';

// Font Awesome Imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Img
import alexPic from '../../imgs/alexPic.jpeg';
import shannonPic from '../../imgs/NewProfilepicWork.png';
import miaPic from '../../imgs/Image from iOS.jpg';
import jerryPic from '../../imgs/jerryPic.jpg';

export default function carousel() {

    return (
      <div>
        <h1 className="abt">About Your Developers</h1>
        <br />
        <Carousel className="carousel">
          <Carousel.Item>
            <img
              className="carouselImg"
              src= {alexPic}
              alt="Alex"
            />
            <Carousel.Caption className="bio">
              <h2 className="bioName">Alex Koch</h2>
              <p>My favorite Jam is blueberry.</p>
              <p>Jamz <FontAwesomeIcon icon= {["fas", "music"]} color="blue" /> :</p>
              <p>"Whats Poppin" by Jack Harlow."</p>

            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="carouselImg"
              src={shannonPic}
              alt="Second slide"
            />

            <Carousel.Caption className="bio">
              <h2 className="bioName">Shannon Page</h2>
              <p >My favorite Jam is strawberry.</p>
              <p>Jamz <FontAwesomeIcon icon= {["fas", "music"]} color="red" /> :</p> 
              <p>"Make It Out Alive" by Nao & SiR."</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="carouselImg"
              src={jerryPic}
              alt="Third slide"
            />

            <Carousel.Caption className="bio">
              <h2 className="bioName">Jerry Swann</h2>
              <p>My favorite Jam is blackberry molasses.</p>
              <p>Jamz <FontAwesomeIcon icon= {["fas", "music"]} color="black" /> :</p> 
              <p>"Raise Up" by Petey Pablo."</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="carouselImg"
              src={miaPic}
              alt="Third slide"
            />

            <Carousel.Caption className="bio">
              <h2 className="bioName">Mia Dixon</h2>
              <p> My favorite Jam is grape jam.</p>
              <p>Jamz <FontAwesomeIcon icon= {["fas", "music"]} color="purple" /> :</p> 
              <p>"Hell Raiser" by Dee Watkins."</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    );
}



