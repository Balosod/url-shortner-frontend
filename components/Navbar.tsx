import Link from 'next/link';
import { useState } from "react";
import {AiOutlineMenu,AiOutlineClose } from 'react-icons/ai';

import styles from './Navbar.module.css';

const Navbar = () => {
  let [display, changeDisplay] = useState(false);
  return (
    <div>
    {/* <Navbar/> */}
    {/* Desktop */}
    <div 
        className='flex sm:hidden md:flex justify-between py-10 md:ml-20 lg:ml-40'>
      <div className="flex flex-row space-x-6  ">
        <Link href="" className="text-gray-900 text-3xl sans-serif font-bold"  >Shortly</Link>
        <Link href="" className="text-gray-400 pt-1 sans-serif font-medium"  >Features</Link>
        <Link href="" className="text-gray-400 pt-1 sans-serif font-medium"  >Pricing</Link>
        <Link href="" className="text-gray-400 pt-1 sans-serif font-medium"  >Resources</Link>
      </div>
      <div className="flex flex-row space-x-6  mr-20">
        <Link href="" className="text-gray-400 pt-2 sans-serif font-medium"  >Login</Link>
        <Link href="" className=" rounded-full bg-teal-300 px-4 py-2 sans-serif font-bold"  >Sign Up</Link>
      </div>
    </div>
    {/* Nav */}
    <div className="sm:flex md:hidden sm:justify-between p-8">
    <Link href="" className="text-gray-900 text-3xl sans-serif font-bold"  >Shortly</Link>
    <AiOutlineMenu className={`sm:w-10 sm:h-10 ${display ? 'hidden':'block'}`}
        onClick={()=>changeDisplay(true)} 
        style={{color:"black"}} 
    />

  <AiOutlineClose className={`sm:w-10 sm:h-10 ${display ? 'block':'hidden'}`}
      onClick={()=>changeDisplay(false)}
      style={{color:"black"}}
  />
    </div>

    {/* Mobil */}
    <div className="sm:block md:hidden">
    <div className={`rounded-md absolute left-0 right-0 mx-4  ${display ? 'block':'hidden'}`}
    style={{
      backgroundColor: 'rgb(59, 48, 84)',
    }}>
    <div className="flex flex-col">
      <Link href="" className="text-white text-center mt-4 pt-1 sans-serif font-medium"  >Features</Link>
      <Link href="" className="text-white text-center pt-4 sans-serif font-medium"  >Pricing</Link>
      <Link href="" className="text-white text-center pt-4 sans-serif font-medium"  >Resources</Link>
      <div className=" m-4   h-1"
      style={{
        backgroundColor: 'rgb(35, 33, 39)',
      }}></div>
      <Link href="" className="text-white text-center pt-4 sans-serif font-medium"  >Login</Link>
      <Link href="" className="rounded-full m-4 text-center text-white  bg-teal-300 px-8 py-4 sans-serif font-bold"  >Sign Up</Link>
    </div>
    </div>
    </div>
    </div>
  );
};

export default Navbar;
