import Link from 'next/link';
import React from 'react'

const Navbar = (props) => {
  return (
  <div className="font">
    <div className="light-wrap">
      <div className={props.name}></div>
      </div>
          <div className=" flex justify-between mr-20 ml-20 mt-14">
         <Link href="/">
         <img src="../images/logoalpha.svg"  className="w-8" />
         </Link>   
             <ul id="navlink" className='flex  gap-x-6 '>
                 <Link href="/alphaway">
                 <li className="text-white">The Alpha way</li>
                 </Link>
                 <Link href="/people">
                 <li className="text-white">The people</li> 
                 </Link>
                 <Link href="/dope">
                 <li className="text-white">Dope  Stuff</li>
                 </Link>
                 <Link href="/book">
                 <li className="text-white">Book a consultation</li>
                 </Link>
             </ul>
         </div>
    </div>
    )}

export default Navbar