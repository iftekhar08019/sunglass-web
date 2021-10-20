import React from "react";
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
} from "./FooterStyles";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      
      <Box>
        <h1 style={{ color: "blue", textAlign: "center", marginTop: "-50px" }}>
          Dentario: A total Dental Solution
        </h1>
        
      </Box>
    </div>
  );
};

export default Footer;
