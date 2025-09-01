import React, { useState, useEffect } from 'react';
import Nav from '../nav/Nav';
import { useParams, Link } from 'react-router-dom';
import projectsData from '../../data/projects';
import { motion } from 'framer-motion';
import styles from './ProjectDetail.module.css';

const ProjectDetail = () => {
    const { id } = useParams();
    const project = projectsData.find(p => p.id === id);

    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (!project) {
        return (
            <div className={styles.notFoundContainer}>
                <Nav isScrolled={true} /> 
                <h1>Proyecto no encontrado</h1>
                <p>Lo sentimos, el proyecto que buscas no existe.</p>
                <Link to="/" className={styles.backButtonWhite}>Volver al inicio</Link>
            </div>
        );
    }
    
    return (
        <>
            <Nav isScrolled={isScrolled} /> 

            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className={styles.projectDetailContainer}
            >
                {/* 1. Sección de título (texto arriba) */}
                <div className={styles.titleSection}>
                    <p className={styles.projectCategory}>{project.category}</p>
                    <h1 className={styles.projectTitle}>{project.title}</h1>
                </div>

                {/* 2. Sección de imagen principal (imagen grande abajo) */}
                <div className={styles.mainImageContainer}>
                    <img src={project.imageSrc} alt={project.title} className={styles.mainImage} />
                </div>

                {/* 3. Sección de contenido (texto a la izquierda, paralaje a la derecha) */}
                <motion.div
                    className={styles.contentGrid}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                >
                    <div className={styles.textContent}>
                        <p>{project.mainText}</p>
                    </div>
                    <div className={styles.parallaxImageContainer} style={{ '--parallax-image': `url(${project.parallaxImage})` }}></div>
                </motion.div>

                {/* 4. Galería de fotos inferior */}
                <div className={styles.photoGalleryGrid}>
                    {project.gallery.map((image, index) => (
                        <motion.img
                            key={index}
                            src={image}
                            alt={`Imagen de proyecto ${index}`}
                            className={styles.galleryImage}
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 * index }}
                        />
                    ))}
                </div>

                <div className={styles.backButtonContainer}>
                    <Link to="/#portfolio" className={styles.backButtonWhite}>&lt;- Volver al portfolio</Link>
                </div>
            </motion.div>
        </>
    );
};

export default ProjectDetail;