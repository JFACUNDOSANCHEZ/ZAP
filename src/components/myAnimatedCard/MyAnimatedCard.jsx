// MyAnimatedCard.jsx
import React, { useState } from 'react';
import styles from './MyAnimatedCard.module.css'; // Importa como un objeto 'styles'

const MyAnimatedCard = ({  finalImage, title, description }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      // Accede a las clases a través del objeto 'styles'
      className={`${styles.card} ${isHovered ? styles.hovered : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={styles['card-image-container']}> {/* Usa corchetes para nombres con guiones */}
        <div
          className={styles['card-background-animated']}
          style={{ backgroundImage: `url(${finalImage})` }}
        >
        </div>
      </div>
      <div className={styles['card-content']}>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default MyAnimatedCard;