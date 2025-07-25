import React from 'react';
import styles from './BrandsSection.module.css';
import AKO from '../../assets/AKO.png';
import martosMaña from '../../assets/martosMaña.png';
import CuartoSabor from '../../assets/CuartoSabor.png';
import ReggiaHome from '../../assets/ReggiaHome.png';
import TANTAL from '../../assets/TANTAL.png';
import LA40 from '../../assets/LA40.png';

const BrandsSection = () => {
  return (
    <section className={styles.brandsSection}>
      <h2 className={styles.title}>
        TRABAJAMOS CON LAS MARCAS MÁS GRANDES DEL MUNDO
      </h2>
      <div className={styles.logos}>
        <img src={martosMaña} alt="Martos Maña" />
        <img src={AKO} alt="AKO" />
        <img src={CuartoSabor} alt="Cuarto Sabor" />
        <img src={ReggiaHome} alt="Reggia Home" />
        <img src={TANTAL} alt="TANTAL" />
        <img src={LA40} alt="LA40" />
      </div>
    </section>
  );
};

export default BrandsSection;

