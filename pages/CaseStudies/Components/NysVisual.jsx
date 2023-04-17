import React from 'react'
import Hero from './Hero'
import TextBox from './TextBox'

const Visual = () => {
  return (
<>
<div className="item">
      <div class="hero">
         <img src="../Assets/paper1.webp" alt=""  class="sctesvg tex" />
      </div>

<TextBox title="THE NEW YOURK SUN" subTitle="The New York Sun is a 
pioneering newspaper and has been winning the Pulitzer Prize since 
the 19th century, accumulating huge audiences from all over the 
world. So with a fast-approaching age of a digitalized world, 
they thought ahead 
and shifted their focus to a digital-first 
approach, entrusting us with Design, 
Development, and DevOps. "/>
</div>


<div className="item">
<Hero img="../Assets/paper2.webp"/>
</div>

<div className="item">
<TextBox title="The Challenge" subTitle="The first challenge was 
coming up with a layout that encompassed the publication’s 
dynamic content but at the same time, kept its values and 
identity intact. And the second challenge was to design 
NYSUN’s website with a modern approach but to keep it as 
traditional as it was in the 1800s. So, we divided the 
challenge into two 
parts: the overall user experience (performance, 
scalability, and SEO optimization) and visual design."/>
<Hero img="../Assets/compersion.webp"/>
</div>


<div className="item">
<TextBox title="Let’s Dive into The Process" subTitle="The design team worked closely 
with The New York Sun’s core team to come up with the new design for their digital 
presence. After days and days of brainstorming sessions, making mood boards, 
iterations, and keeping the publishers’ expert opinion into every thought 
process, we finally produced something that was exactly what they wanted."/>

<Hero img="../Assets/sitemap.webp"/>
<Hero img="../Assets/brain.webp"/>

</div>

<div className="item">
<TextBox title="Some Important Highlights"/>

<Hero img="../Assets/macbook.webp"/>

<TextBox title="Media Library Design" subTitle="During the design phase, we noticed 
that there were a lot of people who preferred to watch the news rather than read it.
So, we introduced a media library page where they would find the 
same news in a video format.
"/>

<Hero img="../Assets/macbook2.webp"/>

<TextBox title="Sun Member & Founder Packages" subTitle='Through design and colors, a balance was
                 created to emphasize each pricing plan.
                  The users were subconsciously directed
                   to "Sun member" without being oblivious
                    to "Sun founder" that would give them
                     a premium experience.'/>


<Hero img="../Assets/price1.webp"/>

<TextBox title="Annual & Montly Prices" subTitle='For the home we used 
light gray divider lines 
in between sections, and to differentiate between 
the sections we used dark grey divider lines.'/>



<Hero img="../Assets/price2.webp"/>

<TextBox title="Brand Store Design" subTitle='We also helped brand 
their very own merch store. How sweeet is that?'/>

<Hero img="../Assets/brand.png"/>
<div class="m-20">
         <img src="../Assets/Nyscontent.png" alt=""/>
      </div>
</div>
</>

  )
}

export default Visual