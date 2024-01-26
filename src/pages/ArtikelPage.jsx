import { Container, Row, Col } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Artikel1 from "../assets/img/artikel/edukasi-1.jpg";
import Artikel2 from "../assets/img/artikel/edukasi2.jpg";
import Artikel3 from "../assets/img/artikel/edukasi3.jpg";
import Artikel4 from "../assets/img/artikel/edukasi4.jpg";
import Artikel5 from "../assets/img/artikel/edukasi5.jpg";
import Artikel6 from "../assets/img/artikel/edukasi6.jpg";
import Artikel7 from "../assets/img/artikel/edukasi7.jpg";
import Artikel9 from "../assets/img/artikel/edukasi9(1).jpeg";
import Artikel10 from "../assets/img/artikel/edukasi8(1).jpeg";

const ArtikelPage = () => {
  const [articles, setArticles] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch articles from the API endpoint
    axios
      .get("https://64507b91a3221969114b394b.mockapi.io/Artikel")
      .then((response) => {
        setArticles(response.data);
      })
      .catch((error) => {
        console.error("Error fetching articles:", error);
      });
  }, []);

  const handleDetailClick = (articleId) => {
    // Redirect to the DetailArtikel page with the selected article ID
    navigate(`/artikel/${articleId}`);
  };

  return (
    <div className="artikel-page">
      <div className="artikel min-vh-100">
        <Container>
          <Row>
            <Col>
              <h1 className="fw-bold text-center animate__animated animate__fadeInUp">
                Semua Artikel
              </h1>
              <p className="text-center animate__animated animate__fadeInUp">
                Kumpulan Artikel Lingkungan Yang Bisa Anda Baca
              </p>
            </Col>
          </Row>

          <div className="box-artikel">
            {articles.map((article) => (
              <div className="box" key={article.id}>
                <img src={article.gambar} alt={article.title} />
                <h3>{article.judul}</h3>
                <button onClick={() => handleDetailClick(article.id)}>
                  Detail
                </button>
              </div>
            ))}
          </div>

        </Container>
      </div>
    </div>
  );
};

export default ArtikelPage;