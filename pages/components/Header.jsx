import Carousal from "./carousal";
import React from 'react'
import Swipeer from "./swiper";



const Header = (props) => {
  return (
    <div className="px-4 md:px-24">
      <div className="w-100 flex flex-col justify-center items-center mt-56 text-center">
          <span className="text-3xl font-thin text-neutral-400 mb-8 uppercase Antonio">{props.title}</span>
          <span className="text-white text-3xl ms:text-4xl uppercase  md:text-5xl font-bold Antonio">
          {props.subTitle}
        </span>
        <Swipeer/>
        {/* <Carousal /> */}
      </div>
    </div>
  )
}

export default Header