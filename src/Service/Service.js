import React from "react";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";
import { Link } from "react-router-dom";

const Service = (props) => {
  const { _id, name, img, description, price } = props.service;
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroupItem> Overview: {description}</ListGroupItem>
        <ListGroupItem> Cost: {price}</ListGroupItem>
        <Link to={`/details/${_id}`} className="btn btn-primary">
          Book Now
        </Link>
      </ListGroup>
    </Card>
  );
};

export default Service;
