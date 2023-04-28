import React from 'react'

function Arsalan() {
  return (
    // Title
<div className='flex-none xl:flex border-t border-zinc-700'>
{/* Container details */}
<div className='Ml'>
<div className='flex items-center Urbanist font-semibold text-5xl mb-4 mt-12 text-white'>
        <img className='w-10 h-9' src="../Assets/alphalogo.svg" alt="" />
        <p className='m-o'>rslan Khan</p>
    </div>

    {/* subtitle */}
    <div className='light-gray Urbanist font-light text-lg mb-9'>
        <p>Veteran Systems Architect & Full Stack Developer</p>
    </div>

    {/* Description */}
    <div className='light-gray font-light text-lg font mr-6 xl:mr-24'>
        <p>
        I stand by one thing and one thing only and that's GSD 
        (Getting S**t Done, prolly should trademark GSD). 
        It may be the first time "we" are interacting and instead of 
        pretending to be someone who I am not, I prefer to 
        lay this right off the bat. I specialize in 
        delivering results, not bullshit, not explanations, 
        just good ol' results, period.

        <br/><br/>

        I started programming when I was in 3rd grade (I am almost 35 now -_-), 
        unlike complex social norms, the binary nature of the computers always 
        made more sense to me. In a way. I focus on, teaching, coding, experimenting with the bleeding 
        edge tech, playing snooker, cruising in heavily customized trucks, 
        getting in trouble for no good reason and assisting companies who 
        are serious about making real progress.
        </p>
        
        <br/> <br/>

        <ul className='list-disc mb-12 pl-8'>
<li>Top 1% Full-Stack Developer on Upwork</li>
<li>Over $5 million in revenue</li>
<li>Consultant for Fortune 500 companies such as Toyota NA, GS1, and SCTE</li>
<li>Systems Architect for NCR applications revamp</li>
        </ul>
    </div>
</div>

{/* image container */}
<div>
    <img className='img-size' src="../Assets/arslan.png" alt="" />
</div>
</div>
  )
}

export default Arsalan