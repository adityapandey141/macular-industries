import React from "react";
import Image from "next/image";
import Qblog1 from "../assets/QUALITY/Premium Raw Materials.jpg";
import Qblog2 from "../assets/QUALITY/In-House Manufacturing.jpg";
import Qblog3 from "../assets/QUALITY/Multiple Quality Checks.jpg";
import Qblog4 from "../assets/QUALITY/Committed Workforce.jpg";

const BlogPosts = [
  {
    id: 1,
    title: "Premium Raw Materials",
    excerpt:
      "Only the finest, industry-approved raw materials go into every Macular product.",
    image: Qblog1,
  },
  {
    id: 2,
    title: "In-House Manufacturing",
    excerpt:
      "End-to-end production control ensures consistency, precision, and reliability in every batch.",
    image: Qblog2,
  },
  {
    id: 3,
    title: "Multiple Quality Checks",
    excerpt:
      "Every piece undergoes multi-stage quality inspections from initial production to final packaging.",
    image: Qblog3,
  },
  {
    id: 4,
    title: "Committed Workforce",
    excerpt:
      "Our trained team ensures every product not only looks perfect but performs flawlessly.",
    image: Qblog4,
  },
];

const Proceducer = () => {
  return (
    <section className="max-w-7xl mx-auto bg-white py-12 sm:py-16 lg:py-20 px-2 sm:px-4 lg:px-6 mb-[-30px]">
      <div className="text-center mb-12">
        <h2
          className="text-2xl sm:text-4xl font-bold text-black mt-4 sm:mt-2 mb-4"
          data-aos="fade-up"
          data-aos-delay="30"
          data-aos-duration="800"
          data-aos-easing="ease-in-out"
        >
          How We Ensure Quality
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4 sm:px-6 lg:px-8">
        {BlogPosts.map((post) => (
          <div
            key={post.id}
            className="bg-white shadow-md rounded-md overflow-hidden transition duration-300 group hover:shadow-lg"
          >
            <div className="relative w-full h-56 md:h-60">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                priority
              />
            </div>

            <div className="px-4 py-4 transition duration-300 ease-in-out">
              <h3
                className="text-xl font-semibold mb-2 text-black"
                data-aos="fade-up"
                data-aos-delay="30"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
              >
                {post.title}
              </h3>
              <p
                className="text-gray-600 text-base "
                data-aos="fade-up"
                data-aos-delay="30"
                data-aos-duration="1100"
                data-aos-easing="ease-in-out"
              >
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
