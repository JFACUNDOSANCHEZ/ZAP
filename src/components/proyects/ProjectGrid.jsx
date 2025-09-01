import React from 'react';
import ProjectItem from './ProjectItem';
import styles from './ProjectGrid.module.css';
import projectsData from '../../data/projects'; // ¡Importamos los datos de aquí!

const ProjectGrid = () => {
    return (
        <section className={styles.projectGridSection}>
            <div className={styles.projectIntroHeader}>
                <h2 className={styles.projectSectionTitle}>
                    Marcas que conectan. <br /> Proyectos que impactan.
                </h2>
                <p className={styles.projectSectionDescription}>
                    Nuestros proyectos reflejan nuestra pasión por el diseño y la innovación
                </p>
            </div>

          <div className={styles.gridContainer}>
  {projectsData.map(project => (
    <ProjectItem
      key={project.id}
      id={project.id}
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