// src/components/ProjectDetail/ProjectDetail.jsx
import React from 'react';
import Nav from '../nav/Nav';
import { useParams, Link } from 'react-router-dom';
import projectsData from '../../data/projects';
import styles from './ProjectDetail.module.css';

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projectsData.find(p => p.id === id);

  if (!project) {
    return (
      <div className={styles.notFoundContainer}>
        <Nav />
        <h1>Proyecto no encontrado</h1>
        <p>Lo sentimos, el proyecto que buscas no existe.</p>
        <Link to="/" className={styles.backButton}>Volver al inicio</Link>
      </div>
    );
  }

  return (
    <>
      <Nav />
      <div className={styles.projectDetailContainer}>

        {/* Sección de cabecera con el título principal */}
        <div className={styles.headerGrid}>
          <h1 className={styles.projectTitle}>{project.title}</h1>
          <p className={styles.projectCategory}>{project.category}</p>
        </div>

        {/* Sección de introducción y meta-datos en una grilla */}
        <div className={styles.introGrid}>
          <div className={styles.metaColumn}>
            {project.client && (
              <div className={styles.metaItem}>
                <strong>Cliente</strong>
                <p>{project.client}</p>
              </div>
            )}
            {project.year && (
              <div className={styles.metaItem}>
                <strong>Año</strong>
                <p>{project.year}</p>
              </div>
            )}
            {project.services && (
              <div className={styles.metaItem}>
                <strong>Servicios</strong>
                <p>{project.services}</p>
              </div>
            )}
          </div>
          <p className={styles.projectDescription}>{project.description}</p>
        </div>
        
        {/* Galería de imágenes en un layout de grilla */}
        <div className={styles.imageGrid}>
          {project.fullImages.map((imgSrc, index) => (
            <img 
              key={index} 
              src={imgSrc} 
              alt={`${project.title} - imagen ${index + 1}`} 
              className={styles.galleryImage}
            />
          ))}
        </div>

        {/* Botón para volver al portfolio */}
        <div className={styles.backButtonContainer}>
          <Link to="/" className={styles.backButton}>&lt;- Volver al portfolio</Link>
        </div>
      </div>
    </>
  );
};

export default ProjectDetail;