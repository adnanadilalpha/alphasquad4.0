import React from "react";

const Footer = () => {
  return (
    <div className="flex flex-col justify-between md:flex  2xl:flex  xl:flex-row 2xl:mt-24 mt-8 mb-9 mx-6 2xl:mx-20 font ">
      <div className="flex flex-col items-center md:items-start">
        <span className="text-base mb-4 sm:text-2xl text-zinc-400">FIND ME</span>
        <ul className=" flex items-center gap-x-2 text-white text-sm sm:text-lg font font-light">
          <a href="https://github.com/aqkhan" target="_blank">
            <li className="github ">GITHUB</li>
          </a>
          <li className="dot">
            <img src="../images/dot.svg" alt="" />
          </li>
          <a
            href="https://www.linkedin.com/in/arslanqamarkhan/?originalSubdomain=pk"
            target="_blank"
          >
            <li className="linked ">LINKEDIN</li>
          </a>
          <li className="dot">
            <img src="../images/dot.svg" alt="" />
          </li>
          <a
            href="https://instagram.com/arslan.khan.official?igshid=YmMyMTA2M2Y"
            target="_blank"
          >
            <li className="insta ">INSTAGRAM</li>
          </a>
        </ul>
      </div>
      <div className="flex flex-col md:flex md:flex-row md:justify-between gap-x-0 xl:gap-x-28 2xl:gap-x-72">
        <div className="text-center md:text-left">
          <p className="text-zinc-400 mb-4 text-sm sm:text-2xl font font-light w-full">
            UP CLOSE AND PERSONAL
          </p>
          <a
            className="text-white text-sm sm:text-lg font font-light"
            href="mailto:HOWDY@ALPHASQUAD.TECH"
          >
           aqk.neo.work@gmail.com
          </a>
        </div>
        <div className="flex items-end md:w-96 text-right font w-full">
          <p className="text-zinc-400 text-center  xl:text-right text-xs sm:text-2xl font-light ">
            © 2023 ALL RIGHTS RESERVED
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
