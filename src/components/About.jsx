import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import Athumb1 from "../assets/Athumb1.jpg";
import Athumb2 from "../assets/Athumb2.jpg";

const About = () => {
  return (
    <div className="relative w-full bg-white px-4 py-10 sm:py-14 md:py-16">
      <div className="flex flex-col md:flex-row max-w-7xl mx-auto gap-10">
        
     
        <div className="relative w-full md:w-1/2">
          <Image 
            src={Athumb1}
            alt="Electrician working" 
            width={600} 
            height={600}
            className=""
          />

      
          <div className="absolute bottom-0 right-0 left-0 w-33 sm:w-40 md:w-70">
            <Image 
              src={Athumb2}
              alt="Secondary" 
              width={400} 
              height={400}
              className=""
            />
          </div>

         
          <div className="absolute bottom-4 right-4 bg-white p-3 sm:p-4 flex flex-col items-start w-28 sm:w-32 md:w-40 shadow rounded">
            <div className="flex items-center">
              <div className="h-6 w-1.5 sm:h-8 sm:w-2 bg-red-600 mr-2"></div>
              <span className="text-2xl sm:text-3xl md:text-4xl font-bold">35+</span>
            </div>
            <span className="text-gray-600 text-xs sm:text-sm mt-1">Years of experience</span>
          </div>
        </div>

   
        <div className="w-full md:w-1/2 flex flex-col justify-center relative">
    
          <div className="absolute top-0 right-0 p-4 md:p-8 hidden md:block">
            <div className="grid grid-cols-10 gap-1">
              {[...Array(60)].map((_, i) => (
                <div key={i} className="w-1 h-1 rounded-full bg-gray-200" />
              ))}
            </div>
          </div>

          <div className="text-gray-500 text-sm mb-3">About Macular</div>

           <h1 className="text-2xl sm:text-4xl font-bold text-black mt-4 sm:mt-2 mb-4">
            Focused on Business Impact
          </h1>

          <p className="text-gray-600 text-sm sm:text-base mb-6">
            Our story is not only defined by just manufacturing but it's also about enabling our B2B partners to grow with confidence. We’re a purpose-driven company that focuses on building long-term relationships with dealers, distributors, and suppliers who value reliability, transparency and innovation.
          </p>

          <p className="text-gray-600 text-sm sm:text-base mb-6">
            Our facilities are equipped to handle scale, our processes are tuned for precision, and our team is driven by the belief that consistent quality creates consistent trust. From initial inquiry to post-delivery support, we aim to be your go-to industrial partner for dependable electrical solutions.
          </p>

          <div className="flex flex-col sm:flex-row items-start sm:items-center sm:space-x-8 space-y-4 sm:space-y-0 mb-8">
            <div className="flex items-center">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg bg-red-50 flex items-center justify-center mr-3">
                <svg className="text-red-500 w-5 h-5 sm:w-6 sm:h-6" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M12 8v4l2 2"/>
                  <path d="M8.93 16.93a5.5 5.5 0 1 0 6.14-9"/>
                </svg>
              </div>
              <h1 className="font-semibold text-black text-xl">
                Expert lectrician
              </h1>
            </div>

            {/* <div className="w-2 h-2 bg-red-500 rotate-45 hidden sm:block"></div> */}

            <div className="flex items-center">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg bg-red-50 flex items-center justify-center mr-3">
                <svg className="text-red-500 w-5 h-5 sm:w-6 sm:h-6" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M12 16v-4"/>
                  <path d="M12 8h.01"/>
                </svg>
              </div>
              <h1 className="font-semibold text-black text-xl">
                Safety assurance
              </h1>
            </div>
          </div>

     
          <div className="space-y-4 mb-8">
            {[
              '100% in-house production',
              'Custom solutions',
              'Nationwide distribution network'
            ].map((text, i) => (
              <div key={i} className="flex items-start">
                <div className="w-5 h-5 rounded-full bg-red-50 flex items-center justify-center mr-3 mt-1">
                  <div className="text-red-500 text-sm">⬤</div>
                </div>
                <span className="text-gray-600 text-lg">{text}</span>
                
              </div>
            ))}
          </div>

         
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-start gap-4">
            <Link href="/contact-us">
              <button className="bg-[#ED2236] hover:bg-[#16171A] text-white  font-bold py-2 sm:py-3 px-5 sm:px-7 rounded-md flex items-center mx-auto md:mx-0 transition duration-300">
                Know more
              </button>
            </Link>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
