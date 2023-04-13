import React from 'react'

const scte = (props) => {
  return (
    <div>
         <div className="">
        <p className="text-zinc-400 text-3xl font-normal font tracking-tight margin-top ml-20">{props.title} </p>
        <h1 className="text-white text-6xl Basement font-extrabold mx-20 mt-8 mb-36">
          {props.desc}
        </h1>
    </div>
    </div>
  )
}

export default scte