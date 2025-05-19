import React from 'react';
import Image from 'next/image';
import Qblog1 from "../assets/Qblog1.jpg";
import Qblog2 from "../assets/Qblog2.jpg";
import Qblog3 from "../assets/Qblog3.jpg";
import Qblog4 from "../assets/Qblog4.jpg";

const BlogPosts = [
  {
    id: 1,
    title: 'Premium Raw Materials',
    excerpt: 'Only the finest, industry-approved raw materials go into every Macular product.',
    image: Qblog1,
  },
  {
    id: 2,
    title: 'In-House Manufacturing',
    excerpt: 'End-to-end production control ensures consistency, precision, and reliability in every batch.',
    image: Qblog2,
  },
  {
    id: 3,
    title: 'Multiple Quality Checks',
    excerpt: 'Every piece undergoes multi-stage quality inspections from initial production to final packaging.',
    image: Qblog3,
  },
  {
    id: 4,
    title: 'Committed Workforce',
    excerpt: 'Our trained team ensures every product not only looks perfect but performs flawlessly.',
    image: Qblog4,
  }
];

const Proceducer = () => {
  return (
    <section className="max-w-7xl mx-auto bg-white py-12 sm:py-16 lg:py-20 px-2 sm:px-4 lg:px-6 mb-[-30px]">
      <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-4xl font-bold text-black mt-4 sm:mt-2 mb-4">How We Ensure Quality</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4 sm:px-6 lg:px-8">
        {BlogPosts.map((post) => (
          <div
            key={post.id}
            className="bg-white shadow-md rounded-md overflow-hidden transition duration-300 group hover:shadow-lg"
          >
            <div className="relative w-full h-56 sm:h-60 lg:h-72">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                priority
              />
            </div>

            <div className="p-6 transition duration-300 ease-in-out">
              <h3 className="text-xl font-semibold mb-2 text-black">
                {post.title}
              </h3>
              <p className="text-gray-600 text-base mb-6 ">
             {post.excerpt}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Proceducer;
