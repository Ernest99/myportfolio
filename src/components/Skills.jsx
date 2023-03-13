import React from 'react'
import './skills.css'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/swiper.min.css';

import { data } from '../utils/data'

const slides = data.map(({id,img}) => (
  <SwiperSlide key={id}>
    <div className="skill_container">
    <div className="swiper-item">
       <img src={img} alt="" />
    </div>
    </div>
  </SwiperSlide>
));

const Skills = () => {
  return (
    
    <Swiper
      spaceBetween={16}
      slidesPerView={4}
      grabCursor={true}
      loop={true}
      //centeredSlides={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false
      }}
    >
      {slides}
    </Swiper>
  )
}

export default Skills
