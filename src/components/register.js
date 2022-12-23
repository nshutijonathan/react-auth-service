import React, { useState, useEffect } from "react";
import axios from "axios";
import { Form, Button } from "react-bootstrap";
const config = {
  headers: {
    "Content-type": "application/json",
  },
};
const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [register, setRegister] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("submit button clicked");
    const data = await axios.post(
      "http://localhost:3000/register",
      {
        email,
        password,
      },
      config
    );
    console.log("data", data);
    if (data) {
      setRegister(true);
    }
  };
  return (
    <>
      <h2>Register</h2>
      <Form>
        {/* email */}
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        {/* password */}
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        {/* submit button */}
        <Button variant="primary" type="submit" onClick={handleSubmit}>
          Submit
        </Button>

        {register ? (
          <p className="text-success">You Are Registered Successfully</p>
        ) : (
          <p className="text-danger">You Are Not Registered</p>
        )}
      </Form>
    </>
  );
};

export default Register;
