import React, { useContext } from "react";
import { Button, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../AuthProvider";

export default function Navigation() {
  const { token, logout } = useContext(AuthContext);

  return (
    <Navbar>
      <Navbar.Brand as={NavLink} to="/">
        Our project
      </Navbar.Brand>
      {token ? (
        <>
          <Button onClick={logout}>Logout</Button>
        </>
      ) : (
        <>
          <Nav.Item>
            <Nav.Link as={NavLink} to="/login">
              Log in
            </Nav.Link>
          </Nav.Item>
        </>
      )}
    </Navbar>
  );
}
