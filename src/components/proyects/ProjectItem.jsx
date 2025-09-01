// src/components/proyects/ProjectItem.jsx
import React from 'react';
import { Link } from 'react-router-dom'; // <-- ¡Importamos Link aquí!
import styles from './ProjectGrid.module.css';

// Añadimos 'id' a las props del componente
const ProjectItem = ({ id, imageSrc, title, category }) => {
  console.log(id)
  return (
   <Link to={`/proyectos/${id}`} className={styles.projectItem}>
      <img src={imageSrc} alt={title} className={styles.projectImage} />
      <div className={styles.overlay}>
        <h3 className={styles.overlayTitle}>{title}</h3>
        <p className={styles.overlayCategory}>{category}</p>
      </div>
    </Link>
  );
};

export default ProjectItem;