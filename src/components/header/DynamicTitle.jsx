// src/components/DynamicTitle.jsx
import React, { useEffect, useState } from 'react';
import styles from './DynamicTitle.module.css';

const words = ['MARCA', 'IMAGEN', 'ESTILO', 'NEGOCIO', 'COMUNICACIÓN'];

const DynamicTitle = ({ className }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animationClass, setAnimationClass] = useState(styles.animateIn);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationClass(styles.animateOut); // empieza animación de salida

      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % words.length);
        setAnimationClass(styles.animateIn); // nueva animación de entrada
      }, 600); // Debe coincidir con duración de animación out
    }, 3500); // Tiempo total por palabra

    return () => clearInterval(interval);
  }, []);

  return (
    <span className={`${styles.dynamicWordWrapper} ${className || ''}`}>
      <span className={`${styles.dynamicWord} ${animationClass}`}>
        {words[currentIndex]}
      </span>
    </span>
  );
};

export default DynamicTitle;