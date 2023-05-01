import React from "react";
import Hero from "./Hero";

const ContentBox = (prop) => {
  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <Hero img={prop.img} />
        <div className="text-white text-lg xl:text-xl 2xl:text-5xl tracking-wide uppercase Basement mb-28">
          <p>{prop.title}</p>
        </div>
      </div>
    </>
  );
};

export default ContentBox;
