import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, Autoplay} from "swiper";

const Swipeer = (props) => {
  return (
    <div className="py-5 2xl:py-16  bg-carousol w-full">
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={240}
        centeredSlides={true}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="mySwiper Swiper"
      >
        <SwiperSlide>
          {props.content1 ? <div>{props.content1}</div> : ""}
          <img src={props.img1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          {props.content2 ? <div>{props.content2}</div> : ""}
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
  );
};

export default Swipeer;
