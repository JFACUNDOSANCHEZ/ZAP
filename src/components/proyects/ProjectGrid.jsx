import React from 'react';
import { motion } from 'framer-motion';
import ProjectItem from './ProjectItem';
import styles from './ProjectGrid.module.css';
import projectsData from '../../data/projects'; // ¡Importamos los datos de aquí!

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
          Últimos Trabajos:
        </motion.h2>
        <motion.p
          className={styles.projectSectionDescription}
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.7, ease: "easeOut" }}
        >
          Nuestros proyectos reflejan nuestra pasión por el diseño y la innovación
        </motion.p>
      </div>

      <div className={styles.gridContainer}>
        {projectsData.map(project => (
          <ProjectItem
            key={project.id}
            id={project.id} // <-- ¡CAMBIO CLAVE! Pasamos el ID del proyecto a ProjectItem
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