import React from "react";
import Carousol from "./Carousol";
import Hero from "./Hero";
import SwiperShop from "./SwiperShop";
import TextBox from "./TextBox";

const Visual = () => {
  return (
    <>
      <div className="item">
        <div class="hero">
          <img src="../Assets/shop1.webp" alt="" class="sctesvg tex" />
        </div>

        <TextBox
          title="SHOPLIFT"
          subTitle="Shoplift is an A/B Testing tool for Shopify merchants. It enables its users to 
A/B test blocks, sections, and layouts, 
and compare the variations to see which 
is performing better for their business. 
But the best thing about it is that requires no code."
        />
      </div>

      <div className="item">
        <Carousol
          img1="../Assets/shop2.webp"
          img2="../Assets/shops2.webp"
          img3="../Assets/shops3.webp"
          interval="1500"
        />
      </div>

      <div className="item">
        <TextBox
          title="TYPOGRAPHY & COLORS"
          subTitle="For Shoplift, we stuck with the Black 
and White theme and introduced Blue as an accent color since we wanted something 
that was calm and easy 
on the eyes. And since monochromatic colors give off a clean-cut, 
professional vibe, we chose to go with the Poppins typeface to make 
everything a tab bit ‘friendlier’. "
        />

        <div class="grid-rap">
          <div class="grid">
            <div class="cal-shop">
              <div className="font">
                <Carousol
                  img1="../Assets/font1.webp"
                  img2="../Assets/font2.webp"
                  interval="500"
                />
              </div>
              <div className="access">
                <img src="../Assets/access.png" alt="" />
              </div>
            </div>
            <div class="row-shop">
              <div className="color">
                <Carousol
                  img1="../Assets/blue.webp"
                  img2="../Assets/green.webp"
                  img3="../Assets/orange.webp"
                  img4="../Assets/red.webp"
                  interval="500"
                />
              </div>
              <div className="pop">
                <Carousol
                  img1="../Assets/pop1.webp"
                  img2="../Assets/pop2.webp"
                  img3="../Assets/pop3.webp"
                  interval="500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="item">
        <TextBox
          title="The Dashboard"
          subTitle="The dashboard, after you connect 
to your Google Analytics, gives you an inight 
into your Shopify store. The vertical navbar also 
gives you an option to see the status of your A/B tests, 
the premade liftkits Shoplift provides, and the user settings. "
        />

        <Hero img="../Assets/shop4.webp" />
        <Hero img="../Assets/shop5.webp" />

        <SwiperShop
          img1="../Assets/3.webp"
          img2="../Assets/5.webp"
          img3="../Assets/6.webp"
        />

        <TextBox
          title="The Brandkit"
          subTitle="Shoplift uses an API to pull in  your brand colors, 
images, and typeface. You can then edit everything on Shoplift, change the colors you don’t 
like, change the typography, set your CTAs, and assign Primary and Secondary color themes 
to all UI elements. 
There is a live preview option next to every section for easy reflection. 
The Brandkit is a part of onboarding but  can also be edited later on in ‘Settings’."
        />

        <Hero img="../Assets/shop6.png" />
      </div>
    </>
  );
};

export default Visual;
