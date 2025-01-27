"use client";

import React, { useState } from 'react';
import '../globals.css';
import Header from '../components/header';

const CreateEventPage = () => {
  const [eventData, setEventData] = useState({
    description: '',
    dates: [],
    email: '',
    phone: '',
    catering: "",
    desserts: "",
    music: "",
    tables: 0,
    tents: 0,
    partyType: '',
    foodPreferences: '',
  });

  const foodOptions = [
    {
      id: 1,
      name: "Taco Paradise",
      rating: 4.8,
      description: "Authentic Mexican tacos made fresh.",
      image: "/taco-paradise.jpg",
    },
    {
      id: 2,
      name: "BBQ Bonanza",
      rating: 4.5,
      description: "Smoked BBQ meats and sides.",
      image: "/bbq-bonanza.jpg",
    },
    {
      id: 3,
      name: "Sweet Treats",
      rating: 4.9,
      description: "Desserts and pastries for any occasion.",
      image: "/sweet-treats.jpg",
    },
  ];

  const dessertOptions = [
    {
      id: 1,
      name: "Chocolate Fountain",
      description: "Decadent chocolate fondue station.",
      image: "/chocolate-fountain.jpg",
    },
    {
      id: 2,
      name: "Cupcake Tower",
      description: "Assorted gourmet cupcakes.",
      image: "/cupcake-tower.jpg",
    },
    {
      id: 3,
      name: "Ice Cream Bar",
      description: "Create-your-own sundae station.",
      image: "/ice-cream-bar.jpg",
    },
  ];

  const musicOptions = [
    {
      id: 1,
      name: "Live Band",
      description: "A live band for energetic performances.",
      image: "/live-band.jpg",
    },
    {
      id: 2,
      name: "DJ",
      description: "Professional DJ for all genres.",
      image: "/dj.jpg",
    },
  ];

  const [showMenu, setShowMenu] = useState({
    catering: false,
    desserts: false,
    music: false,
  });

  const partyOptions = [
    'Birthday',
    'Graduation',
    'Fundraiser',
    'Religious Party',
    'Retirement Party',
    'Holiday Party',
  ];

  const handleSelectOption = (option, field) => {
    setEventData({ ...eventData, [field]: option.name });
    setShowMenu({ ...showMenu, [field]: false });
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setEventData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleAddDate = () => {
    setEventData((prev) => ({
      ...prev,
      dates: [...prev.dates, ''],
    }));
  };

  const handleDateChange = (index, value) => {
    const updatedDates = [...eventData.dates];
    updatedDates[index] = value;
    setEventData((prev) => ({
      ...prev,
      dates: updatedDates,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const emailDetails = {
      subject: 'New Event Created',
      body: `
        Event Details:
        - Type of Party: ${eventData.partyType}
        - Description: ${eventData.description}
        - Dates: ${eventData.dates.join(', ')}
        - Email: ${eventData.email}
        - Phone: ${eventData.phone || 'N/A'}
        - Catering: ${eventData.catering || 'N/A'}
        - Desserts: ${eventData.desserts || 'N/A'}
        - Music: ${eventData.music || 'N/A'}
        - Tables: ${eventData.tables}
        - Tents: ${eventData.tents}
        - Food Preferences: ${eventData.foodPreferences || 'N/A'}
      `,
    };
  
    try {
      const response = await fetch('http://localhost:3000/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(emailDetails),
      });
  
      if (response.ok) {
        alert('Event Created and Email Sent Successfully!');
      } else {
        alert('Failed to send email. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again.');
    }
  };  

  return (
    <div className={`grid grid-rows-12 bg-gradient-to-r from-blue-800 via-blue-400 to-blue-100 font-serif h-full w-screen`}>
      <Header></Header>
      <div className="lg:grid lg:grid-cols-3 text-white row-span-11">
        <div className="text-3xl font-bold mb-6"></div>
        <form
          onSubmit={handleSubmit}
          className="bg-transparent bg-opacity-90 py-6 px-12 lg:px-0 mx-0 rounded-md"
        >
            <div className="text-center text-3xl mb-6">Create Event</div>

            <div className="mb-4">
                <label className="block text-lg font-medium mb-2" htmlFor="partyType">
                Type of Party
                </label>
                <select
                id="partyType"
                name="partyType"
                className="w-80 px-3 py-2 rounded-md bg-gray-300 text-black"
                value={eventData.partyType}
                onChange={handleChange}
                required
                >
                <option value="" disabled>
                    Select party type
                </option>
                {partyOptions.map((option) => (
                    <option key={option} value={option}>
                    {option}
                    </option>
                ))}
                </select>
            </div>

            <div className="mb-4">
                <label className="block text-lg font-medium mb-2">Event Dates</label>
                {eventData.dates.map((date, index) => (
                  <input
                    key={index}
                    type="date"
                    className="block w-40 px-3 py-2 rounded-md bg-gray-200 text-black mb-2"
                    value={date}
                    onChange={(e) => handleDateChange(index, e.target.value)}
                  />
                ))}
                <button
                  type="button"
                  onClick={handleAddDate}
                  className="bg-gray-800 hover:bg-black text-white px-4 py-2 rounded-md mt-2"
                >
                  Add Date
                </button>
            </div>

            <div className="mb-4">
                <label className="block text-lg font-medium mb-2" htmlFor="description">
                Description/Special Notes
                </label>
                <textarea
                id="description"
                name="description"
                className="w-full px-3 py-2 rounded-md bg-gray-200 text-black"
                placeholder="Enter event description"
                value={eventData.description}
                onChange={handleChange}
                required
                ></textarea>
            </div>

            <div className="mb-4">
                <label className="block text-lg font-medium mb-2" htmlFor="email">
                Email
                </label>
                <input
                type="email"
                id="email"
                name="email"
                className="w-80 px-3 py-2 rounded-md bg-gray-200 text-black"
                placeholder="Enter contact email"
                value={eventData.email}
                onChange={handleChange}
                required
                />
            </div>

            <div className="mb-4">
                <label className="block text-lg font-medium mb-2" htmlFor="phone">
                Phone (Optional)
                </label>
                <input
                type="tel"
                id="phone"
                name="phone"
                className="w-80 px-3 py-2 rounded-md bg-gray-200 text-black"
                placeholder="Enter contact phone number"
                value={eventData.phone}
                onChange={handleChange}
                />
            </div>

            <div className="mb-4">
                <label className="block text-lg font-medium mb-2">Food Preferences/Allergies</label>
                <textarea
                  name="foodPreferences"
                  className="w-full px-3 py-2 rounded-md bg-gray-200 text-black"
                  placeholder="Enter any food preferences or dietary restrictions"
                  value={eventData.foodPreferences}
                  onChange={handleChange}
                ></textarea>
            </div>

            <div className="mb-4">
                <label className="block text-lg font-medium mb-2">Catering/Foodtruck</label>
                <button
                    type="button"
                    onClick={() => setShowMenu({ ...showMenu, catering: true })}
                    className="bg-gray-800 hover:bg-black text-white px-4 py-2 rounded-md"
                >
                    Select Catering or Food Truck
                </button>

                {eventData.catering && (
                    <p className="mt-2 text-white">
                    Selected: <span className="font-bold">{eventData.catering}</span>
                    </p>
                )}

                {showMenu.catering && (
                    <div className="absolute inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
                    <div className="bg-white rounded-md p-6 shadow-lg w-3/4 max-w-2xl">
                        <h2 className="text-2xl font-bold mb-4">Select a Food Truck or Catering</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {foodOptions.map((option) => (
                            <div
                            key={option.id}
                            className="border border-gray-300 rounded-md overflow-hidden hover:shadow-md transition-shadow"
                            onClick={() => handleSelectOption(option, 'catering')}
                            >
                            <img
                                src={option.image}
                                alt={option.name}
                                className="w-full h-32 object-cover"
                            />
                            <div className="p-4">
                                <h3 className="text-xl font-bold">{option.name}</h3>
                                <p className="text-gray-600 text-sm">{option.description}</p>
                                <p className="text-yellow-500 font-semibold mt-2">
                                ⭐ {option.rating}
                                </p>
                            </div>
                            </div>
                        ))}
                        </div>

                        <button
                        type="button"
                        onClick={() => setShowMenu({ ...showMenu, catering: false })}
                        className="mt-6 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md"
                        >
                        Close
                        </button>
                    </div>
                    </div>
                )}
            </div>

            <div className="mb-4">
                <label className="block text-lg font-medium mb-2">Desserts</label>
                <button
                    type="button"
                    onClick={() => setShowMenu({ ...showMenu, desserts: true })}
                    className="bg-gray-800 hover:bg-black text-white px-4 py-2 rounded-md"
                >
                    Select Desserts
                </button>

                {eventData.desserts && (
                    <p className="mt-2 text-white">
                    Selected: <span className="font-bold">{eventData.desserts}</span>
                    </p>
                )}

                {showMenu.desserts && (
                    <div className="absolute inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
                    <div className="bg-white rounded-md p-6 shadow-lg w-3/4 max-w-2xl">
                        <h2 className="text-2xl font-bold mb-4">Select Desserts</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {dessertOptions.map((option) => (
                            <div
                            key={option.id}
                            className="border border-gray-300 rounded-md overflow-hidden hover:shadow-md transition-shadow"
                            onClick={() => handleSelectOption(option, 'desserts')}
                            >
                            <img
                                src={option.image}
                                alt={option.name}
                                className="w-full h-32 object-cover"
                            />
                            <div className="p-4">
                                <h3 className="text-xl font-bold">{option.name}</h3>
                                <p className="text-gray-600 text-sm">{option.description}</p>
                            </div>
                            </div>
                        ))}
                        </div>

                        <button
                        type="button"
                        onClick={() => setShowMenu({ ...showMenu, desserts: false })}
                        className="mt-6 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md"
                        >
                        Close
                        </button>
                    </div>
                    </div>
                )}
            </div>

            <div className="mb-4">
                <label className="block text-lg font-medium mb-2">Type of Music</label>
                <button
                    type="button"
                    onClick={() => setShowMenu({ ...showMenu, music: true })}
                    className="bg-gray-800 hover:bg-black text-white px-4 py-2 rounded-md"
                >
                    Select Music
                </button>

                {eventData.music && (
                    <p className="mt-2 text-white">
                    Selected: <span className="font-bold">{eventData.music}</span>
                    </p>
                )}

                {showMenu.music && (
                    <div className="absolute inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
                    <div className="bg-white rounded-md p-6 shadow-lg w-3/4 max-w-2xl">
                        <h2 className="text-2xl font-bold mb-4">Select Music</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {musicOptions.map((option) => (
                            <div
                            key={option.id}
                            className="border border-gray-300 rounded-md overflow-hidden hover:shadow-md transition-shadow"
                            onClick={() => handleSelectOption(option, 'music')}
                            >
                            <img
                                src={option.image}
                                alt={option.name}
                                className="w-full h-32 object-cover"
                            />
                            <div className="p-4">
                                <h3 className="text-xl font-bold">{option.name}</h3>
                                <p className="text-gray-600 text-sm">{option.description}</p>
                            </div>
                            </div>
                        ))}
                        </div>

                        <button
                        type="button"
                        onClick={() => setShowMenu({ ...showMenu, music: false })}
                        className="mt-6 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md"
                        >
                        Close
                        </button>
                    </div>
                    </div>
                )}
            </div>

            <div className="mb-4">
                <label className="block text-lg font-medium mb-2" htmlFor="tables">
                Number of Tables
                </label>
                <input
                type="number"
                id="tables"
                name="tables"
                className="w-20 px-3 py-2 rounded-md bg-gray-200 text-black"
                placeholder="Enter number of tables"
                value={eventData.tables}
                onChange={handleChange}
                min="0"
                />
            </div>

            <div className="mb-4">
                <label className="block text-lg font-medium mb-2" htmlFor="tents">
                Number of Tents
                </label>
                <input
                type="number"
                id="tents"
                name="tents"
                className="w-20 px-3 py-2 rounded-md bg-gray-200 text-black"
                placeholder="Enter number of tents"
                value={eventData.tents}
                onChange={handleChange}
                min="0"
                />
            </div>

            <button
                type="submit"
                className="bg-gray-800 hover:bg-black text-white px-6 py-2 rounded-md font-medium"
            >
                Create Event
            </button>
        </form>
      </div>
    </div>
  );
};

export default CreateEventPage;