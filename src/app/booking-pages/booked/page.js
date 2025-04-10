"use client";

import '../../globals.css';
import Header from "@/app/components/header";
import React, { useEffect, useState } from "react";

const EventPlannedPage = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setTimeout(() => setIsVisible(true), 500);
    }, []);

    return (
        <div className="grid grid-rows-7">
            <Header />
            <div className="font-sans row-span-6 container-fluid h-screen w-screen flex flex-col items-center justify-center">
                <div className="relative flex flex-col items-center justify-end h-[340px] w-[420px] sm:w-[520px] bg-clear overflow-hidden rounded-lg">
                    
                    <div className="absolute top-0 left-0 w-full bg-clear flex justify-center items-start">
                        <div className="absolute top-0 w-0 h-0 border-l-[250px] border-l-transparent border-r-[250px] border-r-transparent border-b-[190px] border-b-[#f2ede6] sm:border-l-[300px] sm:border-r-[300px] sm:border-b-[200dpx]"></div>
                    </div>

                    <div
                        className={`absolute bottom-14 bg-white p-6 items-center rounded-lg shadow-2xl w-[90%] h-[55%] flex flex-col transform transition-all duration-1000 ease-out z-10
                        ${isVisible ? "translate-y-[-25%] opacity-100" : "translate-y-full opacity-0"}`}
                    >
                        <div className="text-2xl font-bold tracking-wide text-gray-800">Event Planned!</div>
                        <div className="text-gray-700">Contact us: (630) 965-0026</div>
                        <div className="text-gray-700">Email: EventureEventPlanning@gmail.com</div>
                    </div>

                    <div className="absolute bottom-0 w-full h-[50%] bg-[#e8e3db] rounded-b-lg shadow-lg z-20"></div>
                </div>
            </div>
        </div>
    );
};

export default EventPlannedPage;