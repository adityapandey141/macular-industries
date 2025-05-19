import React from 'react';
import Image from 'next/image';
import Author1 from "../assets/Author1.jpg";
import Author2 from "../assets/Author2.jpg";
import Author3 from "../assets/Author3.jpg";

const teamMembers = [
  {
    id: 1,
    name: 'Asmita Alpeshbhai Parmar',
    role: 'Director',
    image: Author1,
  },
  {
    id: 2,
    name: ' Punam Jagdishkumar Delavadiya',
    role: 'Director',
    image: Author3,
  },
  {
    id: 3,
    name: 'Alpeshbhai Parmar',
    role: 'General Manager',
    image: Author2,
  },
];

const TeamSection = () => {
  return (
    <section className="py-12 sm:py-16 bg-gray-50 ">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6">
        <div className="text-center mb-10 sm:mb-14">
          <p className="text-sm sm:text-base text-grey-600 ">
            Our Strength
          </p>
           <h2 className="text-2xl sm:text-4xl font-bold text-black mt-4 sm:mt-2 mb-4">
            Powered by People
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 px-4 sm:px-6 lg:px-8 ">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-transform duration-300 hover:scale-105"
            >
              <div className="flex justify-center mt-6">
                <div className="relative w-20 h-20 sm:w-30 sm:h-30 rounded-full overflow-hidden border-4 border-white shadow-md">
                  <Image
                    src={member.image}
                    alt={member.name}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
              </div>

              <div className="p-4 sm:p-6 text-center">
                <h3 className="text-lg sm:text-xl font-bold text-black">{member.name}</h3>
                <p className="text-grey-800 text-sm sm:text-base  mt-1">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
