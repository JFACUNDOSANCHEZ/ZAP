import React, { useState, useEffect } from 'react';
import Nav from '../nav/Nav';
import { useParams, Link } from 'react-router-dom';
import projectsData from '../../data/projects.js'; // Asegúrate de que este path sea correcto
import { motion } from 'framer-motion';
import styles from './ProjectDetail.module.css';
import ContactSection from '../contactSection/ContactSection'; // Asumo que lo usas o lo usarás
import SimpleFooter from '../SimpleFooter/SimpleFooter'; // Asegúrate de que este path sea correcto

const ProjectDetail = () => {
    const { id } = useParams();
    const project = projectsData.find(p => p.id === id);

    const [isScrolled, setIsScrolled] = useState(false);
    const [scaleValue, setScaleValue] = useState(1); 

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);

            const scrollPosition = window.scrollY;
            const newScale = 1 + scrollPosition / 2000; 
            setScaleValue(newScale);
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

                {/* 2. Sección de imagen principal con el efecto de zoom */}
                {project.imageSrc && (
                    <div className={styles.mainImageContainer}>
                        <img 
                            src={project.imageSrc} 
                            alt={project.title} 
                            className={styles.mainImage} 
                            style={{ transform: `scale(${scaleValue})` }} 
                        />
                    </div>
                )}

                {/* 3. Sección de contenido: texto a la izquierda, paralaje a la derecha */}
                <motion.div
                    className={styles.contentGrid}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                >
                    {/* Columna Izquierda: Texto principal y descriptionParts */}
                    <div className={styles.textContentLeft}> 
                        {project.mainText && project.mainText.trim() !== '' && (
                            // Aplicar dangerouslySetInnerHTML si mainText también puede contener HTML
                            <p dangerouslySetInnerHTML={{ __html: project.mainText }}></p>
                        )}
                        {project.descriptionParts && project.descriptionParts.map((part, index) => (
                            // <<-- APLICO dangerouslySetInnerHTML AQUÍ -->>
                            <p key={`desc-part-${index}`} dangerouslySetInnerHTML={{ __html: part }}></p>
                        ))}
                    </div>

                    {/* Columna Derecha: Solo la imagen de Paralaje */}
                    {project.parallaxImage && (
                        <motion.div 
                            className={styles.parallaxImageContainer} 
                            style={{ '--parallax-image': `url(${project.parallaxImage})` }}
                            initial={{ opacity: 0, y: 100 }} 
                            whileInView={{ opacity: 1, y: 0 }} 
                            viewport={{ once: true, amount: 0.5 }} 
                            transition={{ duration: 0.8, ease: "easeOut" }}
                        ></motion.div>
                    )}
                </motion.div>

                {/* 4. NUEVO: Sección combinada de Texto Inferior y Galería */}
                {(project.descriptionBottomText && project.descriptionBottomText.length > 0 || 
                  project.gallery && project.gallery.length > 0) && (
                    <div className={styles.bottomContentGrid}> 
                        {/* Texto inferior a la izquierda (o donde lo coloques con CSS) */}
                        {project.descriptionBottomText && project.descriptionBottomText.length > 0 && ( 
                            <motion.div 
                                className={styles.descriptionBottomTextContainer} 
                                initial={{ opacity: 0, y: 50 }} 
                                whileInView={{ opacity: 1, y: 0 }} 
                                viewport={{ once: true, amount: 0.4 }} 
                                transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }} 
                            >
                                {project.descriptionBottomText.map((part, index) => (
                                    // <<-- APLICO dangerouslySetInnerHTML AQUÍ -->>
                                    <p key={`bottom-text-after-gallery-${index}`} dangerouslySetInnerHTML={{ __html: part }}></p>
                                ))}
                                
                                {/* <<-- BOTÓN MOVIDO AQUÍ DENTRO DE UN CONTENEDOR PARA CENTRARLO -->> */}
                                <div className={styles.centeredButtonContainer}> 
                                    <Link to="/#portfolio" className={styles.backButtonWhite}> Volver al portfolio</Link>
                                </div>
                            </motion.div>
                        )}

                        {/* Galería de fotos a la derecha (o donde lo coloques con CSS) */}
                        {project.gallery && project.gallery.length > 0 && (
                            <motion.div 
                                className={styles.combinedPhotoGallery} 
                                initial={{ opacity: 0, y: 50 }} 
                                whileInView={{ opacity: 1, y: 0 }} 
                                viewport={{ once: true, amount: 0.4 }} 
                                transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }} 
                            > 
                                {/* Fila Superior: Dos imágenes grandes */}
                                <div className={styles.galleryTopRow}>
                                    {project.gallery.slice(0, 2).map((image, index) => (
                                        <motion.img 
                                            key={index}
                                            src={image}
                                            alt={`${project.title} - Galería superior ${index + 1}`}
                                            className={styles.galleryImageLarge}
                                            initial={{ opacity: 0, y: 50 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true, amount: 0.5 }}
                                            transition={{ duration: 0.5, delay: 0.1 * index }}
                                        />
                                    ))}
                                </div>

                                {/* Fila Inferior: Tres imágenes pequeñas */}
                                <div className={styles.galleryBottomRow}>
                                    {project.gallery.slice(2, 5).map((image, index) => (
                                        <motion.img 
                                            key={index + 2} 
                                            src={image}
                                            alt={`${project.title} - Galería inferior ${index + 3}`}
                                            className={styles.galleryImageSmall}
                                            initial={{ opacity: 0, y: 50 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true, amount: 0.5 }}
                                            transition={{ duration: 0.5, delay: 0.1 * (index + 2) }}
                                        />
                                    ))}
                                </div>

                            </motion.div>
                        )}
                    </div>
                )}
                
                {/* <<-- EL VIEJO CONTENEDOR DEL BOTÓN HA SIDO ELIMINADO DE AQUÍ -->> */}
                {/* <div className={styles.backButtonContainer}>
                    <Link to="/#portfolio" className={styles.backButtonWhite}>&lt;- Volver al portfolio</Link>
                </div> */}
                
                {/* Footer Simple */}
                <SimpleFooter /> 
            </motion.div>
        </>
    );
};

export default ProjectDetail;