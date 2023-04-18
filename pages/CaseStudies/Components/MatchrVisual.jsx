import React from "react";
import Carousol from "./Carousol";
import Hero from "./Hero";
import TextBox from "./TextBox";

const Visual = () => {
  return (
    <>
      <div className="item">
        <Carousol
          img1="../Assets/ms1.webp"
          img2="../Assets/ms2.webp"
          interval="1500"
        />

        <TextBox
          title="MATCHR"
          subTitle="Matchr makes it easy for HR professionals to find the top HR software programs 
in 2022. Their unique HR solutions are based on your specific 
business needs, expert HR system reviews, and rankings from other 
human resource professionals."
        />
      </div>

      <div className="item">
        <TextBox
          title="TYPOGRAPHY & COLORS"
          subTitle="Though the brand colors remained the same, 
we tweaked the shades a bit to improve the whole thing. 
The typeface, however, was entirely our choice, making Inter our beszt pick. "
        />

        <Hero img="../Assets/match1.webp" />
      </div>

      <div className="item">
        <TextBox
          title="THE CHALLENGE"
          subTitle="There are a few websites that combines real estate with crypto, 
but there is none that gives you a ‘metaverse’ feel. The main challenge was to come up with an aestethic 
that captured the metaverse experience for purchasing real estate. 
We did that by utilizing the whole screen of the device the user is 
on and gave them a panaromic view of the property they want to analyze. "
        />

        <Hero img="../Assets/match2.webp" />

        <TextBox
          title="MOBILE VIEW "
          subTitle="Here is the mobile view of matchr HRIS Software template. 
The main challenge was to insure that the interface of 
mobile screen is completely user friendly and user can 
easily view all the data which is present on screen.  "
        />

        <Hero img="../Assets/match3.webp" />

        <TextBox
          title="THE METAVERSE VIEW"
          subTitle="There are a few websites that combines real estate with crypto, but there is none 
that gives you a ‘metaverse’ feel. The main challenge was to come up with an aestethic that 
captured the metaverse experience for purchasing real estate. 
We did that by utilizing the whole screen of the device the user is on and 
gave them a panaromic view of the property they want to analyze."
        />

        <Hero img="../Assets/match4.webp" />
        <Hero img="../Assets/match5.webp" />
        <Hero img="../Assets/match6.webp" />
      </div>
    </>
  );
};

export default Visual;
