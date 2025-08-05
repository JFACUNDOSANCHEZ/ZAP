// src/data/projects.js
// Importa todas tus imágenes para que estén disponibles
import project3Img from '../assets/project3.png';
import project4Img from '../assets/project4.png';
import project5Img from '../assets/MartosMañaP.png';
import project6Img from '../assets/project6.png';
import project7Img from '../assets/OrusPr.png';
import project8Img from '../assets/project8.png';
import project1Img from '../assets/AKOP.png';
import project10mg from '../assets/AKOPR.png';
import project2Img from '../assets/DaseinP.png';

const projects = [
  {
    id: '1', // ID único corregido
    imageSrc: project6Img,
    title: 'Marca de Restaurante Japonés',
    category: 'Branding & Food Photography',
    description: 'Este proyecto de branding se centró en capturar la esencia minimalista y elegante de la cocina japonesa. Desarrollamos una identidad visual completa, desde el logo hasta los menús y la fotografía de alimentos, para una experiencia de marca cohesiva y memorable.',
    fullImages: [project6Img, project7Img, project8Img],
  },
  {
    id: '2', // ID único corregido
    imageSrc: project1Img,
    title: 'Campaña "Asian Bites"',
    category: 'Publicidad Digital',
    description: 'Para esta campaña publicitaria, creamos una serie de anuncios digitales dinámicos y atractivos, diseñados para generar un alto engagement en redes sociales y dirigir tráfico al sitio web del cliente.',
    fullImages: [project1Img, project2Img],
  },
  {
    id: '3', // ID único corregido
    imageSrc: project5Img,
    title: 'Rediseño Web Gastronómico',
    category: 'Web Development',
    description: 'Desarrollamos una nueva página web optimizada para móviles, con una interfaz intuitiva y un diseño limpio que resalta los productos y facilita el proceso de reserva online.',
    fullImages: [project5Img, project4Img],
  },
  {
    id: '4', // ID único corregido
    imageSrc: project2Img,
    title: 'Menú Digital Interactivo',
    category: 'Diseño UX/UI',
    description: 'Diseñamos una experiencia de usuario fluida y visualmente atractiva para un menú digital, permitiendo a los clientes explorar los platos con descripciones detalladas e imágenes de alta calidad directamente desde sus dispositivos móviles.',
    fullImages: [project2Img, project1Img],
  },
  {
    id: '5', // ID único corregido
    imageSrc: project7Img,
    title: 'Estrategia de Contenido Culinario',
    category: 'Marketing Digital',
    description: 'Descripción detallada de la estrategia de contenido para un restaurante, incluyendo la planificación de campañas y la gestión de redes sociales.',
    fullImages: [project7Img, project8Img],
  },
  {
    id: '6', // ID único corregido
    imageSrc: project10mg,
    title: 'Packaging para Alimentos',
    category: 'Diseño de Producto',
    description: 'Diseñamos soluciones de empaque creativas y sostenibles, enfocadas en la experiencia del usuario y la visibilidad de la marca en el punto de venta.',
    fullImages: [project10mg, project7Img],
  },
  // Puedes seguir añadiendo más proyectos aquí
];

export default projects;