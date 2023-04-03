import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay } from "swiper";

const Swipeer = (props) => {
  return (
<div className="bg-carousol">
<div className="wrap-swiper">
<Swiper
        slidesPerView={"auto"}
        spaceBetween={30}
        autoplay={{
            delay: 1500,
            disableOnInteraction: false,
        }
        }
        modules={Autoplay}
        className="mySwiper"
      >
      <SwiperSlide>
      {props.content1 ? <div className="text-white">{props.content1}</div> : ""}
      <img src={props.img1} className="w-16" alt="" />
      </SwiperSlide>
      <SwiperSlide>
      {props.content2 ? <div className="text-white">{props.content2}</div> : ""}
      <img src={props.img2} alt="" />
      </SwiperSlide>
      <SwiperSlide>
      {props.content3 ? <div>{props.content3}</div> : ""}
      <img src={props.img3} alt="" />
      </SwiperSlide>
      <SwiperSlide>
      {props.content4 ? <div>{props.content4}</div> : ""}
      <img src={props.img4} alt="" />
      </SwiperSlide>
      </Swiper>
</div>
</div>
  )
}

export default Swipeer