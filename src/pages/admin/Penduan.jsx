import React, { useState, useEffect } from 'react';
import {
  Container,
  Row,
  Col,
  Table,
  Pagination,
  Form,
  Button,
} from 'react-bootstrap';
import axios from 'axios';

const Penduan = () => {
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState('');
  const [data, setData] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [totalItems, setTotalItems] = useState(0);
  const [loading, setLoading] = useState(false);

  const apiUrl = import.meta.env.VITE_API_URL;

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `${apiUrl}/pengaduan?search=${search}&limit=${limit}&page=${page}`,
      );
      if (response.data.status) {
        setData(response.data.data);
        setTotalPages(response.data.totalPages);
        setTotalItems(response.data.totalItems);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [search, limit, page]);

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const handleLimitChange = (e) => {
    setLimit(parseInt(e.target.value, 10));
  };

  const handlePageChange = (pageNumber) => {
    setPage(pageNumber);
  };

  return (
    <Container>
      <Row className="mb-4">
        <Col className="mt-4"></Col>
      </Row>
      <Row className="mb-4 mt-4">
        <Col className="mt-4">
          <h1 className="mt-4">Daftar Pengaduan</h1>
        </Col>
      </Row>
      <Row className="mb-4">
        <Col md={6}>
          <Form.Group controlId="search">
            <Form.Label>Cari:</Form.Label>
            <Form.Control
              type="text"
              value={search}
              onChange={handleSearchChange}
            />
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group controlId="limit">
            <Form.Label>Jumlah Per Halaman:</Form.Label>
            <Form.Control
              as="select"
              value={limit}
              onChange={handleLimitChange}
            >
              <option value={10}>10</option>
              <option value={20}>20</option>
              <option value={50}>50</option>
            </Form.Control>
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col>
          {loading ? (
            <p>Loading...</p>
          ) : (
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Nama</th>
                  <th>Email</th>
                  <th>Telepon</th>
                  <th>Lokasi</th>
                  <th>Keluhan</th>
                  <th>Gambar</th>
                  <th>Created At</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item, index) => (
                  <tr key={item.id}>
                    <td>{index + 1 + (page - 1) * limit}</td>
                    <td>{item.nama}</td>
                    <td>{item.email}</td>
                    <td>{item.telepon}</td>
                    <td>{item.lokasi}</td>
                    <td>{item.keluhan}</td>
                    <td>
                      <img src={item.gambar} alt="Keluhan" width="50" />
                    </td>
                    <td>{new Date(item.createdAt).toLocaleString()}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          )}
          <Pagination>
            {[...Array(totalPages).keys()].map((number) => (
              <Pagination.Item
                key={number + 1}
                active={number + 1 === page}
                onClick={() => handlePageChange(number + 1)}
              >
                {number + 1}
              </Pagination.Item>
            ))}
          </Pagination>
        </Col>
      </Row>
    </Container>
  );
};

export default Penduan;
