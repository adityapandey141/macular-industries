import React from 'react';
import HBanner from "../assets/HBanner.jpg";

const QualityHeader = () => {
  return (
    <section
      className="w-full h-56 sm:h-72 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${HBanner})` }}
    >
      <div className="bg-gradient-to-r from-green-50 via-yellow-50 to-purple-50 bg-opacity-10 w-full h-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-start">
            <div className="text-black max-w-xl text-center md:text-left space-y-5 sm:space-y-6">
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-black ">
             Commitment to Quality
            </h2>
             <div>
          
            <p className="text-gray-800 text-base sm:text-lg ">
            Quality is our way of doing business. Every product undergoes strict in-house inspections and durability tests to ensure it meets the highest industry standards.
            </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QualityHeader;
