import React from "react";
import Hero from "./Hero";
import TextBox from "./TextBox";
import ContentBox from "./ContentBox";

const Visual = () => {
  return (
    <>
      <div className="item">
        <div class="hero">
          <img src="../Assets/mouse.png" alt="" class="sctesvg tex" />
        </div>

        <TextBox
          title="RMS"
          subTitle="The client, a leading manufacturer of 
          gaming mouse and keyboards, approached us with a requirement
           to build a repair management system to manage the 
           technical complaints of their large customer base.
          With such a large customer base for each product, 
          the company needed a solution that could diagnose 
          and resolve technical issues quickly and efficiently."
        />
      </div>

      <div className="item">
        <TextBox
          title="CHALLENGES"
          subTitle={[
            "The biggest challenge of the project was the tight timeline. The client required the app to be up and running in less than three weeks, which was a significant undertaking given the app's complexity. Another significant challenge was to build an app that could be used internally by engineers to diagnose technical issues while also being customer-facing to allow customers to track their complaint status. The app had to integrate with multiple departments and roles in the company, adding another layer of complexity."
          ]}
        />
        <ContentBox
          img="../Assets/mouse2.png"
          title="Building from scratch"
        />
      </div>

      <div className="item">
        <TextBox
          title="Solution"
          subTitle={[
            "Our team provided an end-to-end infrastructure solution to the client, including both internal and customer-facing applications. The internal app was designed for use by engineers responsible for diagnosing and fixing technical issues, with a diagnosis process involving different levels and roles. The app had to be accessible to all concerned departments in the company.",

            <br />,
            <br />,

            "On the other hand, the customer-facing app was designed to allow customers to login and track the status of their complaints. We ensured that this app was entirely separate from the internal app, with no access to the APIs or the mainframe, to ensure security and data integrity.",

            <br />,
            <br />,

            "To ensure that complaints could be identified by type, we embedded a unique hashtag capability to group specific types of cases and complaints.",
          ]}
        />

        <Hero img="../Assets/mouse3.png" />

        <TextBox
        title="result"
          subTitle={[
            "Despite the significant challenges and tight timeline, our team successfully delivered a comprehensive solution that met the client's needs. The app was built and up and running within the three-week timeframe, with both the internal and customer-facing apps functioning as required. The app proved to be efficient in identifying and resolving technical issues for customers, and the unique hashtag feature ensured that complaints were identified and resolved quickly. ",

            <br />,
            <br />,

            "Overall, the app provided the client with an effective solution to manage their large customer base's technical complaints, improving their overall customer experience.",
          ]}
        />

       
      </div>
    </>
  );
};

export default Visual;
