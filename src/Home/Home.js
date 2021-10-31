import React from "react";
import { Carousel } from "react-bootstrap";
import a from "../images/a.jpg";
import b from "../images/b.jpg";
import c from "../images/c.jpg";
import "./Home.css";
import Services from "../Services/Services";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Carousel fade variant="dark">
        <Carousel.Item>
          <img className="d-block w-25" src={a} alt="First slide" />
          <Carousel.Caption>
            <h3>Welcome to Tourism Web</h3>
            <p>Take a day trip to your favorite destination</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-25" src={b} alt="Second slide" />

          <Carousel.Caption>
            <h3>Welcome to Tourism Web</h3>
            <p>Go alone, with friends or family to the most beautiful places</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-25" src={c} alt="Third slide" />

          <Carousel.Caption>
            <h3>Welcome to Tourism Web</h3>
            <p>We provide the best services with best price</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <div className="container-flex">
        <div className="container1">
          <h3>Tour Alone</h3>
          <p>Here we give you the opportunity to go anywhere with us alone.</p>
        </div>
        <div className="container2">
          <h3>Take a break</h3>
          <p>
            Take a break from your daily schedule to go and relax to the
            beautiful places
          </p>
        </div>
        <div className="container3">
          <h3>Tour Cheap</h3>
          <p>Here you will find the best prices. Experience the best service within range.</p>
        </div>
      </div>
      <br></br>
      <br></br>
      <h1>Our Services</h1>
      <hr></hr>
      <Services></Services>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>

      <div className="appointment">
        <h1 style={{ padding: "20px" }}>
          Best Tourism Website Around
        </h1>
        <p>Make Your Booking or call 8 800 254 25 64</p>
        <Link to="/services" className="btn btn-primary">
          Book Now
        </Link>
      </div>
    </div>
  );
};

export default Home;
