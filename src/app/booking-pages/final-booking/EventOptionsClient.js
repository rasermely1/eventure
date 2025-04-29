"use client";

import React, { useState, useEffect } from "react";
import '../../globals.css';
import Header from "@/app/components/header";
import { useRouter } from 'next/navigation';
import { useSearchParams } from 'next/navigation';
import emailjs from '@emailjs/browser';

const EventOptionsClient = () => {

  const router = useRouter();
  const searchParams = useSearchParams();

  const partyType = searchParams.get("partyType");
  const email = searchParams.get("email");
  const phone = searchParams.get("phone");
  const dates = searchParams.get("dates");
  const location = searchParams.get("location");
  const additionalInfo = searchParams.get("additionalInfo");  

  console.log("Received email:", email);


  const [eventData, setEventData] = useState({
    email: email || "",
    catering: "",
    desserts: "",
    music: "",
    tables: 0,
    tents: 0,
  });

  useEffect(() => {
    if (email) {
      setEventData(prev => ({ ...prev, email }));
    }
  }, [email]);

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
    var alertSound = document.getElementById("myAlertSound");
  
    try {
      const result = await emailjs.send(
        'service_585lw97',
        'template_uy591fl',
        {
          partyType: partyType,
          email: email,
          phone: phone,
          dates: dates,
          location: location,
          additionalInfo: additionalInfo,
          catering: eventData.catering,
          desserts: eventData.desserts,
          music: eventData.music,
          tables: eventData.tables,
          tents: eventData.tents
        },
        'm3orrz4RnaC-nq3Kq'
      );
      alert("Event details sent successfully!");
  
      console.log('Email successfully sent with data : ' + eventData, result.text);
      alertSound.play();
      router.push("./booked");
    } catch (error) {
      if (error?.text) {
        console.error('EmailJS Error Text:', error.text);
      } else {
        console.error('Full error object:', error);
      }
      alert("Oops! Something went wrong.");
    }
  };

  return (
    <div className="font-sans grid grid-rows-6 sm:grid-rows-8 lg:grid-rows-5 container-fluid h-full min-h-screen w-full transition-all duration-1000 bg-cover bg-center z-0">
      <Header />
      <div className="flex flex-col row-span-5 sm:row-span-7 lg:row-span-4 items-center justify-center">
        <div className="relative bg-[#d9d3cf] text-black p-6 lg:rounded-lg shadow-lg w-[100%] lg:w-[35%] h-[100%] lg:h-[80%]">
          <form onSubmit={handleSubmit} className="bg-transparent py-6 px-12 lg:px-0 mx-0 rounded-md">
            <div className="text-center text-3xl mb-6">Event Options</div>

            <div className="mb-4">
              <label className="block text-lg font-thin mb-2">Catering/Food Truck</label>
              <select name="catering" className="w-full px-3 py-2 rounded-md bg-black text-white" value={eventData.catering} onChange={handleChange}>
                <option value="">Select a food option</option>
                {foodOptions.map((option) => (
                  <option key={option.id} value={option.name}>{option.name}</option>
                ))}
              </select>
            </div>

            <div className="mb-4">
              <label className="block text-lg font-thin mb-2">Desserts</label>
              <select name="desserts" className="w-full px-3 py-2 rounded-md bg-black text-white" value={eventData.desserts} onChange={handleChange}>
                <option value="">Select a dessert</option>
                {dessertOptions.map((option) => (
                  <option key={option.id} value={option.name}>{option.name}</option>
                ))}
              </select>
            </div>

            <div className="mb-4">
              <label className="block text-lg font-thin mb-2">Music</label>
              <select name="music" className="w-full px-3 py-2 rounded-md bg-black text-white" value={eventData.music} onChange={handleChange}>
                <option value="">Select music</option>
                {musicOptions.map((option) => (
                  <option key={option.id} value={option.name}>{option.name}</option>
                ))}
              </select>
            </div>

            <div className="mb-4">
              <label className="block text-lg font-thin mb-2">Number of Tables</label>
              <input type="number" name="tables" className="w-20 px-3 py-2 rounded-md bg-gray-200 text-black" value={eventData.tables} onChange={handleChange} min="0" />
            </div>

            <div className="mb-4">
              <label className="block text-lg font-thin mb-2">Number of Tents</label>
              <input type="number" name="tents" className="w-20 px-3 py-2 rounded-md bg-gray-200 text-black" value={eventData.tents} onChange={handleChange} min="0" />
            </div>

            <button type="submit">
              <div className="absolute lg:bottom-[-20px] mb-9 left-1/2 transform -translate-x-1/2">
                <audio className="hidden" id="myAlertSound" src="/alert-sound.mp3" controls></audio>
                <div
                  href="/party-planned"
                  onClick={() => {
                    const alertSound = document.getElementById("myAlertSound");
                    if (alertSound) {
                      alertSound.play().catch((err) => console.error("Sound play error:", err));
                    }
                  }}
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

export default EventOptionsClient;