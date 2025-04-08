"use client";

import { motion } from "motion/react";
import Link from 'next/link';

const TitleFade = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 2.0 }}
      viewport={{ once: true }}
      className="relative grid sm:grid-cols-2 row-span-4"
    >
        <Link href="https://forms.gle/8ozutzrChcuUvNrZA" className="absolute inset-0 z-20 content-center text-center px-4 sm:px-28">
            <div className="font-sans hover:scale-125 cursor-pointer font-thin text-white hover:text-blue-400 text-4xl sm:text-6xl">
              <div>Plan Your Event Today</div>
              <div className="text-2xl">Everything You Need For Every Event</div>
            </div>
        </Link>
        <div className="relative col-span-1 bg-center bg-cover brightness-50 bg-[url('/blue-birthday.jpg')] z-10"></div>
        <div className="relative col-span-1 bg-center bg-cover brightness-50 bg-[url('/blue-food.jpg')] z-10"></div>
    </motion.div>
  );
};

export default TitleFade;