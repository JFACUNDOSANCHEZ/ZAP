// src/data/projects.js
// Importa todas tus imágenes para que estén disponibles
import project03Img from '../assets/AkoAgro/AKOP.webp';
import project13Img from '../assets/AkoAgro/AKOP2.png';
import project12Img from '../assets/AkoAgro/AKOP3.png';
import project11Img from '../assets/AkoAgro/AKOP4.png';

import project04Img from '../assets/DivinaTierra/1DT.png';
import project22Img from '../assets/DivinaTierra/DT22.png';
import project23Img from '../assets/DivinaTierra/DT23.png';
import project24Img from '../assets/DivinaTierra/DT24.png';



import project31Img from '../assets/Mufa/1.webp';
import project32Img from '../assets/Mufa/2.png';
import project33Img from '../assets/Mufa/3.png';
import project34Img from '../assets/Mufa/4.png';



import project41Img from '../assets/Marull/1.webp';
import project42Img from '../assets/Marull/2.png';
import project43Img from '../assets/Marull/3.png';
import project44Img from '../assets/Marull/4.png';




import project51Img from '../assets/Kromos/1.png';
import project52Img from '../assets/Kromos/2.png';
import project53Img from '../assets/Kromos/3.png';
import project54Img from '../assets/Kromos/4.png';


import project61Img from '../assets/Orus/1.webp';
import project62Img from '../assets/Orus/2.png';
import project63Img from '../assets/Orus/3.png';



import project71Img from '../assets/Dasein/1.webp';
import project72Img from '../assets/Dasein/2.png';
import project73Img from '../assets/Dasein/3.png';

import project81Img from '../assets/Punto33/1.webp';
import project82Img from '../assets/Punto33/2.png';
import project83Img from '../assets/Punto33/3.png';




const projects = [
  {
    id: '3', // ID único corregido
    imageSrc: project31Img,
    title: 'Rediseño Web Gastronómico',
    category: 'Web Development',
    description: 'Desarrollamos una nueva página web optimizada para móviles, con una interfaz intuitiva y un diseño limpio que resalta los productos y facilita el proceso de reserva online.',
    fullImages: [project31Img, project32Img, project33Img, project34Img  ],
  },
  {
    id: '2', // ID único corregido
    imageSrc: project04Img,
    title: ' Campaña "Asian Bites"',
    category: 'Publicidad Digital',
    description: 'Para esta campaña publicitaria, creamos una serie de anuncios digitales dinámicos y atractivos, diseñados para generar un alto engagement en redes sociales y dirigir tráfico al sitio web del cliente.',
    fullImages: [project22Img, project23Img,project24Img],
  },
  {
    id: '1', // ID único corregido
    imageSrc: project03Img,
    title: 'Marca de Restaurante Japonés',
    category: 'Branding & Food Photography',
    description: 'Este proyecto de branding se centró en capturar la esencia minimalista y elegante de la cocina japonesa. Desarrollamos una identidad visual completa, desde el logo hasta los menús y la fotografía de alimentos, para una experiencia de marca cohesiva y memorable.',
    fullImages: [project12Img, project11Img, project13Img],
  },
  {
    id: '8', // ID único corregido
    imageSrc: project81Img,
    title: 'Packaging para Alimentos',
    category: 'Diseño de Producto',
    description: 'Diseñamos soluciones de empaque creativas y sostenibles, enfocadas en la experiencia del usuario y la visibilidad de la marca en el punto de venta.',
    fullImages: [project81Img, project82Img, project83Img],
  },
  {
    id: '5', // ID único corregido
    imageSrc: project51Img,
    title: 'Estrategia de Contenido Culinario',
    category: 'Marketing Digital',
    description: 'Descripción detallada de la estrategia de contenido para un restaurante, incluyendo la planificación de campañas y la gestión de redes sociales.',
    fullImages: [project51Img, project52Img, project53Img, project54Img],
  },
  {
    id: '4', // ID único corregido
    imageSrc: project41Img,
    title: 'Menú Digital Interactivo',
    category: 'Diseño UX/UI',
    description: 'Diseñamos una experiencia de usuario fluida y visualmente atractiva para un menú digital, permitiendo a los clientes explorar los platos con descripciones detalladas e imágenes de alta calidad directamente desde sus dispositivos móviles.',
    fullImages: [project41Img, project42Img, project43Img, project44Img ],
  },
  {
    id: '6', // ID único corregido
    imageSrc: project61Img,
    title: 'Packaging para Alimentos',
    category: 'Diseño de Producto',
    description: 'Diseñamos soluciones de empaque creativas y sostenibles, enfocadas en la experiencia del usuario y la visibilidad de la marca en el punto de venta.',
    fullImages: [project61Img, project62Img, project63Img],
  },  
  {
    id: '7', // ID único corregido
    imageSrc: project73Img,
    title: 'Packaging para Alimentos',
    category: 'Diseño de Producto',
    description: 'Diseñamos soluciones de empaque creativas y sostenibles, enfocadas en la experiencia del usuario y la visibilidad de la marca en el punto de venta.',
    fullImages: [project71Img, project72Img, project73Img],
  },
  // Puedes seguir añadiendo más proyectos aquí
];

export default projects;