import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

function Carousal() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div className='w-100 flex'>
      <Carousel className="flex flex-col"controls={false} indicators={false} activeIndex={index} onSelect={handleSelect} interval={500}>
      <Carousel.Item>
                <div className="w-100 flex">
                    <p className="review">
                        “Easily, the best design and development studio we’ve worked with throughout the years”
                    </p>
                    <div className="line"></div>
                    <p className="tag">
                        Dovid Efune - Founder & Chairman
                    </p>
                    <img src="../images/sunlogo.svg" alt="" className="log1" />
                </div>
      </Carousel.Item>
      <Carousel.Item>
      <div className="w-100 flex">
                          <p className="review">
                              "Literally the best development team, ever."
                          </p>
                          <div className="line"></div>
                          <p className="tag">
                              Benjamin Lehrer - Project Coordinator
                          </p>
                          <img src="../images/ashlogo.svg" alt="" className="log1"/>
                      </div>
      </Carousel.Item>
      <Carousel.Item>
      <div className="w-100 flex">
                            <p className="review">
                                “Excellent experience with AlphaSquad! they jumped right into the project,
                                 were exceptionally communicative,
                                 and offered suggestions/improvements beyond the original "ask." They didn't need to ask many questions,
                                 worked crazy fast, 
                                 and acted very empowered throughout the process.”
                            </p>
                            <div className="line"></div>
                            <p className="tag">
                                Benjamin Lehrer - Project Coordinator
                            </p>
                            <img src="../images/randyslogo.svg" alt="" className="log1"/>
                        </div>
      </Carousel.Item>
      <Carousel.Item>
      <div className="w-100 flex">
                    <p className="review">
                        “Loved working with AlphaSquad. Great leaders and skilled professionals in the creation of a SaaS solution.”
                    </p>
                    <div className="line"></div>
                    <p className="tag">
                        Kees Van Velzen - Managing Director
                    </p>
                    <img src="../images/maeckerslogo.svg" alt="" className="log1"/>
                </div>
      </Carousel.Item>
      <Carousel.Item>
      <div className="w-100 flex">
            <p className="review">
                “AlphaSquad is amazing ! I highly recommend using them as they did an amazing job on my UX/UI design.. I will be back”
            </p>
            <div className="line"></div>
            <p className="tag">
                Verinder Grewal - Founder 
            </p>
            <img src="../images/enterlogo.svg" alt="" className="log1"/>
        </div>
      </Carousel.Item>
      <Carousel.Item>
      <div className="w-100 flex">
        <p className="review">
            “Working with Saad and the team was an absolute pleasure. 
            They're talented designers who deliver on their promises. 
            Will definitely be working with them again in the future”
        </p>
        <div className="line"></div>
        <p className="tag">
            Dave Rietsema - Managing Director 
        </p>
        <img src="../images/matchr logo.svg" alt="" className="log1"/>
    </div>
      </Carousel.Item>
      <Carousel.Item>
      <div className="w-100 flex">
        <p className="review">
            "Alphasquad are professionals at their craft and a pleasure to work with."
        </p>
        <div className="line"></div>
        <p className="tag">
            Jay Edlin - CEO
        </p>
        <img src="../images/wovelogo.svg" alt="" className="log1"/>
    </div>
      </Carousel.Item>
      <Carousel.Item>
      <div className="w-100 flex">
        <p className="review">
            "Great ideas and initiative. Very good understanding of what working in a team is and how to deliver value."
        </p>
        <div className="line"></div>
        <p className="tag">
            Farid Rafikov - Head of Product
        </p>
        <img src="../images/junglelogo.svg" alt="" className="log1"/>
    </div>
      </Carousel.Item>
      <Carousel.Item>
      <div className="w-100 flex">
        <p className="review">
            “Thank you so much for the time and help the AlphaSquad team has provided to us. 
            We are very grateful for the opportunity to work together and would recommend to anyone in the future”
        </p>
        <div className="line"></div>
        <p className="tag">
            Gary Li - Founder
        </p>
        <img src="../images/proplogo.svg" alt="" className="log1"/>
    </div>
      </Carousel.Item>
      <Carousel.Item>
      <div className="w-100 flex">
        <p className="review">
            Fantastic team, great communication, and understanding of the product and technology.
        </p>
        <div className="line"></div>
        <p className="tag">
            Corey Anand - Chief Executive
        </p>
        <img src="../images/kayalogo.svg" alt="" className="log1"/>
    </div>
      </Carousel.Item>
      <Carousel.Item>
      <div className="w-100 flex">
        <p className="review">
            “Great work. Clear communication, regular updates and quality product. Can't ask for anything more."
        </p>
        <div className="line"></div>
        <p className="tag">
            Andrew Chukwura - Managing Principal
        </p>
        <img src="../images/qlogo.svg" alt="" className="log1"/>
    </div>
      </Carousel.Item>
      <Carousel.Item>
      <div className="w-100 flex">
        <p className="review">
            "AlphaSquad is by far one of the best UI/UX design teams that I've come across. We will definitely be working together again. Thank you!
        </p>
        <div className="line"></div>
        <p className="tag">
            Robert Kanaat - Founder
        </p>
        <img src="../images/kribzz logo.svg" alt="" className="log1"/>
    </div>
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default Carousal