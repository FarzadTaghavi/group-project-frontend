import React, { useState, useContext, useEffect } from "react";
import { Form, Col, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../AuthProvider";

export default function LogIn() {
  const { login, token } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  useEffect(() => {
    if (token !== null) {
      history.push("/");
    }
  }, [token, history]);

  const submitForm = async (event: any) => {
    event.preventDefault();
    try {
      login(email, password);
    } catch (e) {
      console.log(e.message);
    }
    setEmail("");
    setPassword("");
  };

  return (
    <Form as={Col} md={{ span: 6, offset: 3 }}>
      <h1 className="mt-5 mb-5">Log In</h1>
      <Form.Group>
        <Form.Label>Email </Form.Label>
        <Form.Control
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          type="email"
          placeholder="Enter email"
        />
        <br />
        <Form.Label>Password </Form.Label>
        <Form.Control
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          type="password"
          placeholder="Enter password"
        />
        <br />
        <Button onClick={submitForm}>Log In</Button>
      </Form.Group>
    </Form>
  );
}
