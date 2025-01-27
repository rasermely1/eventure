import './globals.css';
import Header from './components/header';
import Link from 'next/link';

export default function Home() {
  return (
    <div
      className="
        grid grid-rows-12 h-screen w-screen 
        bg-cover bg-center 
        sm:bg-[url('/food-truck.jpg')] 
        bg-[url('/mobile-food-truck.jpg')]
      "
    >
      <div className="absolute inset-0 bg-gray-900 bg-opacity-50 -z-10 rounded-md"></div>
      <Header></Header>
      <div className="grid grid-rows-10 row-span-11 flex justify-center items-center">
        <div className="row-span-2"></div>
        <div className="grid grid-rows-2 flex justify-center mx-10 row-span-1 text-3xl sm:text-6xl font-serif text-white">
          <div className="row-span-1 text-center"><b>Bring Your Event</b></div>
          <div className="row-span-1 text-center"><b>Vision To Life</b></div>
        </div>

        <div className="flex justify-center row-span-1 font-serif text-white text-xl">Everything You Need For Every Event</div>

        <div className="flex row-span-2 justify-center">
          <Link href="/create-event" className="grid grid-rows-2 bg-white opacity-90 px-12 py-3 font-serif text-lg rounded-md">
            <div className="row-span-1">Plan Your</div>
            <div className="row-span-1 text-center">Event</div>
          </Link>
        </div>

        <div className="flex row-span-1 justify-center">
          <Link href="/" className="grid grid-rows-2 bg-white opacity-90 px-12 py-3 font-serif text-lg rounded-md">
            <div className="row-span-1">Register</div>
            <div className="row-span-1 text-center">Vendor</div>
          </Link>
        </div>
      </div>
    </div>

  );
}