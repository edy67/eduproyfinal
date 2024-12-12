import React from 'react';
import { Container, Form, Row, Col, FormGroup, Label, Input, Button } from 'reactstrap';

function Contact() {
  return (
    <Container className="mt-5">
      <h1>Contacto</h1>
      <p>Si tienes preguntas sobre nuestros artículos deportivos, envíanos un mensaje y te responderemos lo antes posible.</p>
      <Form>
        <Row>
          <Col md={6}>
            <FormGroup>
              <Label for="name">Nombre</Label>
              <Input
                id="name"
                name="name"
                placeholder="Ingresa tu nombre"
                type="text"
              />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="email">Correo Electrónico</Label>
              <Input
                id="email"
                name="email"
                placeholder="Ingresa tu correo"
                type="email"
              />
            </FormGroup>
          </Col>
        </Row>
        <FormGroup>
          <Label for="address">Dirección</Label>
          <Input
            id="address"
            name="address"
            placeholder="1234 Calle Principal"
            type="text"
          />
        </FormGroup>
        <FormGroup>
          <Label for="address2">Dirección Alternativa</Label>
          <Input
            id="address2"
            name="address2"
            placeholder="Apartamento, estudio o piso"
            type="text"
          />
        </FormGroup>
        <Row>
          <Col md={6}>
            <FormGroup>
              <Label for="city">Ciudad</Label>
              <Input
                id="city"
                name="city"
                type="text"
              />
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup>
              <Label for="state">Estado</Label>
              <Input
                id="state"
                name="state"
                type="text"
              />
            </FormGroup>
          </Col>
          <Col md={2}>
            <FormGroup>
              <Label for="zip">Código Postal</Label>
              <Input
                id="zip"
                name="zip"
                type="text"
              />
            </FormGroup>
          </Col>
        </Row>
        <FormGroup>
          <Label for="message">Mensaje</Label>
          <Input
            id="message"
            name="message"
            placeholder="Cuéntanos sobre tus consultas o solicitudes"
            type="textarea"
            rows="5"
          />
        </FormGroup>
        <FormGroup check>
          <Input
            id="newsletter"
            name="newsletter"
            type="checkbox"
          />
          <Label
            check
            for="newsletter"
          >
            Deseo recibir información sobre promociones y nuevos productos
          </Label>
        </FormGroup>
        <Button color="primary" className="mt-3">Enviar</Button>
      </Form>
    </Container>
  );
}

export default Contact;

