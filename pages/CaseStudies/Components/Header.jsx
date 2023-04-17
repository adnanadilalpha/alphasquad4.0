import React from 'react'

const scte = (props) => {
  return (
    <div>
         <div className="">
        <p className="text-zinc-400 text-base xl:text-lg 2xl:text-3xl font-normal font tracking-tight margin-top ml-4 md:ml-6 2xl:ml-20">{props.title} </p>
        <h1 className="text-white text-xl xl:text-2xl 2xl:text-6xl Basement font-extrabold mx-4 md:mx-6 2xl:mx-20 mt-8 mb-8 md:mb-10 xl:mb-36">
          {props.desc}
        </h1>
    </div>
    </div>
  )
}

export default scte