import React from 'react';
import HBanner from "../assets/HBanner.jpg";

const AboutUsHeader = () => {
  return (
    <section
         className="w-full h-56 sm:h-72  bg-cover bg-center bg-no-repeat"
         style={{ backgroundImage: `url(${HBanner})` }}
       >
         <div className="bg-gradient-to-r from-green-50 via-yellow-50 to-purple-50 bg-opacity-10 w-full h-full">
           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-start">
             <div className="text-left">
               <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-black ">
                 ABOUT US
               </h2>
             </div>
           </div>
         </div>
       </section>
  );
};

export default AboutUsHeader;
