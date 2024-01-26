import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";

const PengaduanPage = () => {
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [isFormEmpty, setIsFormEmpty] = useState(true);

  const handleSubmit = (event) => {
    event.preventDefault();

    // nilai input dari formulir
    const email = event.target.elements.email.value;
    const nama = event.target.elements.nama.value;
    const telepon = event.target.elements.telepon.value;
    const lokasi = event.target.elements.lokasi.value;
    const keluhan = event.target.elements.keluhan.value;

    // Cek apakah ada bidang yang kosong
    if (!email || !nama || !telepon || !lokasi || !keluhan) {
      alert("Mohon Lengkapi Data Pengaduan");
      return;
    }

    // objek data yang akan dikirimkan
    const data = {
      email,
      nama,
      telepon,
      lokasi,
      keluhan,
    };

    // Kirim permintaan ke MockAPI menggunakan axios
    axios
      .post("https://64507b91a3221969114b394b.mockapi.io/Pengaduan", data)
      .then((response) => {
        // Tampilkan pesan sukses
        setShowSuccessMessage(true);

        // Setelah beberapa saat, atur ulang pesan sukses menjadi tidak terlihat dan hapus nilai input
        setTimeout(() => {
          setShowSuccessMessage(false);
          event.target.reset();
          setIsFormEmpty(true);
        }, 3000);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleInputChange = (event) => {
    const { value } = event.target;
    setIsFormEmpty(value.trim() === "" || !value);
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
                    <Form.Control type="file" />
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