import React from "react";
import Hero from "./Hero";
import TextBox from "./TextBox";

const Visual = () => {
  return (
    <>
      <div className="item">
        <div class="hero">
          <img src="../Assets/qloop1.webp" alt="" class="sctesvg tex" />
        </div>

        <TextBox
          title="QLOOP "
          subTitle="QLoop is a web application that makes it simple for property owners to look at all the information of their properties, including tenants, agents, 
leases, rents, etc, and make wise decisions about their 
assets. It offers a better user experience where they 
can determine the value they are deriving from a specific property."
        />
      </div>

      <div className="item">
        <Hero img="../Assets/qloop2.png" />
      </div>

      <div className="item">
        <TextBox
          title="THE PROBLEM"
          subTitle="With so many properties between the landlords 
and the managers, and with everything in silos, it was becoming 
increasingly hard for stakeholders to manage everything easily. "
        />

        <TextBox
          title="DASHBOARD"
          subTitle="The dashboard gives users an overview of the total 
number of their clients, total locations, 
lease amount, and audit items. When a user chooses the detailed view, 
it dives deeper into figures to give users all the information they need."
        />

        <Hero img="../Assets/qloop3.webp" />

        <TextBox
          title="CALCULATOR"
          subTitle="The calculator provides easy access and controls 
of the rent and the lease information of various tenants, 
allowing users to tinker with any option they want changes in."
        />

        <Hero img="../Assets/qloop4.webp" />
      </div>

      <div className="item">
        <Hero img="../Assets/qloop5.webp" />

        <TextBox
          title="A RESPONSIVE DESIGN"
          subTitle="The product is fully responsive on mobile devices, 
making it easy for users to have all the information on the go."
        />

        <Hero img="../Assets/qloop6.webp" />
      </div>
    </>
  );
};

export default Visual;
