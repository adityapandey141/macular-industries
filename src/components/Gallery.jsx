"use client";
import Image from 'next/image';
import { useState } from 'react';
import Gpro1 from "../assets/Gpro1.jpg";
import Gpro2 from "../assets/Gpro2.jpg";
import Gpro3 from "../assets/Gpro3.jpg";
import Gpro4 from "../assets/Gpro4.jpg";
import Gpro5 from "../assets/Gpro5.jpg";

const projectData = [
  {
    id: 1,
    title: 'HVAC System Installation',
    description: 'Commercial air conditioning system installation and configuration.',
    imageUrl: Gpro1,
    category: 'Commercial',
  },
  {
    id: 2,
    title: 'Residential Wiring',
    description: 'Complete electrical wiring for new construction homes.',
    imageUrl: Gpro2,
    category: 'Residential',
  },
  {
    id: 3,
    title: 'Circuit Testing',
    description: 'Professional circuit testing and troubleshooting services.',
    imageUrl: Gpro3,
    category: 'Maintenance',
  },
  {
    id: 4,
    title: 'Industrial Electrical Work',
    description: 'Industrial-grade electrical installation and repairs.',
    imageUrl: Gpro4,
    category: 'Industrial',
  },
  {
    id: 5,
    title: 'Industrial Electrical Work',
    description: 'Industrial-grade electrical installation and repairs.',
    imageUrl: Gpro5,
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
    <section className="bg-white py-12 sm:py-16 lg:py-20 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
       
        <div className="text-center mb-12">
          <div className="mb-2 sm:mb-4">
              <span className="text-lg text-gray-600 ">
                Gallery
              </span>
            </div>

            <h1 className="text-2xl sm:text-4xl font-bold text-black mt-4 sm:mt-2 mb-4">
               See the Macular Difference
            </h1>
         
        </div>

        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative aspect-[4/5] sm:aspect-[3/4] w-full">
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
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
