import React from "react";
import Hero from "./Hero";
import Swipeer from "./Swipeer";
import TextBox from "./TextBox";

const Visual = () => {
  return (
    <>
      <div className="item">
        <div class="hero">
          <img src="../Assets/ncr1.webp" alt="" class="sctesvg tex" />
        </div>

        <TextBox
          title="NCR"
          subTitle="NCR we are at the center of every integration, removing 
complexity and improving the overall experience 
for your entire operation.We provide the software, 
hardware and services you need to deliver experiences 
that delight your customers."
        />
      </div>

      <div className="item">
        <Hero img="../Assets/ncr2.webp" />

        <TextBox title="TYPOGRAPHY & COLORS" />
        <Hero img="../Assets/ncr3.webp" />
      </div>

      <div className="item">
        <TextBox
          title="DASHBOARD"
          subTitle="The dashboard gives users an overview of the total number 
of their clients, total locations, lease amount, 
and audit items. When a user chooses the detailed 
view, it dives deeper into figures to give users 
all the information they need."
        />

        <Hero img="../Assets/ncr4.webp" />

        <TextBox
          title="A RESPONSIVE DESIGN"
          subTitle="The product is fully responsive on mobile devices, 
making it easy for users to have all the information on the go.
"
        />

        <Hero img="../Assets/ncr5.webp" />
        <Hero img="../Assets/ncr6.webp" />

        <TextBox
          title="A complete ecosystem"
          subTitle="The most complicated and resource intensive project was the client's new website. 
Interface limitations, third party dependencies, 
unstable API resources, and corrupted data were 
just a few of the symptoms of technical debt that 
constantly required attention. "
        />

        <Swipeer
          img1="../Assets/safari1.webp"
          img2="../Assets/safari2.webp"
          img3="../Assets/safari3.webp"
        />
      </div>
    </>
  );
};

export default Visual;
