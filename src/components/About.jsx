import React from "react";
import Image from "next/image";
import Link from "next/link";

import Athumb1 from "../assets/About Us/Focused on Business Impact.webp";
import Athumb2 from "../assets/Athumb2.jpg";
import { FaBolt, FaTools } from "react-icons/fa";
import { BiShield } from "react-icons/bi";
import { IoMdFlash } from "react-icons/io";

const About = () => {
  return (
    <div className="relative w-full bg-white px-4 py-10 sm:py-14 md:py-16">
      <div className="flex flex-col md:flex-row max-w-7xl mx-auto gap-10">
        <div className="relative w-full md:w-1/3 px-4 sm:px-6 lg:px-8 right">
          <Image src={Athumb1} alt="Electrician working" className="right " />

          {/* <div className="absolute bottom-0 right-0 left-0 w-33 sm:w-40 md:w-70 px-4 sm:px-6 lg:px-8">
            <Image
              src={Athumb2}
              alt="Secondary"
              width={400}
              height={400}
              className=""
            />
          </div> */}

          <div className="absolute bottom-4 right-4 bg-white p-3 sm:p-4 flex flex-col items-start w-28 sm:w-32 md:w-40 shadow rounded">
            <div className="flex items-center">
              <div className="h-6 w-1.5 sm:h-8 sm:w-2 bg-red-600 mr-2"></div>
              <span className="text-2xl sm:text-3xl md:text-4xl font-bold">
                10+
              </span>
            </div>
            <span className="text-gray-600 text-xs sm:text-sm mt-1">
              Years of experience
            </span>
          </div>
        </div>

        <div className="w-full md:w-2/3 flex flex-col justify-center relative">
          <div className="absolute top-0 right-0 p-4 md:p-8 hidden md:block">
            <div className="grid grid-cols-10 gap-1">
              {[...Array(60)].map((_, i) => (
                <div key={i} className="w-1 h-1 rounded-full bg-gray-200" />
              ))}
            </div>
          </div>
          <div className="section-subtitle flex text-base">
            <IoMdFlash className="text-icon text-lg mr-2 mt-1" />
            <span> About Macular</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-bold text-black mt-4 sm:mt-2 mb-4">
            Focused on Business Impact
          </h1>

          <p className="text-gray-800 text-base sm:text-lg  mx-auto  mb-6 ">
            Our story is not only defined by just manufacturing but it's also
            about enabling our B2B partners to grow with confidence. We’re a
            purpose-driven company that focuses on building long-term
            relationships with dealers, distributors, and suppliers who value
            reliability, transparency and innovation.
          </p>

          <p className="text-gray-800 text-base sm:text-lg  mx-auto  mb-6 ">
            Our facilities are equipped to handle scale, our processes are tuned
            for precision, and our team is driven by the belief that consistent
            quality creates consistent trust. From initial inquiry to
            post-delivery support, we aim to be your go-to industrial partner
            for dependable electrical solutions.
          </p>

          <div className="space-y-2 mb-4">
            {[
              "100% in-house production",
              "Custom solutions",
              "Nationwide distribution network",
            ].map((text, i) => (
              <div key={i} className="flex items-start">
                <div className="w-5 h-5 rounded-full bg-red-50 flex items-center justify-center mr-3 mt-1">
                  <div className="text-red-500 text-sm">⬤</div>
                </div>
                <span className="text-gray-600 text-lg">{text}</span>
              </div>
            ))}
          </div>

          {/* <div className="flex flex-col sm:flex-row items-start sm:items-center justify-start gap-4">
            <Link href="/contact-us">
              <button className="bg-[#ED2236] hover:bg-[#16171A] text-white font-medium py-2 sm:py-3 px-4  rounded transition-all duration-300 hover:shadow-md cursor-pointer">
             Know more
            </button>
            </Link>
           
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default About;
