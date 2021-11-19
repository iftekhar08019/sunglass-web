import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import "./AddReview.css";

const AddReview = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    console.log(data);

    axios
      .post("https://creepy-shadow-70112.herokuapp.com/reviews", data)
      .then((res) => {
        if (res.data.insertedId) {
          alert("added successfully");
          reset();
        }
      });
  };
  return (
    <div className="add-service">
      <h2>Please Add a Review</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("name", { required: true, maxLength: 20 })}
          placeholder="Name"
        />
        <textarea {...register("description")} placeholder="review" />
        <input type="number" {...register("rating")} placeholder="rating" />
        {/* <input {...register("img")} placeholder="image url" /> */}
        <input type="submit" />
      </form>
    </div>
  );
};
export default AddReview;
