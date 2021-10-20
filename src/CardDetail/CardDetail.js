import React from "react";
import { Link } from "react-router-dom";
import "./CardDetail.css";

const CardDetail = () => {
  return (
    <div className="section-element1">
      <div className="section-element">
        <h1 className="heading-style">How to Protect Your Teeth</h1>
        <p className="para-style">
          First and foremost, good oral hygiene starts with brushing several
          times each day. By brushing, you not only protect your teeth by
          removing any food particles or other harmful substances that can cause
          tooth decay, but the teeth are also strengthened by providing them
          with the mineral support they need. Be sure to brush the entire mouth,
          not just the teeth, as bacteria can attack the gums and other
          supporting tooth structures as well.
        </p>
        <Link to="/appointment" className="btn btn-primary">
          Make an Appointment
        </Link>
      </div>
      
    </div>
  );
};

export default CardDetail;