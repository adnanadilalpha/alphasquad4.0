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
    <div className="contianer">
             <div className="section2" id="section2" onMouseMove={Hover1} onMouseOut= {Hover1Leave}>
                 <div className="light1" id='light1'></div>
                 <div className="section1--book">
                     <Link href="/"><img src="../images/logoalpha.svg" alt="" className="logo" /></Link>
                     <p className="title">
                         Get in touch with the right people.  
                     </p>
                     <p className="para">
                         This is just so we can connect you with the specialist you’re looking for.
                     </p>
                 </div>
                 <p className="title2--book">
                     Looking for general consulation 
                 </p>
         
                 <p className="title1--touch" id="title1">
                     Get in touch
                 </p>
             </div>

     <div className="section3" id="section3" onMouseMove={Hover2} onMouseOut= {Hover2Leave}>
        <div className="light2 opacity2" id="light2"></div>
        <p className="title3">
            design  
        </p>
        <p className="title11 opacity2" id="title11">
            Get in touch
        </p>
      </div>

       <div className="section4" id="section4" onMouseMove={Hover3} onMouseOut= {Hover3Leave}>
        <div className="light3 opacity3" id="light3"></div>
        <p className="title4">
            development  
        </p>
        <p className="title12 opacity3" id="title12">
            Get in touch
        </p>
       </div>
    </div>
  )
}

export default Head