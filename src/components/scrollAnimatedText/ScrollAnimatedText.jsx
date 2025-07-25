// src/components/ScrollAnimatedText/ScrollAnimatedText.jsx
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import styles from './ScrollAnimatedText.module.css'; // Crea este CSS Module

const ScrollAnimatedText = ({ text, delay = 0, speed = 0.5 }) => {
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"] // Rastrea cuando el elemento entra y sale de la vista
  });

  // Ajusta el rango de movimiento con el 'speed'
  // Si speed es 0.5, se moverá la mitad de lo que se mueva el scroll del elemento.
  const y = useTransform(scrollYProgress, [0, 1], [-50 * speed, 50 * speed]); // Mueve de -50px a 50px

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: delay, ease: "easeOut" } }
  };

  return (
    <motion.div
      ref={ref}
      className={styles.scrollTextWrapper}
      variants={variants}
      initial="hidden"
      whileInView="visible" // Se anima cuando entra en la vista
      viewport={{ once: true, amount: 0.5 }} // Se anima una vez cuando el 50% es visible
      style={{ y: y }} // Aplica la transformación Y basada en el scroll
    >
      <p className={styles.text}>{text}</p>
    </motion.div>
  );
};

export default ScrollAnimatedText;