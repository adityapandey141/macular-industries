"use client";
import Image from "next/image";
import Link from "next/link";
import { FaBolt, FaTools } from "react-icons/fa";
import { IoMdFlash } from "react-icons/io";

import { BiShield } from "react-icons/bi";
import About1 from "../assets/Home Page/Smart, Stylish & Sturdy Solutions.webp";
import About2 from "../assets/Home Page/Smart, Stylish & Sturdy Solutions 2.webp";
import Aboutshape from "../assets/Aboutshape.png";
// import shape1 from "../assets/shape1.png";

const AboutUs = () => {
  return (
    <section className="relative  bg-white px-5 md:px-35 py-12 md:py-15">
      <main className="relative ">
        <div className="mx-auto  grid md:grid-cols-2 gap-10 lg:gap-12 items-center">
          <div className="relative z-10">
            <div className="mb-2 sm:mb-4">
              <div
                className="section-subtitle flex text-base"
                data-aos="fade-up"
                data-aos-delay="30"
                data-aos-duration="800"
                data-aos-easing="ease-in-out"
              >
                <IoMdFlash className="text-icon text-lg mr-2 mt-1" />
                <span> About Macular</span>
              </div>
            </div>
            <h1
              className="text-3xl md:text-5xl font-[600] text-black mt-4 sm:mt-2 mb-4"
              data-aos="fade-up"
              data-aos-delay="30"
              data-aos-duration="900"
              data-aos-easing="ease-in-out"
            >
              Smart, Stylish & Sturdy Solutions
            </h1>

            <p
              className="text-gray-800 text-base md:text-base  mx-auto  mb-4  text-justify"
              data-aos="fade-up"
              data-aos-delay="30"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
            >
              At Macular Industries Private Limited, we believe good design
              doesn’t stop at appearance, but it starts with purpose. From
              modular plates to innovative fan hooks, every product we create is
              made to last, built to blend in, and designed to stand out. As a
              proud Indian manufacturer, we supply directly to dealers,
              distributors, and suppliers who value consistency, safety, and a
              partner they can count on.
            </p>

            <div className="flex flex-col  gap-4 md:gap-4 mb-4">
              <div className="flex items-center space-x-3">
                <div className="bg-red-500 p-2 rounded-md">
                  <FaTools className="text-white text-xl " />
                </div>
                <h4 className="font-semibold text-gray-800 text-lg">
                  A Commitment to Quality
                </h4>
              </div>

              <div className="flex items-center space-x-3">
                <div className="bg-red-500 p-2 rounded-md">
                  <BiShield className="text-white text-xl " />
                </div>
                <h4 className="font-semibold text-gray-800 text-lg">
                  Proudly Made in India
                </h4>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <Link href="/about-us">
                <button className="bg-[#ED2236] hover:bg-[#16171A] text-white font-medium py-2 sm:py-2 px-4  rounded transition-all duration-300 hover:shadow-md cursor-pointer">
                  KNOW MORE
                </button>
              </Link>
              {/* <div className="w-30 h-20 relative">
                <Image
                  src={shape1}
                  alt="Signature"
                  fill
                  className="object-contain"
                />
              </div> */}
            </div>
          </div>

          <div className="relative mt-10 md:mt-0">
            <div className="absolute z-1 -top-6 -left-0 w-24 sm:w-36 h-36 sm:h-48 rotatingimg">
              <Image
                src={Aboutshape}
                alt="Decorative Shape"
                fill
                className="object-contain"
                priority
              />
            </div>

            <div className="relative w-[220px] h-[320px] md:w-[420px] md:h-[520px]  rounded-lg overflow-hidden shadow-lg md:ml-15 ">
              <Image
                src={About2}
                alt="Professional Electrician"
                fill
                className="object-cover"
              />
            </div>

            <div className="absolute -bottom-0 md:-bottom-8 right-10 md:-left-0 w-50 h-50  md:w-70 md:h-60 rounded-lg overflow-hidden shadow-md rotatingimg2">
              <Image
                src={About1}
                alt="Electrical Panel"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </main>
    </section>
  );
};

export default AboutUs;
