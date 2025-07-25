import React from 'react';
import styles from './InfoSection.module.css';
import project4 from '../../../assets/project4.png'; // Asegurate de tener esta imagen

const InfoSection = () => {
  return (
    <div className={styles.container}>
  <div className={styles.imageContainer}>
    <img src={project4} alt="Vase" />
  </div>

  <div className={styles.textContent}>
    <p>
      Sem vulputate enim iaculis ac est volutpat rhoncus, facilisis libero egestas mus montes ullamcorper...
    </p>
    <p>
      Quam at feentum cursus dapibus aptent nec, sociosqu ultrices dictum...
    </p>
    <button className={styles.learnMore}>
      <span>LEARN MORE</span>
      <span className={styles.arrow}>↗</span>
    </button>
  </div>

  <div className={styles.cards}>
    <div className={styles.card}>
      <h3>Days of exhibition</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
    </div>
    <div className={styles.card}>
      <h3>UX-research portfolio</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
    </div>
    <div className={styles.card}>
      <h3>Everyday concepts</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
    </div>
    <div className={styles.card}>
      <h3>Design studio</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
    </div>
  </div>
</div>

  );
};

export default InfoSection;
