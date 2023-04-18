import Link from 'next/link'
import React, { useState } from 'react'

const Head = () => {
    const Hover1 = ()=> {
        let light = document.getElementById("light1")
        light.style.opacity = "1"
        const cta = document.getElementById("title1")
        cta.style.opacity = "1"
    }
 const   Hover1Leave = () => {
        let light = document.getElementById("light1")
    light.style.opacity = "0"
    const cta = document.getElementById("title1")
    cta.style.opacity = "0"
    }


    const Hover2 = ()=> {
    let light = document.getElementById("light2")
    light.style.opacity = "1"
    const cta = document.getElementById("title11")
    cta.style.opacity = "1"
    }
 const   Hover2Leave = () => {
    let light = document.getElementById("light2")
    light.style.opacity = "0"
    const cta = document.getElementById("title11")
    cta.style.opacity = "0"
    }

    const Hover3 = ()=> {
        let light = document.getElementById("light3")
        light.style.opacity = "1"
        const cta = document.getElementById("title12")
        cta.style.opacity = "1"
    }
 const   Hover3Leave = () => {
    let light = document.getElementById("light3")
    light.style.opacity = "0"
    const cta = document.getElementById("title12")
    cta.style.opacity = "0"
    }
  return (
    <div className="flex flex-col xl:flex-row w-full h-full">
             <div className="relative overflow-hidden border-b sm:border-r  border-zinc-700 w-full xl:w-1/2" id="section2" onMouseMove={Hover1} onMouseOut= {Hover1Leave}>
                 <div className="light1" id='light1'></div>
                 <div className="relative p-14 border-b border-r border-zinc-700 w-full xl:w-96">
                     <Link href="/"><img src="../images/logoalpha.svg" alt="" className="logo" /></Link>
                     <p className="Basement text-xl md:text-3xl xl:text-base text-center sm:text-left font-extrabold uppercase text-white mt-64 xl:mt-12 mb-4 tracking-wider">
                         Get in touch with the right people.  
                     </p>
                     <p className="text-zinc-400 text-base sm:text-lg xl:text-base text-center sm:text-left font-normal tracking-tight font">
                         This is just so we can connect you with the specialist you’re looking for.
                     </p>
                 </div>
                 <p className="text-white text-xl sm:text-3xl 2xl:text-5xl font-extrabold xl:absolute uppercase text-center mt-32 xl:mt-28 Basement leading-snug">
                     Looking for general consulation 
                 </p>
         
                 <p className="title1--touch" id="title1">
                     Get in touch
                 </p>
             </div>

     <div className="relative overflow-hidden border-b xl:border-r  border-zinc-700 w-full xl:w-1/4" id="section3" onMouseMove={Hover2} onMouseOut= {Hover2Leave}>
        <div className="light2" id="light2"></div>
        <p className="flex justify-center text-white text-3xl 2xl:text-5xl font-extrabold absolute uppercase text-center title--3 Basement">
            design  
        </p>
        <p className="title11 " id="title11">
            Get in touch
        </p>
      </div>

       <div className="relative overflow-hidden border-b xl:border-r  border-zinc-700 w-full xl:w-1/4" id="section4" onMouseMove={Hover3} onMouseOut= {Hover3Leave}>
        <div className="light3" id="light3"></div>
        <p className="flex justify-center text-white text-3xl 2xl:text-5xl font-extrabold absolute uppercase text-center  title--3 Basement">
            development  
        </p>
        <p className="title12" id="title12">
            Get in touch
        </p>
       </div>
    </div>
  )
}

export default Head