import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import GoogleLogo from "../assets/google.png";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { register } from "../components/action";
import axios from "axios";
import { Alert } from 'react-bootstrap';

function RegisterForm() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showAlert, setShowAlert] = useState(false); // Gunakan useState untuk mengatur status alert
  const [message, setMessage] = useState('');

  const dispatch=useDispatch()

  let navigate = useNavigate();  

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post('http://103.175.216.72:8200/users/register', {
        username: username,
        email: email,
        password: password,
        // loggedIn: true,
      });
      if (res.data.status) {
        navigate('/Login');
        // console.log(res.data)
      }else{
        console.log(res.data.message)
        setShowAlert(true);
        setMessage(res.data.message);
        setTimeout(() => {
          setShowAlert(false);
          setMessage('');
        }, 2000);
      }
    } catch (error) {
      // setShowAlert(true);
      //   setMessage(error.message);
      //   setTimeout(() => {
      //     setShowAlert(false);
      //     setMessage('');
      //   }, 2000);
      console.log(error.message);
      
    } 
  };

  return (
    <div className="container ">
      <Card className="register-form py-5">
        <Card.Body>
          <br />
          <br />
          <br />
          <h2 className="card-title text-center fw-bold">Daftar</h2>
          <h6 className="card-subtitle text-muted mb-5 fw-bold text-center">
          Buat akun baru untuk mengakses website ini.
          </h6>

          {showAlert && <Alert variant="success">{message}</Alert>}{' '}
          {/* Tampilkan Alert di sini */}


          <Form onSubmit={(e)=>handleSubmit(e)}>
            <Form.Group className="mb-4" controlId="formBasicUsername">
              <Form.Label className="form-label">Username</Form.Label>
              <Form.Control
                className="form-control"
                type="username"
                placeholder="Username"
                username={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label className="form-label">Email</Form.Label>
              <Form.Control
                className="form-control"
                type="email"
                placeholder="Email"
                email={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-2" controlId="formBasicPassword">
              <Form.Label className="form-label">Kata Sandi*</Form.Label>
              <Form.Control className="form-control" type="password" placeholder="Min 8 Character"
              value={password}
              onChange={(e) => setPassword(e.target.value)} />
            </Form.Group>

            <Form.Group
              className="mb-3 d-flex justify-content-between"
              controlId="formBasicCheckbox"
            >
              <Form.Check type="checkbox" label="Remember Me" />
              <Button className="link" variant="link">
                Lupa kata sandi
              </Button>
            </Form.Group>

            <div className="d-grid mt-5">
              <Button className="btn-login" variant="success" type="submit" >
              Daftar
              </Button>
            </div>

            <div className="mt-3">
              <label>
                Sudah punya akun?
                <Button className="link" variant="link" onClick={() => navigate("/Login")}>
                Login
                </Button>
              </label>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
}

export default RegisterForm;