
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';


const ServiceCard = ({ title, description, icon, isDark = false }) => {
  return (
    <div className={`relative ${isDark ? 'bg-white text-grey-800' : 'bg-white'} p-8 flex flex-col items-start`}>
      <div className="mb-6">
        {icon}
      </div>
      
      <h3 className="text-xl font-medium mb-3">{title}</h3>
      
      <p className="text-base mb-8 opacity-80">
        {description}
      </p>
      
    </div>
  );
};

const LightbulbIcon = ({ color = "#e5254d" }) => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path 
      d="M24 6C17.4 6 12 11.4 12 18C12 22.4 14.4 26.2 18 28.2V32C18 33.1 18.9 34 20 34H28C29.1 34 30 33.1 30 32V28.2C33.6 26.2 36 22.4 36 18C36 11.4 30.6 6 24 6Z" 
      stroke={color} 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
    <path 
      d="M20 38H28" 
      stroke={color} 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
    <path 
      d="M24 34V42" 
      stroke={color} 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
  </svg>
);

const ACIcon = ({ color = "#e5254d" }) => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect 
      x="6" 
      y="10" 
      width="36" 
      height="16" 
      rx="2" 
      stroke={color} 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
    <path 
      d="M12 34L16 26" 
      stroke={color} 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
    <path 
      d="M24 34L24 26" 
      stroke={color} 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
    <path 
      d="M36 34L32 26" 
      stroke={color} 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
  </svg>
);

const CameraIcon = ({ color = "#e5254d" }) => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path 
      d="M36 12H42C43.1 12 44 12.9 44 14V38C44 39.1 43.1 40 42 40H6C4.9 40 4 39.1 4 38V14C4 12.9 4.9 12 6 12H12M36 12L30 6H18L12 12M36 12H12" 
      stroke={color} 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
    <circle 
      cx="24" 
      cy="24" 
      r="8" 
      stroke={color} 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
  </svg>
);

const Vision = () => {
    const missionDescription = "To empower our B2B partners with innovative electrical solutions that are safe, stylish, and built to last.";
    const visionDescription = "To become the go-to name for modular electrical fittings in India, known for quality and design.";
    const valuesDescription = "Integrity, Accountability, Innovation, and Consistency - these are the standards we live by every day.";
  
    return (
      <section className="bg-gray-100 py-20 mb-[-50px] mt-[-50px]">
        <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ServiceCard 
              title="Mission" 
              description={missionDescription}
              icon={<LightbulbIcon />}
            />
            
            <ServiceCard 
              title="Vision" 
              description={visionDescription}
              icon={<ACIcon />}
            />
            
            <ServiceCard 
              title="Values" 
              description={valuesDescription}
              icon={<CameraIcon />}
              isDark={true}
            />
          </div>
        </div>
      </section>
    );
  };
  

export default Vision;