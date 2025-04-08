import React from 'react';
import '../globals.css';
import Header from '../components/header';

const AboutPage = () => {
  return (
    <div className="grid grid-rows-12 bg-[#5e8db8] h-full min-h-screen">
      <Header />
      <div className="text-white font-serif px-10 py-6 row-span-11">
        <h1 className="text-4xl font-serif text-center mb-10">Meet The Team</h1>
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="rounded-md overflow-hidden">
            <img
              src="/event-invitations.jpg"
              alt="Team at Pitch Night"
              className="md:h-[80%] md:w-[60%] object-cover"
            />
          </div>

          <div className="flex flex-col justify-center text-left">
            <p className="text-lg mb-6">
              Eventure is an all-in-one event planning platform connecting users
              with food trucks and vendors to simplify event organization.
              Originally Mobile Meals, we’ve expanded our focus to cater to
              larger-scale events while keeping convenience and customization at
              the forefront.
            </p>

            <ul className="space-y-6">
              <li className="flex items-center">
                <span className="inline-block w-8 h-8 bg-white rounded-full flex justify-center items-center text-black font-bold mr-4">

                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                </svg>

                </span>
                <span>Based In St. Charles IL</span>
              </li>
              <li className="flex items-center">
                <span className="inline-block w-8 h-8 bg-white rounded-full flex justify-center items-center text-black font-bold mr-4">

                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z" />
                </svg>

                </span>
                <span>Student Led Startup Company</span>
              </li>
              <li className="flex items-center">
                <span className="inline-block w-8 h-8 bg-white rounded-full flex justify-center items-center text-black font-bold mr-4">
                
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 0 1 3 3h-15a3 3 0 0 1 3-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 0 1-.982-3.172M9.497 14.25a7.454 7.454 0 0 0 .981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 0 0 7.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 0 0 2.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 0 1 2.916.52 6.003 6.003 0 0 1-5.395 4.972m0 0a6.726 6.726 0 0 1-2.749 1.35m0 0a6.772 6.772 0 0 1-3.044 0" />
                </svg>

                </span>
                <span>INCubator Pitch Night 2024 Winners</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;