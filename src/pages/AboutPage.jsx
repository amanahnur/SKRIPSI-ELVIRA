import {Container, Row, Col} from "react-bootstrap"
import Faq from "../components/Faq";


const AboutPage = () => {
  return (
  <div className="about-page">
    <div className="about min-vh-100">
      <Container>
        <Row>
          <Col>
          <h1 className="fw-bold text-center mb-2 animate__animated animate__fadeInUp">Tentang</h1>
          <p className="text-center animate__animated animate__fadeInUp"> Tentang kami</p>
          </Col>
        </Row>
        <Row className="pt-5">
          <Col>
            <p>
            ElVira (Elektronik Environment New Era) adalah sebuah platform inovatif yang dibuat untuk memfasilitasi pengaduan tindak pelanggaran lingkungan di sekitar wilayah Anda. 
            Platform ini bertujuan untuk memudahkan dinas lingkungan hidup dalam menangani permasalahan yang terjadi di komunitas Anda.Dengan menggunakan ElVira, 
            atau kerusakan ekosistem. Platform ini memberikan sarana bagi setiap individu yang peduli terhadap lingkungan untuk berpartisipasi aktif dalam menjaga kelestarian dan keberlanjutan lingkungan di sekitarnya.
            </p>
          </Col>
        </Row>
        <Row className="py-3">
          <Col>
            <h4 className="fw-bold">1. Fitur Elvira</h4>
            <p>Pengaduan Tindak Pelanggaran Lingkungan: ElVira memungkinkan pengguna untuk mengajukan pengaduan terkait tindak pelanggaran lingkungan yang mereka temui di wilayah mereka. Pengguna dapat mengisi formulir pengaduan secara rinci, menyertakan bukti berupa gambar atau video, serta menandai lokasi yang terkena dampak pelanggaran.</p>
            <p>Penanganan Cepat oleh Dinas Lingkungan Hidup: Setelah pengaduan diajukan, ElVira akan langsung meneruskan laporan kepada dinas lingkungan hidup yang berwenang. Dinas tersebut akan segera meninjau laporan dan mengambil tindakan yang diperlukan untuk menangani pelanggaran lingkungan tersebut.</p>
            <p>Pemantauan Progres Laporan: ElVira menyediakan fitur pemantauan progres laporan, yang memungkinkan pengguna untuk melihat perkembangan dan tindakan yang telah diambil oleh dinas lingkungan hidup terkait dengan pengaduan yang mereka ajukan. Hal ini memberikan transparansi dan memastikan bahwa pengaduan yang diajukan sedang ditangani dengan serius.</p>
            <p>Selain fitur pengaduan tindak pelanggaran lingkungan, ElVira juga menyediakan fitur artikel yang bertujuan untuk memberikan informasi yang mendalam dan edukatif tentang berbagai isu lingkungan. Fitur ini dirancang untuk membantu meningkatkan kesadaran dan pemahaman pengguna tentang permasalahan lingkungan yang relevan dan penting.</p>
            <p>ElVira didesain dengan antarmuka pengguna yang intuitif dan responsif, sehingga dapat diakses dengan mudah melalui perangkat seluler atau komputer. Platform ini bertujuan untuk mendorong kolaborasi antara masyarakat dan dinas lingkungan hidup, serta mengedepankan kesadaran dan partisipasi aktif dalam menjaga kelestarian lingkungan.</p>
        
          </Col>
        </Row>
        <Row className="py-3">
          <Col>
            <h4 className="fw-bold">2. Visi ElVira</h4>
            <p>Menjadi platform pengaduan tindak pelanggaran lingkungan yang terkemuka secara global, yang mampu menggerakkan perubahan positif dalam perlindungan dan pelestarian lingkungan.</p>
          </Col>
        </Row>
        <Row className="py-3"> 
          <Col>
            <h4 className="fw-bold">3. Misi Elvira</h4>
            <p>Membangun Kesadaran Lingkungan: Misi kami adalah meningkatkan kesadaran masyarakat terhadap isu-isu lingkungan yang relevan dan penting. Kami berupaya memberikan informasi yang akurat dan terkini mengenai permasalahan lingkungan, praktik berkelanjutan, serta dampak dari tindak pelanggaran lingkungan.</p>
            <p>Mendorong Partisipasi Aktif Masyarakat: Kami bertujuan untuk mendorong partisipasi aktif masyarakat dalam melindungi lingkungan. Melalui ElVira, kami memberikan sarana yang mudah digunakan bagi individu untuk melaporkan tindak pelanggaran lingkungan yang mereka saksikan, serta memberikan dukungan dan informasi yang dibutuhkan agar mereka dapat berperan serta dalam menangani permasalahan tersebut.</p>
            <p>Menyediakan Sarana Efektif bagi Dinas Lingkungan Hidup: Kami berkomitmen untuk menyediakan platform yang efektif bagi dinas lingkungan hidup dalam menangani pengaduan dan tindak pelanggaran lingkungan. Kami menyampaikan laporan pengaduan dengan cepat dan akurat kepada pihak yang berwenang, memungkinkan mereka untuk mengambil tindakan yang tepat dan memastikan penyelesaian yang efisien.</p>
            <p>Mempromosikan Keberlanjutan dan Pelestarian Lingkungan: Kami ingin mempromosikan langkah-langkah berkelanjutan dalam menjaga kelestarian lingkungan. Kami berupaya menyebarkan informasi tentang praktik ramah lingkungan, solusi inovatif, dan langkah-langkah yang dapat diambil untuk mengurangi dampak negatif terhadap lingkungan.</p>
          </Col>
        </Row>
      </Container>
    </div>

    <Faq/>
  </div>
  );
};

export default AboutPage;