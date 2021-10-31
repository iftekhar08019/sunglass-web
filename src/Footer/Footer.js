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
          Tourism Web: The best Tour planner and Tour arranger online
        </h1>
        
      </Box>
    </div>
  );
};

export default Footer;
