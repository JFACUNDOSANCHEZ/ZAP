import React from 'react';
import { Link } from 'react-router-dom';
import { useSpring, animated } from 'react-spring'; // ¡Importamos el hook y el componente `animated`!
import styles from './ProjectGrid.module.css';

const ProjectItem = ({ id, imageSrc, title, category }) => {
    // Usamos el hook useSpring para definir la animación de entrada
    const springProps = useSpring({
        from: { opacity: 0, transform: 'translate3d(0, 20px, 0)' },
        to: { opacity: 1, transform: 'translate3d(0, 0, 0)' },
        config: { mass: 1, tension: 280, friction: 60 } // Puedes ajustar estos valores para cambiar la "sensación" de la animación
    });

    return (
        <animated.div style={springProps}>
            <Link to={`/proyectos/${id}`} className={styles.projectItem}>
                <img src={imageSrc} alt={title} className={styles.projectImage} />
                <div className={styles.overlay}>
                    <h3 className={styles.overlayTitle}>{title}</h3>
                    <p className={styles.overlayCategory}>{category}</p>
                </div>
            </Link>
        </animated.div>
    );
};

export default ProjectItem;