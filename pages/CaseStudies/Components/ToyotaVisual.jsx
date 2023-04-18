import React from "react";
import Hero from "./Hero";
import TextBox from "./TextBox";

const Visual = () => {
  return (
    <>
      <div className="item">
        <div class="hero">
          <img src="../Assets/hero1.webp" alt="" class="sctesvg tex" />
        </div>

        <TextBox
          title="TOYOTA"
          subTitle="Toyota USA’s website is their 
brand’s gateway, responsible for building trust, driving sales, 
and creating 
lifelong customers. Toyota came to us with the goal of increasing 
conversion and revenue on their site and engaged AlphaSquad to 
perform a full audit and performance overhaul."
        />
      </div>

      <div className="item">
        <TextBox
          title="Context"
          subTitle="As a non-profit entity whose board 
includes companies like Comcast and Charter Communications, the client 
was under constant pressure to deliver maximum value from the products 
and services it offers. Several prior attempts to automate core business 
functions and move them to the cloud had 
failed. The client had a strong in-house IT team but no authoritative 
plan for the future, and was rapidly losing ground to competitors due 
to the accrual of technical debt."
        />

        <Hero img="../Assets/hero2.webp" />
      </div>

      <div className="item">
        <TextBox
          title="The Process"
          subTitle="Our expert UX and backend team 
reviewed each conversion pathway and made 
detailed recommendations for code optimization, 
users experience enhancements and speed optimization. "
        />
        <Hero img="../Assets/hero3.webp" />
      </div>

      <div className="item">
        <TextBox
          title="User Experience"
          subTitle="From there, we engaged Toyota in 
a full performance and UX overhaul to increase conversion while 
continuing to communicate the Toyota story."
        />

        <Hero img="../Assets/car1.webp" />

        <TextBox
          title="Simple Navigation"
          subTitle={[
            "Whether or not visitors arrive with a car shopping objective in mind, we realized Toyota’s navigation and search needed to cater to all.",

            <br />,
            <br />,

            "For a brand with a broad customer base, from baby boomers to Generation X, we had to accommodate older users’ taste for simple online navigation and reduce the tendency to get flustered by complicated websites.",
          ]}
        />

        <Hero img="../Assets/car2.webp" />

        <TextBox
          title="Minimal Interface"
          subTitle={[
            "At the same time, we had to appeal to younger users’ preference for a visual and intuitive UX that might overwhelm less tech-savvy users.",

            <br />,
            <br />,

            "We implemented a minimal, search-oriented user interface that accommodated both digital natives and internet newcomers.",
          ]}
        />
      </div>

      <div className="item">
        <TextBox
          title="Speed Optimization"
          subTitle="47% of customers expect a webpage to 
load in 2 seconds or less, according to skilled.co. Toyota recognized that even 100ms 
improvements in a homepage's load time can result in a significant increase in conversion. AlphaSquad’s, 
through code optimization, increased Toyota’s website speed measurably and combined 
with UX enhancements surpassed conversion rate objectives."
        />
        <img src="../Assets/hero4.webp" alt="" />
        <img src="../Assets/hero5.webp" alt="" />
      </div>
    </>
  );
};

export default Visual;
