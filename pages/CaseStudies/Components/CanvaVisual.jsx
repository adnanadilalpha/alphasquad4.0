import React from 'react'
import Hero from './Hero'
import TextBox from './TextBox'

const Visual = () => {
  return (
<>
<div className="item">
<div class="container-2">
      <div class="hero">
         <img src="../Assets/canva.webp" alt=""  class="sctesvg tex" />
      </div>
    </div>
<TextBox title="CANVA" subTitle="Canva is a graphic design platform 
that is used to create social media 
graphics, presentations, posters, documents, and other visual content. 
The platform is free to use and also offers paid subscriptions such as 
Canva Pro and Canva for Enterprise."/>
</div>


<div className="item">
<Hero img="../Assets/flower.webp"/>

<TextBox title="Typography & Colors" subTitle="For the overall visuals, we kept them very refreshing with elements 
of green that projected the ‘nature’ and ‘tree’ 
vibe, giving an ode to their pledge of planting 
a tree for every invoice generated, minimizing 
their carbon print on planet Earth."/>

</div>

<div className="item">
<Hero img="../Assets/flower2.webp"/>
</div>


<div className="item">
<TextBox title="The Dashboard" subTitle="We designed a dashboard that 
accommodated information like customer ID, order number, invoices, etc, 
in an expandable and collapsable table for different stakeholders. In addition to 
that, the usability pattern we provided was an option 
to add or remove categories from the table which allowed 
every unique stakeholder to view whatever they deemed 
most important."/>

<Hero img="../Assets/statistic.webp"/>

<TextBox title="The Sign In Screen" subTitle="Added educational facts 
on the 'Sign-up Page' and ‘Sign-in Page’ that educate users 
on the importance of minimizing carbon prints on the planet."/>

<Hero img="../Assets/browser1.webp"/>

<TextBox title="Yay! You did it!" subTitle="We came up with a way to 
give users a sense of accomplishment when they help 
plant a tree against their order, giving them a 
certificate of their contribution."/>
<Hero img="../Assets/browser2.webp"/>
</div>


</>

  )
}

export default Visual