import React from "react";
import Hero from "./Hero";
import TextBox from "./TextBox";

const Visual = () => {
  return (
    <>
      <div className="item">
        <Hero img="../Assets/en1.webp" />

        <TextBox
          title="ENTER HERE"
          subTitle="Enter Here is a safe 
place for people seeking mental health 
from expert healers from the comfort of their homes, with their identity 
absolutely anonymous. Forget about booking an appointment, 
starting up your car, and driving to the location; Enter Here opens the possibility of 
seeking help within the confines of your comfort zone."
        />
      </div>

      <div className="item">
        <Hero img="../Assets/en2.webp" />

        <TextBox
          title="TYPOGRAPHY & COLORS"
          subTitle="For Enter Here we used here Poppins as 
a main font and blush purple pink and Magenta used as a theme 
and introduced black  accent color.. And 
since monochromatic colors give off a clean-cut, 
professional vibe, we chose to go with the Poppins and 
Urbanist typeface to make everything a tab bit ‘friendlier’. . "
        />

        <Hero img="../Assets/en3.webp" />

        <TextBox
          title="THE PROCESS OF IT ALL"
          subTitle="There are a few websites that combines real estate with crypto, 
but there is none that gives you a ‘metaverse’ feel. The main challenge was to come up with an aestethic 
that captured the metaverse experience for purchasing real estate. 
We did that by utilizing the whole screen of the device the user is on 
and gave them a panaromic view of the property they want to analyze. "
        />
      </div>

      <div className="item">
        <Hero img="../Assets/en4.webp" />
        <Hero img="../Assets/en5.webp" />
        <Hero img="../Assets/en6.webp" />
        <Hero img="../Assets/en7.webp" />
      </div>
    </>
  );
};

export default Visual;
