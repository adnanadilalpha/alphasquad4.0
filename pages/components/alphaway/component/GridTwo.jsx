import Link from 'next/link'
import React from 'react'
import Button from '../../Button'

const GridTwo = () => {
  return (
<>
    <div className="flex">
    <div className="flex flex-col items-center justify-between w-full pt-32 pb-48">
        <span className="Basement text-white text-base md:text-xl xl:text-3xl 2xl:text-4xl font-medium uppercase">
            Now over Later
        </span>
        <span className="Basement text-white text-base md:text-xl xl:text-3xl 2xl:text-4xl font-medium uppercase">
            Great over Good
        </span>
    </div>
    <div className="flex flex-col justify-between items-center border-l gap-y-32 border-neutral-200 w-full py-32 pr-24">
        <span className="text-zinc-400 text-base xl:text-2xl 2xl:text-3xl font-normal font mb-8 px-8">
            You need a response on the problem now. We understand.
             Hit us up and you’ll get you a response in 5 minutes, not 5 business days.
        </span>
        <span className="text-zinc-400 text-base xl:text-2xl 2xl:text-3xl font-normal font mb-8 px-8">
            Over the years we’ve learned that it’s actually the last 20% that gets you 80% of the results. 
            The difference between good and great.
        </span>
    </div>
</div>
<Button />
 </>
  )
}

export default GridTwo