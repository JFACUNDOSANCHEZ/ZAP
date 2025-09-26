// src/components/AboutUs/AboutUs.jsx
import React from 'react';
import { FaLinkedin, FaInstagram } from 'react-icons/fa';
import styles from './AboutUs.module.css';
import logoAboutUs from '../../assets/ZAP-TAGLINE1.png';
import silImage from '../../assets/sv.jpeg';

const AboutUs = () => {
const micaImage = "https://www.esade.edu/wp-content/uploads/2024/07/mujer-emprendedora-1.jpg";

  const silLinkedin = "#";
  const silInstagram = "https://www.instagram.com//somoszap/";
  const micaLinkedin = "";
  const micaInstagram = "https://www.instagram.com//somoszap/";

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
            <h3 className={styles.founderName}>Sil del Villar</h3>
            <p className={styles.founderBio}>Diseñadora Gráfica y Marketer Digital.</p>
            <div className={styles.socialLinks}>
              
              <a href={silInstagram} target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            </div>
          </div>
        </div>

        <div className={styles.founderCard}>
          <img src={micaImage} alt="Micaela Pérez" className={styles.founderPhoto} />
          <div className={styles.founderContent}> {/* <-- ¡Nuevo div para el contenido! */}
            <h3 className={styles.founderName}>Mica Farias</h3>
            <p className={styles.founderBio}>Especialista en identidad de marca y coherencia visual</p>
            <div className={styles.socialLinks}>
            
              <a href={micaInstagram} target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;