import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


// import required modules
import { Autoplay } from "swiper";

export default function Swipeer() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="mySwiper container mt-32"
      >
        <SwiperSlide>
        < div className="flex flex-col items-center gap-y-8">  
               <p className="text-xl md:text-4xl text-white font">
                        “Easily, the best design and development studio we’ve worked with throughout the years”
                    </p>
                    <div className="w-2/4 border border-neutral-700 h-0"></div>
                    <p className="text-base text-white font">
                        Dovid Efune - Founder & Chairman
                    </p>
                    <img src="../images/sunlogo.svg" alt="" className="" />
                    </div>  
        </SwiperSlide>
        <SwiperSlide>
        < div className="flex flex-col items-center gap-y-8">  
               <p className="text-xl md:text-4xl text-white">
                        “Easily, the best design and development studio we’ve worked with throughout the years”
                    </p>
                    <div className="w-2/4 border border-neutral-700 h-0"></div>
                    <p className="text-base text-white">
                        Dovid Efune - Founder & Chairman
                    </p>
                    <img src="../images/sunlogo.svg" alt="" className="" />
                    </div>  
        </SwiperSlide>
        <SwiperSlide>
            
        < div className="flex flex-col items-center gap-y-8">  
               <p className="text-xl md:text-4xl text-white">
                        “Easily, the best design and development studio we’ve worked with throughout the years”
                    </p>
                    <div className="w-2/4 border border-neutral-700 h-0"></div>
                    <p className="text-base text-white">
                        Dovid Efune - Founder & Chairman
                    </p>
                    <img src="../images/sunlogo.svg" alt="" className="" />
                    </div>  
        </SwiperSlide>
        <SwiperSlide>
            
            < div className="flex flex-col items-center gap-y-8">  
                   <p className="text-xl md:text-4xl text-white">
                            “Easily, the best design and development studio we’ve worked with throughout the years”
                        </p>
                        <div className="w-2/4 border border-neutral-700 h-0"></div>
                        <p className="text-base text-white">
                            Dovid Efune - Founder & Chairman
                        </p>
                        <img src="../images/sunlogo.svg" alt="" className="" />
                        </div>  
            </SwiperSlide>
            <SwiperSlide>
            
            < div className="flex flex-col items-center gap-y-8">  
                   <p className="text-xl md:text-4xl text-white">
                            “Easily, the best design and development studio we’ve worked with throughout the years”
                        </p>
                        <div className="w-2/4 border border-neutral-700 h-0"></div>
                        <p className="text-base text-white">
                            Dovid Efune - Founder & Chairman
                        </p>
                        <img src="../images/sunlogo.svg" alt="" className="" />
                        </div>  
            </SwiperSlide>
      </Swiper>
    </>
  );
}