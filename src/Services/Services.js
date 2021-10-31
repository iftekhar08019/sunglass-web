import React, { useEffect, useState } from "react";
import Service from "../Service/Service";
import "./Services.css";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("https://creepy-shadow-70112.herokuapp.com/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="service-style">
      {services.map((service) => (
        <Service key={service.name} service={service}></Service>
      ))}
    </div>
  );
};

export default Services;
