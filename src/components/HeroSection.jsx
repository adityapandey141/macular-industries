'use client';
import React from 'react';
import Image from 'next/image';
import Homeimg from "../assets/Homeimg.webp";
import Homeimg2 from '../assets/HomeBanner1.png';

const HeroSection = () => {
  return (
    <div className="w-full">
      <div className="relative h-[450px] sm:h-[550px] md:h-[80vh] bg-white overflow-hidden">

       
        <div className="absolute inset-0 z-0">
          <Image
            src={Homeimg}
            alt="Home"
            fill
            className="object-cover opacity-40"
            priority
          />
        </div>

                  
          <div className="absolute homebanner2 hidden sm:block w-[50%] h-full right-0 top-0">
            <Image
              src={Homeimg2}
              alt="Home Overlay"
              fill
              className="object-contain"
              priority
            />
          </div>


              <div className="relative z-10 max-w-7xl mx-auto flex flex-col items-center justify-center md:flex-row md:items-center md:justify-between h-full px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <div className="text-black w-full overflow-x-auto text-center md:text-left space-y-4 sm:space-y-6">
            <h1 className="text-[8vw] sm:text-5xl md:text-6xl font-bold whitespace-nowrap">
              Quality is Our Identity
            </h1>
            <p className="text-gray-800 text-base sm:text-lg md:text-xl leading-relaxed sm:leading-loose max-w-2xl mx-auto md:mx-0">
              Serving dealers, distributors, and suppliers with high-quality solutions directly from our manufacturing floor.
            </p>
            <div className="flex justify-center md:justify-start">
              <a href="/product">
                <button className="bg-[#ED2236] hover:bg-[#16171A] text-white font-medium py-3 px-6 rounded transition-all duration-300 hover:shadow-md cursor-pointer text-sm sm:text-base md:text-lg">
                  Explore Our Products
                </button>
                </a>
              </div>
            </div>
          </div>
      </div>
    </div>
  );
};

export default HeroSection;
