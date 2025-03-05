import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow } from "swiper/modules";
import { useState, useEffect } from "react";

const slides = [1, 2, 3 , 1, 2 , 3];

const Slider = () => {

  return (
    <div className="flex justify-center items-center">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3} 
        loop={true} 
        spaceBetween={10}
        loopAdditionalSlides={1}
        initialSlide={2}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 68,
          modifier: 1.2,
          slideShadows: false,
        }}
        breakpoints={{
          576: {spaceBetween: 50   } ,
          1187: {spaceBetween: 100   } ,
          1263: { spaceBetween: 100 }, // Tablets
          1290: { spaceBetween: 200 }, // Laptops
          1890: { spaceBetween: 250 }, // Larger screens
        }}
        modules={[EffectCoverflow]}
        className="max-w-[85%]"
      >
        {slides.map((num) => (
          <SwiperSlide key={num} className="flex  justify-center items-center">
            <div className=" flex flex-col justify-between items-center">
                <div className="w-full h-90 bg-[#a6a7a7] flex items-center justify-center rounded-lg text-white text-xl font-bold transition-all duration-300">
                    {num}
                </div>
                <div className="w-[80%] rounded-full flex justify-center items-center bg-[#cacbca]  my-5 h-10">
                    {num}
                </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Slider
