import { Container, Row, Col } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const ArtikelPage = () => {
  const [articles, setArticles] = useState([]);
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  const apiUrl = import.meta.env.VITE_API_URL;

  useEffect(() => {
    // Fetch articles from the API endpoint
    axios
      .get(`${apiUrl}/artikel?search=${search}&limit=1000`)
      .then((response) => {
        setArticles(response.data.data); // Accessing the `data` property from the response
      })
      .catch((error) => {
        console.error('Error fetching articles:', error);
      });
  }, [search]); // Trigger the effect when `search` changes

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

          <Row>
            <Col>
              <div className="search-box">
                <input
                  type="text"
                  placeholder="Cari artikel..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>
            </Col>
          </Row>

          <div className="box-artikel">
            {articles.map((article) => (
              <div className="box" key={article.id}>
                <img src={article.gambar} alt={article.judul} />
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
