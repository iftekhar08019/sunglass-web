import React from "react";
import { Carousel } from "react-bootstrap";
import a from "../images/a.jpg";
import b from "../images/b.jpg";
import c from "../images/c.jpg";
import "./Home.css";
import Eyewears from "./Eyewears/Eyewears";
import Reviews from "./Review/Reviews";

const Home = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item interval={1000}>
          <img className="d-block w-100" src={a} alt="First slide" />
          <Carousel.Caption className="text-black">
            <h3>A BROAD RANGE OF TRENDY EYEWEAR </h3>
            <p>
              Perfect look with a suitable pair of glasses. Put on eyewear & put
              on positive view mode.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img className="d-block w-100" src={b} alt="Second slide" />
          <Carousel.Caption className="text-black">
            <h3>A BROAD RANGE OF TRENDY EYEWEAR </h3>
            <p>
              Perfect look with a suitable pair of glasses. Put on eyewear & put
              on positive view mode.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={c} alt="Third slide" />
          <Carousel.Caption className="text-black">
            <h3>A BROAD RANGE OF TRENDY EYEWEAR </h3>
            <p>
              Perfect look with a suitable pair of glasses. Put on eyewear & put
              on positive view mode.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <div className="container-flex">
        <div className="container1">
          <h3>Sunglasses for Man</h3>
          <p>Here we give you the best sunglasses choice for men.</p>
        </div>
        <div className="container2">
          <h3>Uni-sex Sunglasses</h3>
          <p>
          Here we give you the best sunglasses choice for uni-sex sunglasses.
          </p>
        </div>
        <div className="container3">
          <h3>Sunglasses for Woman</h3>
          <p>
          Here we give you the best sunglasses choice for women.
          </p>
        </div>
      </div>
      <br></br>
      <br></br>
      <h1>Our Eyewears</h1>
      <hr></hr>
      <Eyewears></Eyewears>
      <br></br>
      <br></br>
      <h1>Customer Reviews</h1>
      <hr></hr>
      <Reviews></Reviews>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    </div>
  );
};

export default Home;
