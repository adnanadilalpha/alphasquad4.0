import React from 'react'
import Carousol from './Carousol'
import Hero from './Hero'
import TextBox from './TextBox'

const Visual = () => {
  return (
<>
<div className="item">
<Hero img="../Assets/l1.webp" />

<TextBox title="LYS" subTitle="Love Yourself (LYS) is a mobile app for your self-care. 
From yoga exercises and cardio workouts to sleep schedules and walk targets, 
LYS gives you all insights and stats to live a healthy life."/>
</div>




<div className="item">
<Hero img="../Assets/l2.webp"/>


<TextBox title="TYPOGRAPHY & COLORS" subTitle="For LYS, we stuck with the gray, 
dark blue, aqua and cyan. 
And we chose to go with the Plus jakarta and urbanist typeface 
to make everything a tab bit ‘friendlier’. "/>

<Hero img="../Assets/l3.webp"/>
</div>

<div className="item">
<TextBox title="THE PROCESS OF IT ALL" subTitle="There are a few websites that combines real estate with crypto, 
but there is none that gives you a ‘metaverse’ feel. The main challenge was to come up with an aestethic 
that captured the metaverse experience for purchasing real estate. 
We did that by utilizing the whole screen of the device the user is on 
and gave them a panaromic view of the property they want to analyze. "/>

<Hero img="../Assets/l4.webp"/>

<TextBox title="A Responsive Design" subTitle="The product is fully responsive on 
mobile devices, making it easy for users to 
have all the information on the go."/>

<Hero img="../Assets/l5.webp"/>

</div>
</>

  )
}

export default Visual