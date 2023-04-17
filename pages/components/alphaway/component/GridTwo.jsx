import Link from 'next/link'
import React from 'react'
import Button from '../../Button'

const GridTwo = () => {
  return (
    <>
<div className=' py-12 sm:py-32'>
<div className='flex flex-col sm:flex-row text-center sm:text-left justify-between items-center px-20 mb-8 md:mb-32 '>
<div className="Basement w-full text-white text-base md:text-xl lg:text-3xl 2xl:text-4xl font-medium uppercase border-r border-zinc-700">
                  <p>
                  Now over Later
                  </p>
                </div>
                <div className="text-zinc-400 w-full text-base xl:text-2xl 2xl:text-3xl font-normal font mb-8 px-8">
                    <p>
                    You need a response on the problem now. We understand.
             Hit us up and you’ll get you a response in 5 minutes, not 5 business days.
                    </p>
                </div>
</div>

<div className='flex flex-col sm:flex-row text-center sm:text-left justify-between items-center px-20'>
<div className="Basement w-full text-white text-base md:text-xl lg:text-3xl 2xl:text-4xl font-medium uppercase border-r border-zinc-700">
                  <p>
                  Great over Good
                  </p>
                </div>
                <div className="text-zinc-400 w-full text-base xl:text-2xl 2xl:text-3xl font-normal font mb-8 px-8">
                    <p>
                    Over the years we’ve learned that it’s actually the last 20% that gets you 80% of the results. 
            The difference between good and great.
                    </p>
                </div>
</div>
 </div>
<Button />
</>
  )
}

export default GridTwo