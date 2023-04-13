import React from 'react'
import Hero from './Hero'
import TextBox from './TextBox'

const Visual = () => {
  return (
<>
<div className="item">
      <div class="hero">
         <img src="../Assets/sxm1.webp" alt=""  class="sctesvg tex" />
      </div>

<TextBox title="SIRIUSXM RADIO" subTitle={[

"Sirius XM Holdings Inc. is an American broadcasting company headquartered in Midtown Manhattan, New York City that provides satellite radio and online radio services operating in the United States. ",

<br/>, <br/>,

"It was formed by the 2008 merger of Sirius Satellite Radio and XM Satellite Radio, merging them into SiriusXM Radio."

]}/>
</div>


<div className="item">
<TextBox title="CONTEXT" subTitle="As a non-profit entity whose board includes 
companies like Comcast and Charter Communications, the client was under constant 
pressure to deliver maximum value from the products and services it offers. Several 
prior attempts to automate core business functions and move them to the cloud had failed. 
The client had a strong in-house IT team but no authoritative plan for the future, 
and was rapidly losing ground to competitors due to the accrual of technical debt."/>
<Hero img="../Assets/sxm2.webp"/>
</div>


<div className="item">
<TextBox title="Business Challenge" subTitle={[

"SiriusXM was in collaboration with ARI to provide their drivers access to over 150 of their channels. The challenge they faced was a seamless integration between the two systems.",

<br/>, <br/>,

"Moreover, they also needed a simple enrollment process for the drivers to onboard them into the program without much hassle."

]}/>

<Hero img="../Assets/sxm3.png"/>

</div>

<div className="item">
<TextBox title="Solution" subTitle="Our team designed and developed an enrollment system 
with having rich user experience that helped the driver 
onboard easily by filling and submitting a simple form. 
The integration works seamlessly behind the scenes and provides 
access to the drivers approved by the ARI moderators.
"/>

<Hero img="../Assets/sxm4.webp"/>


<TextBox key="1" title="Highlights of the system " ul={[
<ul>
  <li>
  Designed and developed landing and enrollment pages to onboard the drivers into the system.
  </li> <br/>
  <li>
  Provided an integrated enrollment system that is easy to use for the drivers to be onboarded.
    </li> <br/>
    <li>
    Integrated ARI into the SiriusXM authorization system.
    </li> <br/>
</ul>
]}/>


<Hero img="../Assets/sxm5.webp"/>
<Hero img="../Assets/sxm6.webp"/>
<div class="container-4 ">
         <img src="../Assets/sxm7.webp" alt=""  />
      </div>
</div>
</>

  )
}

export default Visual