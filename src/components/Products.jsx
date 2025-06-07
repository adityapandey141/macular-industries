"use client";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import box1 from "../assets/PRODUCT/Box/Open Mod. Surface Box (Silver Line).jpg";
import box2 from "../assets/PRODUCT/Box/Open Mod. Surface Box.jpg";
import box3 from "../assets/PRODUCT/Box/Modular Metal Concealed Box.jpg";
import box4 from "../assets/PRODUCT/Box/Modular Open Surface Box.jpg";
import box5 from "../assets/PRODUCT/Box/PVC Concealed Box.jpg";
import box6 from "../assets/PRODUCT/Box/Open Gang Box.jpg";
import holder1 from "../assets/PRODUCT/Holder/Regular Holder.jpg";
import holder2 from "../assets/PRODUCT/Holder/4 x 4 Modular Holder.jpg";
import holder3 from "../assets/PRODUCT/Holder/5 x 5 Modular Holder.jpg";
import holder4 from "../assets/PRODUCT/Holder/Multi Items For Holder.jpg";
import holder5 from "../assets/PRODUCT/Holder/Regular Fancy Holder.jpg";
import plates1 from "../assets/PRODUCT/Plates/Round & Fam Plates.jpg";
import plates2 from "../assets/PRODUCT/Plates/Modular Plate White.jpg";
import plates3 from "../assets/PRODUCT/Plates/Modular Plate With Indicator.jpg";
import plates4 from "../assets/PRODUCT/Plates/Modular Glass Plate.jpg";
import series1 from "../assets/PRODUCT/Series/FanCap Series.jpg";
import series2 from "../assets/PRODUCT/Series/RunCap Series.jpg";
import series3 from "../assets/PRODUCT/Series/SubCap Series.jpg";
import series4 from "../assets/PRODUCT/Series/StartCap Series.jpg";
import poles1 from "../assets/PRODUCT/Pole/Single Pole.jpg";
import poles2 from "../assets/PRODUCT/Pole/Double Pole.jpg";
import poles3 from "../assets/PRODUCT/Pole/TP-Three Pole.jpg";
import poles4 from "../assets/PRODUCT/Pole/FP-Four Pole.jpg";
import anchorfasteners1 from "../assets/PRODUCT/Eye Hook, Fan Clamps & Anchor Fasteners (With Studs) Other/Anchor Fastener.jpg";
import anchorfasteners2 from "../assets/PRODUCT/Eye Hook, Fan Clamps & Anchor Fasteners (With Studs) Other/Fan Clamp.jpg";
import anchorfasteners3 from "../assets/PRODUCT/Eye Hook, Fan Clamps & Anchor Fasteners (With Studs) Other/Chokdi Hook.jpg";
import anchorfasteners4 from "../assets/PRODUCT/Eye Hook, Fan Clamps & Anchor Fasteners (With Studs) Other/Eye Hook.jpg";
import others1 from "../assets/PRODUCT/Other/Male & Female Pin.jpg";
import others2 from "../assets/PRODUCT/Other/White Line D.B. Board.jpg";
import others3 from "../assets/PRODUCT/Other/Modular Foot Lights.jpg";
import others4 from "../assets/PRODUCT/Other/Casing & Capping Accessories (Ivory & White).jpg";
import others5 from "../assets/PRODUCT/Other/POP Fan Hook.jpg";
import others6 from "../assets/PRODUCT/Other/White Flexible Pipe.jpg";
import others7 from "../assets/PRODUCT/Other/Isolators.jpg";
import others8 from "../assets/PRODUCT/Other/Fan Rods.jpg";

const Products = () => {
  const [activeSection, setActiveSection] = useState("Box");
  const sectionRef = useRef(null);

  const catalogueData = [
    {
      heading: "Box",
      text: "Reliable boxes engineered to support every type of installation, from surface to concealed wiring. Designed for sturdy mounting, easy setup, and long-lasting performance under varied conditions.",
      items: [
        { name: "Open Mod. Surface Box (Silver Line)", imageUrl: box1 },
        { name: "Open Mod. Surface Box", imageUrl: box2 },
        { name: "Modular Metal Concealed Box", imageUrl: box3 },
        { name: "Modular Open Surface Box", imageUrl: box4 },
        { name: "PVC Concealed Box", imageUrl: box5 },
        { name: "Open Gang Box", imageUrl: box6 },
      ],
    },
    {
      heading: "Holder",
      text: "A full range of holders manufactured for secure, efficient fittings across multiple applications. For precision gripping and maximum electrical safety, ensuring seamless installations.",
      items: [
        { name: "Regular Holder", imageUrl: holder1 },
        { name: "4 x 4 Modular Holder", imageUrl: holder2 },
        { name: "5 x 5 Modular Holder", imageUrl: holder3 },
        { name: "Multi Items For Holder", imageUrl: holder4 },
        { name: "Regular Fancy Holder", imageUrl: holder5 },
      ],
    },
    {
      heading: "Plates",
      text: "Stylish and functional plates to complement any decor while ensuring maximum durability. Built for modern aesthetics with rugged dependability to withstand daily wear and tear.",
      items: [
        { name: "Round & Fam Plates", imageUrl: plates1 },
        { name: "Modular Plate White", imageUrl: plates2 },
        { name: "Modular Plate With Indicator", imageUrl: plates3 },
        { name: "Modular Glass Plate", imageUrl: plates4 },
      ],
    },
    {
      heading: "Series",
      text: "Advanced capacitor series designed for superior fan performance and energy efficiency. Crafted for enhanced motor life, stable output, and reliable voltage endurance.",
      items: [
        { name: "FanCap Series", imageUrl: series1 },
        { name: "RunCap Series", imageUrl: series2 },
        { name: "SubCap Series", imageUrl: series3 },
        { name: "StartCap Series", imageUrl: series4 },
      ],
    },
    {
      heading: "Pole",
      text: "Precision-engineered pole solutions are manufactured for varied commercial and residential needs. Made to deliver reliable performance and simplify complex installations.",
      items: [
        { name: "Single Pole", imageUrl: poles1 },
        { name: "Double Pole", imageUrl: poles2 },
        { name: "TP-Three Pole", imageUrl: poles3 },
        { name: "FP-Four Pole", imageUrl: poles4 },
      ],
    },
    {
      heading: "Eye Hook, Fan Clamps & Anchor Fasteners (With Studs)",
      text: "Tough and reliable accessories for safe ceiling and wall installations. Engineered for secure anchoring, load-bearing strength, and long-term stability.",
      items: [
        { name: "Anchor Fastener", imageUrl: anchorfasteners1 },
        { name: "Fan Clamp", imageUrl: anchorfasteners2 },
        { name: "Chokdi Hook", imageUrl: anchorfasteners3 },
        { name: "Eye Hook", imageUrl: anchorfasteners4 },
      ],
    },
    {
      heading: "Other",
      text: "A versatile selection of products to meet every installation and maintenance requirement. Covering essential accessories that ensure smooth and professional execution for all types of projects.",
      items: [
        { name: "Male & Female Pin", imageUrl: others1 },
        { name: "White Line D.B. Board", imageUrl: others2 },
        { name: "Modular Foot Lights", imageUrl: others3 },
        {
          name: "Casing & Capping Accessories (Ivory & White)",
          imageUrl: others4,
        },
        { name: "POP Fan Hook", imageUrl: others5 },
        { name: "White Flexible Pipe", imageUrl: others6 },
        { name: "Isolators", imageUrl: others7 },
        // { name: "Change Over", imageUrl: pins },
        { name: "Fan Rods", imageUrl: others8 },
      ],
    },
  ];

  const serviceMenuItems = catalogueData.map((section) => ({
    title: section.heading,
    href: `#${section.heading.replace(/\s+/g, "-").toLowerCase()}`,
  }));

  useEffect(() => {
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  }, [activeSection]);

  return (
    <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-4 sm:py-6 md:py-8">
      <div className="flex flex-col md:flex-row gap-4 md:gap-10 mb-6">
        <div className="w-full md:w-1/3">
          <h3 className="text-3xl font-bold text-black">Built for Business</h3>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">
        <div className="md:hidden sticky top-0 z-10 bg-white py-2">
          <select
            className="w-full p-2 border border-gray-300 rounded-md cursor-pointer"
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
          <div className="sticky top-30 bg-white z-20">
            <ul className="space-y-2 mt-2">
              {serviceMenuItems.map((item, index) => (
                <li key={index} className="border-b border-gray-300 pb-2">
                  <button
                    className={`flex justify-between items-center text-left w-full text-base md:text-lg lg:text-xl font-semibold mb-2 cursor-pointer transition-colors duration-200 ${
                      activeSection === item.title
                        ? "text-[#ED2236]"
                        : "text-black hover:text-[#ED2236]"
                    }`}
                    onClick={() => setActiveSection(item.title)}
                  >
                    {item.title}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                      className="shrink-0"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                      />
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
                .filter((section) => section.heading === activeSection)
                .map((section, index) => (
                  <div className="mb-6 md:mb-8" key={index}>
                    <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-black mb-2 md:mb-3 text-center md:text-left">
                      {section.heading}
                    </h1>
                    <p className="text-gray-600 text-sm sm:text-base md:text-lg mb-3 md:mb-4">
                      {section.text}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
                      {section.items.map((item, i) => (
                        <div
                          key={i}
                          className="flex flex-col bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow duration-300"
                        >
                          <div className="relative w-full aspect-[4/3] bg-gray-100">
                            <Image
                              src={item.imageUrl}
                              alt={item.name}
                              fill
                              className="object-cover"
                              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            />
                          </div>

                          <div className="p-3 bg-gray-900 flex-grow flex items-center justify-center">
                            <h3 className="text-sm sm:text-base font-medium text-white text-center">
                              {item.name}
                            </h3>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))
            ) : (
              <p className="text-gray-600 text-base md:text-lg">
                Select a product category to view details...
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
