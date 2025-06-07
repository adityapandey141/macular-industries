"use client";
import Image from "next/image";
import { useState } from "react";
import Product1 from "../assets/Home Page/Modular Holder.webp";
import Product2 from "../assets/Home Page/Modular Plate.webp";
import Product3 from "../assets/Home Page/POP Fan Hook.webp";
import Product4 from "../assets/Home Page/FanCape Series.webp";
import { IoMdFlash } from "react-icons/io";

const ProductCategories = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const services = [
    {
      id: 1,
      title: "Modular Holder",
      description:
        "Safety and durability, our modular holders offer a snug fit and secure connection for hassle-free installations.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-8 h-8 text-white"
        >
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
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-8 h-8 text-white"
        >
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
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-8 h-8 text-white"
        >
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
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-8 h-8 text-white"
        >
          <path d="M4 4h16v16H4z" />
        </svg>
      ),
      image: Product4,
    },
  ];

  return (
    <section className="px-5 md:px-35 py-12 md:py-15 ">
      <div className="mb-4 md:mb-8">
        <div className=" ">
          <div
            className="section-subtitle flex text-base "
            data-aos="fade-up"
            data-aos-delay="30"
            data-aos-duration="800"
            data-aos-easing="ease-in-out"
          >
            <IoMdFlash className="text-icon text-lg mr-2 mt-1" />
            <span> Products Range</span>
          </div>

          <h1
            className="text-3xl sm:text-5xl font-bold text-black mt-4 "
            data-aos="fade-up"
            data-aos-delay="30"
            data-aos-duration="900"
            data-aos-easing="ease-in-out"
          >
            That Fits Every Project, Big or Small
          </h1>
        </div>
      </div>

      <div className="">
        <div className="">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <div
                key={service.id}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="relative h-48 sm:h-50 md:h-55 w-full overflow-hidden group">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-contain transition-transform duration-300 ease-in-out group-hover:scale-105"
                  />
                </div>

                <div className="p-2 md:p-2 flex flex-col items-center text-center">
                  {/* <div className="bg-red-500 rounded-full w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center mb-4">
                    {service.icon}
                  </div> */}
                  <h3
                    className="text-xl font-semibold text-black mb-2"
                    data-aos="fade-up"
                    data-aos-delay="30"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out"
                  >
                    {service.title}
                  </h3>
                  <p
                    className=" text-base text mx-auto  "
                    data-aos="fade-up"
                    data-aos-delay="50"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out"
                  >
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductCategories;
