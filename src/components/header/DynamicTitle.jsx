// src/components/DynamicTitle.jsx
import React, { useEffect, useState } from 'react';
import styles from './DynamicTitle.module.css';

const words = [
  ['Construimos', 'el futuro', 'de tu MARCA'],
  ['Transformamos', 'ideas en', 'RESULTADOS'],
  ['Hacemos que tu', 'historia sea', 'MEMORABLE'],
];

const DynamicTitle = ({ className }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % words.length);
    }, 4500); // <-- Aumentamos el tiempo para que la animación se vea completa

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`${styles.dynamicWordWrapper} ${className || ''}`}>
      {/* Usamos 'key' para forzar a React a recrear el componente, reiniciando la animación */}
      <div key={currentIndex} className={styles.dynamicWord}>
        {words[currentIndex].map((line, index) => (
          <span
            key={index}
            className={`${styles.dynamicLine} ${
              index === 0
                ? styles.lineOne
                : index === 1
                ? styles.lineTwo
                : styles.lineThree
            }`}
          >
            {line}
          </span>
        ))}
      </div>
    </div>
  );
};

export default DynamicTitle;