// src/components/Home.js
import React from 'react';
import styles from './Home.module.css';
import ScrollAnimatedText from '../scrollAnimatedText/ScrollAnimatedText';
import ContactSection from '../contactSection/ContactSection';
import SomeSection from '../someSection/SomeSection';
import Header from '../header/Header'; 
import ProjectGrid from '../proyects/ProjectGrid';
import InfoSection from './infoSection/InfoSection';
import BrandsSection from '../brandsSection/BrandsSection';
import Reviews from '../reviews/Reviews';
import { Fade, Slide, Zoom, Flip } from 'react-awesome-reveal';

const Home = () => {


  const teamMember1Url = "https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/e40b6ea6361a1abe28f32e7910f63b66/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg"; // Ejemplo de médico
const teamMember2Url = "https://img.freepik.com/foto-gratis/viajar-transporte-publico-camino-al-trabajo-foto-hombre-guapo-amable-positivo-bigote-barba-gafas-auriculares-escuchando-musica-obteniendo-satisfaccion-grandes-ofertas_176420-22419.jpg?semt=ais_hybrid&w=740"; // Ejemplo de profesional de la salud
const teamMember3Url = "https://b2472105.smushcdn.com/2472105/wp-content/uploads/2023/09/Poses-Perfil-Profesional-Mujeres-ago.-10-2023-1-819x1024.jpg?lossy=1&strip=1&webp=1"; // Ejemplo de especialista en tecnología

  return (
    <div className={styles.homeContainer}>
    
      
        <Header /> 
      <section className={styles.imageParallaxSection}>
        <div className={styles.parallaxContent}>
         
        </div>
      </section>
          <SomeSection />
          <br /><br />
          <ScrollAnimatedText></ScrollAnimatedText>
          {/* <InfoSection /> */}
          <ProjectGrid />
          {/* <BrandsSection /> */}
            {/* <section className={styles.teamSection}>
                <Fade triggerOnce duration={1000}>
                    <h2 className={styles.sectionTitle}>Conoce a Nuestro Equipo</h2>
                    <p className={styles.sectionSubtitle}>
                        Detrás de cada avance en zap, hay un equipo apasionado de expertos.
                    </p>
                </Fade>
                <div className={styles.teamGrid}>
                    <Zoom triggerOnce duration={800} delay={200}>
                        <div className={styles.teamMemberCard}>
                            <img src={teamMember1Url} alt="Dr. Juan Pérez" className={styles.teamMemberImage} />
                            <h3>Dr. Juan Pérez</h3>
                            <p className={styles.teamMemberRole}>CEO & Fundador</p>
                            <p className={styles.teamMemberDescription}>Con más de 20 años de experiencia, lidera la visión y estrategia de TRS.</p>
                        </div>
                    </Zoom>
                    <Zoom triggerOnce duration={800} delay={400}>
                        <div className={styles.teamMemberCard}>
                            <img src={teamMember2Url} alt="Lic. Ana Gómez" className={styles.teamMemberImage} />
                            <h3>Lic. Ana Gómez</h3>
                            <p className={styles.teamMemberRole}>Directora de Tecnología</p>
                            <p className={styles.teamMemberDescription}>Responsable del desarrollo de nuestras soluciones de inteligencia artificial.</p>
                        </div>
                    </Zoom>
                    <Zoom triggerOnce duration={800} delay={600}>
                        <div className={styles.teamMemberCard}>
                            <img src={teamMember3Url} alt="Ing. Carlos Ruiz" className={styles.teamMemberImage} />
                            <h3>Ing. Carlos Ruiz</h3>
                            <p className={styles.teamMemberRole}>Especialista en UX/UI</p>
                            <p className={styles.teamMemberDescription}>Asegura que nuestras herramientas sean intuitivas y fáciles para los profesionales.</p>
                        </div>
                    </Zoom>
                </div>
            </section>
          
          <Reviews /> */}
          <ContactSection />

          
     </div>
  );
};

export default Home;