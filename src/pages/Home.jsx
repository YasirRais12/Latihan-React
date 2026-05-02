import { Container, Row, Col, Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient text-white py-5" style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        minHeight: '500px',
        display: 'flex',
        alignItems: 'center'
      }}>
        <Container>
          <Row className="align-items-center">
            <Col lg={6} className="mb-4 mb-lg-0">
              <h1 className="display-3 fw-bold mb-4">
                Selamat Datang di TechNova Solutions
              </h1>
              <p className="lead mb-4">
                Bangun pengalaman web yang luar biasa dengan React, Bootstrap, dan praktik pengembangan modern. 
                Bergabunglah dengan tim kami dan ciptakan sesuatu yang luar biasa.
              </p>
              <div className="d-flex gap-3">
                <Link to="/team">
                  <Button size="lg" variant="light" className="fw-bold">
                    Temui Tim Kami
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button size="lg" variant="outline-light" className="fw-bold">
                    Hubungi Kami
                  </Button>
                </Link>
              </div>
            </Col>
            <Col lg={6} className="text-center">
              <img 
                src="https://via.placeholder.com/500x300/667eea/ffffff?text=TechNova+Solutions" 
                alt="TechNova Solutions" 
                className="img-fluid rounded shadow"
                style={{ maxWidth: '100%', height: 'auto' }}
              />
            </Col>
          </Row>
        </Container>
      </section>

      {/* Features Section */}
      <section className="py-5">
        <Container>
          <Row className="mb-5">
            <Col lg={12} className="text-center mb-5">
              <h2 className="display-5 fw-bold mb-3">Mengapa Memilih Kami</h2>
              <p className="lead text-muted">
                Temukan fitur yang membuat kami unggul
              </p>
            </Col>
          </Row>

          <Row className="g-4">
            <Col md={6} lg={3}>
              <Card className="border-0 shadow-sm h-100 text-center">
                <Card.Body className="p-4">
                  <div style={{ fontSize: '48px', marginBottom: '16px' }}>
                    ⚡
                  </div>
                  <Card.Title className="fw-bold">Cepat & Responsif</Card.Title>
                  <Card.Text className="text-muted">
                    Performa super cepat yang dioptimalkan untuk semua perangkat
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col md={6} lg={3}>
              <Card className="border-0 shadow-sm h-100 text-center">
                <Card.Body className="p-4">
                  <div style={{ fontSize: '48px', marginBottom: '16px' }}>
                    🔒
                  </div>
                  <Card.Title className="fw-bold">Aman & Terpercaya</Card.Title>
                  <Card.Text className="text-muted">
                    Keamanan tingkat enterprise untuk ketenangan pikiran Anda
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col md={6} lg={3}>
              <Card className="border-0 shadow-sm h-100 text-center">
                <Card.Body className="p-4">
                  <div style={{ fontSize: '48px', marginBottom: '16px' }}>
                    👥
                  </div>
                  <Card.Title className="fw-bold">Dukungan Hebat</Card.Title>
                  <Card.Text className="text-muted">
                    Tim berdedikasi siap membantu Anda sukses
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col md={6} lg={3}>
              <Card className="border-0 shadow-sm h-100 text-center">
                <Card.Body className="p-4">
                  <div style={{ fontSize: '48px', marginBottom: '16px' }}>
                    🚀
                  </div>
                  <Card.Title className="fw-bold">Selalu Berkembang</Card.Title>
                  <Card.Text className="text-muted">
                    Update rutin dengan fitur baru dan peningkatan
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="bg-light py-5">
        <Container>
          <Row className="align-items-center">
            <Col lg={8}>
              <h2 className="fw-bold mb-3">Siap untuk Memulai?</h2>
              <p className="lead text-muted mb-0">
                Bergabunglah dengan ribuan pengguna puas dan mulai membangun hari ini.
              </p>
            </Col>
            <Col lg={4} className="text-lg-end mt-3 mt-lg-0">
              <Link to="/contact">
                <Button size="lg" className="fw-bold">
                  Hubungi Kami Sekarang
                </Button>
              </Link>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default Home
