import React from "react";
import { FaPhoneAlt, FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import logo2 from "../assets/logo_2.webp";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#16171A] text-white w-full pt-20 pb-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="flex flex-col p-4 md:p-8">
            {/* Logo replaced with company name */}
            <Link href="/" className="flex items-center">
              <Image
                src={logo2}
                alt="Logo "
                className="object-contain w-[38%] md:w-[80%]"
                priority
              />
            </Link>

            <p className="text-white text-sm sm:text-base  mx-auto  mt-4 max-w-xl">
              Desires to obtain pain of it because it is pain but occasionally
              circum. We work with a passion of challenges.
            </p>
          </div>

          <div className="flex flex-col p-4 md:p-8">
            <h3 className="text-xl font-bold mb-4 md:mb-6">Useful Links</h3>
            <ul className="space-y-1 md:space-y-2">
              <li>
                <a
                  href="/"
                  className="text-[#ED2236] hover:text-[#ED2236] transition text-base"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/about-us"
                  className="hover:text-[#ED2236] transition text-base"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/product"
                  className="hover:text-[#ED2236] transition text-base"
                >
                  Product
                </a>
              </li>
              <li>
                <a
                  href="/quality"
                  className="hover:text-[#ED2236] transition text-base"
                >
                  Quality
                </a>
              </li>
              <li>
                <a
                  href="/contact-us"
                  className="hover:text-[#ED2236] transition text-base"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          <div className="flex flex-col p-4 md:p-8">
            <h3 className="text-xl font-bold mb-4 md:mb-6">Get In Touch</h3>
            <div className="space-y-1 md:space-y-2">
              <div className="flex items-start">
                <FaPhoneAlt className="text-white mr-3 mt-1" size={24} />
                <a
                  href="tel:+9193764 50829"
                  className="text-base hover:text-[#ED2236]"
                >
                  +91 93764 50829
                </a>
              </div>
              <div className="flex items-start">
                <MdEmail className="text-white mr-3 mt-1" size={24} />
                <a
                  href="mailto:macularelectric@gmail.com"
                  className="text-base hover:text-[#ED2236] break-all"
                >
                  macularelectric@gmail.com
                </a>
              </div>
              <div className="flex items-start">
                <IoLocationSharp className="text-white mr-3 mt-1" size={24} />
                <div className="text-base hover:text-[#ED2236]">
                  05 To 07, Shree Dwarkesh,
                  <br />
                  Ind. Estate, V2, Umra, Surat,
                  <br />
                  Mangrol, Gujarat, India, 394130
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col p-4 md:p-8">
            <h4 className="text-xl font-bold mb-4 md:mb-6">Social</h4>
            <div className="flex space-x-3">
              <a
                href="#"
                aria-label="Facebook"
                className="hover:text-[#ED2236] transition-colors duration-300"
              >
                <FaFacebook size={24} />
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="hover:text-[#ED2236] transition-colors duration-300"
              >
                <FaTwitter size={24} />
              </a>
              <a
                href="#"
                aria-label="YouTube"
                className="hover:text-[#ED2236] transition-colors duration-300"
              >
                <FaYoutube size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-600 mt-4 md:mt-6 pt-4 md:pt-8 text-center text-sm md:text-base px-4">
          © {new Date().getFullYear()} Macular Industries Private Limited. All
          rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
