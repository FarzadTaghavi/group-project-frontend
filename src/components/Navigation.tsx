import React, { useContext } from "react";
import { Button, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../AuthProvider";
require("./Navigation.css");

export default function Navigation() {
  const { token, logout } = useContext(AuthContext);

  return (
    <Navbar className="navbar">
      <Navbar.Brand className="title" as={NavLink} to="/">
        Our project
      </Navbar.Brand>
      {token ? (
        <>
          <Nav.Item className="log">
            <Button className="navButton" onClick={logout}>
              Logout
            </Button>
          </Nav.Item>
        </>
      ) : (
        <>
          <div className="sign">
            <Nav.Item>
              <Nav.Link as={NavLink} to="/signup">
                <Button className="navButton">Sign Up</Button>
              </Nav.Link>
            </Nav.Item>
          </div>
          <div>
            <Nav.Item className="log">
              <Nav.Link as={NavLink} to="/login">
                <Button className="navButton">Log in</Button>
              </Nav.Link>
            </Nav.Item>
          </div>
        </>
      )}
    </Navbar>
  );
}
