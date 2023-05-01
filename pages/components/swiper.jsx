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
          delay: 3500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="mySwiper container mt-32 text-center w-111"
      >
        <SwiperSlide>
          <div className="flex flex-col items-center gap-y-8">
            <p className="text-xl md:text-3xl text-neutral-400 font font-normal">
            ‘The man, the myth, the legend. Arslan is a go-getter who’s come through 
            for us numerous times during the last 15 months. 
            Whether it’s coming with complex architectures, 
            meeting crazy deadlines, or leading a team. 
            He is the man to have’
            </p>
            <div className="w-2/4 border border-zinc-400 h-0"></div>
            <p className="text-base text-zinc-400 font">
            Eric Gula - VP, Enterprise Solution Architecture & Delivery
            </p>
            <img src="../images/STAND8.svg" alt="" className="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col items-center gap-y-8 font">
            <p className="text-xl md:text-3xl text-zinc-400 font font-normal">
            “Led by Arslan, this is the the best design and development studio we’ve worked with throughout the years.”
            </p>
            <div className="w-2/4 border border-zinc-400 h-0"></div>
            <p className="text-base text-zinc-400 font">
            Dovid Efune - Founder & Chairman
            </p>
            <img src="../images/sunlogo.svg" alt="" className="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col items-center gap-y-8 font">
            <p className="text-xl md:text-3xl text-zinc-400 leading-10 font font-normal">
            Arslan is an outstanding developer with an unwavering commitment to excellence. 
            His technical skills are second to none, and he always goes 
            above and beyond to deliver high-quality work that meets or 
            exceeds project requirements
            </p>
            <div className="w-2/4 border border-zinc-400 h-0"></div>
            <p className="text-base text-zinc-400 font">
            Benjamin Lehrer - Project Coordinator
            </p>
            <img src="../images/ashlogo.svg" alt="" className="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col items-center gap-y-8 font">
            <p className="text-xl md:text-3xl text-zinc-400 font font-normal">
            “Loved working with Arslan and the team. Great leaders and skilled 
            professionals in the creation of a SaaS solution.”
            </p>
            <div className="w-2/4 border border-zinc-400 h-0"></div>
            <p className="text-base text-zinc-400 font">
            Kees Van Velzen - Managing Director
            </p>
            <img src="../images/maeckerslogo.svg" alt="" className="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col items-center gap-y-8 font">
            <p className="text-xl md:text-3xl text-zinc-400 font font-normal">
            "Great ideas and initiative by Arslan. Very good understanding of what 
            working in a team is and how to deliver value."
            </p>
            <div className="w-2/4 border border-zinc-400 h-0"></div>
            <p className="text-base text-zinc-400 font">
            Farid Rafikov - Head of Product
            </p>
            <img src="../images/junglelogo.svg" alt="" className="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col items-center gap-y-8 font">
            <p className="text-xl md:text-3xl text-zinc-400 font font-normal">
            “Thank you so much for the time and help that Arslan and the 
            team have provided to us. We are very grateful for 
            the opportunity to work together and would recommend to anyone in the future”
            </p>
            <div className="w-2/4 border border-zinc-400 h-0"></div>
            <p className="text-base text-zinc-400 font">
            Gary Li - Founder
            </p>
            <img src="../images/proplogo.svg" alt="" className="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col items-center gap-y-8 font">
            <p className="text-xl md:text-3xl text-zinc-400 font font-normal">
            Fantastic individual, great communication, and understanding of the product and technology.
            </p>
            <div className="w-2/4 border border-zinc-400 h-0"></div>
            <p className="text-base text-zinc-400 font">
            Corey Anand - Chief Executive
            </p>
            <img src="../images/kayalogo.svg" alt="" className="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col items-center gap-y-8 font">
            <p className="text-xl md:text-3xl text-zinc-400 font font-normal">
            “Great work. Clear communication, regular updates and quality product. Can't ask for anything more."
            </p>
            <div className="w-2/4 border border-zinc-400 h-0"></div>
            <p className="text-base text-zinc-400 font">
            Andrew Chukwura - Managing Principal
            </p>
            <img src="../images/qlogo.svg" alt="" className="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col items-center gap-y-8 font">
            <p className="text-xl md:text-3xl text-zinc-400 font font-normal">
            “Excellent experience with Arslan. He jumped right into the project, was exceptionally communicative, 
            and offered suggestions/improvements beyond the original 
            "ask." He didn't need to ask many questions, worked crazy fast, 
            and acted very empowered throughout the process.”
            </p>
            <div className="w-2/4 border border-zinc-400 h-0"></div>
            <p className="text-base text-zinc-400 font">
            Benjamin Lehrer - Project Coordinator
            </p>
            <img src="../images/randyslogo.svg" alt="" className="" />
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
