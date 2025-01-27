import React from 'react';
import '../globals.css';
import Header from '../components/header';

const VendorsPage = () => {
  const vendors = [
    {
      id: 1,
      name: 'Taco Paradise',
      image: '/taco-paradise.jpg',
      reviews: '4.8 stars (230 reviews)',
      description: 'Authentic Mexican tacos with fresh ingredients.',
      website: 'https://tacoparadise.example.com',
    },
    {
      id: 2,
      name: 'BBQ Bonanza',
      image: '/bbq-bonanza.jpg',
      reviews: '4.6 stars (180 reviews)',
      description: 'Delicious smoked BBQ with all the sides you love.',
      website: 'https://bbqbonanza.example.com',
    },
    {
      id: 3,
      name: 'Sweet Treats',
      image: '/sweet-treats.jpg',
      reviews: '4.9 stars (300 reviews)',
      description: 'Indulge in our cakes, cookies, and pastries.',
      website: 'https://sweettreats.example.com',
    },
  ];

  return (
    <div className="grid grid-rows-12 bg-black h-screen">
      <Header />
      <div className="text-white px-6 py-4 row-span-11">
        <h1 className="text-4xl font-serif text-center mb-10">Vendors</h1>
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {vendors.map((vendor) => (
            <div
              key={vendor.id}
              className="bg-gray-800 rounded-lg shadow-lg overflow-hidden"
            >
              <img
                src={vendor.image}
                alt={vendor.name}
                className="w-full h-40 object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-bold text-white">{vendor.name}</h2>
                <p className="text-yellow-400 mt-2">{vendor.reviews}</p>
                <p className="text-gray-300 mt-4">{vendor.description}</p>
                <a
                  href={vendor.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 text-blue-400 hover:underline"
                >
                  Visit Website
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VendorsPage;