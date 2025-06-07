"use client";
import Image from "next/image";
import { useState } from "react";

import { IoMdFlash } from "react-icons/io";
import Gpro1 from "../assets/PRODUCT/Box/Open Mod. Surface Box (Silver Line).jpg";
import Gpro10 from "../assets/PRODUCT/Box/Open Mod. Surface Box.jpg";

import Gpro2 from "../assets/PRODUCT/Holder/Regular Holder.jpg";
import Gpro9 from "../assets/PRODUCT/Holder/4 x 4 Modular Holder.jpg";

import Gpro3 from "../assets/PRODUCT/Plates/Round & Fam Plates.jpg";
import Gpro7 from "../assets/PRODUCT/Plates/Modular Plate White.jpg";

import Gpro4 from "../assets/PRODUCT/Series/FanCap Series.jpg";
import Gpro8 from "../assets/PRODUCT/Series/RunCap Series.jpg";

import Gpro5 from "../assets/PRODUCT/Pole/Single Pole.jpg";
import Gpro12 from "../assets/PRODUCT/Pole/Double Pole.jpg";

import Gpro6 from "../assets/PRODUCT/Eye Hook, Fan Clamps & Anchor Fasteners (With Studs) Other/Anchor Fastener.jpg";
import bg from "../assets/Home Page/bgshade.png";

// import others1 from "../assets/PRODUCT/Other/Male & Female Pin.jpg";
// import others2 from "../assets/PRODUCT/Other/White Line D.B. Board.jpg";
// import others3 from "../assets/PRODUCT/Other/Modular Foot Lights.jpg";
// import others4 from "../assets/PRODUCT/Other/Casing & Capping Accessories (Ivory & White).jpg";
// import others5 from "../assets/PRODUCT/Other/POP Fan Hook.jpg";
// import others6 from "../assets/PRODUCT/Other/White Flexible Pipe.jpg";
// import others7 from "../assets/PRODUCT/Other/Isolators.jpg";
// import others8 from "../assets/PRODUCT/Other/Fan Rods.jpg";
const projectData = [
  {
    id: 1,

    imageUrl: Gpro1,
    category: "Commercial",
  },
  {
    id: 2,

    imageUrl: Gpro2,
    category: "Residential",
  },
  {
    id: 3,

    imageUrl: Gpro3,
    category: "Maintenance",
  },
  {
    id: 4,

    imageUrl: Gpro4,
    category: "Industrial",
  },
  {
    id: 5,

    imageUrl: Gpro5,
    category: "Industrial",
  },
  {
    id: 6,

    imageUrl: Gpro6,
    category: "Industrial",
  },
  {
    id: 1,

    imageUrl: Gpro7,
    category: "Commercial",
  },
  {
    id: 2,

    imageUrl: Gpro8,
    category: "Residential",
  },
  {
    id: 3,

    imageUrl: Gpro9,
    category: "Maintenance",
  },
  {
    id: 4,

    imageUrl: Gpro10,
    category: "Industrial",
  },
];

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projectData
      : projectData.filter((project) => project.category === activeCategory);

  return (
    <section
      className=" bg-gray-100  py-8 sm:py-12 lg:py-18 "
      style={{ backgroundImage: `url(${bg.src})`, backgroundSize: "cover" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <div
            className="section-subtitle flex justify-center text-base"
            data-aos="fade-up"
            data-aos-delay="30"
            data-aos-duration="800"
            data-aos-easing="ease-in-out"
          >
            <IoMdFlash className="text-icon text-lg mr-2 mt-1" />
            <span> Gallery</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold text-black mt-4 sm:mt-2 ">
            See the Macular Difference
          </h1>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group overflow-hidden rounded-md shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative w-full aspect-square sm:aspect-[3/4] bg-white">
                <Image
                  src={project.imageUrl}
                  alt={`Project ${project.id}`}
                  fill
                  className="object-contain transition-transform duration-300 transform group-hover:scale-105"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 20vw"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
