"use client";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Homeimg from "../assets/Homeimg.webp";
import Homeimg2 from '../assets/HomeBanner1.png';

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
            alt="Home Overlay"
            fill
            className="object-contain"
            priority
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto flex flex-col items-center justify-center text-center h-full px-4 sm:px-6 lg:px-12">
          <div className="text-black max-w-2xl space-y-6">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
              Quality is Our Identity
            </h1>
            <p className="text-gray-800 text-base sm:text-lg">
              Serving dealers, distributors, and suppliers with high-quality solutions directly from our manufacturing floor.
            </p>
            <Link href="/product">
              <button className="bg-[#ED2236] hover:bg-[#16171A] text-white font-bold py-3 px-7 rounded-md transition duration-300">
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
