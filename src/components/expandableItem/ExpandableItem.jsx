// src/components/ExpandableItem/ExpandableItem.jsx
import React, { useState, useRef, useEffect } from 'react'; // Importa useRef y useEffect
import styles from './ExpandableItem.module.css';

// SVG para el icono de flecha hacia arriba/abajo
const ArrowIcon = () => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z"/>
  </svg>
);

const ExpandableItem = ({ number, title, description, imageUrl }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isVisible, setIsVisible] = useState(false); // Nuevo estado para controlar la visibilidad en el viewport
  const itemRef = useRef(null); // Ref para el itemContainer

  // Efecto para observar la visibilidad del componente
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Cuando el elemento entra en el viewport (isIntersecting es true)
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Opcional: Si quieres que la animación solo ocurra una vez, desconecta el observador
          observer.unobserve(entry.target);
        }
      },
      {
        root: null, // El viewport es el root
        rootMargin: '0px', // No hay margen extra
        threshold: 0.1, // Dispara cuando al menos el 10% del elemento está visible
      }
    );

    if (itemRef.current) {
      observer.observe(itemRef.current);
    }

    // Función de limpieza para desconectar el observador cuando el componente se desmonte
    return () => {
      if (itemRef.current) {
        observer.unobserve(itemRef.current);
      }
    };
  }, []); // El array vacío asegura que se ejecuta una sola vez al montar

  const handleClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div
      ref={itemRef} // Asigna la ref al div principal
      // Añade la clase 'visible' cuando el elemento entra en el viewport
      className={`${styles.itemContainer} ${isExpanded ? styles.expanded : ''} ${isVisible ? styles.visible : ''}`}
      onClick={handleClick}
    >
      <div className={styles.leftContent}>
        <div className={styles.iconCircle}>
          <ArrowIcon />
        </div>
        <div className={styles.textContainer}>
          <h3 className={styles.mainText}>{title}</h3>
          <p className={styles.descriptionText}>{description}</p>
        </div>
      </div>
      <div className={styles.bigNumber}>
        {number}
      </div>

      {imageUrl && (
        <img
          src={imageUrl}
          alt={title}
          className={styles.hoverImage}
        />
      )}
    </div>
  );
};

export default ExpandableItem;