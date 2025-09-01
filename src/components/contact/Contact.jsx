import React, { useState, useEffect } from 'react';
import styles from './Contact.module.css';
import Nav from '../nav/Nav';

const Contact = () => {
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
        <section id="contact" className={styles.contactSection}>
            <div className={styles.contactContainer}>
                <Nav isScrolled={isScrolled} />
                <div className={styles.contactHeader}>
                    <h2 className={styles.contactTitle}>Conéctate</h2>
                    <p className={styles.contactSubtitle}>
                        Hablemos directamente.
                    </p>
                </div>

                <div className={styles.contactContent}>
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
                            href="https://instagram.com/tuperfil" // ¡Asegúrate de cambiar 'tuperfil' por tu usuario de Instagram!
                            className={`${styles.actionButton} ${styles.instagramButton}`} 
                            target="_blank" 
                            rel="noopener noreferrer"
                        >
                            <span className={styles.icon}></span>
                            Visita nuestro Instagram
                        </a>
                        
                        <a 
                            href="https://linkedin.com/in/tuperfil" // ¡Asegúrate de cambiar 'tuperfil' por tu perfil de LinkedIn!
                            className={`${styles.actionButton} ${styles.linkedinButton}`} 
                            target="_blank" 
                            rel="noopener noreferrer"
                        >
                            <span className={styles.icon}></span>
                            Conecta en LinkedIn
                        </a>
                        
                        <a 
                            href="mailto:tu.email@gmail.com" // ¡Cambia 'tu.email@gmail.com' por tu email!
                            className={`${styles.actionButton} ${styles.emailButton}`}
                        >
                            <span className={styles.icon}></span>
                            Envía un Email
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;