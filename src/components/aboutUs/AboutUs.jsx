// src/components/AboutUs/AboutUs.jsx
import React from 'react';
import { FaLinkedin, FaInstagram } from 'react-icons/fa';
import styles from './AboutUs.module.css';
import logoAboutUs from '../../assets/ZAP-TAGLINE1.png';

const AboutUs = () => {
  const micaImage = "https://www.palermo.edu/Archivos_content/2024/dyc/noviembre/heidi-clair/Heidi-Clair-750x335.jpg";
  const silImage = "https://img.freepik.com/fotos-premium/retrato-mujer-moda-mechon-pelo_91497-3794.jpg";

  const silLinkedin = "#";
  const silInstagram = "#";
  const micaLinkedin = "#";
  const micaInstagram = "#";

  return (
    <section id='nos' className={styles.aboutUsContainer}>
      <div className={styles.introSection}>
        <img src={logoAboutUs} alt="Logo ZAP" className={styles.logo} />
        <p className={styles.mainText}>
          Desde Córdoba, Argentina, damos vida a marcas con identidad propia. Creamos conceptos que conectan, diseñamos sin límites y pensamos cada proyecto para que trascienda lo visual.
        </p>
        <p className={styles.quote}>
          "Transformamos lo que ya existe en marcas que impactan."
        </p>
      </div>

      <div className={styles.foundersSection}>
        <div className={styles.founderCard}>
          <img src={silImage} alt="Silvia del Villar" className={styles.founderPhoto} />
          <div className={styles.founderContent}> {/* <-- ¡Nuevo div para el contenido! */}
            <h3 className={styles.founderName}>Silvia del Villar</h3>
            <p className={styles.founderBio}>Diseñadora y comunicadora estratégica</p>
            <div className={styles.socialLinks}>
              <a href={silLinkedin} target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
              <a href={silInstagram} target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            </div>
          </div>
        </div>

        <div className={styles.founderCard}>
          <img src={micaImage} alt="Micaela Pérez" className={styles.founderPhoto} />
          <div className={styles.founderContent}> {/* <-- ¡Nuevo div para el contenido! */}
            <h3 className={styles.founderName}>Micaela Pérez</h3>
            <p className={styles.founderBio}>Especialista en identidad de marca y coherencia visual</p>
            <div className={styles.socialLinks}>
              <a href={micaLinkedin} target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
              <a href={micaInstagram} target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;