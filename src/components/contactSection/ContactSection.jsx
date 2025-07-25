// src/components/ContactSection/ContactSection.jsx
import React, { useState } from 'react';
import styles from './ContactSection.module.css';

const ContactSection = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email enviado:', email);
    // Aquí es donde integrarías la lógica de envío al backend o a un servicio de terceros
    setEmail('');
    alert('¡Gracias por tu interés! Te contactaremos pronto.');
  };

  return (
    <footer className={styles.contactHero}>
      {/* Nuevo contenedor para el headline y el formulario en la parte superior */}
      <div className={styles.topContentContainer}>
        <div className={styles.heroContent}>
          <h1 className={styles.headline}>
            ¿Tenés un proyecto<br />en mente? <br />
            Hablemos <span className={styles.arrow}>↗</span>
          </h1>
        </div>

        {/* COLUMNA DEL FORMULARIO AHORA ARRIBA */}
        <div className={styles.contactFormTop}> {/* Nueva clase para esta ubicación */}
          <h3 className={styles.formTitle}>Dejanos tu email</h3>
          {/* <p className={styles.formDescription}>Recibe nuestras novedades y ofertas exclusivas.</p> */}
          <form onSubmit={handleSubmit} className={styles.subscribeForm}>
            <input
              type="email"
              placeholder="Tu dirección de email"
              className={styles.emailInput}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit" className={styles.subscribeButton}>
              Enviar
            </button>
          </form>
        </div>
      </div> {/* Fin de topContentContainer */}

      <div className={styles.footerGrid}>
        <div>
          <strong>Aumenta tus ventas</strong>
          <p>SEM - Google Ads</p>
          <p>SEO - Posicionamiento web</p>
          <p>Gestión de Redes Sociales</p>
          <p>Desarrollo web</p>
          <p>E-commerce</p>
        </div>

        <div>
          <strong>Soluciones</strong>
          <p>Experiencia de Usuario (UX)</p>
          <p>Desarrollo de apps y sistemas</p>
          <p>Branding y diseño de marca</p>
        </div>

        <div>
          <strong>Menu</strong>
          <p><a href="#home">Home</a></p>
          <p><a href="#agencia">Agencia</a></p>
          <p><a href="#servicios">Servicios</a></p>
          <p><a href="#trabajos">Trabajos</a></p>
          <p><a href="#contacto">Contacto</a></p>
        </div>

        <div>
          <strong>Conectate</strong>
          <p>Buenos Aires, Argentina<br />+54 11-3968-2284</p>
          <p>Barcelona, España<br />+34 654142249</p>
        </div>
        {/* LA COLUMNA DEL FORMULARIO YA NO VA AQUÍ */}
      </div>

      {/* Redes sociales verticales fijas */}
      <div className={styles.socialVertical}>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="#">
          <span className={styles.logoText}>C</span>
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin-in"></i>
        </a>
      </div>
    </footer>
  );
};

export default ContactSection;