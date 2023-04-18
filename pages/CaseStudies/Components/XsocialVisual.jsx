import React from "react";
import Hero from "./Hero";
import TextBox from "./TextBox";

const Visual = () => {
  return (
    <>
      <div className="item">
        <div className="hero">
          <img src="../Assets/x1.webp" alt="" class="sctesvg tex" />
        </div>

        <TextBox
          title="XSOCIAL "
          subTitle="XSocial provides its users with a management tool 
to manage ad campaigns on various platforms of social media. The project came to us 
with a lot of UI and UX errors, missing the mark on seamless user flows, a haphazard dashboard, 
and an unclear brand identity. So, for it all to work 
exactly like the vision the company heads had in mind, 
they entrusted us to do a full redesign of their webapp."
        />
      </div>

      <div className="item">
        <Hero img="../Assets/x22.png" />

        <TextBox
          title="TYPOGRAPHY & COLORS"
          subTitle="For TUK, we stuck with 
the dark gray and rose pink theme and introduced light gray as an accent 
color since we wanted something that was calm and easy on the eyes. 
And since monochromatic colors give off a clean-cut, 
professional vibe, we chose to go with the inter typeface to make 
everything a tab bit ‘friendlier’. "
        />

        <Hero img="../Assets/x2.webp" />

        <TextBox
          title="THE PROCESS OF IT ALL"
          subTitle="There are a few websites that combines real estate with crypto, 
but there is none that gives you a ‘metaverse’ feel. The main challenge was to come up with an aestethic that captured 
the metaverse experience for purchasing real estate. 
We did that by utilizing the whole screen of the device the user is on and gave 
them a panaromic view of the property they want to analyze. "
        />

        <Hero img="../Assets/x3.webp" />
        <Hero img="../Assets/x4.webp" />
        <Hero img="../Assets/x5.webp" />
        <Hero img="../Assets/x6.webp" />
      </div>
    </>
  );
};

export default Visual;
