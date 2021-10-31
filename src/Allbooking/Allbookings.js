import React, { useEffect, useState } from "react";
import Booking from "./booking";
import "./allbooking.css";
import { Button } from "react-bootstrap";

const Allbookings = () => {
  const [allbookings, setAllbookings] = useState([]);

  const handleDelete = (id) => {
    const url = `https://creepy-shadow-70112.herokuapp.com/allbooking/${id}`;

    fetch(url, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          alert("Deleted");
          const remaining = allbookings.filter(
            (bookings) => bookings._id !== id
          );
          setAllbookings(remaining);
        }
      });
  };

  useEffect(() => {
    fetch("https://creepy-shadow-70112.herokuapp.com/allbooking")
      .then((res) => res.json())
      .then((data) => setAllbookings(data));
  }, []);
  return (
    <div className="service-style">
      {allbookings.map((bookings) => (
        <div>
          <Booking key={bookings.number} bookings={bookings}></Booking>
          <Button onClick={() => handleDelete(bookings._id)} variant="danger">
            Cancel Booking
          </Button>
        </div>
      ))}
    </div>
  );
};

export default Allbookings;
