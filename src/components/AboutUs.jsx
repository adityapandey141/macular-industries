"use client";
import Image from 'next/image';
import Link from 'next/link';
import { FaBolt, FaTools } from 'react-icons/fa';
import { BiShield } from 'react-icons/bi';
import About1 from "../assets/About1.jpg";
import About2 from "../assets/About2.jpg";
import Aboutshape from "../assets/Aboutshape.png";
// import shape1 from "../assets/shape1.png";

const AboutUs = () => {
  return (
    <div className="relative w-full bg-white">
      <main className="relative py-12 sm:py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10 lg:gap-12 items-center">
 
          <div className="relative z-10">
            <div className="mb-2 sm:mb-4">
              <span className="text-sm text-gray-600 ">
                About Us
              </span>
            </div>

            <h1 className="text-2xl sm:text-4xl font-bold text-black mt-4 sm:mt-2 mb-4">
              Smart, Stylish & Sturdy Solutions
            </h1>

            <p className="text-gray-600 text-base  mb-6 max-w-xl">
              At Macular Industries Private Limited, we believe good design doesn’t stop at appearance, but it starts with purpose. From modular plates to innovative fan hooks, every product we create is made to last, built to blend in, and designed to stand out. As a proud Indian manufacturer, we supply directly to dealers, distributors, and suppliers who value consistency, safety, and a partner they can count on.
            </p>

            <div className="flex flex-col sm:flex-row sm:flex-wrap gap-4 sm:gap-6 mb-8">
              <div className="flex items-center space-x-3">
                <div className="bg-red-500 p-3 rounded-md">
                  <FaTools className="text-white text-xl sm:text-3xl" />
                </div>
                <h4 className="font-semibold text-gray-800 text-lg">A Commitment to Quality</h4>
              </div>

              <div className="flex items-center space-x-3">
                <div className="bg-red-500 p-3 rounded-md">
                  <BiShield className="text-white text-xl sm:text-3xl" />
                </div>
                <h4 className="font-semibold text-gray-800 text-lg">Proudly Made in India</h4>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <Link href="/about-us">
              <button className="bg-[#ED2236] hover:bg-[#16171A] text-white  font-bold py-2 sm:py-3 px-5 sm:px-7 rounded-md flex items-center mx-auto md:mx-0 transition duration-300">
                Know more
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

            <div className="absolute z-1 -top-6 -left-0 w-24 sm:w-36 h-36 sm:h-48">
              <Image
                src={Aboutshape}
                alt="Decorative Shape"
                fill
                className="object-contain"
                priority
              />
            </div>

            <div className="relative h-[320px] sm:h-[420px] w-full rounded-lg overflow-hidden shadow-lg">
              <Image
                src={About2}
                alt="Professional Electrician"
                fill
                className="object-cover"
              />
            </div>

            <div className="absolute -bottom-8 -left-0 w-70 h-60 rounded-lg overflow-hidden shadow-md">
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
    </div>
  );
};

export default AboutUs;
