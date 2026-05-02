import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap'
import { useState } from 'react'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would send the form data to your backend
    console.log('Form submitted:', formData)
    setSubmitted(true)
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' })
      setSubmitted(false)
    }, 3000)
  }

  return (
    <>
      {/* Header Section */}
      <section className="bg-light py-5">
        <Container>
          <Row className="align-items-center">
            <Col lg={12} className="text-center">
              <h1 className="display-4 fw-bold mb-3">Hubungi Kami</h1>
              <p className="lead text-muted mb-0">
                Kami ingin mendengar dari Anda. Mari bicara!
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Contact Section */}
      <section className="py-5">
        <Container>
          <Row className="g-5">
            {/* Contact Form */}
            <Col lg={8}>
              <Card className="border-0 shadow-sm">
                <Card.Body className="p-5">
                  <h3 className="fw-bold mb-4">Kirim Pesan kepada Kami</h3>
                  
                  {submitted && (
                    <div className="alert alert-success alert-dismissible fade show" role="alert">
                      ✓ Terima kasih! Pesan Anda telah berhasil dikirim. Kami akan segera menghubungi Anda!
                    </div>
                  )}

                  <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3">
                      <Form.Label className="fw-bold">Nama Lengkap</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Masukkan nama lengkap Anda"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        size="lg"
                      />
                    </Form.Group>

                    <Form.Group className="mb-3">
                      <Form.Label className="fw-bold">Alamat Email</Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="Masukkan email Anda"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        size="lg"
                      />
                    </Form.Group>

                    <Form.Group className="mb-3">
                      <Form.Label className="fw-bold">Subjek</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Apa yang ingin Anda bahas?"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        size="lg"
                      />
                    </Form.Group>

                    <Form.Group className="mb-4">
                      <Form.Label className="fw-bold">Pesan</Form.Label>
                      <Form.Control
                        as="textarea"
                        rows={5}
                        placeholder="Ceritakan lebih lanjut tentang pertanyaan Anda..."
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                      />
                    </Form.Group>

                    <Button variant="primary" type="submit" size="lg" className="fw-bold">
                      Kirim Pesan
                    </Button>
                  </Form>
                </Card.Body>
              </Card>
            </Col>

            {/* Contact Information */}
            <Col lg={4}>
              <div className="mb-4">
                <Card className="border-0 shadow-sm mb-4">
                  <Card.Body className="p-4 text-center">
                    <div style={{ fontSize: '36px', marginBottom: '12px' }}>📍</div>
                    <h5 className="fw-bold">Alamat</h5>
                    <p className="text-muted mb-0">
                      Jl. Teknologi No. 123<br/>
                      Jakarta, Indonesia 12345
                    </p>
                  </Card.Body>
                </Card>
              </div>

              <div className="mb-4">
                <Card className="border-0 shadow-sm mb-4">
                  <Card.Body className="p-4 text-center">
                    <div style={{ fontSize: '36px', marginBottom: '12px' }}>📞</div>
                    <h5 className="fw-bold">Telepon</h5>
                    <p className="text-muted mb-0">
                      +62 (812) 3456-7890
                    </p>
                  </Card.Body>
                </Card>
              </div>

              <div className="mb-4">
                <Card className="border-0 shadow-sm mb-4">
                  <Card.Body className="p-4 text-center">
                    <div style={{ fontSize: '36px', marginBottom: '12px' }}>✉️</div>
                    <h5 className="fw-bold">Email</h5>
                    <p className="text-muted mb-0">
                      info@technova.com
                    </p>
                  </Card.Body>
                </Card>
              </div>

              <div className="mb-4">
                <Card className="border-0 shadow-sm">
                  <Card.Body className="p-4 text-center">
                    <div style={{ fontSize: '36px', marginBottom: '12px' }}>🕐</div>
                    <h5 className="fw-bold">Jam Kerja</h5>
                    <p className="text-muted mb-0">
                      Senin - Jumat<br/>
                      09:00 - 18:00 WIB<br/>
                      <small>Sabtu & Minggu: Tutup</small>
                    </p>
                  </Card.Body>
                </Card>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Map Section (Placeholder) */}
      <section className="bg-light py-5">
        <Container>
          <Row>
            <Col lg={12}>
              <h3 className="fw-bold mb-4">Peta Lokasi</h3>
              <div style={{
                width: '100%',
                height: '400px',
                backgroundColor: '#e0e0e0',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '48px'
              }}>
                🗺️ Map Placeholder
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default Contact
