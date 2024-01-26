import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./DetailArtikel.css";
import { Col, Container, Row } from "react-bootstrap";

const DetailArtikel = () => {
  const { articleId } = useParams();
  const [article, setArticle] = useState(null);

  useEffect(() => {
    // Fetch the specific article from the API endpoint
    axios
      .get(`https://64507b91a3221969114b394b.mockapi.io/Artikel/${articleId}`)
      .then((response) => {
        setArticle(response.data);
      })
      .catch((error) => {
        console.error("Error fetching article:", error);
      });
  }, [articleId]);

  if (!article) {
    return <div>Loading...</div>;
  }

console.log(article)


  return (
    <div className="detail artikel">
      <Container>
        <Row>
          <Col>
            {/* Render the article details */}
            <h1 className="pt-5 text-center fw-bold" id="" style={{ color: '#12475d' }}>{article.judul}</h1>
            <img className=" py-5 mx-auto d-block " src={article.gambar} alt="Deskripsi Gambar" />
            <p class="dartikel" id="">{article.detail}</p>
      {/* Add more details as needed */}
          </Col>
        </Row>
      </Container>

    </div>
  );
};

export default DetailArtikel;