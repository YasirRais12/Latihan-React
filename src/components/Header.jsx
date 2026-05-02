import { Link } from 'react-router-dom'
import { Navbar, Container, Nav } from 'react-bootstrap'

function Header() {
  return (
    <Navbar bg="dark" expand="lg" sticky="top" className="navbar-dark shadow">
      <Container>
        <Navbar.Brand as={Link} to="/" className="fw-bold fs-4">
          � BookSales
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/" className="me-3">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/team" className="me-3">
              About
            </Nav.Link>
            <Nav.Link as={Link} to="/contact">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header
