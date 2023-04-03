import Carousal from "./carousal";
import React from 'react'
import Swipeer from "./swiper";



const Header = (props) => {
  return (
    <div>
      <div className="w-100 flex flex-col justify-center items-center mt-56 text-center">
          <span className="text-3xl font-thin text-white mb-6 uppercase">{props.title}</span>
          <span className="text-white text-4xl uppercase  md:text-5xl font-bold ">
          {props.subTitle}
        </span>
        <Swipeer/>
        {/* <Carousal /> */}
      </div>
    </div>
  )
}

export default Header