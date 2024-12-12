import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink, Container } from 'reactstrap';
import Home from './pages/Home';
import Products from './pages/Products';
import About from './pages/About';
import Contact from './pages/Contact';
import Services from './pages/Services';
import Testimonials from './pages/Testimonials';
import Footer from './components/Footer';
import './styles.css';  // Asegúrate de que la ruta esté correcta

function Principal() {
  return (
    <Router>
      {/* Barra de navegación */}
      <Navbar color="dark" dark expand="md">
        <Container>
          <NavbarBrand href="/">Artículos Deportivos</NavbarBrand>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink tag={Link} to="/">Inicio</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/products">Productos</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/about">Nosotros</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/contact">Contacto</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/services">Servicios</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/testimonials">Testimonios</NavLink>
            </NavItem>
          </Nav>
        </Container>
      </Navbar>

      
      <Container className="mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="/testimonials" element={<Testimonials />} />
        </Routes>
      </Container>

      {/* Pie de página */}
      <Footer />
    </Router>
  );
}

export default Principal;

