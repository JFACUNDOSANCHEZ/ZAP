// src/components/Reviews.js
import React from 'react';
import styles from './Reviews.module.css';

// Podemos usar iconos de estrellas de React-Icons para mejor control
// Si no tienes react-icons instalado: npm install react-icons
import { FaStar } from 'react-icons/fa';


const reviews = [
  {
    id: 1,
    name: 'Dr. Juan Pérez', // Añadimos "Dr." o un título para más credibilidad
    title: 'Jefe de Radiología, Clínica del Sol', // Añadimos un título o cargo
    review: 'Desde que implementamos este sistema, nuestros tiempos de respuesta se redujeron casi a la mitad. La visualización de estudios es rápida, intuitiva y nos permite colaborar fácilmente con otros especialistas. Una herramienta imprescindible para nuestro trabajo diario.',
    rating: 5,
    image: 'https://randomuser.me/api/portraits/men/1.jpg',
  },
  {
    id: 2,
    name: 'Dra. María López',
    title: 'Directora Médica, Hospital Central',
    review: 'Lo que más valoro es la facilidad con la que puedo acceder a los estudios desde cualquier terminal. El sistema es ágil, estable y realmente pensado para el entorno hospitalario. La curva de aprendizaje fue muy corta.',
    rating: 4,
    image: 'https://randomuser.me/api/portraits/women/2.jpg',
  },
 
  {
    id: 4,
    name: 'Lic. Ana Fernández',
    title: 'Administradora de Sistemas, Centro Médico Integral',
    review: 'La seguridad de los datos y la facilidad de integración con nuestros sistemas existentes fue clave. El equipo de soporte técnico es excepcional y siempre está dispuesto a ayudar. Superó nuestras expectativas.',
    rating: 5,
    image: 'https://randomuser.me/api/portraits/women/4.jpg',
  },
];

const Reviews = () => {
  return (
    <section className={styles.reviewsSection}> {/* Usamos <section> para semántica y consistencia */}
      <h2 className={styles.mainTitle}>Lo que dicen nuestros usuarios</h2> {/* Título más descriptivo */}
      <p className={styles.mainSubtitle}>Descubre cómo nuestra plataforma está transformando la práctica médica diaria.</p>

      <div className={styles.reviewsList}>
        {reviews.map((review) => (
          <div key={review.id} className={styles.reviewCard}>
            <div className={styles.rating}>
              {/* Estrellas rellenas */}
              {[...Array(review.rating)].map((_, i) => (
                <FaStar key={i} className={styles.starFilled} />
              ))}
              {/* Estrellas vacías */}
              {[...Array(5 - review.rating)].map((_, i) => (
                <FaStar key={i + review.rating} className={styles.starEmpty} />
              ))}
            </div>
            {/* Eliminamos el <br /> */}
            <p className={styles.reviewText}>{review.review}</p>
            <div className={styles.userInfo}>
              <img
                src={review.image}
                alt={review.name}
                className={styles.userImage}
              />
              <div className={styles.userNameRole}>
                <h3 className={styles.reviewerName}>{review.name}</h3>
                <p className={styles.reviewerTitle}>{review.title}</p> {/* Nuevo elemento para el título/cargo */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Reviews;