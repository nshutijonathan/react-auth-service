import React, { useState } from "react";
import axios from "axios";
import Cookies from "universal-cookie";
import { Form, Button } from "react-bootstrap";
const cookies = new Cookies();
const config = {
  headers: {
    "Content-type": "application/json",
  },
};
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login, setLogin] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await axios.post(
      "http://localhost:3000/login",
      {
        email,
        password,
      },
      config
    );

    if (data) {
      console.log("data", data);
      setLogin(true);
      cookies.set("TOKEN", data.token, {
        path: "/",
      });
      window.location.href = "/auth";
    }
  };
  return (
    <>
      <h2>Login</h2>
      <Form>
        {/* email */}
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
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
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        {/* submit button */}
        <Button variant="primary" type="submit" onClick={handleSubmit}>
          Submit
        </Button>
      </Form>
      {login ? (
        <p className="text-success">You Are Logged in Successfully</p>
      ) : (
        <p className="text-danger">You Are Not Logged in</p>
      )}
    </>
  );
};

export default Login;
