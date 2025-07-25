// src/components/SomeSection/SomeSection.jsx
import React from 'react';
import ExpandableItem from '../expandableItem/ExpandableItem';
import styles from './SomeSection.module.css';
import project7Img from '../../assets/revi.png';
import project8Img from '../../assets/project7.png';
import project3Img from '../../assets/project3.png';

const SomeSection = () => {
  return (
    <section className={styles.sectionWrapper}>
      <div className={styles.itemsList}>
        <div className={`${styles.itemSlideIn} ${styles.itemDelay1}`}>
          <ExpandableItem
            number="01"
            title="Brand Development Marketing"
            description="Desarrollamos estrategias de marketing y branding para impulsar tu marca."
            imageUrl={project3Img}
          />
        </div>

        <div className={`${styles.itemSlideIn} ${styles.itemDelay2}`}>
          <ExpandableItem
            number="02"
            title="Brand Identity and Web"
            description="Creamos identidades visuales únicas y sitios web atractivos."
            imageUrl={project8Img}
          />
        </div>

        <div className={`${styles.itemSlideIn} ${styles.itemDelay3}`}>
          <ExpandableItem
            number="03"
            title="Brand Identity and Strategy"
            description="Fusionamos creatividad visual con estrategia para construir marcas memorables."
            imageUrl={project7Img}
          />
        </div>
      </div>
    </section>
  );
};

export default SomeSection;
