"use client";

import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="row-span-1 flex items-center justify-between px-4 sm:px-6 text-white relative">
      <nav className="container mx-auto flex justify-between items-center py-4">
        <div className="text-2xl font-sans font-bold">
          <Link href="/">Eventure</Link>
        </div>

        <ul className="hidden font-serif sm:flex space-x-6 text-lg">
          <li>
            <Link href="/create-event" className="hover:text-gray-300">
                • Events
            </Link>
          </li>
          <li>
            <Link href="/vendors" className="hover:text-gray-300">
                • Vendors
            </Link>
          </li>
          <li>
            <Link href="/pricing" className="hover:text-gray-300">
                • Pricing
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-gray-300">
                • About Us
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-gray-300">
                • Contact
            </Link>
          </li>
        </ul>

        <button
          aria-label="Toggle Menu"
          className="sm:hidden text-2xl text-white focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </nav>

      {menuOpen && (
        <div className="flex w-full sm:hidden font-serif justify-center borderpy-4 bg-black opacity-80 absolute top-full left-0 z-50">
          <ul className="flex flex-col space-y-4 text-center text-lg">
            <li>
              <Link
                href="/events"
                className="hover:text-gray-300"
                onClick={() => setMenuOpen(false)}
              >
                Events
              </Link>
            </li>
            <li>
              <Link
                href="/vendors"
                className="hover:text-gray-300"
                onClick={() => setMenuOpen(false)}
              >
                Vendors
              </Link>
            </li>
            <li>
              <Link
                href="/pricing"
                className="hover:text-gray-300"
                onClick={() => setMenuOpen(false)}
              >
                Pricing
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="hover:text-gray-300"
                onClick={() => setMenuOpen(false)}
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="hover:text-gray-300"
                onClick={() => setMenuOpen(false)}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}