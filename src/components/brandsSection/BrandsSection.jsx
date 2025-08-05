// src/components/BrandsSection.jsx
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';

import styles from './BrandsSection.module.css';

import AKO from '../../assets/AKO.png';
import martosMaña from '../../assets/martosMaña.png';
import CuartoSabor from '../../assets/CuartoSabor.png';
import ReggiaHome from '../../assets/ReggiaHome.png';
import TANTAL from '../../assets/TANTAL.png';
import LA40 from '../../assets/LA40.png';

const brands = [martosMaña, AKO, CuartoSabor, ReggiaHome, TANTAL, LA40];

const BrandsSection = () => {
 return (
 <section className={styles.brandsSection}>
 {/* <h2 className={styles.title}>
 TRABAJAMOS CON LAS MARCAS MÁS GRANDES DEL MUNDO </h2> */}
  <Swiper
 modules={[Autoplay]}
 spaceBetween={30}
 slidesPerView={5}
 autoplay={{
 delay: 0,
 disableOnInteraction: false,
 pauseOnMouseEnter: true,
 }}
 speed={10000} /* La velocidad ha sido ajustada a 10 segundos por ciclo */
 loop={true}
 breakpoints={{
 320: { slidesPerView: 2 },
 640: { slidesPerView: 3 },
 1024: { slidesPerView: 5 },
 }}
 className={styles.carousel}
>
 {brands.map((logo, index) => (
 <SwiperSlide key={index} className={styles.slide}>
 <img src={logo} alt={`brand-${index}`} />
 </SwiperSlide>
 ))}
</Swiper>
</section>
 );
};

export default BrandsSection;