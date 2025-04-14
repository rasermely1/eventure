"use client";

import { motion } from "motion/react";

const IdentityFade = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 2.0 }}
      viewport={{ once: true }}
      className="grid lg:grid-cols-2 row-span-3 bg-gray-200 content-center"
    >
        <div className="col-span-1 flex justify-center my-8">
          <img src="/event-invitations.jpg" className="h-44 w-36 md:h-64 md:w-44 xl:h-96 xl:w-64 brightness-75"></img>
        </div>

        <div className="col-span-1 sm:mt-8 mx-8 sm:mx-24">
            <div className="font-sans text-xl font-thin mb-4 sm:mb-12">Eventure Unique Identity</div>
            <div className="font-sans font-thin text-lg lg:text-3xl me-12 xl:me-64">
              Unlike other platforms, Eventure offers a seamless, 
              all-in-one booking experience. 
            </div>
        </div>
    </motion.div>
  );
};

export default IdentityFade;