import React from "react";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";
import { Link } from "react-router-dom";

const Service = (props) => {
    const {name, img, detail} = props.service;
    return (
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={img} />
  <Card.Body>
    <Card.Title>{name}</Card.Title>
  </Card.Body>
  <ListGroup className="list-group-flush">
    <ListGroupItem> {detail}</ListGroupItem>
    <Link to="/details" className="btn btn-primary">Details</Link>
  </ListGroup>
</Card>
    );
};

export default Service;
