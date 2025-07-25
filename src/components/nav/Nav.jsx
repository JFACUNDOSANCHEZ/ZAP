import React, { useEffect, useState } from 'react';
import styles from './Nav.module.css';

const Nav = ({ isScrolled }) => {
  const [hasEntered, setHasEntered] = useState(false);

  useEffect(() => {
    // Solo aplicar la animación al montar el componente
    setHasEntered(true);
  }, []);

  return (
    <header
      className={`${styles.header} ${isScrolled ? styles.scrolledHeader : ''} ${hasEntered ? styles.headerEnter : ''}`}
    >
      <div className={styles.headerLeft}>
        <div className={styles.logo}>
          <h1>ZAP.</h1>
        </div>
        <nav className={styles.navbarSecondary}>
          <ul className={styles.navLinksSecondary}>
            <li>
              <a href="#view-showcase" className={styles.viewShowcaseBtn}>
                VIEW SHOWCASE
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <nav className={styles.navbarMain}>
        <ul className={styles.navLinksMain}>
          <li><a href="#home">HOME</a></li>
          <li><a href="#portfolio">PORTFOLIO</a></li>
          <li><a href="#contact">CONTACT</a></li>
        </ul>
      </nav>

   <div className={styles.headerRight}>
  <span className={styles.languageSelector}>English</span>
 <div className={styles.socialIcons}>



  {/* WhatsApp */}
  {/* Para WhatsApp, el href suele ser un enlace a la conversación (con número internacional) */}
  <a href="https://wa.me/tunumerodetelefono" target="_blank" rel="noopener noreferrer" className={styles.whatsapp}>
    <i className="fab fa-whatsapp"></i>
  </a>
  {/* Instagram */}
  <a href="https://www.instagram.com/tu_usuario" target="_blank" rel="noopener noreferrer" className={styles.instagram}>
    <i className="fab fa-instagram"></i>
  </a>

  {/* LinkedIn */}
  <a href="https://www.linkedin.com/in/tu_perfil" target="_blank" rel="noopener noreferrer" className={styles.linkedin}>
    <i className="fab fa-linkedin-in"></i>
  </a>
  {/* YouTube */}
  <a href="https://www.youtube.com/tu_canal" target="_blank" rel="noopener noreferrer" className={styles.youtube}>
    <i className="fab fa-youtube"></i>
  </a>

</div>
</div>

    </header>
  );
};

export default Nav;
