// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles



import React, { useRef, useState } from "react";
// Import Swiper React components

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-flip"
import "swiper/css/pagination"
import "swiper/css/navigation"

import "./styles.css";


// import Swiper core and required modules
import SwiperCore, {
  EffectFlip,Pagination,Navigation
} from 'swiper';

// install Swiper modules
SwiperCore.use([EffectFlip,Pagination,Navigation]);


const Sliding = () => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
  
    <>
    <Swiper effect={'flip'} grabCursor={true} pagination={true} navigation={true} className="mySwiper">
  <SwiperSlide><img src="https://swiperjs.com/demos/images/nature-1.jpg" /></SwiperSlide><SwiperSlide><img src="https://swiperjs.com/demos/images/nature-2.jpg" /></SwiperSlide><SwiperSlide><img src="https://swiperjs.com/demos/images/nature-3.jpg" /></SwiperSlide><SwiperSlide><img src="https://swiperjs.com/demos/images/nature-4.jpg" /></SwiperSlide><SwiperSlide><img src="https://swiperjs.com/demos/images/nature-5.jpg" /></SwiperSlide><SwiperSlide><img src="https://swiperjs.com/demos/images/nature-6.jpg" /></SwiperSlide>
  </Swiper>
    </>
  
      ...
    </Swiper>
  );
};
export default  Sliding;