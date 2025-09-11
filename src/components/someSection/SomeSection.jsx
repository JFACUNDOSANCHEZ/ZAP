// src/components/SomeSection/SomeSection.jsx
import React from 'react';
import ExpandableItem from '../expandableItem/ExpandableItem';
import styles from './SomeSection.module.css';

// Importa todas las imágenes que necesitas
import project7Img from '../../assets/Dasein/1.webp';
import project8Img from '../../assets/Dasein/4.webp';
import project3Img from '../../assets/Punto33/7.webp';
// Asume que tienes más imágenes, como las siguientes
import project4Img from '../../assets/Marull/3.webp';
import project1Img from '../../assets/Orus/web.webp';
import project6Img from '../../assets/Orus/4.webp';
import project11Img from '../../assets/Kromos/3.webp' ;
import project12Img from '../../assets/AkoAgro/5.webp';
import project15Img from '../../assets/AkoAgro/4.webp';




const SomeSection = () => {
 // Define arrays de imágenes específicos para cada ítem
 const imagesForFirstItem = [project3Img, project7Img, project11Img];
 const imagesForSecondItem = [project4Img, project1Img, project6Img];
 const imagesForThirdItem = [project15Img, project12Img, project8Img];

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