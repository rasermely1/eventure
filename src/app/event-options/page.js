"use client";

import React, { useState, useEffect } from "react";
import '../globals.css';
import Header from '../components/header';
import { useRouter } from 'next/navigation';

const EventOptionsPage = () => {
  const router = useRouter();

  const backgrounds = [
    "/birthday-party.jpg",
    "/church-party.jpg",
    "/charity-party.jpg",
    "/grad-party.jpg",
  ];

  const [bgIndex, setBgIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex((prevIndex) => (prevIndex + 1) % backgrounds.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const [eventData, setEventData] = useState({
    catering: "",
    desserts: "",
    music: "",
    tables: 0,
    tents: 0,
  });

  const foodOptions = [
    { id: 1, name: "Mexican", rating: 4.8, description: "Authentic Mexican tacos made fresh.", image: "/taco-paradise.jpg" },
    { id: 2, name: "BBQ", rating: 4.5, description: "Smoked BBQ meats and sides.", image: "/bbq-bonanza.jpg" },
    { id: 3, name: "Italian", rating: 4.9, description: "Desserts and pastries for any occasion.", image: "/sweet-treats.jpg" },
  ];

  const dessertOptions = [
    { id: 1, name: "Chocolate Fountain", description: "Decadent chocolate fondue station.", image: "/chocolate-fountain.jpg" },
    { id: 2, name: "Cupcakes", description: "Assorted gourmet cupcakes.", image: "/cupcake-tower.jpg" },
    { id: 3, name: "Ice Cream", description: "Create-your-own sundae station.", image: "/ice-cream-bar.jpg" },
  ];

  const musicOptions = [
    { id: 1, name: "Live Band", description: "A live band for energetic performances.", image: "/live-band.jpg" },
    { id: 2, name: "DJ", description: "Professional DJ for all genres.", image: "/dj.jpg" },
  ];

  const handleSelectOption = (option, field) => {
    setEventData({ ...eventData, [field]: option.name });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEventData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Final event data:", eventData);
    router.push("/event-planned");
  };

  return (
    <div className="font-sans grid container-fluid h-full min-h-screen w-full transition-all duration-1000 bg-cover bg-center z-0" style={{ backgroundImage: `url(${backgrounds[bgIndex]})` }}>
      <Header />
      <div className="flex flex-col items-center justify-center">
        <div className="relative bg-[#d9d3cf] text-black p-6 rounded-lg shadow-lg w-[100%] lg:w-[35%] h-[100%] lg:h-[90%]">
          <form onSubmit={handleSubmit} className="bg-transparent py-6 px-12 lg:px-0 mx-0 rounded-md">
            <div className="text-center text-3xl mb-6">Event Options</div>

            <div className="mb-4">
              <label className="block text-lg font-medium mb-2">Catering/Food Truck</label>
              <select name="catering" className="w-full px-3 py-2 rounded-md bg-black text-white" value={eventData.catering} onChange={handleChange}>
                <option value="">Select a food option</option>
                {foodOptions.map((option) => (
                  <option key={option.id} value={option.name}>{option.name}</option>
                ))}
              </select>
            </div>

            <div className="mb-4">
              <label className="block text-lg font-medium mb-2">Desserts</label>
              <select name="desserts" className="w-full px-3 py-2 rounded-md bg-black text-white" value={eventData.desserts} onChange={handleChange}>
                <option value="">Select a dessert</option>
                {dessertOptions.map((option) => (
                  <option key={option.id} value={option.name}>{option.name}</option>
                ))}
              </select>
            </div>

            <div className="mb-4">
              <label className="block text-lg font-medium mb-2">Music</label>
              <select name="music" className="w-full px-3 py-2 rounded-md bg-black text-white" value={eventData.music} onChange={handleChange}>
                <option value="">Select music</option>
                {musicOptions.map((option) => (
                  <option key={option.id} value={option.name}>{option.name}</option>
                ))}
              </select>
            </div>

            <div className="mb-4">
              <label className="block text-lg font-medium mb-2">Number of Tables</label>
              <input type="number" name="tables" className="w-20 px-3 py-2 rounded-md bg-gray-200 text-black" value={eventData.tables} onChange={handleChange} min="0" />
            </div>

            <div className="mb-4">
              <label className="block text-lg font-medium mb-2">Number of Tents</label>
              <input type="number" name="tents" className="w-20 px-3 py-2 rounded-md bg-gray-200 text-black" value={eventData.tents} onChange={handleChange} min="0" />
            </div>

            <button type="submit">
              <div className="absolute bottom-[-20px] mb-9 left-1/2 transform -translate-x-1/2">
                <div
                  href="/party-planned"
                  className="w-12 h-12 bg-black hover:bg-[#5e8db8] text-white flex items-center justify-center rounded-full shadow-lg text-lg"
                >
                  →
                </div>
              </div>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EventOptionsPage;