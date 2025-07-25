import React from 'react';
import { motion } from 'framer-motion'; // Importa motion de framer-motion
import ProjectItem from './ProjectItem';
import styles from './ProjectGrid.module.css'; // Importa el CSS Module

// Importa tus imágenes aquí, o pásalas como props
// Ejemplo de importación si tus imágenes están en src/assets/projects/

import project3Img from '../../assets/project3.png';
import project4Img from '../../assets/project4.png';
import project5Img from '../../assets/MartosMañaP.png';

// ía la de los palillos y el bowl
import project6Img from '../../assets/project6.png';
import project7Img from '../../assets/OrusPr.png'; // Esta sería la de los palillos y el bowl
 // Esta sería la de los bombones
import project8Img from '../../assets/project8.png'; // Esta sería la de la fachada del
import project1Img from '../../assets/AKOP.png'; // Esta sería la de los palillos y el bowl
import project10mg from '../../assets/AKOPR.png';
//  sería la de los palillos y el bowl
// / Esta sería la de la fachada del
import project2Img from '../../assets/DaseinP.png'; // Esta sería la de los palillos y el bowl
// Esta sería la de los palillos

// Puedes añadir más si tienes más proyectos

const projectsData = [
  {
    id: 6,
    imageSrc: project6Img, // Esta es la de los palillos y el bowl
    title: 'Marca de Restaurante Japonés', // Título más específico
    category: 'Branding & Food Photography', // Categoría más descriptiva
  },
  {
    id: 10,
    imageSrc: project1Img, // Asumiendo que esta es otra imagen de comida
    title: 'Campaña "Asian Bites"', // Título de campaña o producto
    category: 'Publicidad Digital', // Categoría de servicio
  },
  {
    id: 5,
    imageSrc: project5Img, // Otra imagen de comida
    title: 'Rediseño Web Gastronómico',
    category: 'Web Development',
  },
  {
    id: 22,
    imageSrc: project2Img, // Si es otra imagen de comida, cambia su contenido
    title: 'Menú Digital Interactivo',
    category: 'Diseño UX/UI',
  },
  {
    id: 7,
    imageSrc: project7Img, // Otra imagen de comida
    title: 'Estrategia de Contenido Culinario',
    category: 'Marketing Digital',
  },
  {
    id: 10, // Ojo: tienes dos IDs '10'. Asegúrate de que los IDs sean únicos si los usas para keys.
    imageSrc: project10mg, // Esta podría ser otra imagen relacionada con comida o algo diferente
    title: 'Packaging para Alimentos',
    category: 'Diseño de Producto',
  },
];

// Variantes para la animación del título y la descripción
const headerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut"
    }
  }
};

const ProjectGrid = () => {
  return (
      <section className={styles.projectGridSection}>
      <div className={styles.projectIntroHeader}>
        <motion.h2
          className={styles.projectSectionTitle}
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          {/* CAMBIO AQUÍ: Nuevo título */}
          Nuestro Portafolio de Proyectos {/* O "Casos de Éxito", "Proyectos Destacados", etc. */}
        </motion.h2>
        <motion.p
          className={styles.projectSectionDescription}
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.7, ease: "easeOut" }}
        >


          Explora una selección de nuestros proyectos que reflejan nuestra pasión por el diseño y la innovación
        </motion.p>
        {/* ELIMINAR ESTOS <br /><br /> - Vamos a controlar el espaciado con CSS */}
      </div>

      <div className={styles.gridContainer}>
        {projectsData.map(project => (
          <ProjectItem
            key={project.id}
            imageSrc={project.imageSrc}
            title={project.title}
            category={project.category}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectGrid;