import React, { useState } from "react";
import "./style.css";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import axios from "axios";

import { API_URL } from "../config/constants";

export default function SignUp() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitForm = async (event: any) => {
    event.preventDefault();
    try {
      const response = await axios.post(`${API_URL}/signup`, {
        fullName,
        email,
        password,
      });
      console.log("response: ", response.data);
    } catch (e) {
      console.log(e.message);
    }
    setFullName("");
    setEmail("");
    setPassword("");
  };

  return (
    <Form as={Col} md={{ span: 6, offset: 3 }}>
      <h1 className="mt-5 mb-5">Sign up</h1>
      <Form.Group>
        <Form.Label>Full name </Form.Label>
        <Form.Control
          value={fullName}
          onChange={(event) => setFullName(event.target.value)}
          type="text"
          placeholder="Enter full name"
          required
        />
      </Form.Group>

      <Form.Group>
        <Form.Label>Email </Form.Label>
        <Form.Control
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          type="text"
          placeholder="Enter email"
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Password </Form.Label>
        <Form.Control
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          type="text"
          placeholder="Enter password"
        />
      </Form.Group>

      <Form.Group className="mt-10">
        <Button variant="primary" type="submit" onClick={submitForm}>
          Share!
        </Button>
      </Form.Group>
    </Form>
  );
}
