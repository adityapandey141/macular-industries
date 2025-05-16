"use client";
import Image from 'next/image';
import { useState, useEffect } from 'react';
import Wshape from "../assets/Wshape.png";
import choose1 from "../assets/choose1.png";

const WhyChooseUs = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const benefits = [
    {
      id: 1,
      title: "Made with Premium-Grade Materials",
      iconPath: "M8 0L9.8 5.4H15.5L10.9 8.8L12.7 14.2L8 10.8L3.3 14.2L5.1 8.8L0.5 5.4H6.2L8 0Z",
    },
    {
      id: 2,
      title: "In-House Manufacturing for Total Control",
      iconPath: "M2 2H14V14H2V2ZM4 4V12H12V4H4Z",
    },
    {
      id: 3,
      title: "Wide Product Range to Fit All Needs",
      iconPath: "M3 3H13V5H3V3ZM3 7H13V9H3V7ZM3 11H13V13H3V11Z",
    },
    {
      id: 4,
      title: "Tested for Safety",
      iconPath: "M8 0L9.8 5.4H15.5L10.9 8.8L12.7 14.2L8 10.8L3.3 14.2L5.1 8.8L0.5 5.4H6.2L8 0Z",
    },
  ];

  return (
    <section className="relative px-4 sm:px-6 lg:px-8 py-10 sm:py-16 lg:py-24 bg-black text-white overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row gap-10 lg:gap-20 relative z-10">
       
        <div className="w-full lg:w-1/2 px-2 sm:px-4 lg:px-6">
          <span className="text-sm text-white">
            Why Choose Us?
          </span>
         
          <h1 className="text-2xl sm:text-4xl font-bold text-white mt-4 sm:mt-2 mb-4">
            Manufactured with Care
          </h1>

          <p className="text-white text-base mb-6 max-w-xl">
            From raw materials to the final finish, every step is controlled, checked, and refined—
            because when it comes to safety and quality, we don't take shortcuts.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {benefits.map((benefit) => (
              <div
                key={benefit.id}
                className="flex items-center p-4 sm:p-5 bg-gray-900 rounded-lg shadow-md"
              >
                <div className="bg-red-500 rounded-full w-12 h-12 flex items-center justify-center mr-4 shrink-0">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-white"
                  >
                    <path d={benefit.iconPath} />
                  </svg>
                </div>
                <span className="text-sm sm:text-base font-medium">{benefit.title}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute whyusbanner opacity-50 pointer-events-none">
        <Image src={choose1} alt="Background Pattern" className="" />
      </div>
    </section>
  );
};

export default WhyChooseUs;