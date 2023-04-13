import Link from 'next/link';
import { useState } from 'react';

const Navbar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex justify-between items-center text-sm font-normal uppercase text-white pt-10 sm:pt-14 px-6 md:px-10 lg:px-16 font">
      <div className="flex items-center">
      <div className="light-wrap">
      <div className={props.name}></div>
      </div>
      <Link href="/">
         <img src="../images/logoalpha.svg"  className="w-8" />
         </Link>  
      </div>
      <div className="hidden md:block">
        <ul className="flex">
          <li className="ml-6 hover:text-zinc-400">
            <Link href="/alphaway">
             The Alpha way
            </Link>
          </li>
          <li className="ml-6 hover:text-zinc-400">
            <Link href="/people">
             The people
            </Link>
          </li>
          <li className="ml-6 hover:text-zinc-400">
            <Link href="/dope">
             Dope Stuff
            </Link>
          </li>
          <li className="ml-6 hover:text-zinc-400">
            <Link href="/book">
             Book a consultation
            </Link>
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
                <Link href="/alphaway" className="text-xl font-semibold text-white">
                   <div className='flex justify-between px-4 pb-8'>
                   The Alpha way
                   <img src="../Assets/arrow.svg" alt="" />
                   </div>
                   <div className='flex justify-center items-center'>
                   <div className='border-b border-zinc-700 w-11/12'></div>
                   </div>
                </Link>
              </li>
              <li className="mb-16">
                <Link href="/people" className="text-xl font-semibold text-white">
                <div className='flex justify-between px-4 pb-8'>
                The people
                   <img src="../Assets/arrow.svg" alt="" />
                   </div>
                   <div className='flex justify-center items-center'>
                   <div className='border-b border-zinc-700 w-11/12'></div>
                   </div>
                </Link>
              </li>
                <Link href="/dope" className="text-xl font-semibold text-white">
                <li className="mb-16">
              <div className='flex justify-between px-4 pb-8'>
              Dope Stuff
                   <img src="../Assets/arrow.svg" alt="" />
                   </div>
                   <div className='flex justify-center items-center'>
                   <div className='border-b border-zinc-700 w-11/12'></div>
                   </div>
              </li>
              </Link>
              <li>
                <Link href="/book" className="text-xl font-semibold text-white">
                <div className='flex justify-between px-4 pb-8'>
                Book a consultation
                   <img src="../Assets/arrow.svg" alt="" />
                   </div>
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
