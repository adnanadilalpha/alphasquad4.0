import React from 'react'
import Hero from './Hero'
import TextBox from './TextBox'

const Visual = () => {
  return (
<>
<div className="item">
      <div class="hero">
         <img src="../Assets/tuk1.webp" alt=""  class="sctesvg tex" />
      </div>

<TextBox title="TUK" subTitle="Build captivating experiences with accessible, 
fully responsive, drop-in-ready Tailwind CSS components, 
and fast track your workflow."/>
</div>


<div className="item">
<TextBox title="CONTEXT" subTitle="Tailwind UI Kit gives developers the functionality to 
fast-track their workflow with 1300 components and 30 
templates that are responsive, cross-browser compatible, 
and WCAG tested. Forget about building everything from scratch!"/>
<Hero img="../Assets/tuk2.webp"/>

<TextBox title="TYPOGRAPHY & COLORS" subTitle="For TUK, we stuck with the dark gray and 
rose pink theme and introduced light gray as an accent color since we wanted something 
that was calm and easy on the eyes. 
And since monochromatic colors give off a clean-cut, professional vibe, 
we chose to go with the inter typeface to make everything a tab bit ‘friendlier’. "/>

<Hero img="../Assets/tuk3.webp"/>
</div>


<div className="item">
<Hero img="../Assets/tuk4.webp"/>


<TextBox title="THE PROCESS OF IT ALL" subTitle="There are a few websites that combines 
real estate with crypto, but there is none that gives you a ‘metaverse’ feel. The main 
challenge was to come up with an aestethic that captured the metaverse experience 
for purchasing real estate. We did that by utilizing the 
whole screen of the device the user is on and gave them a 
panaromic view of the property they want to analyze. "/>


<Hero img="../Assets/tuk5.webp"/>
<Hero img="../Assets/tuk6.webp"/>
<Hero img="../Assets/tuk7.webp"/>
<Hero img="../Assets/tuk8.webp"/>
</div>
</>

  )
}

export default Visual