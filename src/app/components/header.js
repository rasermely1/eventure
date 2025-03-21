"use client";

import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="flex row-span-1 h-[150px] bg-gray-200 justify-center items-center">
      <svg width="30px" height="30px" viewBox="0 0 512 512" id="icons" xmlns="http://www.w3.org/2000/svg">
        <path d="M414.11,153.82C429.66,264.4,345.85,357.09,282.54,366s-169.48-57.5-185-167.68a159.82,159.82,0,1,1,316.53-44.49Z" fill="none" stroke="black" strokeMiterlimit="10" strokeWidth="13"/>
        <path d="M236.06,308.05c-32.83-13-67.08-43.1-82.27-85.46" fill="none" stroke="black" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="13"/>
        <path d="M367.7,495.78c-32.83-13-63.31-40.06-78.5-82.41" fill="none" stroke="black" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="13"/>
        <polygon points="266.71 368.21 257.54 417.82 320.85 408.92 298.36 363.76 266.71 368.21" fill="none" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="13"/>
      </svg>
      <Link href="/" className="text-6xl font-sans font-thin px-4 hover:text-blue-400">eventure</Link>
      <svg width="30px" height="30px" viewBox="0 0 512 512" id="icons" xmlns="http://www.w3.org/2000/svg">
        <path d="M414.11,153.82C429.66,264.4,345.85,357.09,282.54,366s-169.48-57.5-185-167.68a159.82,159.82,0,1,1,316.53-44.49Z" fill="none" stroke="black" strokeMiterlimit="10" strokeWidth="13"/>
        <path d="M236.06,308.05c-32.83-13-67.08-43.1-82.27-85.46" fill="none" stroke="black" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="13"/>
        <path d="M367.7,495.78c-32.83-13-63.31-40.06-78.5-82.41" fill="none" stroke="black" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="13"/>
        <polygon points="266.71 368.21 257.54 417.82 320.85 408.92 298.36 363.76 266.71 368.21" fill="none" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="13"/>
      </svg>
    </div>

    // <header className="gird items-center row-span-2 sm:row-span-1 justify-between px-4 pt-4 sm:px-6 text-white bg-black/50 backdrop-blur-md z-10">
    //   <nav className="container mx-auto flex justify-between items-center py-4">
    //     <div className="text-2xl font-sans">
    //       <Link href="/" className="flex items-center gap-2">
    //         <svg width="35px" height="35px" viewBox="0 0 512 512" id="icons" xmlns="http://www.w3.org/2000/svg">
    //           <path d="M414.11,153.82C429.66,264.4,345.85,357.09,282.54,366s-169.48-57.5-185-167.68a159.82,159.82,0,1,1,316.53-44.49Z" fill="none" stroke="white" strokeMiterlimit="10" strokeWidth="13"/>
    //           <path d="M236.06,308.05c-32.83-13-67.08-43.1-82.27-85.46" fill="none" stroke="white" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="13"/>
    //           <path d="M367.7,495.78c-32.83-13-63.31-40.06-78.5-82.41" fill="none" stroke="white" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="13"/>
    //           <polygon points="266.71 368.21 257.54 417.82 320.85 408.92 298.36 363.76 266.71 368.21" fill="none" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="13"/>
    //         </svg>
    //         eventure
    //       </Link>
    //     </div>

    //     <ul className="hidden font-serif sm:flex space-x-6 text-lg">
    //       <li>
    //         <Link href="/event-details" className="text-white hover:text-gray-300">
    //             • Events
    //         </Link>
    //       </li>
    //       <li>
    //         <Link href="/eventPacks" className="hover:text-gray-300">
    //             • Event Packs
    //         </Link>
    //       </li>
    //       <li>
    //         <Link href="/about" className="text-white hover:text-gray-300">
    //             • About Us
    //         </Link>
    //       </li>
    //       <li>
    //         <Link href="/contact" className="text-white hover:text-gray-300">
    //             • Contact
    //         </Link>
    //       </li>
    //     </ul>

    //     <button
    //       aria-label="Toggle Menu"
    //       className="sm:hidden text-2xl text-white focus:outline-none"
    //       onClick={() => setMenuOpen(!menuOpen)}
    //     >
    //       ☰
    //     </button>
    //   </nav>

    //   {menuOpen && (
    //     <div className="flex w-full sm:hidden font-serif justify-center borderpy-4 bg-black opacity-80 absolute top-full left-0">
    //       <ul className="flex flex-col space-y-4 text-center text-lg">
    //         <li>
    //           <Link
    //             href="/event-details"
    //             className="hover:text-gray-300"
    //             onClick={() => setMenuOpen(false)}
    //           >
    //             Events
    //           </Link>
    //         </li>
    //         <li>
    //           <Link
    //             href="/eventPacks"
    //             className="hover:text-gray-300"
    //             onClick={() => setMenuOpen(false)}
    //           >
    //             Event Packs
    //           </Link>
    //         </li>
    //         <li>
    //           <Link
    //             href="/about"
    //             className="hover:text-gray-300"
    //             onClick={() => setMenuOpen(false)}
    //           >
    //             About Us
    //           </Link>
    //         </li>
    //         <li>
    //           <Link
    //             href="/contact"
    //             className="hover:text-gray-300"
    //             onClick={() => setMenuOpen(false)}
    //           >
    //             Contact
    //           </Link>
    //         </li>
    //       </ul>
    //     </div>
    //   )}
    // </header>
  );
}