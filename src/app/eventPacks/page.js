import React from 'react';
import '../globals.css';
import Header from '../components/header';

const EventPacksPage = () => {
  const eventPacks = [
    {
      id: 1,
      name: 'Taco50',
      image: '/taco-paradise.jpg',
      reviews: 'Tacos for 50 people from a restaurant or food truck of your choosing, tables(5) chairs(50)',
      description: 'Email us and ask for store and food truck options pack, use the subject line Taco50. Please include a time and place for your event!',
      website: 'Email us at EventureEventPlanning@gmail.com',
    },
    {
      id: 2,
      name: 'BBQ80',
      image: '/bbq-bonanza.jpg',
      reviews: 'BBQ for 80 people from a restaurant or food truck of your choosing, tables(8) chairs(80)',
      description: 'Email us and ask for store and food truck options pack, use the subject line BBQ80. Please include a time and place for your event!',
      website: 'Email us at EventureEventPlanning@gmail.com',
    },
    {
      id: 3,
      name: 'SweetTreats20',
      image: '/sweet-treats.jpg',
      reviews: 'Dessert for 20 people from a restaurant or food truck of your choosing, tables(2) chairs(20)',
      description: 'Email us and ask for store and food truck options pack, use the subject line SweetTreats20. Please include a time and place for your event!',
      website: 'Email us at EventureEventPlanning@gmail.com',
    },
    {
      id: 4,
      name: 'SweetTreats20',
      image: '/sweet-treats.jpg',
      reviews: 'Dessert for 20 people from a restaurant or food truck of your choosing, tables(2) chairs(20)',
      description: 'Email us and ask for store and food truck options pack, use the subject line SweetTreats20. Please include a time and place for your event!',
      website: 'Email us at EventureEventPlanning@gmail.com',
    },
    {
      id: 5,
      name: 'SweetTreats20',
      image: '/sweet-treats.jpg',
      reviews: 'Dessert for 20 people from a restaurant or food truck of your choosing, tables(2) chairs(20)',
      description: 'Email us and ask for store and food truck options pack, use the subject line SweetTreats20. Please include a time and place for your event!',
      website: 'Email us at EventureEventPlanning@gmail.com',
      
    },
    {
      id: 6,
      name: 'SweetTreats20',
      image: '/sweet-treats.jpg',
      reviews: 'Dessert for 20 people from a restaurant or food truck of your choosing, tables(2) chairs(20)',
      description: 'Email us and ask for store and food truck options pack, use the subject line SweetTreats20. Please include a time and place for your event!',
      website: 'Email us at EventureEventPlanning@gmail.com',
      
    }
  ];

  return (
    <div className="grid grid-rows-12 bg-[#5e8db8] bg-center bg-cover h-full min-h-screen">
      <Header />
      <div className="text-white px-6 py-4 row-span-11">
        <h1 className="text-4xl font-serif text-center mb-10">Event Packs</h1>
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {eventPacks.map((eventPack) => (
            <div
              key={eventPack.id}
              className="bg-white border-4 border-black rounded-lg shadow-lg overflow-hidden"
            >
              <img
                src={eventPack.image}
                alt={eventPack.name}
                className="w-full h-40 object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-bold text-black">{eventPack.name}</h2>
                <p className="text-black mt-2">{eventPack.reviews}</p>
                <p className="text-black mt-4">{eventPack.description}</p>
                <a
                  href="https://gmail.com"
                  className="inline-block mt-4 text-blue-400 hover:underline"
                >
                  {eventPack.website}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventPacksPage;