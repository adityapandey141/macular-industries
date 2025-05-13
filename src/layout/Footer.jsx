import React from "react";
import Image from "next/image";
import FooterLogo1 from "../assets/FooterLogo1.png";
import { FaPhoneAlt, FaFacebook, FaTwitter, FaYoutube } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { IoLocationSharp } from 'react-icons/io5';

const Footer = () => {
  return (
    <footer className="bg-[#16171A] text-white px-4 md:px-8 lg:px-12 py-30  ">
      <div className="max-w-7xl mx-auto">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-12">
        <div className="flex flex-col space-y-4 md:space-y-6">
            <Image
              src={FooterLogo1}
              alt="Macular Logo"
              width={180}
              height={70}
              className="object-contain mb-4"
            />
             <p className="text-sm sm:text-lg leading-relaxed">
              Desires to obtain pain of it because it is pain but occasionally circum. We work with a passion of challenges.
            </p>
          </div>

    
          <div className="flex flex-col space-y-3 md:space-y-4">
            <h3 className="text-xl sm:text-2xl font-bold mb-4">Useful Links</h3>
            <ul className="space-y-2 mb-4">
              <li><a href="/" className="text-yellow-500 hover:text-white transition text-base sm:text-lg">Home</a></li>
              <li><a href="/about-us" className="hover:text-yellow-500 transition text-base sm:text-lg">About Us</a></li>
              <li><a href="/product" className="hover:text-yellow-500 transition text-base sm:text-lg">Product</a></li>
              <li><a href="/quality" className="hover:text-yellow-500 transition text-base sm:text-lg">Quality</a></li>
              <li><a href="/contact-us" className="hover:text-yellow-500 transition text-base sm:text-lg">Contact Us</a></li>
            </ul>
           
          </div>

      <div className="flex flex-col space-y-3 md:space-y-4">
            <h3 className="text-xl sm:text-2xl font-bold mb-4">Get In Touch</h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <FaPhoneAlt className="text-yellow-500 mr-3 mt-1" size={22} />
                <a href="tel:+917985663499" className="text-sm sm:text-lg hover:text-yellow-500">
                  +91 7985663499
                </a>
              </div>
              <div className="flex items-start">
                <MdEmail className="text-yellow-500 mr-3 mt-1" size={22} />
                <a href="mailto:macularelectric@gmail.com" className="text-sm sm:text-lg hover:text-yellow-500 break-all">
                  macularelectric@gmail.com
                </a>
              </div>
              <div className="flex items-start">
                <IoLocationSharp className="text-yellow-500 mr-3 mt-1" size={22} />
                <a href="https://www.google.com/maps/place/Surat+Gujarat+India" className="text-sm sm:text-lg hover:text-yellow-500">
                  Surat (Gujarat), India
                </a>
              </div>
            </div>
          </div>
<div className="flex flex-col space-y-4">
            <h4 className="text-xl sm:text-2xl font-bold mb-4">Social</h4>
            <div className="flex space-x-4">
              <a href="#" aria-label="Facebook">
                <FaFacebook className="hover:text-[#ED3E40]" size={28} />
              </a>
              <a href="#" aria-label="Twitter">
                <FaTwitter className="hover:text-[#ED3E40]" size={28} />
              </a>
              <a href="#" aria-label="YouTube">
                <FaYoutube className="hover:text-[#ED3E40]" size={28} />
              </a>
            </div>
          </div>
        </div>

   
        <div className="border-t border-gray-600 mt-8 pt-6 text-center text-sm sm:text-base">
          © {new Date().getFullYear()} Macular Industries Private Limited. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;






