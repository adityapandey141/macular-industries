"use client";
import React from "react";
import Image from "next/image";
import Homeimg from "../assets/Home Page/Home Banner.webp";
import Homeimg2 from "../assets/HomeBanner1.png";
const HeroSection = () => {
  return (
    <div className="w-full">
      <div className="relative h-[450px]  md:h-[80vh] ">
        <div className="absolute inset-0 z-0">
          <Image
            src={Homeimg}
            alt="Home"
            fill
            className="object-cover "
            priority
          />
        </div>

        <div className="absolute homebanner2 bg-black inset-0 opacity-50   md:h-[80vh] ">
          {/* <Image
            src={Homeimg2}
            alt="Home Overlay"
            fill
            className="object-cover"
            priority
          /> */}
        </div>

        <div className="text-white relative z-10 px-5 md:px-35 flex flex-col items-center justify-center md:flex-row md:items-center md:justify-between h-full ">
          <div className=" w-full  text-center md:text-left space-y-4 sm:space-y-6 ">
            <h1
              className=" text-5xl md:text-7xl font-bold "
              data-aos="fade-up"
              data-aos-delay="30"
              data-aos-duration="800"
              data-aos-easing="ease-in-out"
            >
              Quality is Our Identity
            </h1>
            <p
              className=" text-base sm:text-lg md:text-xl leading-relaxed sm:leading-loose max-w-2xl mx-auto md:mx-0"
              data-aos="fade-up"
              data-aos-delay="30"
              data-aos-duration="900"
              data-aos-easing="ease-in-out"
            >
              Serving dealers, distributors, and suppliers with high-quality
              solutions directly from our manufacturing floor.
            </p>
            <div className="flex justify-center md:justify-start">
              <a href="/product">
                <button
                  className="bg-[#ED2236] hover:bg-[#16171A] text-white font-medium py-3 px-4 rounded transition-all duration-300 hover:shadow-md cursor-pointer"
                  data-aos="fade-up"
                  data-aos-delay="30"
                  data-aos-duration="1000"
                  data-aos-easing="ease-in-out"
                >
                  EXPLORE OUR PRODUCTS
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
