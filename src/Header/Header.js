import React from "react";

import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import "./Header.css";

const Header = () => {
  const { user, logOut } = useAuth();
  return (
    <div>
      <Navbar bg="dark" variant="dark" fixed="top">
        <Container>
          <Nav className="me-auto">
            <Navbar.Brand to="/home">DENTARIO</Navbar.Brand>
            <NavLink className="nav-style" to="/home">
              Home
            </NavLink>
            <NavLink className="nav-style" to="/services">
              Services
            </NavLink>
            <NavLink className="nav-style" to="/gallery">
              Gallery
            </NavLink>
            <NavLink className="nav-style" to="/appointment">
              Appointment
            </NavLink>

            <NavLink className="nav-style" to="/About">
              About
            </NavLink>
          </Nav>
          <Nav>
            {user.email && (
              <span style={{ color: "white" }}>Hello {user.displayName} </span>
            )}
            {user.email ? (
              <button onClick={logOut}>Log out</button>
            ) : (
              <NavLink className="nav-style" to="/register">
                Login
              </NavLink>
            )}
          </Nav>
        </Container>
      </Navbar>
      <br></br>
      <br></br>
      <br></br>
    </div>
  );
};

export default Header;
