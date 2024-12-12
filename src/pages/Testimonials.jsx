import React from 'react';
import { Container, Row, Col, Card, CardBody, CardTitle, CardText } from 'reactstrap';

function Testimonials() {
  const testimonials = [
    {
      name: 'Juan Pérez',
      feedback: 'Excelente calidad en los productos. Definitivamente volveré a comprar.',
    },
    {
      name: 'Ana Gómez',
      feedback: 'El servicio al cliente es increíble. Me ayudaron a encontrar justo lo que necesitaba.',
    },
    {
      name: 'Carlos Rodríguez',
      feedback: 'Los entrenamientos personalizados marcaron la diferencia en mi rendimiento.',
    },
    {
      name: 'María López',
      feedback: 'Los envíos son rápidos y los precios son inigualables. Muy recomendados.',
    },
    {
      name: 'Pedro Sánchez',
      feedback: 'La atención es de primera y los productos son de alta calidad. Los recomiendo.',
    },
  ];

  return (
    <Container className="mt-5">
      <h1 className="text-center mb-4">Testimonios</h1>
      <Row>
        {testimonials.map((testimonial, index) => (
          <Col md={4} sm={6} xs={12} key={index} className="mb-4">
            <Card style={{ width: '100%' }}>
              <CardBody>
                <CardTitle tag="h5" className="text-primary">{testimonial.name}</CardTitle>
                <CardText>"{testimonial.feedback}"</CardText>
              </CardBody>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Testimonials;

