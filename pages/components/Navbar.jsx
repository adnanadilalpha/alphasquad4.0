import { useState } from "react";
import link from "next/link";
import { Link } from "react-scroll/modules";
const Navbar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed inset-x-0 top-0 bg-black flex justify-between items-center text-sm font-normal uppercase text-white pt-10 sm:pt-14 px-6 md:px-10 lg:px-16 font z-50" id="Nav">
      <div className="flex items-center hover:cursor-pointer">
        <div className="">
          <div  className={props.name}></div>
        </div>
<div>
  {props.logo}
</div>
      </div>
      <div className="hidden md:block">
        <ul className="flex">
          <li className="ml-6 hover:text-zinc-400 hover:cursor-pointer">
            <Link to="About" spy={true} smooth={true} offset={-100} duration={2000}>About</Link>
          </li>
          <li className="ml-6 hover:text-zinc-400 active:text-zinc-400 hover:cursor-pointer">
            <Link to="Portfolio" spy={true} smooth={true} offset={-100} duration={2000} className="">Portfolio</Link>
          </li>
          <li className="ml-6 hover:text-zinc-400 hover:cursor-pointer">
            <Link to="Stats" spy={true} smooth={true} offset={-150} duration={2000}>Stats</Link>
          </li>
          <li className="ml-6 hover:text-zinc-400">
            <a href="https://calendly.com/aqk-dev/intro-call?month=2023-05" target="_blank" >Book a consultation</a>
          </li>
        </ul>
      </div>
      <div className="md:hidden">
        <button
          className="flex items-center text-white  hover:text-gray-300 focus:outline-none"
          onClick={toggleMenu}
        >
          {isOpen ? (
            <svg
              className="h-6 w-6 fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 18L18 6M6 6l12 12"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          ) : (
            <svg
              className="h-6 w-6 fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect y="4" width="24" height="2" />
              <rect y="11" width="24" height="2" />
              <rect y="18" width="24" height="2" />
            </svg>
          )}
        </button>

        {isOpen && (
          <div className="absolute top-32 left-0 w-full  bg-black h-screen z-40 justify-center items-center ">
            <ul className="flex flex-col text-center justify-center">
              <li className="mb-16">
                <Link
                  to="About"
                  className="text-xl font-semibold text-white"
                >
                  <div className="flex justify-between px-4 pb-8">
                  About
                    <img src="../Assets/arrow.svg" alt="" />
                  </div>
                  <div className="flex justify-center items-center">
                    <div className="border-b border-zinc-700 w-11/12"></div>
                  </div>
                </Link>
              </li>
              <li className="mb-16">
                <Link
                  to="Portfolio"
                  className="text-xl font-semibold text-white"
                >
                  <div className="flex justify-between px-4 pb-8">
                  Portfolio
                    <img src="../Assets/arrow.svg" alt="" />
                  </div>
                  <div className="flex justify-center items-center">
                    <div className="border-b border-zinc-700 w-11/12"></div>
                  </div>
                </Link>
              </li>
              <Link to="Stats" className="text-xl font-semibold text-white">
                <li className="mb-16">
                  <div className="flex justify-between px-4 pb-8">
                  Stats
                    <img src="../Assets/arrow.svg" alt="" />
                  </div>
                  <div className="flex justify-center items-center">
                    <div className="border-b border-zinc-700 w-11/12"></div>
                  </div>
                </li>
              </Link>
              <li>
                <a href="https://calendly.com/aqk-dev/intro-call?month=2023-05" target="_blank" className="text-xl font-semibold text-white">
                  <div className="flex justify-between px-4 pb-8">
                    Book a consultation
                    <img src="../Assets/arrow.svg" alt="" />
                  </div>
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
