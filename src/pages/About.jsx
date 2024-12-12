import React from 'react';

function About() {
  return (
    <div className="container my-5">
      <h1 className="text-center mb-4">Acerca de Nosotros</h1>
      
      {/* Sección de descripción general */}
      <div className="mb-5">
        <p>
          En <strong>KakaSports</strong>, nos dedicamos a ofrecer los mejores productos deportivos para 
          atletas de todos los niveles. Nuestra misión es inspirar y equipar a las personas para alcanzar 
          sus metas deportivas, ya sea que estén comenzando o sean profesionales.
        </p>
        <p>
          Contamos con una amplia variedad de equipos y accesorios para deportes como fútbol, baloncesto, 
          running, yoga y más. Creemos en la calidad, la innovación y en proporcionar un servicio al cliente 
          excepcional.
        </p>
      </div>

      {/* Sección de historia */}
      <div className="mb-5">
        <h2>Nuestra Historia</h2>
        <p>
          Fundada en 2010, KakaSports comenzó como una pequeña tienda local con una pasión por el deporte. 
          Con el tiempo, hemos crecido para convertirnos en un referente en el mercado, ampliando nuestra 
          oferta y construyendo relaciones sólidas con nuestros clientes y proveedores.
        </p>
        <p>
          Hoy en día, somos una tienda reconocida a nivel nacional, con una comunidad apasionada que comparte 
          nuestro amor por el deporte.
        </p>
      </div>

      {/* Sección de valores */}
      <div className="mb-5">
        <h2>Nuestros Valores</h2>
        <ul>
          <li><strong>Calidad:</strong> Nos aseguramos de ofrecer productos de las mejores marcas y materiales.</li>
          <li><strong>Pasión:</strong> Vivimos el deporte y queremos transmitir esa energía a nuestros clientes.</li>
          <li><strong>Innovación:</strong> Buscamos constantemente nuevas tendencias y tecnologías para mejorar tu experiencia deportiva.</li>
          <li><strong>Servicio:</strong> Tu satisfacción es nuestra prioridad.</li>
        </ul>
      </div>

      {/* Sección de contacto */}
      <div className="text-center">
        <h2>¿Tienes preguntas?</h2>
        <p>
          No dudes en contactarnos a través de nuestra página de <a href="/contact">Contacto</a>. 
          ¡Estamos aquí para ayudarte!
        </p>
      </div>
    </div>
  );
}

export default About;

  