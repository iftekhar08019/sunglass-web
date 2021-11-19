import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const DashboardAdmin = () => {
  return (
    <div>

      <Card className="text-center">
        <Card.Header></Card.Header>
        <Card.Body>
          <Card.Title>All Booking</Card.Title>
          <Card.Text>HERE YOU CAN FIND ALL BOOKINGS</Card.Text>
          <Link to="/allbooking" className="btn btn-primary">
            CLICK HERE
          </Link>
        </Card.Body>
      </Card>
      <Card className="text-center">
        <Card.Header></Card.Header>
        <Card.Body>
          <Card.Title>Add A Service</Card.Title>
          <Card.Text>HERE YOU CAN PUT A SERVICE</Card.Text>
          <Link to="/addServices" className="btn btn-primary">
            CLICK HERE
          </Link>
        </Card.Body>
      </Card>
      <Card className="text-center">
        <Card.Header></Card.Header>
        <Card.Body>
          <Card.Title>Make ADMIN</Card.Title>
          <Card.Text>HERE YOU CAN MAKE an ADMIN</Card.Text>
          <Link to="/makeAdmin" className="btn btn-primary">
            CLICK HERE
          </Link>
        </Card.Body>
      </Card>
      
    </div>
  );
};

export default DashboardAdmin;
