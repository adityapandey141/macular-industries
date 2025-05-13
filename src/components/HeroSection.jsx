"use client";
import React from 'react';
import Link from 'next/link';
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

        <div className="absolute homebanner2 w-[60%] sm:w-[50%] h-[100vh] right-0 top-0">
          <Image
            src={Homeimg2}
            alt="Home Overlay"
            fill
            className="object-contain"
            priority
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto flex flex-col items-center justify-center md:flex-row md:items-center md:justify-between h-full px-6 sm:px-8 lg:px-12 py-8 sm:py-12">
          <div className="text-black max-w-xl text-center md:text-left space-y-5 sm:space-y-6">
            <h1 className="text-3xl sm:text-5xl font-bold leading-tight">
              Quality is Our Identity
            </h1>
            <p className="text-gray-800 text-base sm:text-lg leading-relaxed">
              Serving dealers, distributors, and suppliers with high-quality solutions directly from our manufacturing floor.
            </p>
            <div className="flex justify-center md:justify-start">
              <Link href="/product">
                <button className="bg-[#ED2236] hover:bg-[#16171A] text-white font-semibold py-3 px-6 rounded-md transition duration-300">
                  Explore Our Products
                </button>
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default HeroSection;
