import React from 'react';
import styles from './AboutUs.module.css';
import logoAboutUs from '../../assets/ZAP-TAGLINE1.png';

// Iconos SVG outline (minimalistas)
const LinkedinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect x="2" y="9" width="4" height="12"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
);

const AboutUs = () => {
  const micaImage = "https://www.palermo.edu/Archivos_content/2024/dyc/noviembre/heidi-clair/Heidi-Clair-750x335.jpg";
  const silImage = "https://img.freepik.com/fotos-premium/retrato-mujer-moda-mechon-pelo_91497-3794.jpg";

  const silLinkedin = "#";
  const silInstagram = "#";
  const micaLinkedin = "#";
  const micaInstagram = "#";

  return (
    <section id='nos' className={styles.aboutUsContainer}>
      {/* Intro */}
      <div className={styles.introSection}>
        <img src={logoAboutUs} alt="Logo ZAP" className={styles.logo} />
        {/* <h1 className={styles.title}>Somos ZAP</h1> */}
        <p className={styles.mainText}>
          Desde Córdoba, Argentina, damos vida a marcas con identidad propia. Creamos conceptos que conectan, diseñamos sin límites y pensamos cada proyecto para que trascienda lo visual.
        </p>
        <p className={styles.quote}>
          "Transformamos lo que ya existe en marcas que impactan."
        </p>
      </div>

      {/* Fundadoras */}
      <div className={styles.foundersSection}>
        <div className={styles.founderCard}>
          <img src={silImage} alt="Silvia del Villar" className={styles.founderPhoto} />
          <h3 className={styles.founderName}>Silvia del Villar</h3>
          <p className={styles.founderBio}>Diseñadora y comunicadora estratégica</p>
          <div className={styles.socialLinks}>
            <a href={silLinkedin} target="_blank" rel="noopener noreferrer"><LinkedinIcon /></a>
            <a href={silInstagram} target="_blank" rel="noopener noreferrer"><InstagramIcon /></a>
          </div>
        </div>

        <div className={styles.founderCard}>
          <img src={micaImage} alt="Micaela Pérez" className={styles.founderPhoto} />
          <h3 className={styles.founderName}>Micaela Pérez</h3>
          <p className={styles.founderBio}>Especialista en identidad de marca y coherencia visual</p>
          <div className={styles.socialLinks}>
            <a href={micaLinkedin} target="_blank" rel="noopener noreferrer"><LinkedinIcon /></a>
            <a href={micaInstagram} target="_blank" rel="noopener noreferrer"><InstagramIcon /></a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
