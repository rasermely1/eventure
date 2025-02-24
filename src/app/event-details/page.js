"use client";

import React, { useState, useEffect } from "react";
import '../globals.css';
import Header from '../components/header';
import { useRouter } from 'next/navigation';

const EventDetailsPage = () => {
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

  const partyTypes = ["Birthday Party", "Wedding", "Corporate Event", "Graduation Party", "Charity Event"];

  const [eventData, setEventData] = useState({
    partyType: "",
    email: "",
    phone: "",
    dates: [],
    location: "",
    additionalInfo: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEventData((prev) => ({ ...prev, [name]: value }));
  };

  const handleDateAdd = () => {
    setEventData((prev) => ({ ...prev, dates: [...prev.dates, ""] }));
  };

  const handleDateChange = (index, value) => {
    const newDates = [...eventData.dates];
    newDates[index] = value;
    setEventData((prev) => ({ ...prev, dates: newDates }));
  };

  const handleDateRemove = (index) => {
    const newDates = eventData.dates.filter((_, i) => i !== index);
    setEventData((prev) => ({ ...prev, dates: newDates }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Final event data:", eventData);
    router.push("/event-options");
  };

  return (
    <div className="font-sans container-fluid h-screen w-screen transition-all duration-1000 bg-cover bg-center" style={{ backgroundImage: `url(${backgrounds[bgIndex]})` }}>
      <Header />
      <div className="h-full w-full flex flex-col items-center justify-center">
        <div className="relative bg-[#d9d3cf] text-black p-6 rounded-lg shadow-lg w-[80%] sm:w-[35%]">
          <form onSubmit={handleSubmit} className="bg-transparent py-6 px-12 lg:px-0 mx-0 rounded-md">
            <div className="text-center text-3xl mb-6">Event Details</div>

            <div className="mb-4">
              <label className="block text-lg font-medium mb-2">Event Type</label>
              <select name="partyType" className="w-full px-3 py-2 rounded-md bg-gray-200 text-black" value={eventData.partyType} onChange={handleChange} required>
                <option value="">Select a event type</option>
                {partyTypes.map((type, index) => (
                  <option key={index} value={type}>{type}</option>
                ))}
              </select>
            </div>

            <div className="mb-4">
              <label className="block text-lg font-medium mb-2">Email</label>
              <input type="email" name="email" className="w-full px-3 py-2 rounded-md bg-gray-200 text-black" value={eventData.email} onChange={handleChange} required />
            </div>

            <div className="mb-4">
              <label className="block text-lg font-medium mb-2">Phone Number</label>
              <input type="tel" name="phone" className="w-full px-3 py-2 rounded-md bg-gray-200 text-black" value={eventData.phone} onChange={handleChange} required />
            </div>

            <div className="mb-4">
              <label className="block text-lg font-medium mb-2">Event Dates</label>
              {eventData.dates.map((date, index) => (
                <div key={index} className="flex items-center gap-2 mb-2">
                  <input
                    type="date"
                    className="w-full px-3 py-2 rounded-md bg-gray-200 text-black"
                    value={date}
                    onChange={(e) => handleDateChange(index, e.target.value)}
                    required
                  />
                  <button type="button" onClick={() => handleDateRemove(index)} className="text-red-600">✕</button>
                </div>
              ))}
              <button type="button" onClick={handleDateAdd} className="mt-2 text-blue-600">+ Add Another Date</button>
            </div>

            <div className="mb-4">
              <label className="block text-lg font-medium mb-2">Location</label>
              <input type="text" name="location" className="w-full px-3 py-2 rounded-md bg-gray-200 text-black" value={eventData.location} onChange={handleChange} required />
            </div>

            <div className="mb-4">
              <label className="block text-lg font-medium mb-2">Allergies/Food Preferences</label>
              <textarea name="additionalInfo" className="w-full px-3 py-2 rounded-md bg-gray-200 text-black" value={eventData.additionalInfo} onChange={handleChange} rows="3"></textarea>
            </div>

            <button type="submit">
              <div className="absolute bottom-[-20px] mb-9 left-1/2 transform -translate-x-1/2">
                <div
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

export default EventDetailsPage;