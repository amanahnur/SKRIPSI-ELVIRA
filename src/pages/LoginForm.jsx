import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import GoogleLogo from "../assets/google.png";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../components/action";
import axios from "axios";

function LoginForm() {
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  let navigate = useNavigate();

  const handleSubmit = async(e) => {
    e.preventDefault();

    try {
      const res = await axios.post(`http://103.150.196.18:8200/users/login`, { email: email,
        password: password,})
      // dispatch(
      //   login({
      //     email: email,
      //     password: password,
      //     loggedIn: true,
      //   })
      // );
      console.log(res)
    } catch (error) {
      console.log(error.message)
    }
  };

  return (
    <div className="container">
      <Card className="login-form py-5">
        <Card.Body>
          <br />
          <br />
          <br />
          <h2 className="card-title text-center fw-bold">Login</h2>
          <h6 className="card-subtitle text-muted mb-5 fw-bold text-center">
          Please login to use this site!
          </h6>

          <Form onSubmit={(e) => handleSubmit(e)}>
            <Form.Group className="mb-4" controlId="formBasicEmail">
              <Form.Label className="form-label">Email*</Form.Label>
              <Form.Control
                className="form-control"
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label className="form-label">Password*</Form.Label>
              <Form.Control
                className="form-control"
                type="password"
                placeholder="Min 8 Character"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>

            <Form.Group
              className="mb-3 d-flex justify-content-between"
              controlId="formBasicCheckbox"
            >
              <Form.Check type="checkbox" label="Remember Me" />
              <Button className="link" variant="link">
                Forgot Password
              </Button>
            </Form.Group>

            <div className="d-grid mt-5">
              <Button className="btn-login" variant="success" type="submit" >
                Login
              </Button>
            </div>

            <div className="mt-3">
              <label>
                Not Registered yet?
                <Button className="link" variant="link" onClick={() => navigate("/Register")}>
                  Create account
                </Button>
              </label>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
}

export default LoginForm;