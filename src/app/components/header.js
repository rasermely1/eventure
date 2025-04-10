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
  );
}