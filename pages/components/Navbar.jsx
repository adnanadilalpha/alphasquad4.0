import Link from 'next/link';
import { useState } from 'react';

const Navbar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex justify-between items-center text-white py-4 px-6 md:px-10 lg:px-16">
      <div className="flex items-center">
      <div className="light-wrap">
      <div className={props.name}></div>
      </div>
      <Link href="/">
         <img src="../images/logoalpha.svg"  className="w-8" />
         </Link>  
      </div>
      <div className="hidden md:block item">
        <ul className="flex">
          <li className="ml-6">
            <Link href="/alphaway">
             The Alpha way
            </Link>
          </li>
          <li className="ml-6">
            <Link href="/people">
             The people
            </Link>
          </li>
          <li className="ml-6">
            <Link href="/dope">
             Dope Stuff
            </Link>
          </li>
          <li className="ml-6">
            <Link href="/book">
             Book a consultation
            </Link>
          </li>
        </ul>
      </div>
      <div className="md:hidden">
      <button
  className="flex items-center text-white hover:text-gray-300 focus:outline-none"
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
          <div className="absolute top-56 left-0 w-full h-screen justify-center items-center ">
            <ul className="flex flex-col text-center py-4">
              <li className="mb-16">
                <Link href="/alphaway" className="text-lg font-medium text-white">
                   The Alpha way
                </Link>
              </li>
              <li className="mb-16">
                <Link href="/people" className="text-lg font-medium text-white">
                   The people
                </Link>
              </li>
              <li className="mb-16">
                <Link href="/dope" className="text-lg font-medium text-white">
                   Dope Stuff
                </Link>
              </li>
              <li>
                <Link href="/book" className="text-lg font-medium text-white">
                   Book a consultation
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
