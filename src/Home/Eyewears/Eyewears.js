import React, { useEffect, useState } from "react";
import Service from "../../Service/Service";

const Eyewears = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("https://creepy-shadow-70112.herokuapp.com/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="service-style">
      {services.slice(0, 6).map((service) => (
        <Service key={service.name} service={service}></Service>
      ))}
    </div>
  );
};

export default Eyewears;
