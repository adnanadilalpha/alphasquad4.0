import React from 'react'
import Hero from './Hero'
import TextBox from './TextBox'

const Visual = () => {
  return (
<>
<div className="item">
      <div class="hero">
         <img src="../Assets/gs11.webp" alt=""  class="sctesvg tex" />
      </div>

<TextBox title="GS1" subTitle="GS1 is a neutral, not-for-profit, international organization 
developing and maintaining standards including barcodes. 
The best known of these standards is the barcode, a symbol 
printed on products that can be scanned electronically."/>
</div>


<div className="item">
<TextBox title="PROBLEM STATEMENT" subTitle={[
  "GS1 governs and regulates over 150 million barcodes that are being used worldwide. They needed to create and manage marketing funnels using Marketo and automate their marketing flows.",
  <br/>, <br/>,
  "They also needed to integrate Marketo with their CRM to increase team productivity and reduce the overhead of switching between the two systems."
  ]}/>
<Hero img="../Assets/gs12.png"/>
</div>


<div className="item">
<TextBox title="Solution" subTitle="Our team not only designed a solution for GS1 but 
also provided consultation for designing and deploying the marketing 
automation flows. The team also integrated the Marketo funnel management 
into the CRM used by the client."/>

<Hero img="../Assets/gs13.webp"/>

<TextBox subTitle="The team also designed and developed several 
landing pages that were used by GS1 in 
their marketing campaigns. The landing pages 
were also integrated with their marketing funnels 
resulting in better conversions and, most importantly, 
better lead management."/>

<Hero img="../Assets/gs14.webp"/>

<Hero img="../Assets/gs15.png"/>
</div>

<div className="item">
<TextBox title="A Responsive Design" subTitle="The product is fully responsive 
on mobile devices, making it easy for users to have all 
the information on the go.
"/>

<div class="container-4 ">
         <img src="../Assets/gs16.webp" alt=""  />
      </div>
</div>
</>

  )
}

export default Visual