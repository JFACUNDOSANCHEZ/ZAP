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
                    {/* Aquí debes agregar la estructura de "The Brief" y "The Idea"
                     * si es lo que quieres replicar del sitio de referencia */}
                    <div className={styles.projectDescription}>
                        <div className={styles.descriptionText}>
                            <h2 className={styles.descriptionTitle}>The Brief</h2>
                            <p className={styles.descriptionParagraph}>{project.brief}</p>
                        </div>
                        <div className={styles.descriptionText}>
                            <h2 className={styles.descriptionTitle}>The Idea</h2>
                            <p className={styles.descriptionParagraph}>{project.idea}</p>
                        </div>
                    </div>
                </div>

                {/* **GALERÍA DE IMÁGENES PERSONALIZADA** */}
                {/* Usamos las clases CSS de grilla para posicionar las imágenes */}
                <div className={styles.customImageGrid}>
                    {/* Imagen de la izquierda arriba */}
                    {project.fullImages[0] && (
                        <div className={styles.imageTopLeft}>
                            <img
                                src={project.fullImages[0]}
                                alt={`${project.title} - imagen 1`}
                                className={styles.galleryImage}
                            />
                        </div>
                    )}
                    {/* Imagen de la derecha arriba */}
                    {project.fullImages[1] && (
                        <div className={styles.imageTopRight}>
                            <img
                                src={project.fullImages[1]}
                                alt={`${project.title} - imagen 2`}
                                className={styles.galleryImage}
                            />
                        </div>
                    )}
                    {/* Imagen de abajo que ocupa todo el ancho */}
                    {project.fullImages[2] && (
                        <div className={styles.imageBottomFull}>
                            <img
                                src={project.fullImages[2]}
                                alt={`${project.title} - imagen 3`}
                                className={styles.galleryImage}
                            />
                        </div>
                    )}
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