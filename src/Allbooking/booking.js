import React from "react";
import { Button, Card } from "react-bootstrap";

const Booking = (props) => {
  const { name, address, number, email } = props.bookings;

  return (
    <div>
      <h1>Here you will find your ordered bookings</h1>
      <Card>
        <Card.Header></Card.Header>
        <Card.Body>
          <Card.Title>Booked Person Name: {name}</Card.Title>
          <Card.Text>Address: {address}</Card.Text>
          <Card.Text>Phone Number: {number}</Card.Text>
          <Card.Text>Email: {email}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Booking;
