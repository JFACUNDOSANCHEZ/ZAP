import React, { useState } from 'react';
import styles from './Reviews.module.css';
import { motion, AnimatePresence } from 'framer-motion';
import r1 from '../../assets/rv1.jpeg';

const reviewsData = [
  {
    id: 1,
    text: "Chicas gracias x todo el laburo y predisposición para esta Feria! Siempre se trabaja a contra reloj y apurados en estas ocasiones, pero muchas gracias x su compromiso!",
    author: "Veronica Taglioretti.",
    company: "Coating.Tech.",
    imageSrc:r1
  },

];

const Reviews = () => {
    const [currentReviewIndex, setCurrentReviewIndex] = useState(0);

    const handleNext = () => {
        setCurrentReviewIndex((prevIndex) => 
            prevIndex === reviewsData.length - 1 ? 0 : prevIndex + 1
        );
    };

    const handlePrev = () => {
        setCurrentReviewIndex((prevIndex) => 
            prevIndex === 0 ? reviewsData.length - 1 : prevIndex - 1
        );
    };

    const currentReview = reviewsData[currentReviewIndex];

    return (
        <section className={styles.reviewsSection}>
            <div className={styles.reviewsHeader}>
                <h2 className={styles.reviewsTitle}>Lo que dicen nuestros clientes</h2>
                <p className={styles.reviewsSubtitle}>Historias de éxito que inspiran</p>
            </div>
            
            <div className={styles.carouselContainer}>
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentReview.id}
                        className={styles.reviewCard}
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -100 }}
                        transition={{ duration: 0.5 }}
                    >
                        <p className={styles.reviewText}>"{currentReview.text}"</p>
                        <div className={styles.authorInfo}>
                            <img src={currentReview.imageSrc} alt={`Foto de ${currentReview.author}`} className={styles.reviewImage} />
                            <div className={styles.authorDetails}>
                                <p className={styles.reviewAuthor}>- {currentReview.author}</p>
                                <p className={styles.reviewCompany}>{currentReview.company}</p>
                            </div>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>

            <div className={styles.navigation}>
                <button onClick={handlePrev} className={styles.navButton}>&larr; Anterior</button>
                <button onClick={handleNext} className={styles.navButton}>Siguiente &rarr;</button>
            </div>
        </section>
    );
};

export default Reviews; 