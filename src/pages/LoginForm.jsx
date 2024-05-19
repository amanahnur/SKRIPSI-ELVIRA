import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import GoogleLogo from '../assets/google.png';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from '../components/action';
import axios from 'axios';
import { Alert } from 'react-bootstrap'; // Perhatikan penggunaan 'react-bootstrap' di sini

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showAlert, setShowAlert] = useState(false); // Gunakan useState untuk mengatur status alert
  const [message, setMessage] = useState(''); // Gunakan useState untuk mengatur pesan alert

  const dispatch = useDispatch();

  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(`https://elvirabe-production.up.railway.app/users/login-admin`, {
        email: email,
        password: password,
      });
      if (res.data.status) {
        navigate('CRUDPengaduan');
      } else {
        setShowAlert(true);
        setMessage(res.data.message);
        setTimeout(() => {
          setShowAlert(false);
          setMessage('');
        }, 2000);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="container">
      <Card className="login-form py-5">
        <Card.Body>
          <br />
          <br />
          <br />
          <h2 className="card-title text-center fw-bold">Login Admin</h2>
          <h6 className="card-subtitle text-muted mb-5 fw-bold text-center">
            Silahkan Log In untuk melihat CRUD pengguna.
          </h6>
          {showAlert && <Alert variant="success">{message}</Alert>}{' '}
          {/* Tampilkan Alert di sini */}
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
              <Form.Label className="form-label">Kata Sandi*</Form.Label>
              <Form.Control
                className="form-control"
                type="password"
                placeholder="Min 8 Karakter"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>

            <Form.Group
              className="mb-3 d-flex justify-content-between"
              controlId="formBasicCheckbox"
            >
              <Form.Check type="checkbox" label="Remember me" />
              <Button className="link" variant="link">
                Lupa kata sandi
              </Button>
            </Form.Group>

            <div className="d-grid mt-5">
              <Button className="btn-login" variant="success" type="submit">
                Login
              </Button>
            </div>

            {/* <div className="mt-3">
              <label>
                Belum punya akun?
                <Button
                  className="link"
                  variant="link"
                  onClick={() => navigate('/Register')}
                >
                  Daftar
                </Button>
              </label>
            </div> */}
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
}

export default LoginForm;