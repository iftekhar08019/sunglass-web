import React, { useEffect, useState } from "react";
import { CardGroup } from "react-bootstrap";
import Review from "./Review";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("https://creepy-shadow-70112.herokuapp.com/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    //   {reviews.map((review) => (
    //     <Review key={review._id} review={review}></Review>
    //   ))}
    <CardGroup>
      {reviews.map((review) => (
        <Review key={review._id} review={review}></Review>
      ))}
    </CardGroup>
  );
};

export default Reviews;
