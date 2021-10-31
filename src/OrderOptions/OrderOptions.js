import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const OrderOptions = () => {
  return (
    <div>
      <Card className="text-center">
        <Card.Header></Card.Header>
        <Card.Body>
          <Card.Title>ALL BOOKING</Card.Title>
          <Card.Text>
           HERE YOU WILL FIND ALL THE BOOKINGS
          </Card.Text>
          <Link to="/allbooking" className="btn btn-primary">
            CLICK HERE
          </Link>
        </Card.Body>
      </Card>
      <Card className="text-center">
        <Card.Header></Card.Header>
        <Card.Body>
          <Card.Title>MY BOOKING</Card.Title>
          <Card.Text>
           HERE YOU CAN FIND ALL YOUR BOOKINGS
          </Card.Text>
          <Link to="/allbooking" className="btn btn-primary">
            CLICK HERE
          </Link>
        </Card.Body>
      </Card>
      <Card className="text-center">
        <Card.Header></Card.Header>
        <Card.Body>
          <Card.Title>ADD A NEW SERVICE</Card.Title>
          <Card.Text>
           HERE YOU CAN ADD A NEW SERVICE
          </Card.Text>
          <Link to="/addService" className="btn btn-primary">
            CLICK HERE
          </Link>
        </Card.Body>
      </Card>
      <Card className="text-center">
        <Card.Header></Card.Header>
        <Card.Body>
          <Card.Title>DELETE A SERVICE</Card.Title>
          <Card.Text>
           YOU CAN DELETE A SERVICE FROM HERE
          </Card.Text>
          <Link to="/addService" className="btn btn-primary">
            CLICK HERE
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default OrderOptions;
