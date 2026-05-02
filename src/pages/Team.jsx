import { Container, Row, Col, Card } from 'react-bootstrap'

function Team() {
  const teamMembers = [
    {
      id: 1,
      name: 'Ahmad Rahman',
      role: 'Lead Developer',
      bio: 'Expert in React and full-stack development',
      avatar: '👨‍💻',
      email: 'ahmad@myapp.com'
    },
    {
      id: 2,
      name: 'Siti Nurhaliza',
      role: 'UI/UX Designer',
      bio: 'Creating beautiful and intuitive user interfaces',
      avatar: '👩‍🎨',
      email: 'siti@myapp.com'
    },
    {
      id: 3,
      name: 'Budi Santoso',
      role: 'Backend Developer',
      bio: 'Building robust server-side solutions',
      avatar: '👨‍💼',
      email: 'budi@myapp.com'
    },
    {
      id: 4,
      name: 'Eka Putri',
      role: 'QA Engineer',
      bio: 'Ensuring quality and reliability',
      avatar: '👩‍🔬',
      email: 'eka@myapp.com'
    },
    {
      id: 5,
      name: 'Doni Wijaya',
      role: 'DevOps Engineer',
      bio: 'Infrastructure and deployment specialist',
      avatar: '👨‍💻',
      email: 'doni@myapp.com'
    },
    {
      id: 6,
      name: 'Maya Kusuma',
      role: 'Product Manager',
      bio: 'Driving product vision and strategy',
      avatar: '👩‍💼',
      email: 'maya@myapp.com'
    }
  ]

  return (
    <>
      {/* Header Section */}
      <section className="bg-light py-5">
        <Container>
          <Row className="align-items-center">
            <Col lg={12} className="text-center">
              <h1 className="display-4 fw-bold mb-3">Tim Hebat Kami</h1>
              <p className="lead text-muted mb-0">
                Temui orang-orang berbakat di balik TechNova Solutions
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Team Members Section */}
      <section className="py-5">
        <Container>
          <Row className="g-4">
            {teamMembers.map((member) => (
              <Col key={member.id} md={6} lg={4}>
                <Card className="border-0 shadow-sm h-100 transition-hover" style={{ cursor: 'pointer', transition: 'transform 0.3s' }}>
                  <Card.Body className="text-center p-5">
                    <div style={{ fontSize: '80px', marginBottom: '20px', lineHeight: '1' }}>
                      {member.avatar}
                    </div>
                    <Card.Title className="fw-bold fs-5 mb-2">
                      {member.name}
                    </Card.Title>
                    <p className="text-primary fw-bold mb-3">{member.role}</p>
                    <Card.Text className="text-muted mb-3">
                      {member.bio}
                    </Card.Text>
                    <p className="text-muted small">
                      <i className="bi bi-envelope"></i> {member.email}
                    </p>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Values Section */}
      <section className="bg-light py-5">
        <Container>
          <Row className="mb-5">
            <Col lg={12} className="text-center">
              <h2 className="fw-bold mb-3">Nilai-Nilai Inti Kami</h2>
            </Col>
          </Row>

          <Row className="g-4">
            <Col md={6} lg={3} className="text-center">
              <div style={{ fontSize: '48px', marginBottom: '16px' }}>💡</div>
              <h5 className="fw-bold">Inovasi</h5>
              <p className="text-muted">Selalu berpikir kreatif dan merangkul ide baru</p>
            </Col>
            <Col md={6} lg={3} className="text-center">
              <div style={{ fontSize: '48px', marginBottom: '16px' }}>🤝</div>
              <h5 className="fw-bold">Kolaborasi</h5>
              <p className="text-muted">Bekerja sama untuk mencapai hasil yang luar biasa</p>
            </Col>
            <Col md={6} lg={3} className="text-center">
              <div style={{ fontSize: '48px', marginBottom: '16px' }}>✨</div>
              <h5 className="fw-bold">Keunggulan</h5>
              <p className="text-muted">Berkomitmen untuk memberikan pekerjaan berkualitas tinggi</p>
            </Col>
            <Col md={6} lg={3} className="text-center">
              <div style={{ fontSize: '48px', marginBottom: '16px' }}>🌱</div>
              <h5 className="fw-bold">Pertumbuhan</h5>
              <p className="text-muted">Terus belajar dan meningkatkan diri</p>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default Team
