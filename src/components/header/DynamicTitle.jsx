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
  const [animationClass, setAnimationClass] = useState(styles.animateIn);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationClass(styles.animateOut);

      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % words.length);
        setAnimationClass(styles.animateIn);
      }, 800);
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`${styles.dynamicWordWrapper} ${className || ''}`}>
      <div className={`${styles.dynamicWord} ${animationClass}`}>
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