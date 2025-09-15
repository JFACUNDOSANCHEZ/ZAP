import React, { useState, useEffect } from 'react';
import Nav from '../nav/Nav';
import { useParams, Link } from 'react-router-dom';
import projectsData from '../../data/projects.js';
import { motion } from 'framer-motion';
import styles from './ProjectDetail.module.css';
import ContactSection from '../contactSection/ContactSection';
import SimpleFooter from '../SimpleFooter/SimpleFooter';

const ProjectDetail = () => {
    const { id } = useParams();
    const project = projectsData.find(p => p.id === id);

    const [isScrolled, setIsScrolled] = useState(false);
    const [scaleValue, setScaleValue] = useState(1);

    // Estados del modal
    const [isImageModalOpen, setIsImageModalOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(null);
    const [allImages, setAllImages] = useState([]);

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

    // Abrir modal con índice
    const openImageModal = (imageSrc) => {
        const images = [
            project.imageSrc,
            ...(project.gallery || [])
        ];

        setAllImages(images);

        const index = images.indexOf(imageSrc);
        setCurrentIndex(index);

        setIsImageModalOpen(true);
        document.body.style.overflow = 'hidden';
    };

    const closeImageModal = () => {
        setIsImageModalOpen(false);
        setCurrentIndex(null);
        document.body.style.overflow = 'unset';
    };

    const showNextImage = (e) => {
        e.stopPropagation();
        setCurrentIndex((prev) => (prev + 1) % allImages.length);
    };

    const showPrevImage = (e) => {
        e.stopPropagation();
        setCurrentIndex((prev) => (prev - 1 + allImages.length) % allImages.length);
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
                {/* 1. Título */}
                <div className={styles.titleSection}>
                    <p className={styles.projectCategory}>{project.category}</p>
                    <h1 className={styles.projectTitle}>{project.title}</h1>
                </div>

                {/* 2. Imagen principal */}
                {project.imageSrc && (
                    <div className={styles.mainImageContainer}>
                        <img
                            src={project.imageSrc}
                            alt={project.title}
                            className={styles.mainImage}
                            style={{ transform: `scale(${scaleValue})` }}
                            onClick={() => openImageModal(project.imageSrc)}
                        />
                    </div>
                )}

                {/* 3. Texto + Parallax */}
                <motion.div
                    className={styles.contentGrid}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                >
                    <div className={styles.textContentLeft}>
                        {project.mainText && project.mainText.trim() !== '' && (
                            <p dangerouslySetInnerHTML={{ __html: project.mainText }}></p>
                        )}
                        {project.descriptionParts && project.descriptionParts.map((part, index) => (
                            <p key={`desc-part-${index}`} dangerouslySetInnerHTML={{ __html: part }}></p>
                        ))}
                    </div>

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

                {/* 4. Texto inferior + Galería */}
                {(project.descriptionBottomText && project.descriptionBottomText.length > 0 ||
                    project.gallery && project.gallery.length > 0) && (
                        <div className={styles.bottomContentGrid}>
                            {project.gallery && project.gallery.length > 0 && (
                                <motion.div
                                    className={styles.combinedPhotoGallery}
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, amount: 0.4 }}
                                    transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
                                >
                                    {/* Fila superior */}
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
                                                onClick={() => openImageModal(image)}
                                            />
                                        ))}
                                    </div>

                                    {/* Fila inferior */}
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
                                                onClick={() => openImageModal(image)}
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

            {/* Modal de Imagen con navegación */}
            {isImageModalOpen && currentIndex !== null && (
                <motion.div
                    className={styles.imageModalOverlay}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    onClick={closeImageModal}
                >
                    <button className={styles.imageModalPrev} onClick={showPrevImage}>
                        &#10094;
                    </button>
                    <motion.img
                        src={allImages[currentIndex]}
                        alt="Imagen ampliada"
                        className={styles.imageModalContent}
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.8, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        onClick={(e) => e.stopPropagation()}
                    />

                    {/* Flechas de navegación */}

                    {/* Botón cerrar */}
                    <button className={styles.imageModalNext} onClick={showNextImage}>
                        &#10095;
                    </button>
                    <button className={styles.imageModalCloseButton} onClick={closeImageModal}>
                        &times;
                    </button>
                </motion.div>
            )}
        </>
    );
};

export default ProjectDetail;
