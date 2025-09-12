// src/components/Nav.jsx
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Nav.module.css';
import logo from '../../assets/ZAP-LOGO.png'; // Asegúrate de tener un logo para tu navbar

const Nav = ({ isScrolled }) => {
  const [hasEntered, setHasEntered] = useState(false);

  useEffect(() => {
    setHasEntered(true);
  }, []);

  // Número de WhatsApp para la barra de navegación (sin el '9' intermedio para wa.me)
  // Basado en el número de la imagen que proporcionaste antes: +54 9 3513 55-6910
  // O el que tenías en el código: 5493513935627 (vamos a usar este si es el de tu negocio principal)
  const navWhatsappNumber = "5493513935627"; // O "543513556910" si es el de Sil del Villar
  const navEmailAddress = "hola@somoszap.com";
  const navInstagramLink = "https://www.instagram.com/somoszap/"; // Corregido el doble slash


  return (
    <header
      className={`${styles.header} ${isScrolled ? styles.scrolledHeader : ''} ${hasEntered ? styles.headerEnter : ''}`}
    >
      <div className={styles.headerLeft}>
        <div className={styles.logo}>
          {/* El logo también debería ser un Link a la home */}
          <Link to="/#home">
            <img src={logo} alt="ZAP Logo" className={styles.logo} />
          </Link>
        </div>
        {/* Este navbarSecondary parece no tener contenido, lo dejo si planeas usarlo */}
        <nav className={styles.navbarSecondary}>
          <ul className={styles.navLinksSecondary}>
            {/* Si planeas tener un enlace aquí, puedes agregarlo */}
            {/* <li><Link to="/#contact">CONTACTANOS (secundario)</Link></li> */}
          </ul>
        </nav>
      </div>

      <nav className={styles.navbarMain}>
        <ul className={styles.navLinksMain}>
          <li><Link to="/#home">INICIO</Link></li>
          <li><Link to="/#nos">NOSOTROS</Link></li>
          <li><Link to="/#portfolio">PORTAFOLIO</Link></li>
          <li><Link to="/#servicios">SERVICIOS</Link></li>
          <li><Link to="/#contact">CONTACTANOS</Link></li>
        </ul>
      </nav>

      {/* Los enlaces de redes sociales están bien con <a> porque son externos */}
      <div className={styles.headerRight}>
        <div className={styles.socialIcons}>
          {/* Instagram - Link corregido y clase de ícono */}
          <a href={navInstagramLink} target="_blank" rel="noopener noreferrer" className={styles.instagram}>
            <i className="fab fa-instagram"></i> {/* fab para iconos de marca */}
          </a>
          
          {/* WhatsApp - Número y clase de ícono */}
          <a href={`https://wa.me/${navWhatsappNumber}`} target="_blank" rel="noopener noreferrer" className={styles.whatsapp}>
            <i className="fab fa-whatsapp"></i> {/* fab para iconos de marca */}
          </a>

          {/* Email - Link y clase de ícono (usamos 'far' para regular si Font Awesome 5, o 'fa-regular' si Font Awesome 6) */}
          <a
            href={`mailto:${navEmailAddress}`}
            className={styles.emailButton} // Usamos una clase simple para el icono de email en la nav
          >
            {/* Asegúrate de la versión de Font Awesome que usas: */}
            {/* Si es Font Awesome 5: <i className="far fa-envelope"></i> */}
            {/* Si es Font Awesome 6: */}
            <i className="fa-regular fa-envelope"></i> 
          </a>
        </div>
      </div>
    </header>
  );
};

export default Nav;