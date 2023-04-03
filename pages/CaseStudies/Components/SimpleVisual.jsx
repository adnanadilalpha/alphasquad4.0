import React from 'react'
import Hero from './Hero'
import TextBox from './TextBox'

const Visual = () => {
  return (
<>
<div className="item">
      <div className="hero">
         <img src="../Assets/simple1.webp" alt=""  class="sctesvg tex" />
      </div>

<TextBox title="SIMPLERO " subTitle="Simplero gives you all the tools you need to build and grow a successful 
online education business all in one place. 
This was an interesting project for us since it 
required almost none of the UI but most of our UX Consultancy skills."/>
</div>


<div className="item">
<Hero img="../Assets/simple2.webp"/>
<Hero img="../Assets/simple3.webp"/>

<TextBox title="MOBILE VIEW " subTitle="Here is the mobile view of matchr HRIS Software template. The main challenge was 
to insure that the interface of mobile screen is completely user friendly 
and user can easily view all the data which is present on screen.  "/>

<Hero img="../Assets/simple4.webp"/>

<TextBox title="THE PROCESS OF IT ALL" subTitle="There are a few websites that combines real estate with crypto, 
but there is none that gives you a ‘metaverse’ feel. The main challenge was to come up with an aestethic that captured 
the metaverse experience for purchasing real estate. 
We did that by utilizing the whole screen of the device the user is on and gave 
them a panaromic view of the property they want to analyze. "/>

<Hero img="../Assets/simple5.webp"/>
<Hero img="../Assets/simple6.webp"/>
</div>
</>

  )
}

export default Visual