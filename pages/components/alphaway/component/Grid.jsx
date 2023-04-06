import React from 'react'

const Grid = () => {
  return (
<div className="flex">
            <div className="flex flex-col items-center justify-between w-full pt-32 pb-48">
                <span className="Basement text-white text-base md:text-xl xl:text-3xl 2xl:text-4xl font-medium uppercase">
                    Partners over Clients
                </span>
                <span className="Basement text-white text-base md:text-xl lg:text-3xl 2xl:text-4xl font-medium uppercase">
                    People over projects
                </span>
                <span className="Basement text-white text-base md:text-xl lg:text-3xl 2xl:text-4xl font-medium uppercase">
                    in-house over outsource
                </span>
            </div>
            <div className="flex flex-col justify-between items-center border-l gap-y-32 border-neutral-400 w-full py-32">
                <span className="text-zinc-400 text-base xl:text-2xl 2xl:text-3xl font-normal font mb-8 px-8">
                    Whatever we do, we take ownership. The good and the bad, and position ourselves as a partner in your success. 
                    <br/><br/><br/>
                    Growth happens when you ditch the silos. 
                    You grow. We grow. Period.
                </span>
                <span className="text-zinc-400 text-base xl:text-2xl 2xl:text-3xl font-normal font mb-8 px-8">
                    Great things happen when great people come together. Why stop there? Why not go the extra mile? We believe in nurturing meaningful relationships.
                    <br/><br/><br/>
                  You got a problem, we got you.
                  <br/><br/><br/>
                  Deadline? call us. Wanna rant? call us.
                  New meme? definitely call us.
                </span>
                <span className="text-zinc-400 text-base xl:text-2xl 2xl:text-3xl font-normal font px-8">
                    We don’t oursource, or sub-contract. Anything we work on has our stamp of approval. 
                    If we don’t have the capacity to take on your project with the utmost care. Trust us.
                     We won’t. (Spoiler: Never gonna happen)
                </span>
            </div>
    </div>
  )
}

export default Grid