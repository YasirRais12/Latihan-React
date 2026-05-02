import { Container, Row, Col, Button, Card } from 'react-bootstrap'
import { useState } from 'react'
import booksData from '../Utils/books'

function Home() {
  const [books, setBooks] = useState(booksData);

  const handleAddBook = () => {
    const newBook = {
      id: books.length + 1,
      title: "Buku Baru " + (books.length + 1),
      author: "Penulis Anonim",
      year: 2026,
      description: "Deskripsi buku baru yang menarik untuk dibaca.",
      image: "https://via.placeholder.com/200x300/FF6B6B/FFFFFF?text=Buku+Baru"
    };
    setBooks([...books, newBook]);
  };

  return (
    <Container className="py-5">
      <Row className="mb-4">
        <Col className="text-center">
          <h1 className="display-4 fw-bold mb-3">Daftar Buku Terbaik</h1>
          <p className="lead text-muted mb-4">
            Koleksi buku berkualitas untuk meningkatkan pengetahuan dan keterampilan Anda
          </p>
          <Button onClick={handleAddBook} size="lg" variant="primary" className="mb-4">
            Tambah Buku Baru
          </Button>
        </Col>
      </Row>

      <Row className="g-4">
        {books.map((book) => (
          <Col key={book.id} md={6} lg={4}>
            <Card className="h-100 shadow-sm">
              <Card.Img variant="top" src={book.image} alt={book.title} style={{ height: '250px', objectFit: 'cover' }} />
              <Card.Body className="d-flex flex-column">
                <Card.Title className="fw-bold">{book.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Penulis: {book.author}</Card.Subtitle>
                <Card.Text className="text-muted small mb-2">
                  Tahun: {book.year}
                </Card.Text>
                <Card.Text className="flex-grow-1">
                  {book.description}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default Home
