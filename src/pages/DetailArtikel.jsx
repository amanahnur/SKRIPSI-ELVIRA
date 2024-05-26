import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Col, Container, Row } from 'react-bootstrap';

const DetailArtikel = () => {
  const { articleId } = useParams();
  const [article, setArticle] = useState(null);

  const apiUrl = import.meta.env.VITE_API_URL;

  useEffect(() => {
    // Fetch the specific article from the API endpoint
    axios
      .get(`${apiUrl}/artikel/${articleId}`)
      .then((response) => {
        setArticle(response.data.data); // Accessing the `data` property from the response
      })
      .catch((error) => {
        console.error('Error fetching article:', error);
      });
  }, [articleId]);

  if (!article) {
    return <div>Loading...</div>;
  }

  return (
    <div className="detail artikel">
      <Container>
        <Row>
          <Col>
            {/* Render the article details */}
            <h1
              className="pt-5 text-center fw-bold"
              style={{ color: '#12475d' }}
            >
              {article.judul}
            </h1>
            <img
              className="py-5 mx-auto d-block"
              src={article.gambar}
              alt={article.judul}
              style={{ maxWidth: '100%' }} // Adding maxWidth to limit image size
            />
            <p className="dartikel">{article.deskripsi}</p>
            {/* Additional details can be added here */}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default DetailArtikel;
