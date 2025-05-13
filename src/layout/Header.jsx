"use client";
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import LOGO1 from "../assets/LOGO1.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      const mobileMenu = document.getElementById('mobile-menu');
      const mobileMenuButton = document.getElementById('mobile-menu-button');

      if (
        isMenuOpen &&
        mobileMenu &&
        !mobileMenu.contains(event.target) &&
        mobileMenuButton &&
        !mobileMenuButton.contains(event.target)
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <header className={`sticky top-0 w-full z-30 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-4' : 'bg-white shadow-sm py-6'}`}>
      <div className=" max-w-7xl mx-auto   flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image
            src={LOGO1}
            alt="Logo"
            width={120}
            height={120}
            className="object-contain "
          />
        </Link>

        <nav className="hidden md:flex space-x-12">
        <Link
              href="/"
              className="py-4 px-6 font-medium hover:bg-[#ED2236] hover:text-white rounded"
            >
              HOME
            </Link>
            <Link
              href="/about-us"
              className="py-4 px-6 font-medium hover:bg-[#ED2236] hover:text-white rounded"
            >
              ABOUT US
            </Link>
            <Link
              href="/product"
              className="py-4 px-6 font-medium hover:bg-[#ED2236] hover:text-white rounded"
            >
              PRODUCT
            </Link>
            <Link
              href="/quality"
              className="py-4 px-6 font-medium hover:bg-[#ED2236] hover:text-white rounded"
            >
              QUALITY
            </Link>
            <Link
              href="/contact-us"
              className="py-4 px-6 font-medium hover:bg-[#ED2236] hover:text-white rounded"
            >
              CONTACT
            </Link>
        </nav>
        <div className="hidden md:block">
          <a href="/" className="bg-[#ED2236] hover:bg-[#16171A] text-white font-medium py-4 px-4 rounded transition-all duration-300 hover:shadow-md">
          MAKE APPOINMENT
          </a>
        </div>
        

        <button
          id="mobile-menu-button"
          className="md:hidden text-gray-800 hover:text-gray-600 transition-colors duration-200"
          onClick={(e) => {
            e.stopPropagation();
            setIsMenuOpen(!isMenuOpen);
          }}
          aria-label="Toggle mobile menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {isMenuOpen && (
        <div
          id="mobile-menu"
          className="md:hidden bg-[#ED2236] absolute top-full left-0 right-0 shadow-md z-20 max-h-screen overflow-y-auto"
        >
          <div className="px-4 py-3 space-y-1">
          <Link
            href="/"
            className="block py-4 px-6 text-white hover:bg-green-700"
          >
            HOME
          </Link>
          <Link
            href="/about-us"
            className="block py-4 px-6 text-white hover:bg-green-700"
          >
            ABOUT US
          </Link>
          <Link
            href="/product"
            className="block py-4 px-6 text-white hover:bg-green-700"
          >
            PRODUCT
          </Link>
          <Link
            href="/quality"
            className="block py-4 px-6 text-white hover:bg-green-700"
          >
            QUALITY
          </Link>
          <Link
            href="/contact-us"
            className="block py-4 px-6 text-white hover:bg-green-700"
          >
            CONTACT
          </Link>
            <a href="/" className="block px-3 py-2 bg-yellow-400 text-gray-800 hover:bg-yellow-500 rounded text-center font-medium mt-4 transition-colors duration-200" onClick={() => setIsMenuOpen(false)}>
              MAKE APPOINMENT
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
