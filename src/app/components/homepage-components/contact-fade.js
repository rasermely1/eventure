"use client";

import { motion } from "motion/react";

const ContactFade = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 2.0 }}
      viewport={{ once: true }}
      className="row-span-2 bg-[#5e8db8] grid xl:grid-cols-3 content-center ps-6 sm:ps-44"
    >
        <div className="col-span-1 sm:text-4xl font-serif pb-8">Contact Info</div>
        <div className="col-span-1 text-sm sm:text-xl font-sans font-thin">
            <div className="pb-4">Company Email: EventureEventPlanning@gmail.com</div>
            <div className="pb-4 xl:pb-0">Company Phone: +1 (630) 965-0026</div>
        </div>
        <div className="col-span-1 text-sm sm:text-xl font-sans font-thin">
            <div className="pb-4">Website Helpline: +1 (617) 756-5021</div>
            <div className="pb-4 xl:pb-0">Website Requests: raserm1@lsu.edu</div>
        </div>
    </motion.div>
  );
};

export default ContactFade;