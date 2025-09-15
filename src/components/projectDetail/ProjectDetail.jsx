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
    const [isImageModalOpen, setIsImageModalOpen] = useState(false); // NUEVO ESTADO PARA EL MODAL DE IMAGEN

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

    // Función para abrir el modal
    const openImageModal = () => {
        setIsImageModalOpen(true);
        document.body.style.overflow = 'hidden'; // Evita el scroll del body cuando el modal está abierto
    };

    // Función para cerrar el modal
    const closeImageModal = () => {
        setIsImageModalOpen(false);
        document.body.style.overflow = 'unset'; // Restaura el scroll del body
    };

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

                {/* 2. Sección de imagen principal con el efecto de zoom y onClick */}
                {project.imageSrc && (
                    <div className={styles.mainImageContainer}>
                        <img
                            src={project.imageSrc}
                            alt={project.title}
                            className={styles.mainImage}
                            style={{ transform: `scale(${scaleValue})` }}
                            onClick={openImageModal} // <-- NUEVO: Al hacer click, abre el modal
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
                            <p dangerouslySetInnerHTML={{ __html: project.mainText }}></p>
                        )}
                        {project.descriptionParts && project.descriptionParts.map((part, index) => (
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
                                                onClick={openImageModal} // <-- Opcional: también abrir modal con estas imágenes
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
                                                onClick={openImageModal} // <-- Opcional: también abrir modal con estas imágenes
                                            />
                                        ))}
                                    </div>
                                </motion.div>
                            )}
                            {project.descriptionBottomText && project.descriptionBottomText.length > 0 && (
                                <motion.div
                                    className={styles.descriptionBottomTextContainer}
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, amount: 0.4 }}
                                    transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
                                >
                                    {project.descriptionBottomText.map((part, index) => (
                                        <p key={`bottom-text-after-gallery-${index}`} dangerouslySetInnerHTML={{ __html: part }}></p>
                                    ))}

                                    <div className={styles.centeredButtonContainer}>
                                        <Link to="/#portfolio" className={styles.backButtonWhite}> Volver al portfolio</Link>
                                    </div>
                                </motion.div>
                            )}
                        </div>
                    )}

                <SimpleFooter />
            </motion.div>

            {/* NUEVO: Modal de Imagen */}
            {isImageModalOpen && project.imageSrc && (
                <motion.div
                    className={styles.imageModalOverlay}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    onClick={closeImageModal} // Cierra el modal al hacer click en el overlay
                >
                    <motion.img
                        src={project.imageSrc}
                        alt={project.title}
                        className={styles.imageModalContent}
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.8, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        onClick={(e) => e.stopPropagation()} // Evita que el click en la imagen cierre el modal
                    />
                    <button className={styles.imageModalCloseButton} onClick={closeImageModal}>
                        &times;
                    </button>
                </motion.div>
            )}
        </>
    );
};

export default ProjectDetail;