import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { Alert } from 'react-bootstrap';

const PengaduanPage = () => {
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [isFormEmpty, setIsFormEmpty] = useState(true);
  const [showAlert, setShowAlert] = useState(false); // Gunakan useState untuk mengatur status alert
  const [message, setMessage] = useState('');

  const [formData, setFormData] = useState({
    nama: '',
    email: '',
    telepon: '',
    lokasi: '',
    keluhan: '',
    gambar: null
  });

  const handleInputChange = (event) => {
    const { value } = event.target;
    setIsFormEmpty(value.trim() === "" || !value);
  };

  const handleImageChange = (e) => {
    setFormData({
      ...formData,
      gambar: e.target.files[0]
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formDataToSend = new FormData();
      formDataToSend.append('nama', formData.nama);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('telepon', formData.telepon);
      formDataToSend.append('lokasi', formData.lokasi);
      formDataToSend.append('keluhan', formData.keluhan);
      formDataToSend.append('gambar', formData.gambar);
  
      const res = await axios.post(
        'https://elvirabe-production.up.railway.app/pengaduan',
        formDataToSend,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        },
      );
  
      if (res.data.status) {
        setShowAlert(true);
        setMessage(res.data.message);
        setTimeout(() => {
          setShowAlert(false);
          setMessage('');
        }, 2000);
      } else {
        setShowAlert(true);
        setMessage(res.data.message);
        setTimeout(() => {
          setShowAlert(false);
          setMessage('');
        }, 2000);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="pengaduan">
      <Container>
        <Row className="mb-10">
          <Col>
            <h1 className="text-center fw-bold animate__animated animate__fadeInUp">
              Form Pengaduan
            </h1>
            <p className="text-center animate__animated animate__fadeInUp">
              Mohon isi formulir berikut sesuai dengan pelanggaran lingkungan
              yang terjadi di daerah kamu
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="pengaduan-box">
              <div className="form-container">
                <Form onSubmit={handleSubmit}>
                {showAlert && <Alert variant="success">{message}</Alert>}{' '}
                  <h2>Adukan Keluhanmu</h2>
                  <Form.Group className="mb-3" controlId="email">
                    <Form.Label>Email : </Form.Label>
                    <Form.Control type="email" onChange={handleInputChange} />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="nama">
                    <Form.Label>Nama : </Form.Label>
                    <Form.Control type="text" onChange={handleInputChange} />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="telepon">
                    <Form.Label>Telepon : </Form.Label>
                    <Form.Control type="number" onChange={handleInputChange} />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="lokasi">
                    <Form.Label>Lokasi Terjadinya Pelanggaran: </Form.Label>
                    <Form.Control type="text" onChange={handleInputChange} />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="keluhan">
                    <Form.Label>Keluhan : </Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={3}
                      onChange={handleInputChange}
                    />
                  </Form.Group>
                  <Form.Group controlId="formFile" className="mb-3">
                    <Form.Label>Upload Gambar : </Form.Label>
                    <Form.Control type="file" onChange={handleImageChange}/>
                  </Form.Group>
                  <Button
                    variant="primary"
                    type="submit"
                    className="submit-button"
                    disabled={isFormEmpty}
                  >
                    Laporkan
                  </Button>
                  {isFormEmpty && (
                    <p className="text-danger">*Field tidak boleh kosong</p>
                  )}
                </Form>
              </div>
              {showSuccessMessage && (
                <div className="success-message">
                  Berhasil dikirim. Terima kasih atas keluhan Anda!
                </div>
              )}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default PengaduanPage;