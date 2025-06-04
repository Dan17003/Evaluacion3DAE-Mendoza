// Footer.jsx
import React from 'react';

function Footer() {
  return (
    <footer className="bg-dark text-light py-4 mt-auto">
      <div className="container text-center">
        <p className="mb-0">&copy; {new Date().getFullYear()} Mi Sitio Web. Todos los derechos reservados.</p>
        <small>Desarrollado con React y Bootstrap</small>
      </div>
    </footer>
  );
}

export default Footer;