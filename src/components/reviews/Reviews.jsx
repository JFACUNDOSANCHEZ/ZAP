import React, { useState } from 'react';
import styles from './Reviews.module.css';
import { motion, AnimatePresence } from 'framer-motion';

const reviewsData = [
  {
    id: 1,
    text: "El trabajo de diseño y desarrollo web fue excepcional. Entendieron perfectamente la visión de nuestra marca y la tradujeron en una página web elegante y funcional, optimizada para todos los dispositivos y con una experiencia de usuario impecable. ¡Totalmente recomendado!",
    author: "Sofía M.",
    company: "Gerente de Marketing en XYZ Corp.",
    imageSrc: "https://images.squarespace-cdn.com/content/v1/5d77a7f8ad30356d21445262/1695000300830-5TKAFHC2EBYTTM2QUWUP/fotos-de-perfil-blanco-y-negro.jpg"
  },
  {
    id: 2,
    text: "Estoy muy impresionado con la atención al detalle y la creatividad que se aplicó en mi proyecto. El resultado superó todas mis expectativas. Un verdadero profesional que se toma el tiempo de entender las necesidades del cliente y las convierte en una realidad impactante.",
    author: "Juan C.",
    company: "Emprendedor",
    imageSrc: "https://muhimu.es/wp-content/uploads/2017/04/FRENTE-NITIDA.jpg"
  },
  {
    id: 3,
    text: "Trabajar con este equipo ha sido un placer. La comunicación fue fluida y el resultado final es un diseño de marca que realmente nos representa. Gracias por el increíble trabajo y por hacer de este proceso una experiencia tan positiva.",
    author: "Ana P.",
    company: "Dueña de 'La Dulce Vita'",
    imageSrc: "https://media.glamour.mx/photos/65b096f13756393e0200c63d/16:9/w_2560%2Cc_limit/que-significa-tu-foto-de-perfil.jpg"
  },
  {
    id: 4,
    text: "El profesionalismo y la calidad del trabajo son insuperables. Nuestra nueva identidad visual ha recibido elogios de todos nuestros clientes. Su enfoque estratégico es evidente en cada detalle.",
    author: "Carlos G.",
    company: "Director Creativo en 'Studio Nexus'",
    imageSrc: "https://media.istockphoto.com/id/1090878494/es/foto/retrato-de-joven-sonriente-a-hombre-guapo-en-camiseta-polo-azul-aislado-sobre-fondo-gris-de.jpg?s=612x612&w=0&k=20&c=dHFsDEJSZ1kuSO4wTDAEaGOJEF-HuToZ6Gt-E2odc6U="
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