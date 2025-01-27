import React from 'react'
import '../globals.css';
import Header from '../components/header';

const events = () => {

  const events = [
    {
      id: 1,
      name: 'Tech Conference 2023',
      date: 'March 10, 2023',
      location: 'New York City, NY',
      description: 'Join us for a day of insightful talks and networking with industry leaders.',
      contact: 'techconf2023@example.com',
    },
    {
      id: 2,
      name: 'Art Expo 2023',
      date: 'April 15, 2023',
      location: 'Los Angeles, CA',
      description: 'Explore the latest in contemporary art and meet renowned artists.',
      contact: 'artexpo2023@example.com',
    },
    {
      id: 3,
      name: 'Startup Pitch Night',
      date: 'May 20, 2023',
      location: 'San Francisco, CA',
      description: 'A night where startups pitch their ideas to investors and VCs.',
      contact: 'startupnight@example.com',
    },
    {
      id: 4,
      name: 'Karayoke Night',
      date: 'May 20, 2023',
      location: 'Chicago, IL',
      description: 'A night to relax with friends and music, find your voice!',
      contact: 'karayoke@example.com',
    },
  ];

  const month = new Date().getMonth();

  const monthStyles = [
    { background: "bg-[url('/winter.jpg')]", textColor: "text-blue-200", label: "January" },
    { background: "bg-[url('/winter.jpg')]", textColor: "text-blue-200", label: "February" },
    { background: "bg-[url('/winter.jpg')]", textColor: "text-blue-200", label: "March" },
    { background: "bg-[url('/spring.jpg')]", textColor: "text-yellow-200", label: "April" },
    { background: "bg-[url('/spring.jpg')]", textColor: "text-yellow-200", label: "May" },
    { background: "bg-[url('/spring.jpg')]", textColor: "text-yellow-200", label: "June" },
    { background: "bg-[url('/july.jpg')]", textColor: "text-red-400", label: "July" },
    { background: "bg-[url('/fall.jpg')]", textColor: "text-orange-800", label: "August" },
    { background: "bg-[url('/fall.jpg')]", textColor: "text-orange-800", label: "September" },
    { background: "bg-[url('/halloween.jpg')]", textColor: "text-purple-300", label: "October" },
    { background: "bg-[url('/fall.jpg')]", textColor: "text-orange-800", label: "November" },
    { background: "bg-[url('/winter.jpg')]", textColor: "text-blue-200", label: "December" },
  ];

  const currentStyles = monthStyles[month];

  
  return (
    <div className="grid grid-rows-[auto,1fr] bg-black min-h-screen">
      <Header />

      <div className="bg-black py-10">
        <h1 className="text-4xl font-serif text-center text-white mb-10">
          Upcoming Events
        </h1>
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
          {events.map((event) => (
            <div
              key={event.id}
              className={`shadow-md bg-center ${currentStyles.background} bg-cover rounded-lg overflow-hidden relative`}
            >
              <div className="absolute inset-0 bg-black bg-opacity-50"></div>

              <div className="relative p-6">
                <h2 className={`text-2xl font-bold ${currentStyles.textColor}`}>{event.name}</h2>
                <p className={`mt-2 ${currentStyles.textColor}`}>
                  <span className="font-semibold">Date:</span> {event.date}
                </p>
                <p className={`mt-2 ${currentStyles.textColor}`}>
                  <span className="font-semibold">Location:</span> {event.location}
                </p>
                <p className={`mt-4 ${currentStyles.textColor}`}>{event.description}</p>
                <p className={`mt-4 ${currentStyles.textColor}`}>
                  <span className="font-semibold">Contact:</span>{' '}
                  <a
                    href={`mailto:${event.contact}`}
                    className="text-blue-400 hover:underline"
                  >
                    {event.contact}
                  </a>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default events
