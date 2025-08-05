// src/components/Nav.jsx
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; // Importa Link de react-router-dom
import styles from './Nav.module.css';

const Nav = ({ isScrolled }) => {
  const [hasEntered, setHasEntered] = useState(false);

  useEffect(() => {
    setHasEntered(true);
  }, []);

  return (
    <header
      className={`${styles.header} ${isScrolled ? styles.scrolledHeader : ''} ${hasEntered ? styles.headerEnter : ''}`}
    >
      <div className={styles.headerLeft}>
        <div className={styles.logo}>
          <h1>ZAP.</h1>
        </div>
        <nav className={styles.navbarSecondary}>
          <ul className={styles.navLinksSecondary}>
            <li>
              {/* Usa Link para el enlace de "Contactanos" */}
              <Link to="/#contact" className={styles.viewShowcaseBtn}>
                Contactanos
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      <nav className={styles.navbarMain}>
        <ul className={styles.navLinksMain}>
          {/* Usa Link para todos los enlaces internos */}
          <li><Link to="/#home">INICIO</Link></li>
          <li><Link to="/#portfolio">PORTAFOLIO</Link></li>
          <li><Link to="/#nos">NOSOTROS</Link></li>
          <li><Link to="/#contact">CONTACTO</Link></li>
        </ul>
      </nav>

      {/* Los enlaces de redes sociales están bien con <a> porque son externos */}
      <div className={styles.headerRight}>
        <div className={styles.socialIcons}>
          <a href="https://www.linkedin.com/in/tu_perfil" target="_blank" rel="noopener noreferrer" className={styles.linkedin}>
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a href="https://www.instagram.com/tu_usuario" target="_blank" rel="noopener noreferrer" className={styles.instagram}>
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://wa.me/tunumerodetelefono" target="_blank" rel="noopener noreferrer" className={styles.whatsapp}>
            <i className="fab fa-whatsapp"></i>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Nav;