"use client";
import Image from 'next/image';
import { useState } from 'react';
import Gpro1 from "../assets/Gpro1.jpg";
import Gpro2 from "../assets/Gpro2.jpg";
import Gpro3 from "../assets/Gpro3.jpg";
import Gpro4 from "../assets/Gpro4.jpg";
import Gpro5 from "../assets/Gpro5.jpg";
import Gpro6 from "../assets/Gpro6.jpg";

const projectData = [
  {
    id: 1,
    
    imageUrl: Gpro1,
    category: 'Commercial',
  },
  {
    id: 2,
   
    imageUrl: Gpro2,
    category: 'Residential',
  },
  {
    id: 3,
   
    imageUrl: Gpro3,
    category: 'Maintenance',
  },
  {
    id: 4,
   
    imageUrl: Gpro4,
    category: 'Industrial',
  },
  {
    id: 5,
   
    imageUrl: Gpro5,
    category: 'Industrial',
  },
   {
    id: 6,
   
    imageUrl: Gpro6,
    category: 'Industrial',
  },
];

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects =
    activeCategory === 'All'
      ? projectData
      : projectData.filter((project) => project.category === activeCategory);

  return (
    <section className="bg-white py-10 sm:py-14 lg:py-20 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        
        <div className="text-center mb-10">
          <span className="text-md text-gray-600">Gallery</span>
          <h1 className="text-2xl sm:text-4xl font-bold text-black mt-2">
            See the Macular Difference
          </h1>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group overflow-hidden rounded-md shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative w-full aspect-square sm:aspect-[3/4]">
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-100 rounded-md"
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
