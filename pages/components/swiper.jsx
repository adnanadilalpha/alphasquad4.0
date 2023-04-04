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
        className="mySwiper container mt-32 text-center"
      >
        <SwiperSlide>
        < div className="flex flex-col items-center gap-y-8">  
               <p className="text-xl md:text-3xl text-white font">
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
        < div className="flex flex-col items-center gap-y-8 font">  
               <p className="text-xl md:text-3xl text-white">
               "Literally the best development team, ever."
                    </p>
                    <div className="w-2/4 border border-neutral-700 h-0"></div>
                    <p className="text-base text-white">
                    Benjamin Lehrer - Project Coordinator
                    </p>
                    <img src="../images/ashlogo.svg" alt="" className=""/>
                    </div>  
        </SwiperSlide>
        <SwiperSlide>
            
        < div className="flex flex-col items-center gap-y-8 font">  
               <p className="text-xl md:text-3xl text-white">
               “Excellent experience with AlphaSquad! they jumped right into the project,
                                 were exceptionally communicative,
                                 and offered suggestions improvements beyond the original "ask." They didn't need to ask many questions,
                                 worked crazy fast, 
                                 and acted very empowered throughout the process.”
                    </p>
                    <div className="w-2/4 border border-neutral-700 h-0"></div>
                    <p className="text-base text-white">
                    Benjamin Lehrer - Project Coordinator
                    </p>
                    <img src="../images/randyslogo.svg" alt="" className=""/>
                    </div>  
        </SwiperSlide>
        <SwiperSlide>
            < div className="flex flex-col items-center gap-y-8 font">  
                   <p className="text-xl md:text-3xl text-white">
                   “Loved working with AlphaSquad. Great leaders and skilled professionals in the creation of a SaaS solution.”
                        </p>
                        <div className="w-2/4 border border-neutral-700 h-0"></div>
                        <p className="text-base text-white">
                        Kees Van Velzen - Managing Director
                        </p>
                        <img src="../images/maeckerslogo.svg" alt="" className=""/>
                        </div>  
            </SwiperSlide>
            <SwiperSlide>
            
            < div className="flex flex-col items-center gap-y-8 font">  
                   <p className="text-xl md:text-3xl text-white">
                   “AlphaSquad is amazing ! I highly recommend using them as they did an amazing job on my UX/UI design.. I will be back”
                        </p>
                        <div className="w-2/4 border border-neutral-700 h-0"></div>
                        <p className="text-base text-white">
                        Verinder Grewal - Founder 
                        </p>
                        <img src="../images/enterlogo.svg" alt="" className=""/>
                        </div>  
            </SwiperSlide>
      </Swiper>
    </>
  );
}