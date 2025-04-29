"use client";

import { motion } from "motion/react";

const PartnersFade = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 2.0 }}
      viewport={{ once: true }}
      className="row-span-3 grid sm:grid-cols-3 bg-gray-200 items-center"
    >
        <div className="col-span-1 text-lg sm:text-2xl font-sans font-thin ms-8 sm:ms-44">Partnering Companys</div>
        <div className="col-span-1 brightness-50 bg-cover bg-center bg-[url('/north.png')] h-32 w-32 sm:h-[40%] sm:w-[40%] ms-20"></div>
        <div className="col-span-1 brightness-50 bg-cover bg-center bg-[url('/burger.png')] h-40 w-40 sm:h-[50%] sm:w-[50%] ms-16"></div>
    </motion.div>
  );
};

export default PartnersFade;