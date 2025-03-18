"use client";

import { motion } from "motion/react";

const AboutFade = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 2.0 }}
      viewport={{ once: true }}
      className="row-span-7 grid sm:grid-cols-2"
    >
        <div className="col-span-1 grid grid-rows-2">
          <div className="row-span-1 flex justify-center items-center">
            <img src="/cali.png" alt="Team Picture" className="row-span-1 h-96 w-96"></img>
          </div>
          <div className="row-span-1 flex justify-center items-center">
            <img src="/cali.png" alt="Team Picture" className="row-span-1 h-96 w-96"></img>
          </div>
        </div>

        <div className="col-span-1 grid grid-rows-2 items-center">
          <div className="row-span-1">
            <div className="font-sans font-light lg:text-xl px-2">About The Team</div>
            <div className="font-sans font-thin lg:text-xl p-2">
              nEventure, founded in 2023 by St. Charles North High School students in the INCubator entrepreneurship class, aims to simplify event planning. After winning first place at Pitch Night, the team gained confidence to bring their vision to life. Now, they are focused on growing Eventure into an all-in-one platform for seamless event planning.
            </div>
          </div>
          <div className="row-span-1 hidden xl:block">
            <div className="font-sans font-light lg:text-xl px-2">About The Members</div>
            <div className="font-sans font-thin lg:text-xl p-2">
              Hi, I’m Noah Plumb, the CEO and co-founder of Eventure. 
              My partners and I created Eventure to make event planning hassle-free and accessible to all. 
              As the president of the National Business Honor Society, 
              a DECA member, and an entrepreneur with experience in the food industry, 
              I’m dedicated to building a platform that transforms how events come together.
            </div>
            <div className="font-sans font-thin lg:text-xl p-2">
              I’m Matt Rancour, the CAO and co-founder of Eventure. With experience in photography, 
              social media, and manufacturing, I bring a creative and strategic approach to 
              enhancing event planning. As a DECA member, I’m dedicated to helping build a 
              seamless platform that simplifies event coordination and delivers real value to users.
            </div>
            <div className="font-sans font-thin lg:text-xl p-2">
              I’m Callie Davidson, a senior at St. Charles North High School, 
              graduating in 2025 and heading to the University of Iowa. 
              As the Chief Marketing Officer of Eventure, a startup born from the Incubator program, 
              I’m passionate about event planning and business innovation. 
              I’m also involved in Key Club, serve as the varsity girls track captain, 
              participate in DECA, and am a member of the National Business Honor Society.
            </div>
          </div>
        </div>
    </motion.div>
  );
};

export default AboutFade;