import React from "react";
import ContentBox from "./ContentBox";
import Swipeer from "./Swipeer";
import Hero from "./Hero";
import TextBox from "./TextBox";

const Visual = () => {
  return (
    <>
      <div className="item">
        <div class="">
          <div class="hero-1">
            <img src="../Assets/scteh.png" alt="" class="sctesvg tex" />
          </div>
        </div>
        <TextBox
          title="SCTE - IBSE"
          subTitle="As a non-profit entity whose board includes companies like Comcast and Charter Communications, 
                the client was under constant pressure to deliver maximum value from the products and services it offers. 
                Several prior attempts to automate core business functions and move them to the cloud had failed.
                 The client had a strong in-house IT team but no authoritative plan for the future, 
                 and was rapidly losing ground to competitors due to the accrual of technical debt."
        />
      </div>

      <div className="item">
        <TextBox
          title="Context"
          subTitle="SCTE·ISBE is the leader in standards development for the cable industry. 
            The organization provides standards and certifications across related areas of expertise.
            It also serves as a outlet for networking, learning, 
            and sharing industry expertise. In addition to documentation and educational tools, 
            SCTE hosts Cabletech EXPO, a premier annual event for both members and non-members."
        />

        <ContentBox
          img="../Assets/cableco.webp"
          title="Re-imagining SCTE from the core up."
        />
      </div>

      <div className="item">
        <TextBox
          title="Complexities and skepticism"
          subTitle=" Due to both the complexity of the data manipulation required and the aging nature of its satellite systems, 
            SCTE needed a game changer. Because previous efforts had failed, 
            the client was  well behind schedule and was understandably skeptical of new partners."
        />

        <Hero img="../Assets/complex.webp" />
        <TextBox
          title="foot in the door"
          subTitle={[
            "The client elected to begin with a project that was somewhat narrow in  scope, but which required advanced calculation and algorithm  development capabilities.",

            <br />,
            <br />,

            " These skills would be critical to the successful realization of its new online  presence, so they made a logical place to start. We first worked with the  client to create a completely new product – a web application that  leveraged member activity, certification, and learning to provide them with a  personal performance dashboard. ",

            <br />,
            <br />,

            " We then helped the SCTE team to establish the raw formulas used to  determine personal progress and performance against the average  individual in their particular skill set. The dashboard we developed also  identified areas which may need improvement, informed users how they  used their career development time, and offered LMS coursework available  for purchase that intended to help the user. ",
          ]}
        />

        <Hero img="../Assets/complex2.svg" />
        <TextBox
          subTitle={[
            "This broader initiative was intended to yield a dramatic change in the efficiency and perceived value of the client's business processes.",

            <br />,
            <br />,
            "Its scope included a complete overhaul of user interface for the client's key products, and collaborating with the client's internal teams to create refined user experiences for all of its member touchpoints. ",

            <br />,
            <br />,
            "These various applications and website consoles had to be capable of sharing infrastructure, source code, and API endpoints to the fullest extent possible, but traditional approaches to data storage, computation, and integration simply weren't up to the task.",
          ]}
        />
      </div>

      <div className="item">
        <TextBox
          title="A complete ecosystem"
          subTitle=" The most complicated and resource intensive project was the client's new website.
             Interface limitations, third party dependencies, unstable API resources,
              and corrupted data were just a few 
              of the symptoms of technical debt that constantly required attention."
        />

        <Swipeer
          img1="../Assets/cms.png"
          img2="../Assets/landing.png"
          img3="../Assets/profile.png"
          img4="../Assets/dashboard.png"
        />

        <TextBox
          subTitle={[
            "The Society's legacy web presence encompassed an LMS, web store, private study programs for corporate partners, video on demand, downloadable documentation, a resource library, a community of member chapters, personalized calendars, calculation tools, and numerous other features cobbled together from aging or incomplete third party systems. SCTE.org was in dire need of a reinvention to increase user engagement, dramatically reduce cost of ownership, and centralize business-critical online functions.",

            <br />,
            <br />,

            "These skills would be critical to the successful realization of its new online presence, so they made a logical place to start. We first worked with the client to create a completely new product – a web application that leveraged member activity, certification, and learning to provide them with a personal performance dashboard. ",
          ]}
        />

        <Hero img="../Assets/mobile.png" />
      </div>
    </>
  );
};

export default Visual;
