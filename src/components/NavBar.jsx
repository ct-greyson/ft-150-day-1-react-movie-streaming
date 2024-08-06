import React, { useContext } from "react";
import { Navbar, Button, Nav } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import UserContext from "../context/UserContext";
useNavigate;

const NavBar = () => {
  const { user } = useContext(UserContext);
  const navigate = useNavigate({ replace: true });

  return (
    <Navbar
      expand="lg"
      className="bg-body-tertiary d-flex flex-row align-items-center justify-content-between px-3"
    >
      <Navbar.Brand href="/">Navbar</Navbar.Brand>
      <Nav className="d-flex flex-row align-items-center justify-content-between">
        {user.name && <h6 className="mx-3">User: {user.name}</h6>}
        <Button onClick={() => navigate("login")} variant="outline-success">
          Login
        </Button>
      </Nav>
    </Navbar>
  );
};

export default NavBar;
