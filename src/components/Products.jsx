"use client";
import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import Psve1 from "../assets/Psve1.jpg";

const Products = () => {
  const [activeSection, setActiveSection] = useState("Box");
  const sectionRef = useRef(null);

  const catalogueData = [
   {
      heading: "Box",
      text: "Reliable boxes engineered to support every type of installation, from surface to concealed wiring. Designed for sturdy mounting, easy setup, and long-lasting performance under varied conditions.",
      items: [
        "Open Mod. Surface Box (Silver Line)",
        "Open Mod. Surface Box",
        "Modular Metal Concealed Box",
        "Modular Open Surface Box",
        "PVC Concealed Box",
        "Open Gang Box"
      ]
    },
    {
      heading: "Holder",
      text: " A full range of holders manufactured for secure, efficient fittings across multiple applications. For precision gripping and maximum electrical safety, ensuring seamless installations.",
      items: [
        "Regular Holder",
        "4 x 4 Modular Holder",
        "5 x 5 Modular Holder",
        "Multi Items For Holder",
        "Regular Fancy Holder"
      ]
    },
    {
      heading: "Plates",
      text: "Stylish and functional plates to complement any decor while ensuring maximum durability. Built for modern aesthetics with rugged dependability to withstand daily wear and tear.",
      items: [
        "Round & Fam Plates",
        "Modular Plate White",
        "Modular Plate With Indicator",
        "Modular Glass Plate"
      ]
    },
    {
      heading: "Series",
      text: " Advanced capacitor series designed for superior fan performance and energy efficiency. Crafted for enhanced motor life, stable output, and reliable voltage endurance.",
      items: [
        "FanCap Series",
        "RunCap Series",
        "SubCap Series",
        "StartCap Series"
      ]
    },
    {
      heading: "Pole",
      text: "Precision-engineered pole solutions are manufactured for varied commercial and residential needs. Made to deliver reliable performance and simplify complex installations.",
      items: [
        "Single Pole",
        "Double Pole",
        "TP-Three Pole",
        "FP-Four Pole"
      ]
    },
    {
      heading: "Eye Hook, Fan Clamps & Anchor Fasteners (With Studs)",
      text: " Tough and reliable accessories for safe ceiling and wall installations. Engineered for secure anchoring, load-bearing strength, and long-term stability.",
      items: [
        "Anchor Fastener",
        "Fan Clamp",
        "Chokdi Hook",
        "Eye Hook"
      ]
    },
    {
      heading: "Other",
      text: "A versatile selection of products to meet every installation and maintenance requirement. Covering essential accessories that ensure smooth and professional execution for all types of projects.",
      items: [
        "Male & Female Pin",
        "White Line D.B. Board",
        "Modular Foot Lights",
        "Casing & Capping Accessories (Ivory & White)",
        "POP Fan Hook",
        "White Flexible Pipe",
        "Isolators",
        "Change Over",
        "Fan Rods"
      ]
    }
  ];

  const serviceMenuItems = catalogueData.map((section) => ({
    title: section.heading,
    href: `#${section.heading.replace(/\s+/g, '-').toLowerCase()}`
  }));

  useEffect(() => {
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }, [activeSection]);

   return (
   <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-4 sm:py-6 md:py-8 mb-[-50px]" id="product-us">
     <div className="flex flex-col md:flex-row gap-4 md:gap-10 mb-6">
        <div className="w-full md:w-1/3">
          <h3 className="text-3xl font-bold text-black">Built for Business</h3>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">
      
        <div className="md:hidden sticky top-0 z-10 bg-white py-2">
          <select
            className="w-full p-2 border border-gray-300 rounded-md"
            value={activeSection}
            onChange={(e) => setActiveSection(e.target.value)}
          >
            {serviceMenuItems.map((item, index) => (
              <option key={index} value={item.title}>
                {item.title}
              </option>
            ))}
          </select>
        </div>

        <div className="hidden md:block">
          <div className="sticky top-20 bg-white ">
            <ul className="space-y-2 mt-2">
              {serviceMenuItems.map((item, index) => (
                <li key={index} className="border-b border-gray-300 pb-2">
                  <button
                  className="flex justify-between items-center text-left w-full text-base md:text-lg lg:text-xl font-semibold text-black hover:text-blue-500 mb-2"
                    onClick={() => setActiveSection(item.title)}
                  >
                    {item.title}
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16" className="shrink-0">
                      <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                    </svg>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="col-span-1 md:col-span-2 px-2 md:px-5">
          <div className="mb-6 md:mb-10" ref={sectionRef}>
            {activeSection ? (
              catalogueData
                .filter(section => section.heading === activeSection)
                .map((section, index) => (
                  <div className="mb-6 md:mb-8" key={index}>
                    <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-black mb-2 md:mb-3">{section.heading}</h1>
                    <p className="text-gray-600 text-sm sm:text-base md:text-lg mb-3 md:mb-4">
                      {section.text}
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 mt-4">
                      <Image
                        src={Psve1}
                        alt="Electrician working on panel"
                        className="w-full h-auto object-cover rounded-md"
                      />
                      <Image
                        src={Psve1}
                        alt="Electrician working on panel"
                        className="w-full h-auto object-cover rounded-md hidden sm:block"
                      />
                      <Image
                        src={Psve1}
                        alt="Electrician working on panel"
                        className="w-full h-auto object-cover rounded-md hidden md:block"
                      />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
                      {section.items.map((item, i) => (
                        <div key={i} className="flex items-center p-2 sm:p-3 bg-gray-900 rounded-lg shadow-md">
                          <div className="bg-red-500 rounded-full w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center mr-2 sm:mr-4 shrink-0">
                            <svg width="12" height="12" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="text-white">
                              <path d="M8 0L9.8 5.4H15.5L10.9 8.8L12.7 14.2L8 10.8L3.3 14.2L5.1 8.8L0.5 5.4H6.2L8 0Z"></path>
                            </svg>
                          </div>
                          <span className="text-xs sm:text-sm md:text-base font-medium text-white">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))
            ) : (
              <p className="text-gray-600 text-base md:text-lg">Select a product category to view details.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;