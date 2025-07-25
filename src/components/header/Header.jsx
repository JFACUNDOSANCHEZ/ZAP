import React, { useState, useEffect, useRef } from 'react';
import styles from './Header.module.css';
import herobg from '../../assets/hero-bg.mp4';
import Nav from '../nav/Nav';
import DynamicTitle from './DynamicTitle';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollYPosition, setScrollYPosition] = useState(0);
  const [animateHero, setAnimateHero] = useState(false);
  const heroSectionRef = useRef(null);

  useEffect(() => {
    setAnimateHero(true); // Activar animación al montar

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      setScrollYPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  let titleTranslateY = 0;
  if (heroSectionRef.current) {
    const heroHeight = heroSectionRef.current.offsetHeight;
    const contentOffsetTop = heroSectionRef.current.offsetTop;
    const scrolledIntoHero = scrollYPosition - contentOffsetTop;
    const parallaxSpeed = 0.4;
    const stickyThreshold = heroHeight * 0.3;

    if (scrolledIntoHero > 0) {
      if (scrolledIntoHero < stickyThreshold) {
        titleTranslateY = 0;
      } else {
        titleTranslateY = -(scrolledIntoHero - stickyThreshold) * parallaxSpeed;
      }
      const maxTranslateY = -heroHeight * 0.6;
      titleTranslateY = Math.max(titleTranslateY, maxTranslateY);
    }
  }

  return (
    <header ref={heroSectionRef} className={styles.heroSection}>
      <Nav isScrolled={isScrolled} />

   <video
  className={styles.videoBackground}
  autoPlay
  loop
  muted
  playsInline
>
  <source src={herobg} type="video/mp4" />
  Tu navegador no soporta videos HTML5.
</video>

<div className={styles.overlay}></div>

      <div
        className={`${styles.heroContent} ${animateHero ? styles.animate : ''}`}
        style={{ transform: `translateY(${titleTranslateY}px)` }}
      >
        <p className={`${styles.heroPretitle} ${styles.slideFromLeft}`}>
          SOMOS ZAP
        </p>

        <h1 className={styles.mainHeroTitle}>
          <div className={`${styles.heroLineStatic} ${styles.slideFromRight}`}>construimos
</div>
          <DynamicTitle className={`${styles.dynamicWordInHero} ${styles}`} />
          <div className={`${styles.heroLineStatic} ${styles.slideFromLeft}`}>DIGITAL</div>
        </h1>

        <div className={`${styles.projectShowcaseText} ${styles.fadeIn}`}>
          PROJECT SHOWCASE
        </div>
      </div>

      <div className={styles.scrollIndicator}>
        <div className={styles.scrollDot}></div>
      </div>
    </header>
  );
};

export default Header;

