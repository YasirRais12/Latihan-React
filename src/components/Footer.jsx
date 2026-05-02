import { Container, Row, Col } from 'react-bootstrap'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-dark text-white mt-5 py-4">
      <Container>
        <Row className="mb-3">
          <Col md={4}>
            <h5>About Us</h5>
            <p>Toko buku online terpercaya dengan koleksi buku berkualitas.</p>
          </Col>
          <Col md={4}>
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="/" className="text-white-50">Home</a></li>
              <li><a href="/team" className="text-white-50">About</a></li>
              <li><a href="/contact" className="text-white-50">Contact</a></li>
            </ul>
          </Col>
          <Col md={4}>
            <h5>Contact Info</h5>
            <p className="text-white-50">
              Email: info@booksales.com<br/>
              Phone: +62 812 3456 7890
            </p>
          </Col>
        </Row>
        <hr className="bg-white-50" />
        <Row>
          <Col className="text-center">
            <p className="mb-0">&copy; {currentYear} BookSales. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
