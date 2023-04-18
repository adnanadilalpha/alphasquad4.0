import React from "react";
import Hero from "./Hero";

const ContentBox = (prop) => {
  return (
    <>
      <div className="container-5">
        <Hero img={prop.img} />
        <div className="title-5">
          <p>{prop.title}</p>
        </div>
      </div>
    </>
  );
};

export default ContentBox;
