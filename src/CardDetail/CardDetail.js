import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import { useParams } from "react-router";
import "./CardDetail.css";

const CardDetail = () => {
  const { serviceId } = useParams();
  const [service, setService] = useState({});
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    console.log(data);

    axios
      .post("https://creepy-shadow-70112.herokuapp.com/allbooking", data)
      .then((res) => {
        if (res.data.insertedId) {
          alert("added successfully");
          reset();
        }
      });
  };

  useEffect(() => {
    fetch(`https://creepy-shadow-70112.herokuapp.com/services/${serviceId}`)
      .then((res) => res.json())
      .then((data) => setService(data));
  }, []);

  return (
    <div className="section-element1">
      <div className="section-element">
        <img src={service.img} alt=""></img>
        <h1 className="heading-style">{service.name}</h1>
        <p className="para-style">{service.description}</p>
        <p className="para-style">
          Total:
          {service.price}
        </p>
      </div>
      <div className="add-service">
        <h2>Please Write Your details</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            {...register("name", { required: true, maxLength: 20 })}
            placeholder="Your Name"
          />
          <input {...register("email")} placeholder="Your Email" />
          <input
            type="number"
            {...register("number")}
            placeholder="Phone number"
          />
          <textarea {...register("adress")} placeholder="Address" />

          <input type="Submit" />
        </form>
      </div>
    </div>
  );
};

export default CardDetail;
