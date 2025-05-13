"use client";
import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import Psve1 from "../assets/Psve1.jpg";
import Wshape1 from "../assets/Wshape1.png";

const Products = () => {
  const [activeSection, setActiveSection] = useState(null);
  const sectionRef = useRef(null); // Ref for scrolling

  const catalogueData = [
    {
      heading: "Box",
      text: "Reliable boxes engineered to support every type of installation, from surface to concealed wiring...",
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
      text: "A full range of holders manufactured for secure, efficient fittings...",
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
      text: "Stylish and functional plates to complement any decor...",
      items: [
        "Round & Fam Plates",
        "Modular Plate White",
        "Modular Plate With Indicator",
        "Modular Glass Plate"
      ]
    },
    {
      heading: "Series",
      text: "Advanced capacitor series designed for superior fan performance...",
      items: [
        "FanCap Series",
        "RunCap Series",
        "SubCap Series",
        "StartCap Series"
      ]
    },
    {
      heading: "Pole",
      text: "Precision-engineered pole solutions...",
      items: [
        "Single Pole",
        "Double Pole",
        "TP-Three Pole",
        "FP-Four Pole"
      ]
    },
    {
      heading: "Eye Hook, Fan Clamps & Anchor Fasteners (With Studs)",
      text: "Tough and reliable accessories...",
      items: [
        "Anchor Fastener",
        "Fan Clamp",
        "Chokdi Hook",
        "Eye Hook"
      ]
    },
    {
      heading: "Other",
      text: "A versatile selection of products to meet every installation requirement...",
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
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
      <div className="flex flex-col md:flex-row gap-10">

    
        <div className="w-full md:w-1/3">
          <h3 className="text-xl sm:text-3xl font-bold text-black mt-2 mb-3">Our Product Line</h3>
          <ul className="space-y-2 sm:space-y-3">
            {serviceMenuItems.map((item, index) => (
              <li key={index} className="border-b pb-2">
                <button
                  className="flex justify-between items-center hover:text-blue-600 text-sm sm:text-base w-full text-left"
                  onClick={() => setActiveSection(item.title)}
                >
                  {item.title}
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                  </svg>
                </button>
              </li>
            ))}
          </ul>

          <div className="mt-8 sm:mt-10 bg-gray-100 p-5 rounded-lg">
            <div className="flex items-center mb-3">
              <div className="w-6 h-6 rounded-full bg-red-500 text-white flex items-center justify-center mr-2 text-sm font-bold">B</div>
              <span className="font-semibold text-base">Biddut</span>
            </div>
            <h4 className="font-bold text-md sm:text-xl mb-3">Get full range <br />of premium services</h4>
            <div className="mt-4">
              <Image src={Wshape1} alt="Electric cable" width={300} height={200} className="mx-auto" />
            </div>
            <div className="mt-6 text-lg text-gray-900">
              <p className="font-bold">Talk to an expert</p>
              <p className="font-semibold">Free call: 0700 0000 0000</p>
            </div>
          </div>
        </div>

       
        <div className="w-full md:w-2/3">
          <div className="mb-8">
            <h1 className="text-xl sm:text-3xl font-bold text-black mt-2 mb-3">Built for Business</h1>
            <p className="text-gray-600 text-sm sm:text-xl mb-4">
              We analyze every project from construction, positioning to plumbing and automation to help our client make better decisions...
            </p>
            <div className="w-full h-auto">
              <Image src={Psve1} alt="Electrician working on panel" width={400} height={200} className="w-full h-auto object-cover rounded-md" />
            </div>
          </div>

        
          <div className="mb-10" ref={sectionRef}>
            {activeSection ? (
              catalogueData
                .filter(section => section.heading === activeSection)
                .map((section, index) => (
                  <div key={index} className="bg-gray-200 p-5 rounded-lg shadow-md">
                    <h2 className="text-md sm:text-xl font-semibold text-black mb-2">{section.heading}</h2>
                    <p className="text-gray-900 text-base mb-2">{section.text}</p>
                    <ul className="list-disc list-inside text-gray-900 text-base space-y-1">
                      {section.items.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))
            ) : (
              <p className="text-gray-600 text-lg">Select a product category to view details.</p>
            )}
          </div>

          <div className="text-center mt-8">
            <a
              href="/"
              download
              className="inline-block bg-[#ED2236] hover:bg-[#16171A] text-white text-sm sm:text-base md:text-lg px-5 py-2.5 rounded transition"
            >
              Download Catalogue
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
