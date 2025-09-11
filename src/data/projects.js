// Importa todas tus imágenes para que estén disponibles
import project03Img from '../assets/AkoAgro/AKOP.webp';
import project13Img from '../assets/AkoAgro/3.webp';
import project12Img from '../assets/AkoAgro/4.webp';
import project11Img from '../assets/AkoAgro/5.webp';
import project14Img from '../assets/AkoAgro/6.webp';
import project15Img from '../assets/AkoAgro/7.webp';


import project04Img from '../assets/DivinaTierra/1.webp';
import project22Img from '../assets/DivinaTierra/2.webp';
import project23Img from '../assets/DivinaTierra/3.webp';
import project24Img from '../assets/DivinaTierra/4.webp';
import project25Img from '../assets/DivinaTierra/5.webp';
import project26Img from '../assets/DivinaTierra/6.webp';
import project27Img from '../assets/DivinaTierra/7.webp';

import project31Img from '../assets/Mufa/1.webp';
import project32Img from '../assets/Mufa/2.webp';
import project33Img from '../assets/Mufa/3.webp';
import project34Img from '../assets/Mufa/4.webp';
import project35Img from '../assets/Mufa/5.webp';
import project36Img from '../assets/Mufa/6.webp';
import project37Img from '../assets/Mufa/7.webp';



import project41Img from '../assets/Marull/1.webp';
import project42Img from '../assets/Marull/2.webp';
import project43Img from '../assets/Marull/3.webp';
import project44Img from '../assets/Marull/4.webp';
import project45Img from '../assets/Marull/5.webp';
import project46Img from '../assets/Marull/6.webp';
import project47Img from '../assets/Marull/7.webp';

import project51Img from '../assets/Kromos/1.webp';
import project52Img from '../assets/Kromos/2.webp';
import project53Img from '../assets/Kromos/3.webp';
import project54Img from '../assets/Kromos/4.webp';
import project55Img from '../assets/Kromos/5.webp';
import project56Img from '../assets/Kromos/6.webp';
import project57Img from '../assets/Kromos/7.webp';

import project61Img from '../assets/Orus/1.webp';
import project62Img from '../assets/Orus/2.webp';
import project63Img from '../assets/Orus/3.webp';
import project64Img from '../assets/Orus/4.webp';
import project65Img from '../assets/Orus/5.webp';
import project66Img from '../assets/Orus/6.webp';
import project67Img from '../assets/Orus/7.webp';

import project71Img from '../assets/Dasein/1.webp';
import project72Img from '../assets/Dasein/2.webp';
import project73Img from '../assets/Dasein/3.webp';
import project74Img from '../assets/Dasein/4.webp';
import project75Img from '../assets/Dasein/5.webp';
import project76Img from '../assets/Dasein/6.webp';
import project77Img from '../assets/Dasein/7.webp';

import project90Img from '../assets/Punto33/1.webp';
import project99Img from '../assets/Punto33/2.webp';
import project93Img from '../assets/Punto33/3.webp';
import project94Img from '../assets/Punto33/4.webp';
import project95Img from '../assets/Punto33/5.webp';
import project96Img from '../assets/Punto33/6.webp';
import project97Img from '../assets/Punto33/7.webp';


const projects = [
    {
        id: '8', 
        imageSrc: project90Img,
        title: 'Punto 33',
        category: 'Diseño de Producto',
        descriptionParts: [ // Texto a la izquierda
            'Diseñamos soluciones de empaque creativas y sostenibles, enfocadas en la experiencia del usuario y la visibilidad de la marca en el punto de venta.'
        ],
        mainText: '', // Vacío o puedes usarlo si quieres un primer párrafo separado en descriptionParts
        parallaxImage: project99Img,
        descriptionBottomText: [], // No hay texto adicional para este proyecto en la parte inferior
        gallery: [
            project93Img,
            project94Img,
            project95Img,
            project96Img,
            project97Img
        ],
    },
    {
        id: '7', 
        imageSrc: project72Img,
        title: 'Dasein: Diseño y Cálculo Estructural',
        category: 'Aquí, el minimalismo se encuentra con la fuerza del brutalismo',
        descriptionParts: [ // Texto a la izquierda
            'En Dasein, cada proyecto es una declaración. Hemos concebido una pieza geométrica única, donde la abstracción de la letra "D" surge de la fusión de elementos. <br/> Este símbolo no es solo un logo; es un <strong> lenguaje visual robusto <strong/> que encarna nuestros valores',' Aquí, el minimalismo se encuentra con la fuerza del brutalismo. Los cortes limpios y nuestra impresión 3D abstracta dan vida a un símbolo potente y esencial.',
           
        ],
        mainText: '', // Vacío
        parallaxImage: project71Img,
        descriptionBottomText: [ // Texto debajo de la imagen de paralaje
            
        
             'Esto es Dasein: la identidad inconfundible de nuestra marca.'
        ],
        gallery: [
            project73Img,
            project74Img,
            project75Img,
            project76Img,
            project77Img,
        ],
    },
{
    id: '2', 
    imageSrc: project04Img,
    title: 'Divina Tierra', // Este title se usa en h1, no lo pondremos aquí en negrita si ya es un título
    category: 'Transformar el concepto "Alimento Libre" en una marca coherente y honesta', // Esto es un category, no texto de párrafo.
    descriptionParts: [ // Texto a la izquierda
        // Primer párrafo: "Divina Tierra fue transformar el concepto "Alimento Libre" en una marca coherente y honesta. El tagline es la esencia: una declaración de principios que habla de libertad y pureza."
        '<strong>Divina Tierra</strong> fue transformar el concepto "<em>Alimento Libre</em>" en una marca coherente y honesta. El <em>tagline</em> es la esencia: una declaración de principios que habla de libertad y pureza.',
        
        // Segundo párrafo: "El diseño se centró en una estética rústica y moderna, con una paleta de colores inspirada en la tierra, para reflejar la autenticidad del producto. El logo fue concebido como un sello de garantía que certifica el origen de los huevos de gallinas criadas en libertad."
        'El diseño se centró en una estética rústica y moderna, con una paleta de colores inspirada en la tierra, para reflejar la autenticidad del producto.',' El logo fue concebido como un sello de garantía que certifica el origen de los huevos de gallinas criadas en libertad.',
    ],
    mainText: '', // Vacío, ya que el contenido se dividió
    parallaxImage: project22Img,
    descriptionBottomText: [ // Texto debajo de la imagen de paralaje
        // Tercer párrafo: "Cada decisión visual se tomó para contar la historia de Divina Tierra: una marca que celebra la conexión con la naturaleza y el respeto por la vida animal."
        'Cada decisión visual se tomó para contar la historia de Divina Tierra: una marca que celebra la conexión con la naturaleza y el respeto por la vida animal.'
    ],
    gallery: [
        project23Img,
        project24Img,
        project25Img,
        project26Img,
        project27Img,
    ],
},
    
    {
    id: '1', 
    imageSrc: project03Img,
    title: 'Ako Agro',
    category: 'Creamos una identidad de marca que resonara con innovación y eficiencia en la agricultura',
    descriptionParts: [ // Texto a la izquierda
        // Primer párrafo: "Para Ako Agro, creamos una identidad de marca que resonara con innovación y eficiencia en la agricultura. Entendimos que el futuro del campo exigía soluciones optimizadas y sostenibles, y la marca debía reflejar esa promesa."
        // Este párrafo parece ser una combinación de los primeros dos de tu ejemplo anterior.
        // Si es un solo párrafo como en la imagen, lo pondrías así:
        'Para <strong>Ako Agro</strong>, creamos una identidad de marca que resonara con <strong>innovación</strong> y <strong>eficiencia</strong> en la agricultura. Entendimos que el futuro del campo exigía soluciones optimizadas y sostenibles, y la marca debía reflejar esa promesa.'
    ,        'Nuestro enfoque de branding fue posicionar a Ako Agro como un <strong>aliado estratégico</strong> y <strong>confiable</strong>. Desarrollamos un lenguaje visual y verbal que proyecta <strong>modernidad</strong> y <strong>solidez</strong>, con elementos que evocan crecimiento y tecnología. El objetivo: que la marca comunicara <strong>calidad</strong>, <strong>confianza</strong> y <strong>resultados tangibles</strong>, distinguiéndose en el mercado.',
    ],
    mainText: '', // Vacío
    parallaxImage: project13Img,
    descriptionBottomText: [ // Texto debajo de la imagen de paralaje
        // Segundo párrafo: "Nuestro enfoque de branding fue posicionar a Ako Agro como un aliado estratégico y confiable. Desarrollamos un lenguaje visual y verbal que proyecta modernidad y solidez, con elementos que evocan crecimiento y tecnología. El objetivo: que la marca comunicara calidad, confianza y resultados tangibles, distinguiéndose en el mercado."

        
        // Tercer párrafo: "Cada detalle de la marca se diseñó para construir una identidad fuerte y relevante, simbolizando una promesa de crecimiento y prosperidad para el sector agropecuario."
        'Cada detalle de la marca se diseñó para construir una identidad fuerte y relevante, simbolizando una promesa de <strong>crecimiento</strong> y <strong>prosperidad</strong> para el sector agropecuario.'
    ],
    gallery: [
        project12Img,
        project11Img,
        project12Img,
        project13Img,
        project14Img,
        project15Img
    ],
},
    {
        id: '3',
        imageSrc: project31Img,
        title: 'MUFA',
        category: 'El verdadero sabor de la tradición italiana con una actitud que te dejará sin aliento.',
        descriptionParts: [ // Texto a la izquierda
            'Con la pasión de Maxi y Negra, que llevan más de una década deleitando a la provincia de Córdoba con sus 12 exitosos locales gastronómicos, nace<strong> MUFA</strong>.',
            'Esta no es solo una marca, es una declaración de intenciones. MUFA fusiona la audacia de lo contemporáneo con la tradición culinaria de Italia.',
            'Su estilo es provocador, agresivo y auténtico, diseñado para quienes buscan una experiencia que va más allá de lo convencional en Córdoba.', 'Cada plato de MUFA es una explosión de sabores intensos, un guiño a la esencia italiana sin dejar de lado la innovación. Es la representación de un espíritu libre y fuerte, que se refleja tanto en su cocina como en su identidad visual.'
        ],
        mainText: '', // Vacío
        parallaxImage: project32Img,
        descriptionBottomText: [ // Texto debajo de la imagen de paralaje
           ,
            'MUFA: El verdadero sabor de la tradición italiana con una actitud que te dejará sin aliento. Cada detalle, desde el packaging hasta la comunicación, grita pasión y herencia italiana, pero con un twist moderno que desafía lo establecido.'
        ],
        gallery: [
            project33Img,
            project34Img,
            project35Img,
            project36Img,
            project37Img,
        ],
    },
  {
    id: '4', 
    imageSrc: project41Img,
    title: 'Marull Inmobiliaria',
    category: 'Un rebranding con historia', // El título "Un rebranding con historia" parece ser la categoría o un subtítulo de la sección
    descriptionParts: [ // Texto que aparece a la izquierda (según tu ProjectDetail.jsx)
        // Primer párrafo de la imagen: "El rebranding de Marull Inmobiliaria fue un paso natural para una empresa que, desde hace años, ha sido un referente en la zona sur de Córdoba. Con ese cambio de imagen, buscamos reflejar no solo una estética moderna, sino también la evolución de una relación de confianza y compromiso que se construyó a lo largo de décadas con nuestros clientes."
        'El <strong>rebranding de Marull Inmobiliaria</strong> fue un paso natural para una empresa que, desde hace años, ha sido un referente en la zona sur de Córdoba. Con ese cambio de imagen, buscamos reflejar no solo una estética moderna, sino también la evolución de una relación de confianza y compromiso que se construyó a lo largo de décadas con nuestros clientes.',   'Nuestra nueva cara fue el resultado de la misma pasión y dedicación de siempre. Nos reinventamos para seguir a la vanguardia, pero mantuvimos intactos los valores que nos caracterizan.',
    ],
    // NOTA: El mainText lo dejé vacío como lo tenías, asumiendo que el texto principal se maneja con descriptionParts
    mainText: '', 
    parallaxImage: project42Img, // Esta imagen se usará como paralaje
    descriptionBottomText: [ // Texto debajo de la imagen de paralaje (según tu ProjectDetail.jsx)
        // Segundo párrafo de la imagen: "Nuestra nueva cara fue el resultado de la misma pasión y dedicación de siempre. Nos reinventamos para seguir a la vanguardia, pero mantuvimos intactos los valores que nos caracterizan."
     
        
        // Tercer párrafo de la imagen: "Hoy, la marca Marull es el resultado de la confianza que, generación tras generación, la gente de Córdoba nos ha otorgado. Nos enorgullece ser la inmobiliaria que combina la tradición y experiencia de siempre con una visión moderna e innovadora."
        'Hoy, la marca Marull es el resultado de la confianza que, generación tras generación, la gente de Córdoba nos ha otorgado. Nos enorgullece ser la inmobiliaria que combina la tradición y experiencia de siempre con una visión moderna e innovadora.'
    ],
    gallery: [
        project43Img,
        project44Img,
        project45Img,
        project46Img,
        project47Img,
    ],
},
 {
    id: '6', 
    imageSrc: project61Img,
    title: 'ORUS®: Data Water Solutions', // El título principal ya está negrita por ser h1
    category: 'ORUS trae una solución única e innovadora para la gestión del agua en América Latina', // Esto se verá normal en la categoría
    descriptionParts: [ // Texto a la izquierda
        // Primer párrafo de la imagen
        'ORUS trae una solución única e innovadora para la gestión del agua en América Latina. <br/> Aprovechamos <strong>técnicas de velocimetría por imágenes</strong> para medir remotamente los caudales en cursos de agua, <br/> proporcionando datos cruciales para una <strong>gestión sostenible</strong> y la <strong>mitigación del riesgo hídrico</strong>. <br/> Nuestra tecnología avanzada permite a los usuarios monitorear y analizar el comportamiento del agua en tiempo real, <br/> facilitando decisiones informadas para la conservación y el uso eficiente de este recurso vital.',   
    ],
    mainText: '', // Vacío, ya que el contenido se dividió
    parallaxImage: project62Img,
    descriptionBottomText: [ // Texto debajo de la imagen de paralaje
        // Segundo párrafo de la imagen
        'Facilitando decisiones informadas para la conservación y el uso eficiente de este recurso vital'
    ],
    gallery: [
        project63Img,
        project64Img,
        project65Img,
        project66Img,
        project67Img,
    ],
},
  {
    id: '5', 
    imageSrc: project51Img,
    title: 'Kromos', // Este es el título del proyecto
    category: 'Bike Shop Concept', // Dejamos la categoría vacía si "Bike Shop Concept" es parte del primer párrafo
    descriptionParts: [ // Texto que aparece a la izquierda (según tu ProjectDetail.jsx)
        // Primer párrafo de la imagen: "El rebranding de Kromos fue un ejercicio para transformar una tienda de bicicletas en un "Bike Shop Concept". El objetivo fue crear una identidad que comunicara más que una venta: una filosofía."
        'El rebranding de <strong>Kromos</strong> fue un ejercicio para transformar una tienda de bicicletas en un "<strong>Bike Shop Concept</strong>". <br/> El objetivo fue crear una identidad que comunicara más que una venta: una filosofía.','El diseño se centró en el nombre <strong>Kromos</strong> como el ADN de la marca, uniendo el guiño clásico del "cromo" con una visión moderna. <br/> La identidad visual se construyó para ser dinámica y limpia, reflejando la pasión por el ciclismo.',
    ],
    mainText: '', // Vacío, ya que el contenido se dividió
    parallaxImage: project52Img,
    descriptionBottomText: [ // Texto debajo de la imagen de paralaje (según tu ProjectDetail.jsx)
        // Segundo párrafo de la imagen: "El diseño se centró en el nombre Kromos como el ADN de la marca, uniendo el guiño clásico del "cromo" con una visión moderna. La identidad visual se construyó para ser dinámica y limpia, reflejando la pasión por el ciclismo."
        
        
        // Tercer párrafo de la imagen: "Este rebranding es la narrativa de una marca que no solo vende productos, sino que invita a vivir la cultura ciclista."
        'Este rebranding es la narrativa de una marca que no solo vende productos, sino que invita a vivir la cultura ciclista.'
    ],
    gallery: [
        project53Img,
        project54Img,
        project55Img,
        project56Img,
        project57Img,
    ],
},
];

export default projects;