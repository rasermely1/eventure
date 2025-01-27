import React from 'react'
import '../globals.css';
import Header from '../components/header';

const page = () => {
  return (
    <div className="grid grid-rows-12 bg-black h-screen">
      <Header></Header>
      <div className="text-white">
        Food
      </div>
    </div>
  )
}

export default page;