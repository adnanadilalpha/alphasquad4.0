import React from 'react'

const Footer = () => {
  return (
<div className="flex flex-col justify-between md:flex  2xl:flex  xl:flex-row 2xl:mt-24 mt-8 mb-9 mx-6 2xl:mx-20 font ">
        <div className="mb-8 flex flex-col items-center md:items-start">
        <span className="text-base sm:text-2xl text-zinc-400">
            FIND US
        </span>
       <ul className=" flex items-center gap-x-2 text-white text-sm sm:text-lg font font-light">
<a href='https://dribbble.com/alphasquadstudio' target="_blank"><li className="dribb ">DRIBBBLE</li></a>
        <li className="dot">
            <img src="../images/dot.svg" alt="" />
        </li>
<a href='https://twitter.com/Alphasq86076809' target="_blank"><li className="github ">TWITTER</li></a>
        <li className="dot">
            <img src="../images/dot.svg" alt="" />
        </li>
<a href='https://pk.linkedin.com/company/alphasquad-tech' target='_blank'><li className="linked ">LINKEDIN</li></a>
        <li className="dot">
            <img src="../images/dot.svg" alt="" />
        </li>
<a href='https://www.instagram.com/alphasquadtech/?hl=en' target="_blank"><li className="insta ">INSTAGRAM</li></a>
       </ul>
        </div>
<div className="flex flex-col md:flex md:flex-row md:justify-between gap-x-0 md:gap-x-28">
         <div className='mb-8 text-center md:text-left'>
         <p className="text-zinc-400 text-sm sm:text-2xl font font-light">
                         UP CLOSE AND PERSONAL
                     </p>
                     <a className="text-white text-sm sm:text-lg font font-light" href="mailto:HOWDY@ALPHASQUAD.TECH">
                         HOWDY@ALPHASQUAD.TECH
                         </a>
         </div>
        <div className="w-auto md:w-80 text-right font">
            <p className="text-zinc-400 text-center text-xs sm:text-2xl font-light ">© ALPHASQUAD LLC 2022
               ALL RIGHTS RESERVED</p>
        </div>
</div>
    </div>
  )
}

export default Footer