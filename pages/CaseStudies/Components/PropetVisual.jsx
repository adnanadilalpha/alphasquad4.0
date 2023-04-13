import React from 'react'
import Hero from './Hero'
import TextBox from './TextBox'

const Visual = () => {
  return (
<>
<div className="item">
      <div className="hero">
         <img src="../Assets/p1.webp" alt=""  class="sctesvg tex" />
      </div>

<TextBox title="PROPHRT SOCIAL TRADING " subTitle="Twitch meets Wallstreet. 
This webapp gives you insight into stocks 
if you are an avid stock trader. AlphaSquad designed 
their dashboard, complete with development and end-to-end testing."/>
</div>


<div className="item">
<Hero img="../Assets/p2.webp"/>  
</div>

<div className="item">
<TextBox title="TYPOGRAPHY & COLORS" subTitle="For prophet social trading we used here Nunito as a main font
 and primary gray and secondary gray used as a theme and introduced green and red as an accent 
 color since we wanted something that was calm and easy on the eyes. 
And since monochromatic colors give off a clean-cut, professional vibe, 
we chose to go with the Nunito typeface to make everything a tab bit ‘friendlier’. "/>

<Hero img="../Assets/p3.webp"/>
</div>

<div className="item">
<TextBox title="THE PROCESS OF IT ALL" subTitle="There are a few websites that combines real estate with crypto, 
but there is none that gives you a ‘metaverse’ feel. The main challenge was to come up with an aestethic that captured the metaverse experience for 
purchasing real estate. We did that by utilizing the whole screen of 
the device the user is on and gave them a panaromic view of the property they want to analyze. "/>

<Hero img="../Assets/p4.webp"/>
<Hero img="../Assets/p5.webp"/>
</div>
</>

  )
}

export default Visual