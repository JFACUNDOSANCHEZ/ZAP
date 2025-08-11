// src/components/home/Home.jsx
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom'; // Importa useLocation para leer la URL
import styles from './Home.module.css';
import ScrollAnimatedText from '../scrollAnimatedText/ScrollAnimatedText';
import ContactSection from '../contactSection/ContactSection';
import SomeSection from '../someSection/SomeSection';
import Header from '../header/Header'; 
import ProjectGrid from '../proyects/ProjectGrid';
import AboutUs from '../aboutUs/AboutUs';
import BrandsSection from '../brandsSection/BrandsSection';

const Home = () => {
  const location = useLocation(); // Obtiene la información de la URL

  useEffect(() => {
    // Si la URL tiene un hash (#portfolio, #contact, etc.)
    if (location.hash) {
      // Intenta encontrar el elemento con ese ID
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        // Y desplaza la vista hacia él
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]); // Se ejecuta cada vez que la URL cambia

  return (
    <div id="home" className={styles.homeContainer}>
      <Header /> 
      <section className={styles.imageParallaxSection}>
        <div className={styles.parallaxContent}>
         
        </div>
      </section>
      {/* ... Tu código de otras secciones ... */}
      <section id='servicios' >
      <SomeSection></SomeSection>
      </section>
      {/* Asegúrate de que tus secciones tengan los IDs correctos */}
        {/* Contenido de la sección de inicio */}
      
      <div id="portfolio"></div>
      <br /><br /> {/* El div que usas para el scroll */}
      <section>
        <ProjectGrid />
      </section>

      <section id="nos">
        <AboutUs />
      </section>
      <BrandsSection></BrandsSection>
      <section id="contact">
        <ContactSection />
      </section>
      
    </div>
  );
};

export default Home;