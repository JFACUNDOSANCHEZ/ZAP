import React, { useState, useRef, useEffect } from 'react';
import styles from './ExpandableItem.module.css';

const ArrowIcon = () => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z"/>
  </svg>
);

const ExpandableItem = ({ number, title, description, imageUrl, hoverImages }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false); // <-- ahora se abre/cierra con click
  const [currentHoverImageIndex, setCurrentHoverImageIndex] = useState(0);
  const itemRef = useRef(null);

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

  // Rotación automática de imágenes cuando está abierto
  useEffect(() => {
    if (isOpen && hoverImages && hoverImages.length > 1) {
      const interval = setInterval(() => {
        setCurrentHoverImageIndex(
          prevIndex => (prevIndex + 1) % hoverImages.length
        );
      }, 1700);
      return () => clearInterval(interval);
    } else {
      setCurrentHoverImageIndex(0);
    }
  }, [isOpen, hoverImages]);

  return (
    <div
      ref={itemRef}
      className={`${styles.itemContainer} ${isVisible ? styles.visible : ''} ${isOpen ? styles.open : ''}`}
      onClick={() => setIsOpen(prev => !prev)} // <-- click abre/cierra
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

      {isOpen && hoverImages && hoverImages.length > 0 && (
        <div className={styles.hoverImageCarousel}>
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

      {!isOpen && imageUrl && (
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
