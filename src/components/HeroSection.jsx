"use client";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Homeimg from "../assets/Homeimg.webp";
import Homeimg2 from '../assets/HomeBanner1.png'

const HeroSection = () => {
  return (
    <div className="w-full">
      <div className="relative h-[400px] sm:h-[500px] md:h-[80vh] bg-white overflow-hidden">
       
        <div className="absolute inset-0 z-0">
          <Image
            src={Homeimg}
            alt="Home"
            fill
            className="object-cover opacity-40"
            priority
          />
        </div>

        <div className="absolute homebanner2 w-[50%] h-[100vh]">
          <Image
            src={Homeimg2}
            alt="Home"
            fill
            className=""
            priority
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between h-full px-4 sm:px-6 lg:px-12 py-6 sm:py-10">
          <div className="text-black max-w-xl text-center md:text-left space-y-4 sm:space-y-6">
            
           
            <h1 className="text-5xl  font-bold mb-4">
              Quality is Our Identity
            </h1>
            
        
            <p className="text-gray-800 text-lg">
              Serving dealers, distributors, and suppliers with high-quality solutions directly from our manufacturing floor.
            </p>
           
            <Link href="/">
              <button className="bg-[#ED2236] hover:bg-[#16171A] text-white  font-bold py-2 sm:py-3 px-5 sm:px-7 rounded-md flex items-center mx-auto md:mx-0 transition duration-300">
                Explore Our Products
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
