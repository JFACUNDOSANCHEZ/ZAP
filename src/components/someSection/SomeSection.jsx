// src/components/SomeSection/SomeSection.jsx
import React from 'react';
import ExpandableItem from '../expandableItem/ExpandableItem';
import styles from './SomeSection.module.css';

// Importa todas las imágenes que necesitas
import project7Img from '../../assets/project11.png';
import project8Img from '../../assets/project7.png';
import project3Img from '../../assets/project3.png';
// Asume que tienes más imágenes, como las siguientes
import project4Img from '../../assets/project10.png';
import project1Img from '../../assets/project2.webp';
import project6Img from '../../assets/project8.png';
import project11Img from '../../assets/web.png';
import project12Img from '../../assets/MartosMa.png';




const SomeSection = () => {
 // Define arrays de imágenes específicos para cada ítem
 const imagesForFirstItem = [project3Img, project1Img, project6Img];
 const imagesForSecondItem = [project8Img, project4Img, project11Img];
 const imagesForThirdItem = [project6Img, project7Img, project12Img];

 return (
 <section className={styles.sectionWrapper}>
 <div className={styles.itemsList}>
 <div className={`${styles.itemSlideIn} ${styles.itemDelay1}`}>
<ExpandableItem
 number="01"
 title="Branding & Identidad"
  description="Desarrollamos estrategias de marketing y branding para impulsar tu marca."
 hoverImages={imagesForFirstItem} /* Se pasa el nuevo prop */
/>
 </div>
<div className={`${styles.itemSlideIn} ${styles.itemDelay2}`}>
 <ExpandableItem
 number="02"
 title="Diseño Web & UX/UI"
 description="Creamos identidades visuales únicas y sitios web atractivos."
 hoverImages={imagesForSecondItem} /* Se pasa el nuevo prop */
  />
 </div>
<div className={`${styles.itemSlideIn} ${styles.itemDelay3}`}>
 <ExpandableItem
 number="03"
 title="Social Media & Marketing"
 description="Fusionamos creatividad visual con estrategia para construir marcas memorables."
hoverImages={imagesForThirdItem} /* Se pasa el nuevo prop */
 />
</div>
 </div>
 </section>
 );
};

export default SomeSection;