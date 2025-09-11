import React from 'react';
import styles from './SimpleFooter.module.css';
import { motion } from 'framer-motion';

// <<-- IMPORTA TU LOGO AQUÍ -->>
import FooterLogo from '../../assets/ZAP-LOGO.png'; // <<-- AJUSTA ESTA RUTA A LA UBICACIÓN REAL DE TU LOGO

const SimpleFooter = () => { // Ya no necesitamos la prop logoSrc
    return (
        <motion.footer 
            className={styles.simpleFooterContainer}
            initial={{ opacity: 0, y: 50 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true, amount: 0.8 }} 
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }} 
        >
            <div className={styles.line}></div>
            {/* Usamos el logo importado directamente */}
            <img 
                src={FooterLogo} // <<-- USANDO EL LOGO IMPORTADO
                alt="Logo del Sitio" // Es buena práctica dar un alt más descriptivo
                className={styles.logo} 
            />
        </motion.footer>
    );
};

export default SimpleFooter;