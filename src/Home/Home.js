import React from "react";
import { Carousel } from "react-bootstrap";
import roy from "../images/roy.png";
import maria from "../images/maria.png";
import jacob from "../images/jacob.png";
import "./Home.css";
import Services from "../Services/Services";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Carousel fade variant="dark">
        <Carousel.Item>
          <img className="d-block w-25" src={roy} alt="First slide" />
          <Carousel.Caption>
            <h3>High Innovation Technology and Professional Dentist</h3>
            <p>
              Dr. Roy is a great professional and enjoys working with children
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-25" src={maria} alt="Second slide" />

          <Carousel.Caption>
            <h3>High Innovation Technology and Professional Dentist</h3>
            <p>
              Dr. Maria is a great professional and enjoys working with woman
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-25" src={jacob} alt="Third slide" />

          <Carousel.Caption>
            <h3>High Innovation Technology and Professional Dentist</h3>
            <p>
              Dr. Jacob is a great professional and enjoys working with old
              people
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <div className="container-flex">
        <div className="container1">
          <h3>Tooth Protection</h3>
          <p>
            There are only 2 dental specialties that only focus on dental
            esthetics: Prosthodontics and Orthodontics
          </p>
        </div>
        <div className="container2">
          <h3>Tooth Whitening</h3>
          <p>
            Bleaching methods use carbamide peroxide which reacts with water to
            form hydrogen peroxide loremis
          </p>
        </div>
        <div className="container3">
          <h3>Cosmetic Dentistry</h3>
          <p>
            There are only 2 dental specialties that only focus on dental
            esthetics: Prosthodontics and Orthodontics
          </p>
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
        High Innovative Technology & Professional Dentists
        </h1>
        <p>Make Appointment or call 8 800 254 25 64</p>
        <Link to="/appointment" className="btn btn-primary">Make an Appointment</Link>
      </div>
    </div>
  );
};

export default Home;
