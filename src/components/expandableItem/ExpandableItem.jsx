import React, { useState, useRef, useEffect } from 'react';
import styles from './ExpandableItem.module.css';

// SVG para el icono de flecha hacia arriba/abajo
const ArrowIcon = () => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z"/>
  </svg>
);

const ExpandableItem = ({ number, title, description, imageUrl, hoverImages }) => {
  const [isVisible, setIsVisible] = useState(false);
  const itemRef = useRef(null);

  const [hovering, setHovering] = useState(false);
  const [currentHoverImageIndex, setCurrentHoverImageIndex] = useState(0);

  // Animación de entrada
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { root: null, rootMargin: '0px', threshold: 0.9 }
    );

    if (itemRef.current) observer.observe(itemRef.current);

    return () => {
      if (itemRef.current) observer.unobserve(itemRef.current);
    };
  }, []);

  // Rotación del carrusel cada 1.7 segundos
  useEffect(() => {
    if (hovering && hoverImages && hoverImages.length > 1) {
      const interval = setInterval(() => {
        setCurrentHoverImageIndex(
          prevIndex => (prevIndex + 1) % hoverImages.length
        );
      }, 1700);
      return () => clearInterval(interval);
    } else {
      setCurrentHoverImageIndex(0);
    }
 }, [hovering, hoverImages]);

  return (
    <div
      ref={itemRef}
      className={`${styles.itemContainer} ${isVisible ? styles.visible : ''}`}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
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

      <div className={styles.bigNumber}>{number}</div>

      {hovering && hoverImages && hoverImages.length > 0 && (
        <div className={styles.hoverImageCarousel}>
          {/* **CORRECCIÓN:** Mapeamos todas las imágenes y usamos 'key' en cada una. */}
          {/* Solo la que tenga la clase 'active' será visible. */}
          {hoverImages.map((src, idx) => (
            <img
 key={idx}
src={src}
 alt={title}
className={`${styles.carouselImage} ${idx === currentHoverImageIndex ? styles.active : ''}`}
 />
))}
 </div>
 )}

 {!hovering && imageUrl && (
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