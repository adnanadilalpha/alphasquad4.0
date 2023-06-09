import React from "react";
import Animate from "./Animate";
import AnimateSmall from "./SmallAnimate";

const Feature = () => {
  return (
    <div className="flex flex-col justify-center items-center sm:gap-y-8  md:gap-y-8 xl:gap-y-24 my-12  md:my-32">
      <Animate title={"micomanagment"} />
      <Animate title={"Boring meetings"} />
      <AnimateSmall
        title={"Stress"}
        id={"curve-image-small"}
        idd={"curve-image-small1"}
      />
      <Animate title={"Shitty work"} />
      <Animate title={"hand holding"} />
      <Animate title={"smoke & mirrors"} />
    </div>
  );
};

export default Feature;
