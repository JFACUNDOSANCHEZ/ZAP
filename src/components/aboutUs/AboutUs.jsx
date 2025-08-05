import React from 'react';
import styles from './AboutUs.module.css';


const AboutUs = () => {
    const micaImage = "https://www.palermo.edu/Archivos_content/2024/dyc/noviembre/heidi-clair/Heidi-Clair-750x335.jpg"; // Imagen de Micaela
    const silImage = "https://img.freepik.com/fotos-premium/retrato-mujer-moda-mechon-pelo_91497-3794.jpg"; // Imagen de Silvia
  return (
    <section id='nos' className={styles.aboutUsContainer}>
      
      {/* SECCIÓN DE INTRODUCCIÓN: NUEVO ESTILO TIPOGRÁFICO */}
      <div className={styles.introSection}>
        <h1 className={styles.title}>Somos ZAP</h1>
        <p className={styles.mainText}>
          Desde Córdoba, Argentina, damos vida a marcas con identidad propia. Creamos conceptos que conectan, diseñamos sin límites y pensamos cada proyecto para que trascienda lo visual.
        </p>
        <p className={styles.quote}>
          "Transformamos lo que ya existe en marcas que impactan."
        </p>
      </div>

      {/* SECCIÓN DE FUNDADORAS: NUEVO ESTILO DE TARJETAS */}
      <div className={styles.foundersSection}>
        {/* Tarjeta de Silvia */}
        <div className={styles.founderCard} style={{backgroundImage: `url(${silImage})`}}>
          <div className={styles.cardContent}>
            <h3 className={styles.founderName}>Silvia del Villar</h3>
            <p className={styles.founderBio}>Diseñadora y comunicadora estratégica</p>
          </div>
        </div>

        {/* Tarjeta de Micaela */}
        <div className={styles.founderCard} style={{backgroundImage: `url(${micaImage})`}}>
          <div className={styles.cardContent}>
            <h3 className={styles.founderName}>Micaela Pérez</h3>
            <p className={styles.founderBio}>Especialista en identidad de marca y coherencia visual</p>
          </div>
        </div>
      </div>
      
    </section>
  );
};

export default AboutUs;