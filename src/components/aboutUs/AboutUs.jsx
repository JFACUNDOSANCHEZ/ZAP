import React from 'react';
import styles from './AboutUs.module.css';

// Componentes SVG para los iconos de redes sociales
const InstagramIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.204-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.585-.012-4.849-.07c-3.265-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.012-3.584.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 12c-3.248 0-5.463-2.215-5.463-5.463s2.215-5.463 5.463-5.463 5.463 2.215 5.463 5.463-2.215 5.463-5.463 5.463zm0-8.918c-1.905 0-3.455 1.55-3.455 3.455s1.55 3.455 3.455 3.455 3.455-1.55 3.455-3.455-1.55-3.455-3.455-3.455zm5.337-2.639c-.742 0-1.343.602-1.343 1.344s.601 1.344 1.343 1.344c.742 0 1.344-.602 1.344-1.344s-.602-1.344-1.344-1.344z"/></svg>
);

const LinkedinIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-3v-5.981h3v5.981zm0-7.981h-3v-2.019h3v2.019zm8 7.981h-3v-4.66c0-1.156-0.34-1.944-1.428-1.944-0.776 0-1.235 0.522-1.443 1.023-0.076 0.179-0.095 0.413-0.095 0.655v4.926h-3c0.04-5.981 0-7.981 0-7.981h3v1.581c0.395-0.741 1.038-1.581 2.765-1.581 2.018 0 3.535 1.328 3.535 4.161v4.84h-3v-4.646z"/></svg>
);


const AboutUs = () => {
    const micaImage = "https://www.palermo.edu/Archivos_content/2024/dyc/noviembre/heidi-clair/Heidi-Clair-750x335.jpg";
    const silImage = "https://img.freepik.com/fotos-premium/retrato-mujer-moda-mechon-pelo_91497-3794.jpg";

    // URLs de ejemplo para las redes sociales
    const silLinkedin = "#";
    const silInstagram = "#";
    const micaLinkedin = "#";
    const micaInstagram = "#";

    return (
        <section id='nos' className={styles.aboutUsContainer}>
            {/* SECCIÓN DE INTRODUCCIÓN */}
            <div className={styles.introSection}>
                <h1 className={styles.title}>Somos ZAP</h1>
                <p className={styles.mainText}>
                    Desde Córdoba, Argentina, damos vida a marcas con identidad propia. Creamos conceptos que conectan, diseñamos sin límites y pensamos cada proyecto para que trascienda lo visual.
                </p>
                <p className={styles.quote}>
                    "Transformamos lo que ya existe en marcas que impactan."
                </p>
            </div>

            {/* SECCIÓN DE FUNDADORAS */}
            <div className={styles.foundersSection}>
                {/* Tarjeta de Silvia */}
                <div className={styles.founderCard} style={{backgroundImage: `url(${silImage})`}}>
                    <div className={styles.cardContent}>
                        <h3 className={styles.founderName}>Silvia del Villar</h3>
                        <p className={styles.founderBio}>Diseñadora y comunicadora estratégica</p>
                        <div className={styles.socialLinks}>
                            <a href={silLinkedin} target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                                <LinkedinIcon />
                            </a>
                            <a href={silInstagram} target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                                <InstagramIcon />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Tarjeta de Micaela */}
                <div className={styles.founderCard} style={{backgroundImage: `url(${micaImage})`}}>
                    <div className={styles.cardContent}>
                        <h3 className={styles.founderName}>Micaela Pérez</h3>
                        <p className={styles.founderBio}>Especialista en identidad de marca y coherencia visual</p>
                        <div className={styles.socialLinks}>
                            <a href={micaLinkedin} target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                                <LinkedinIcon />
                            </a>
                            <a href={micaInstagram} target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                                <InstagramIcon />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;