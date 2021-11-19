import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const DashboardUser = () => {
  return (
    <div>

      <Card className="text-center">
        <Card.Header></Card.Header>
        <Card.Body>
          <Card.Title>MY BOOKING</Card.Title>
          <Card.Text>HERE YOU CAN FIND ALL YOUR BOOKINGS</Card.Text>
          <Link to="/allbooking" className="btn btn-primary">
            CLICK HERE
          </Link>
        </Card.Body>
      </Card>
      <Card className="text-center">
        <Card.Header></Card.Header>
        <Card.Body>
          <Card.Title>PAYMENT</Card.Title>
          <Card.Text>HERE YOU CAN PAY</Card.Text>
          <Link to="/payment" className="btn btn-primary">
            CLICK HERE
          </Link>
        </Card.Body>
      </Card>
      <Card className="text-center">
        <Card.Header></Card.Header>
        <Card.Body>
          <Card.Title>Review</Card.Title>
          <Card.Text>HERE YOU CAN PUT A REVIEW</Card.Text>
          <Link to="/newReviews" className="btn btn-primary">
            CLICK HERE
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default DashboardUser;
