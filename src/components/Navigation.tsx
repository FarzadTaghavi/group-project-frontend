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
        CodaShare <br></br>
        <p className="tagline">student.toEmployee()</p>
      </Navbar.Brand>
      {token ? (
        <>
          <Nav.Item className="log">
            <Button bsPrefix="redButton" onClick={logout}>
              Logout
            </Button>
          </Nav.Item>
        </>
      ) : (
        <>
          <div className="sign">
            <Nav.Item>
              <Nav.Link as={NavLink} to="/signup">
                <Button bsPrefix="redButton">Sign Up</Button>
              </Nav.Link>
            </Nav.Item>
          </div>
          <div>
            <Nav.Item className="log">
              <Nav.Link as={NavLink} to="/login">
                <Button bsPrefix="redButton">Log in</Button>
              </Nav.Link>
            </Nav.Item>
          </div>
        </>
      )}
    </Navbar>
  );
}
