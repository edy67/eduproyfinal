import React from 'react';
import { Button } from 'reactstrap';
import { UncontrolledAccordion, AccordionItem, AccordionHeader, AccordionBody } from 'reactstrap';
import { Link } from 'react-router-dom';
import CarouselComponent from '../components/CarouselComponent';

function Home() {
  return (
    <div className="text-center">
      {/* Logo de bienvenida */}
      <div className="my-5">
        <img 
          src="https://4.bp.blogspot.com/--WksNfcalXc/T1ZfM0u0HHI/AAAAAAAAAy0/h7bDbYdQX1A/s1600/I-Belong-To-Jesus.jpg" // Reemplaza con la URL de tu logo
          alt="Logo Tienda Deportiva" 
          className="img-fluid" 
          style={{ maxWidth: '200px', height: 'auto' }} 
        />
        <h1 className="mt-3">Bienvenido a KakaSports</h1>
        <p>Encuentra los mejores productos para tus deportes favoritos.</p>
      </div>
      <br />
      
      {/* Carrusel */}
      <CarouselComponent />

      {/* Botón debajo del carrusel */}
      <div className="mt-4">
        <Link to="/products">
          <Button color="primary">Ver productos</Button>
        </Link>
      </div>

      {/* Sección de testimonios */}
      <div className="mt-5">
        <h2>¿Qué dicen de nosotros?</h2>
        <UncontrolledAccordion defaultOpen={['1', '2']} stayOpen>
          <AccordionItem>
            <AccordionHeader targetId="1">
              Testimonio 1
            </AccordionHeader>
            <AccordionBody accordionId="1">
              <strong>Juan Pérez:</strong> Excelente calidad en los productos. Definitivamente volveré a comprar.
            </AccordionBody>
          </AccordionItem>
          <AccordionItem>
            <AccordionHeader targetId="2">
              Testimonio 2
            </AccordionHeader>
            <AccordionBody accordionId="2">
              <strong>Ana Gómez:</strong> El servicio al cliente es increíble. Me ayudaron a encontrar justo lo que necesitaba.
            </AccordionBody>
          </AccordionItem>
          <AccordionItem>
            <AccordionHeader targetId="3">
              Testimonio 3
            </AccordionHeader>
            <AccordionBody accordionId="3">
              <strong>Carlos Rodríguez:</strong> Los entrenamientos personalizados marcaron la diferencia en mi rendimiento.
            </AccordionBody>
          </AccordionItem>
        </UncontrolledAccordion>
      </div>
    </div>
  );
}

export default Home;
