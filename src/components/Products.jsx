"use client";
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Psve1 from "../assets/Psve1.jpg";
import Wshape1 from "../assets/Wshape1.png";

const Products = () => {
  const [activeSection, setActiveSection] = useState(null); 
  
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

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
      <div className="flex flex-col md:flex-row gap-10">
        
        <div className="w-full md:w-1/3">
          <h3 className="text-xl sm:text-3xl font-bold text-black mt-2 mb-3">Our Product Line</h3>
          <ul className="space-y-2 sm:space-y-3">
            {serviceMenuItems.map((item, index) => (
              <li key={index} className="border-b pb-2">
                <a
                  href={item.href}
                  className="flex justify-between items-center hover:text-blue-600 text-sm sm:text-base"
                  onClick={() => setActiveSection(item.title)}  
                >
                  {item.title}
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                  </svg>
                </a>
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

          <div className="mb-10  grid grid-cols-1 gap-4 sm:grid-cols-2  lg:grid-cols-3">
            {catalogueData.map((section, index) => (
              <div
                key={index}
                id={section.heading.replace(/\s+/g, '-').toLowerCase()}  
                className={`bg-gray-200 p-5 rounded-lg shadow-md scroll-mt-24 ${activeSection === section.heading ? 'bg-green-100' : ''}`}  // Apply background color change
                onClick={() => setActiveSection(section.heading)}  
              >
                <h2 className="text-md sm:text-xl font-semibold text-black mb-2">{section.heading}</h2>
                <p className="text-gray-900 text-base mb-2">{section.text}</p>
                <ul className="list-disc list-inside text-gray-900 text-base space-y-1">
                  {section.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
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






// "use client";
// import { useState } from 'react';
// import Link from 'next/link';
// import Image from 'next/image';
// import Psve1 from "../assets/Psve1.jpg";
// import Wshape1 from "../assets/Wshape1.png";

// const Products = () => {
//   const catalogueData = [
//     {
//       heading: "Box",
//       text: "Reliable boxes engineered to support every type of installation, from surface to concealed wiring...",
//       items: [
//         "Open Mod. Surface Box (Silver Line)",
//         "Open Mod. Surface Box",
//         "Modular Metal Concealed Box",
//         "Modular Open Surface Box",
//         "PVC Concealed Box",
//         "Open Gang Box"
//       ]
//     },
//     {
//       heading: "Holder",
//       text: "A full range of holders manufactured for secure, efficient fittings...",
//       items: [
//         "Regular Holder",
//         "4 x 4 Modular Holder",
//         "5 x 5 Modular Holder",
//         "Multi Items For Holder",
//         "Regular Fancy Holder"
//       ]
//     },
//     {
//       heading: "Plates",
//       text: "Stylish and functional plates to complement any decor...",
//       items: [
//         "Round & Fam Plates",
//         "Modular Plate White",
//         "Modular Plate With Indicator",
//         "Modular Glass Plate"
//       ]
//     },
//     {
//       heading: "Series",
//       text: "Advanced capacitor series designed for superior fan performance...",
//       items: [
//         "FanCap Series",
//         "RunCap Series",
//         "SubCap Series",
//         "StartCap Series"
//       ]
//     },
//     {
//       heading: "Pole",
//       text: "Precision-engineered pole solutions...",
//       items: [
//         "Single Pole",
//         "Double Pole",
//         "TP-Three Pole",
//         "FP-Four Pole"
//       ]
//     },
//     {
//       heading: "Eye Hook, Fan Clamps & Anchor Fasteners (With Studs)",
//       text: "Tough and reliable accessories...",
//       items: [
//         "Anchor Fastener",
//         "Fan Clamp",
//         "Chokdi Hook",
//         "Eye Hook"
//       ]
//     },
//     {
//       heading: "Other",
//       text: "A versatile selection of products to meet every installation requirement...",
//       items: [
//         "Male & Female Pin",
//         "White Line D.B. Board",
//         "Modular Foot Lights",
//         "Casing & Capping Accessories (Ivory & White)",
//         "POP Fan Hook",
//         "White Flexible Pipe",
//         "Isolators",
//         "Change Over",
//         "Fan Rods"
//       ]
//     }
//   ];

//   const serviceMenuItems = [
//     { title: 'Box', href: '/commercial-services' },
//     { title: 'Holder', href: '/electric-panel-repair' },
//     { title: 'Plates', href: '/installation-requirement' },
//     { title: 'Series', href: '/short-circuit-repair' },
//     { title: ' Pole', href: '/installing-ceiling-fan' },
//     { title: 'Eye Hook, Fan Clamps & Anchor Fasteners (With Studs)', href: '/upgrade-old-wiring' },
//     { title: 'Other', href: '/Other' },
//   ];

//   return (
//     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
//       <div className="flex flex-col md:flex-row gap-10">
       
//         <div className="w-full md:w-1/3">
//           <h3 className="text-xl sm:text-3xl font-semibold mb-4">Our Product Line</h3>
//           <ul className="space-y-3">
//             {serviceMenuItems.map((item, index) => (
//               <li key={index} className="border-b pb-2">
//                 <Link href={item.href} className="flex justify-between items-center hover:text-blue-600">
//                   {item.title}
//                   <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
//                     <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
//                   </svg>
//                 </Link>
//               </li>
//             ))}
//           </ul>

//           <div className="mt-10 bg-gray-100 p-5 rounded-lg">
//             <div className="flex items-center mb-3">
//               <div className="w-6 h-6 rounded-full bg-red-500 text-white flex items-center justify-center mr-2 text-sm font-bold">B</div>
//               <span className="font-semibold text-base">Biddut</span>
//             </div>
//             <h4 className="font-bold text-lg mb-3">Get full range <br />of premium services</h4>
//             <div className="mt-4">
//               <Image src={Wshape1} alt="Electric cable" width={200} height={100} className="mx-auto" />
//             </div>
//             <div className="mt-6 text-sm text-gray-700">
//               <p>Talk to an expert</p>
//               <p className="font-semibold">Free call: 0700 0000 0000</p>
//             </div>
//           </div>
//         </div>

      
//         <div className="w-full md:w-2/3">
//           <div className="mb-10">
//               <h1 className="text-2xl sm:text-4xl font-bold text-black mt-4 sm:mt-2 mb-4">Built for Business</h1>
//               <p className="text-gray-600 text-base  mb-5">
            
//               We analyze every project from construction, positioning to plumbing and automation to help our client make better decisions...
//             </p>
//             <div className="rounded-lg overflow-hidden">
//               <Image src={Psve1} alt="Electrician working on panel" layout="responsive" width={600} height={300} className="w-full object-cover" />
//             </div>
//           </div>

//           <div className="flex flex-col sm:flex-row gap-6 mb-10">
//             <div className="flex items-start">
//               <svg className="w-5 h-5 text-green-500 mt-1" fill="currentColor" viewBox="0 0 20 20">
//                 <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
//               </svg>
//               <p className="ml-2 text-sm sm:text-base">Neque porro est qui dolorem ipsum quaed inventore veritatis</p>
//             </div>
//             <div className="flex items-start">
//               <svg className="w-5 h-5 text-green-500 mt-1" fill="currentColor" viewBox="0 0 20 20">
//                 <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
//               </svg>
//               <p className="ml-2 text-sm sm:text-base">Neque porro est qui dolorem ipsum quaed inventore veritatis</p>
//             </div>
//           </div>

//           <div className="flex flex-col md:flex-row gap-6 mb-10">
//             <div className="w-full md:w-1/2 bg-gray-900 text-white p-5 rounded-lg">
//               <div className="flex items-center mb-4">
//                 <div className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center mr-3 text-xl">🧠</div>
//                 <h3 className="text-lg font-bold">Why our Biddut?</h3>
//               </div>
//               <p className="text-gray-300">We always try to give best services.</p>
//             </div>
//             <div className="w-full md:w-1/2 bg-red-600 text-white p-5 rounded-lg">
//               <div className="flex items-center mb-4">
//                 <div className="w-10 h-10 rounded-full bg-red-700 flex items-center justify-center mr-3 text-xl">🏆</div>
//                 <h3 className="text-lg font-bold">Best service</h3>
//               </div>
//               <p className="text-gray-100">We always try to give best services.</p>
//             </div>
//           </div>

//           <div className="mb-10">
//             {catalogueData.map((section, index) => (
//               <div key={index} className="mb-8">
//                 <h2 className="text-lg sm:text-2xl font-semibold text-black mb-2">{section.heading}</h2>
//                 <p className="text-gray-600 text-sm sm:text-xl mb-2">{section.text}</p>
//                 <ul className="list-disc list-inside text-gray-700 text-sm sm:text-lg space-y-1 sm:space-y-2">
//                   {section.items.map((item, i) => (
//                     <li key={i}>{item}</li>
//                   ))}
//                 </ul>
//               </div>
//             ))}
//           </div>

//           <div className="text-center mt-10">
//             <a
//               href="/"
//               download
//               className="inline-block bg-[#ED2236] hover:bg-[#16171A] text-white text-sm sm:text-lg px-6 py-3 rounded  transition"
//             >
//               Download Catalogue
//             </a>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Products;
