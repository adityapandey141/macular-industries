"use client";
import Image from 'next/image';
import { useState } from 'react';
// import Pshape1 from "../assets/Pshape1.png";
// import Pshape2 from "../assets/Pshape2.png";
// import Pshape3 from "../assets/Pshape3.png";
// import Pshape4 from "../assets/Pshape4.png";
import Product1 from "../assets/Product1.jpg";
import Product2 from "../assets/Product2.jpg";
import Product3 from "../assets/Product3.jpg";
import Product4 from "../assets/Product4.jpg";

const ProductCategories = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const services = [
  {
    id: 1,
    title: "Modular Holder",
    description:
      "Safety and durability, our modular holders offer a snug fit and secure connection for hassle-free installations.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
        fill="none" stroke="currentColor" strokeWidth="2"
        strokeLinecap="round" strokeLinejoin="round"
        className="w-8 h-8 text-white">
        <path d="M12 2v20M2 12h20" />
      </svg>
    ),
    image: Product1,
  },
  {
    id: 2,
    title: "Modular Plate",
    description:
      "Sleek, stylish, and sturdy, these plates bring together aesthetics and reliability for a flawless finish in any project.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
        fill="none" stroke="currentColor" strokeWidth="2"
        strokeLinecap="round" strokeLinejoin="round"
        className="w-8 h-8 text-white">
        <path d="M6 12l6 6 6-6" />
      </svg>
    ),
    image: Product2,
  },
  {
    id: 3,
    title: "POP Fan Hook",
    description:
      "A smart solution to hold ceiling fans firmly in POP ceilings. Built tough with zero compromise on safety.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
        fill="none" stroke="currentColor" strokeWidth="2"
        strokeLinecap="round" strokeLinejoin="round"
        className="w-8 h-8 text-white">
        <circle cx="12" cy="12" r="10" />
      </svg>
    ),
    image: Product3,
  },
  {
    id: 4,
    title: "FanCape Series",
    description:
      "Upgrade how ceiling fans are installed and displayed, the FanCape Series adds that clean, professional touch.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
        fill="none" stroke="currentColor" strokeWidth="2"
        strokeLinecap="round" strokeLinejoin="round"
        className="w-8 h-8 text-white">
        <path d="M4 4h16v16H4z" />
      </svg>
    ),
    image: Product4,
  },
];

  return (
    <div className="w-full bg-white pt-6 sm:pt-10 md:pt-0">
      <section className="px-4 sm:px-6 lg:px-8 py-10 sm:py-14 md:py-16">
        <div className="max-w-7xl mx-auto">
           <div className="mb-2 sm:mb-4">
              <span className="text-sm text-gray-600 ">
               Product Range
              </span>
            </div>

            <h1 className="text-2xl sm:text-4xl font-bold text-black mt-4 sm:mt-2 mb-4">
              That Fits Every Project, Big or Small
            </h1>
         
        </div>
      </section>

      <section className="px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16 lg:pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="relative h-48 sm:h-56 md:h-64 w-full">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </div>
              
                <div className="p-5 sm:p-6 flex flex-col items-center text-center">
                  <div className="bg-red-500 rounded-full w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-black mb-2">{service.title}</h3>
                  <p className="text-gray-600 text-base ">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};


export default ProductCategories;

