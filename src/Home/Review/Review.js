import React from "react";
import { Card } from "react-bootstrap";
import useAuth from "../../hooks/useAuth";

const Review = (props) => {
  const { user } = useAuth();
  const {name,  description, rating } = props.review;

  return (
   
      <Card>
        <Card.Img variant="top" src={user.displayImage} />
        <Card.Body>
          <Card.Title>Customer Name:{name}</Card.Title>
          <Card.Text>Review: {description}</Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Rating: {rating}</small>
        </Card.Footer>
      </Card>
  );
};

export default Review;
