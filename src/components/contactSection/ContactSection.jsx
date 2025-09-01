import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './ContactSection.module.css';
import Nav from '../nav/Nav'; // Asegúrate de que este import es correcto en tu estructura

const ContactSection = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    
    // Reemplaza '5493511234567' con tu número de teléfono (sin espacios ni símbolos)
    const whatsappNumber = '5493511234567';
    const whatsappMessage = encodeURIComponent('¡Hola! Vi tu portafolio y me gustaría hablar sobre un proyecto.');

    return (
        <footer id='contact' className={styles.contactHero}>
            <Nav isScrolled={isScrolled} />
            
            <div className={styles.topContentContainer}>
                <div className={styles.heroContent}>
                    <h1 className={styles.headline}>
                        ¿Tenés un proyecto<br />en mente? <br />
                        Hablemos <span className={styles.arrow}>↗</span>
                    </h1>
                </div>

                {/* BOTONES MODERNOS DE CONTACTO */}
                <div className={styles.contactButtonsContainer}>
                    <h3 className={styles.buttonsTitle}>Conéctate con nosotros</h3>
                    <div className={styles.directContact}>
                        <a 
                            href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`} 
                            className={`${styles.actionButton} ${styles.whatsappButton}`} 
                            target="_blank" 
                            rel="noopener noreferrer"
                        >
                            <span className={styles.icon}></span>
                            Enviar Mensaje por WhatsApp
                        </a>

                        <a 
                            href="https://instagram.com/tuperfil" 
                            className={`${styles.actionButton} ${styles.instagramButton}`} 
                            target="_blank" 
                            rel="noopener noreferrer"
                        >
                            <span className={styles.icon}></span>
                            Visita nuestro Instagram
                        </a>
                        
                        <a 
                            href="https://linkedin.com/in/tuperfil" 
                            className={`${styles.actionButton} ${styles.linkedinButton}`} 
                            target="_blank" 
                            rel="noopener noreferrer"
                        >
                            <span className={styles.icon}></span>
                            Conecta en LinkedIn
                        </a>
                        
                        <a 
                            href="mailto:tu.email@gmail.com" 
                            className={`${styles.actionButton} ${styles.emailButton}`}
                        >
                            <span className={styles.icon}></span>
                            Envía un Email
                        </a>
                    </div>
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
            
          
        </footer>
    );
};

export default ContactSection;