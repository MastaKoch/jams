import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import './styles.css';
import alexPic from '../../imgs/alexPic.jpeg';
import shannonPic from '../../imgs/NewProfilepicWork.png';
import miaPic from '../../imgs/Image from iOS.jpg';
import jerryPic from '../../imgs/jerryPic.jpg';

export default function carousel() {

    return (
      <div>
        <h1 className="abt">About Your Developers</h1>
        <Carousel className="carousel">
          <Carousel.Item>
            <img
              className="carouselImg"
              src= {alexPic}
              alt="Alex"
            />
            <Carousel.Caption>
              <h3 className="bio">Alex Koch</h3>
              <p className="bio">My favorite Jam is blueberry.</p>
              <p className="bio">Other favorite Jam: "Whats Poppin" by Jack Harlow.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="carouselImg"
              src={shannonPic}
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3 className="bio">Shannon Page</h3>
              <p className="bio">My favorite Jam is strawberry.</p>
              <p className="bio">Other favorite Jam: "Make It Out Alive" by Nao & SiR</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="carouselImg"
              src={jerryPic}
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3 className="bio">Jerry Swann</h3>
              <p className="bio">My favorite Jam is blackberry molasses.</p>
              <p className="bio">Other favorite Jam: "Raise Up" by Petey Pablo.</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="carouselImg"
              src={miaPic}
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3 className="bio">Mia Dixon</h3>
              <p className="bio"> My favorite Jam is grape jam.</p>
              <p className="bio"> Other favorite Jam: "Hell Raiser" by Dee Watkins.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    );
}



