// src/components/ContactSection/ContactSection.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './ContactSection.module.css';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Formulario enviado:', formData);
    // Aquí es donde integrarías la lógica de envío al backend o a un servicio de terceros
    // Por ejemplo, usando fetch para enviar los datos a un endpoint
    
    // Resetea el formulario
    setFormData({
      name: '',
      email: '',
      projectType: '',
      message: '',
    });
    
    alert('¡Gracias por tu interés! Te contactaremos pronto.');
  };

  return (
    <footer id='contact' className={styles.contactHero}>
      <div className={styles.topContentContainer}>
        <div className={styles.heroContent}>
          <h1 className={styles.headline}>
            ¿Tenés un proyecto<br />en mente? <br />
            Hablemos <span className={styles.arrow}>↗</span>
          </h1>
        </div>

        {/* COLUMNA DEL FORMULARIO COMPLETO */}
        <div className={styles.contactFormTop}>
          <h3 className={styles.formTitle}>Contanos de tu proyecto</h3>
          <form onSubmit={handleSubmit} className={styles.contactForm}>
            <input
              type="text"
              name="name"
              placeholder="Tu nombre completo"
              className={styles.formInput}
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Tu dirección de email"
              className={styles.formInput}
              value={formData.email}
              onChange={handleChange}
              required
            />
            <select
              name="projectType"
              className={styles.formSelect}
              value={formData.projectType}
              onChange={handleChange}
              required
            >
              <option value="">Selecciona el tipo de proyecto</option>
              <option value="branding">Branding y Diseño de Marca</option>
              <option value="web-dev">Desarrollo Web</option>
              <option value="social-media">Gestión de Redes Sociales</option>
              <option value="ecommerce">E-commerce</option>
              <option value="otros">Otros</option>
            </select>
            <textarea
              name="message"
              placeholder="Describinos tu idea..."
              className={styles.formTextarea}
              value={formData.message}
              onChange={handleChange}
              rows="5"
              required
            />
            <button type="submit" className={styles.formButton}>
              Enviar Mensaje
            </button>
          </form>
        </div>
      </div>

      <div className={styles.footerGrid}>
        <div>
          <strong>Servicios</strong>
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
          <p><Link to="/#home">Home</Link></p>
          <p><Link to="/#nos">Nosotros</Link></p>
          <p><Link to="/#portfolio">Trabajos</Link></p>
          <p><Link to="/#contact">Contacto</Link></p>
        </div>
        <div>
          <strong>Conectate</strong>
          <p><a href="mailto:hola@somoszap.com">hola@somoszap.com</a></p>
          <p>Buenos Aires, Argentina<br />+54 11-3968-2284</p>
          <p>Villa Allende, Córdoba, Arg.</p>
          <p>Barcelona, España<br />+34 654142249</p>
        </div>
      </div>
      
      <div className={styles.socialIcons}>
        <a href="https://www.linkedin.com/in/sildelvillar/" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin-in"></i>
        </a>
        <a href="https://www.instagram.com/somoszap/?hl=es" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-instagram"></i>
        </a>
      </div>
    </footer>
  );
};

export default ContactSection;