import React from "react";

import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import "./Header.css";

const Header = () => {
  const { user, logOut } = useAuth();
  const { admin } = useAuth();
  return (
    <div>
      <Navbar bg="dark" variant="dark" fixed="top">
        <Container>
          <Nav className="me-auto">
            <Navbar.Brand to="/home">Sunglass Web</Navbar.Brand>
            <NavLink className="nav-style" to="/home">
              Home
            </NavLink>
            <NavLink className="nav-style" to="/services">
              Eyewears
            </NavLink>
            {(user.email && !admin) ? (
              <NavLink className="nav-style" to="/dashboardUser">
                Dashboard User
              </NavLink>
            ) : (
              ""
            )}
            {(user.email && admin)? (
              <NavLink className="nav-style" to="/dashboardAdmin">
                Dashboard Admin
              </NavLink>
            ) : (
              ""
            )}
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
