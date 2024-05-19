import {Container, Row, Col} from "react-bootstrap"
import {Link} from "react-router-dom"

const Footer = () => {
  return (
  <div className="footer py-5">
    <Container>
      <Row className="d-flex justify-content-between">
        <Col>
          <h3 className="fw-bold">Elvira</h3>
          <p className="desc mt-4">Elvira adalah singkatan dari Elektronik Environment New Era yang 
            merupakan platfrom pengaduan tindak pelanggaran lingkungan yang terjadi 
            disekitar anda. Platform ini memudahkan dinas lingkungan hidup 
            dalam menangani permasalahan yang terjadi di wilayah anda.</p>
            <div className="no mb-1 mt-4">
              <Link className="text-decoration-none">
                <i className="fa-brands fa-whatsapp"></i>
                <p className="m-0">+628-6757-6432-10</p>
              </Link>
            </div>
            <div className="email">
              <Link className="text-decoration-none">
                <i className="fa-regular fa-envelope"></i>
                <p className="m-0">Elvira@gmail.com</p>
              </Link>
            </div>
        </Col>
        <Col className="d-flex flex-column col-lg-2 col mt-lg-0 mt-5">
          <h5 className="fw-bold">Menu</h5>
          <Link to="">Home</Link>
          <Link to="artikel">Artikel</Link>
          <Link to="pengaduan">Pengaduan</Link>
          <Link to="faq">Faq</Link>
          <Link to="about">About</Link>
        </Col>
        <Col className="mt-lg-0 mt-5">
          <h5 className="fw-bold mb-4">Cari artikel menarik lainnya</h5>
          <div className="cari">
            <input type="text" placeholder="Cari..." />
            <button className="btn btn-success rounded-end rounded-0">Cari</button>
          </div>
          <div className="social mt-3">
            <i className="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-instagram"></i>
            <i className="fa-brands fa-twitter"></i>
            <i className="fa-brands fa-youtube"></i>
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <p className="text-center px-md-0 px-3">&copy; Copyright {new Date().getFullYear()} by <span className="fw-bold">Elvira </span>All Right Reserved</p>
        </Col>
      </Row>
    </Container>
  </div>
  ); 
};

export default Footer;