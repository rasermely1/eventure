"use client";

import { motion } from "motion/react";

const DetailsFade = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 2.0 }}
      viewport={{ once: true }}
      className="row-span-5 grid lg:grid-cols-2 bg-gray-200 pt-8"
    >
        <div className="col-span-1 grid grid-rows-6 ms-8 sm:ms-32">
          <div className="row-span-1 text-xl font-sans font-thin pt-8">DETAILS</div>
          <div className="row-span-1 text-3xl font-sans font-thin pb-4">HOW WE WILL COLLABORATE</div>
          <div className="row-span-2 sm:text-xl font-sans font-thin">
            Lorem ipsum dolor sit amet, 
            consectetur adipiscing elit. 
            Curabitur vulputate odio luctus, 
            convallis erat eget, vulputate dolor.
            Lorem ipsum dolor sit amet, 
            consectetur adipiscing elit.
          </div>
          <div className="row-span-1 text-3xl font-sans font-thin">Project Scope</div>
          <div className="row-span-2 sm:text-xl font-sans font-thin">
            Lorem ipsum dolor sit amet, 
            consectetur adipiscing elit. 
            Curabitur vulputate odio luctus, 
            convallis erat eget, vulputate dolor.
          </div>
        </div>

        <div className="col-span-1 hidden lg:flex items-center justify-center brightness-75 mb-8">
          <img src="planning-blue.jpg" className="h-64 w-52 xl:h-80 xl:w-64 rounded-2xl"></img>
        </div>
    </motion.div>
  );
};

export default DetailsFade;