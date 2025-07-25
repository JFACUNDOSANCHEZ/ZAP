import React from 'react';
import styles from './ProjectGrid.module.css'; // Usará el mismo CSS Module que ProjectGrid

const ProjectItem = ({ imageSrc, title, category }) => {
  return (
    <div className={styles.projectItem}>
      <img src={imageSrc} alt={title} className={styles.projectImage} />
      <div className={styles.overlay}>
        <h3 className={styles.overlayTitle}>{title}</h3>
        <p className={styles.overlayCategory}>{category}</p>
      </div>
    </div>
  );
};

export default ProjectItem;