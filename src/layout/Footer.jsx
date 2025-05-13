import React from "react";
import Image from "next/image";
import FooterLogo1 from "../assets/FooterLogo1.png";
import { FaPhoneAlt, FaFacebook, FaTwitter, FaYoutube } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { IoLocationSharp } from 'react-icons/io5';

const Footer = () => {
  return (
   <footer className="w-full bg-[#16171A] text-white pt-16 sm:pt-20 lg:pt-30 pb-10 sm:pb-14 px-4 sm:px-6 lg:px-8 mt-[20px]">
  <div className="max-w-7xl mx-auto">
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-6 sm:gap-8 mb-10">

    
      <div>
        <Image
          src={FooterLogo1}
          alt="Macular Logo"
          width={180}
          height={70}
          className="object-contain mb-4"
        />
        <p className="text-sm sm:text-lg text-white mb-4">
          Desires to obtain pain of it because it is pain but occasionally circum. We work with a passion of challenges.
        </p>
        {/* <div className="flex items-center mb-3 space-x-2 text-sm sm:text-base">
          <FaPhoneAlt size={20} />
          <a href="tel:+60276247296" className="hover:text-yellow-500">
            + (602) 762 472 96
          </a>
        </div>
        <div className="flex items-center mb-3 space-x-2 text-sm sm:text-base">
          <MdEmail size={20} />
          <a href="mailto:macularelectric@gmail.com" className="hover:text-yellow-500 break-all">
            macularelectric@gmail.com
          </a>
        </div> */}
      </div>

      <div>
        <h3 className="text-lg sm:text-xl font-semibold mb-4">Useful Links</h3>
        <ul className="space-y-2 text-lg">
          <li><a href="/" className="text-[#ED3E40]">Home</a></li>
          <li><a href="/about-us" className="hover:text-[#ED3E40]">About Us</a></li>
          <li><a href="/product" className="hover:text-[#ED3E40]">Product</a></li>
          <li><a href="/quality" className="hover:text-[#ED3E40]">Quality</a></li>
          <li><a href="/contact-us" className="hover:text-[#ED3E40]">Contact</a></li>
        </ul>
      </div>

  
      <div>
        
        <h3 className="text-lg sm:text-xl font-semibold mb-4">Get In Touch</h3>
         <div className="space-y-2 text-lg">
        <div className="flex items-start mb-3">
          <FaPhoneAlt className="text-white mr-2 mt-1" size={25} />
          <a href="tel:+ (602) 762 472 96" className="hover:text-[#ED3E40]">
            + (602) 762 472 96
          </a>
        </div>
        <div className="flex items-start mb-3">
          <MdEmail className="text-white mr-2 mt-1" size={25} />
          <a href="mailto: macularelectric@gmail.com" className="hover:text-[#ED3E40]">
             macularelectric@gmail.com
          </a>
        </div>
        <div className="flex items-start">
          <IoLocationSharp className="text-white mr-2 mt-1" size={25} />
          <a href="https://www.google.com/maps/place/Surat+Gujarat+India" className="hover:text-[#ED3E40]">
            Surat (Gujarat), India
          </a>
        </div>
      </div>
      </div>

      <div>
        <h3 className="text-lg sm:text-xl font-semibold mb-4">Social</h3>
        <div className="flex gap-4 items-center">
          <a href="https://facebook.com" target="_blank" rel="noreferrer">
            <FaFacebook className="hover:text-[#ED3E40]" size={28} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer">
            <FaTwitter className="hover:text-[#ED3E40]" size={28} />
          </a>
          <a href="https://youtube.com" target="_blank" rel="noreferrer">
            <FaYoutube className="hover:text-[#ED3E40]" size={28} />
          </a>
        </div>
      </div>
    </div>

    <div className="border-t border-gray-100 pt-5 text-center text-lg">
      <p>
        © {new Date().getFullYear()} Macular Industries Private Limited. All rights reserved.
      </p>
    </div>
  </div>
</footer>

  );
};

export default Footer;
