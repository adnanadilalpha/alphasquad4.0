import React from "react";
import Hero from "./Hero";
import TextBox from "./TextBox";

const Visual = () => {
  return (
    <>
      <div className="item">
        <div className="hero">
          <img src="../Assets/wove1.webp" alt="" class="sctesvg tex" />
        </div>

        <TextBox
          title="WOVE "
          subTitle="Wove helps the apps you already use accessible and 
\visible in one place. It also lets you host meetings, 
track progress, and organize your tools. They approached 
us to make their website from scratch."
        />
      </div>

      <div className="item">
        <Hero img="../Assets/wove2.webp" />

        <TextBox
          title="TYPOGRAPHY & COLORS"
          subTitle="They gave us full control over their branding, 
including typography (Montserrat), brand colors, icons, 
and everything else. We stuck to the basic black and white, 
and chose blue as an accent color that worked on both the primary ones."
        />

        <Hero img="../Assets/wove3.webp" />
      </div>

      <div className="item">
        <TextBox
          title="YOUR HUB FOR WORK"
          subTitle="The apps you already use, accessible and visible in one place. 
Host meetings, track progress, and organize your tools in Wove. "
        />

        <Hero img="../Assets/wove4.webp" />

        <Hero img="../Assets/wove5.png" />

        <TextBox
          title="A Responsive Design"
          subTitle="The product is fully responsive on mobile devices,
 making it easy for users to have all the information on the go. "
        />

        <Hero img="../Assets/wove6.webp" />

        <TextBox
          title="DESKTOP AND MOBILE VIEW"
          subTitle=" Here is the desktop view and mobile view of  
Wove template the main challenge was to insure 
that the interface of mobile screen is completely user friendly 
and user can easily view all the data which is present on screen.   "
        />

        <Hero img="../Assets/wove7.webp" />
      </div>
    </>
  );
};

export default Visual;
