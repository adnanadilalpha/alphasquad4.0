import React from "react";
import Hero from "./Hero";
import TextBox from "./TextBox";

const Visual = () => {
  return (
    <>
      <div className="item">
        <div class="hero">
          <img src="../Assets/force1.webp" alt="" class="sctesvg tex" />
        </div>

        <TextBox
          title="LEARNFORCE PLATFORM "
          subTitle="GS1 is a neutral, not-for-profit, international organization 
developing and maintaining standards including barcodes. 
The best known of these standards is the barcode, a symbol 
printed on products that can be scanned electronically."
        />
      </div>

      <div className="item">
        <TextBox
          title="PROBLEM STATEMENT"
          subTitle={[
            "A digital content creation company out of the Netherlands reached out to our team to bring their idea of a digital learning platform to life. The necessity arose amidst the Covid-19 pandemic while educational institutions faced lockdowns. They wanted to tackle this by offering an online platform to the institutions where both staff and students can be easily onboarded and offered educational content.",
            <br />,
            <br />,

            "The platform must also be able to evaluate the students’ progress based on their assessments as well as allow easy interaction between the instructors and students. The most challenging part was to offer the creation of multiple learning platforms inside this system so new institutions can easily be onboarded.",
          ]}
        />

        <TextBox
          title="THIS IS WHAT WE CAME UP WITH"
          subTitle="The solution we designed was focused first and 
foremost on a multi-tenant platform that allowed onboarding of the new institutions as easy as signing
 up on a social media platform. Each institution had its own user interface and shared only a 
 codebase with other institutions."
        />

        <Hero img="../Assets/force2.webp" />

        <TextBox
          title="COURSES TEMPLATE"
          subTitle="The underlying infrastructure provides enough 
flexibility to allow for each institution to host its own user base and manage its resources 
in the cloud isolated from every other institution. Moreover, 
the scalability provided by the underlying cloud infrastructure 
and the system architecture allows a very smooth and user-centric 
experience across the platform."
        />

        <Hero img="../Assets/force3.webp" />

        <TextBox
          title="PROJECT highlights"
          subTitle={[
            <ul>
              <li>
                Designed a solution that scales in real-time to tackle elevated
                loads at times and is then able to scale down when the load
                decreases resulting in lower infrastructure costs.
              </li>{" "}
              <br /> <br />
              <li>
                Used AWS Cloudformation to host multiple platforms under one
                application.
              </li>{" "}
              <br /> <br />
              <li>
                Used serverless databases to host and manage a massive dataset
                in the most cost-effective way possible.
              </li>{" "}
              <br /> <br />
              <li>
                Used Monorepo to manage the codebase of the entire platform in a
                single repository.
              </li>{" "}
              <br /> <br />
            </ul>,
          ]}
        />

        <Hero img="../Assets/force4.webp" />

        <div class="container-4 ">
          <img src="../Assets/force5.webp" alt="" />
        </div>
      </div>
    </>
  );
};

export default Visual;
