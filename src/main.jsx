import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importación de estilos de Bootstrap
import Principal from './Principal'; // Importación del componente principal
import './styles.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Principal /> {/* Renderiza el componente principal */}
  </React.StrictMode>
);
