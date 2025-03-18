import React from 'react';
import '../globals.css';
import Header from '../components/header';
import Link from 'next/link';


const ContactPage = () => {
  return (
    <div className="grid grid-rows-12 bg-[#5e8db8] h-screen">
      <Header />
      <div className="text-white font-serif px-10 py-6 row-span-11">
        <h1 className="text-4xl font-serif text-center mb-10">Contact Us</h1>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="flex items-center">
              <span className="inline-block text-2xl mr-4">

                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                </svg>

              </span>
              <span>225 Red Gate Rd, St. Charles, IL 60175</span>
            </div>
            <div className="flex items-center">
              <span className="inline-block text-2xl mr-4">

                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                </svg>

              </span>
              <span>+1 (630) 965-0026</span>
            </div>
            <div className="flex items-center">
              <span className="inline-block text-2xl mr-4">

                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                </svg>

              </span>
              <span>mobilemealsil@gmail.com</span>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-serif mb-4">LinkedIn</h2>
            <ul className="space-y-4">
              <li>
                <p>
                  <Link href="/contact" className="font-bold text-blue-400 hover:underline">
                    Callie Davidson
                  </Link>
                </p>
                <p className="text-sm">+1 224-508-2484</p>
              </li>
              <li>
                <p>
                  <Link href="/contact" className="font-bold text-blue-400 hover:underline">
                    Noah Plumb
                  </Link>
                </p>
                <p className="text-sm">+1 (630) 965-0026</p>
              </li>
              <li>
                <p>
                  <Link href="/contact" className="font-bold text-blue-400 hover:underline">
                    Matthew Rancour
                  </Link>
                </p>
                <p className="text-sm">+1 (630) 379-8996</p>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10">
          <h2 className="text-xl font-serif mb-4">Follow us online</h2>
          <div className="flex space-x-6">
            <a
              href="/contact"
              className="text-white hover:text-gray-400"
              aria-label="Facebook"
            >
              <span className="text-2xl">

              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
              </svg>

              </span>
            </a>
            <a
              href="/contact"
              className="text-white hover:text-gray-400"
              aria-label="Twitter"
            >
              <span className="text-2xl">

              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>

              </span>
            </a>
            <a
              href="#"
              className="text-white hover:text-gray-400"
              aria-label="Instagram"
            >
              <span className="text-2xl">

              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z" />
              </svg>

              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;