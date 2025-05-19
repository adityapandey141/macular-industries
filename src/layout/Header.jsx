"use client";
import Link from 'next/link';
import { useState, useEffect } from 'react';

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
    // Prevent body scrolling when mobile menu is open
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

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
      document.body.style.overflow = 'unset';
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isMenuOpen]);

  const handleHashLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={`sticky top-0 w-full z-30 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md py-6' : 'bg-white shadow-sm py-3 md:py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Logo replaced with text */}
        <Link href="/" className="flex items-center">
          <span className="text-3xl font-bold text-[#000000]">Macular Industries</span>
        </Link>

        <nav className="hidden md:flex items-center space-x-6 lg:space-x-12">
          <Link href="/" className="text-[#ED2236] font-bold text-sm lg:text-base transition-colors duration-200">
            HOME
          </Link>
          <a href="/about-us" className="text-black hover:text-[#ED2236] font-bold text-sm lg:text-base transition-colors duration-200">
            ABOUT US
          </a>
          <a href="/product" className="text-black hover:text-[#ED2236] font-bold text-sm lg:text-base transition-colors duration-200">
            PRODUCT
          </a>
          <a href="/quality" className="text-black hover:text-[#ED2236] font-bold text-sm lg:text-base transition-colors duration-200">
            QUALITY
          </a>
          <Link href="/contact-us" className="text-black hover:text-[#ED2236] font-bold text-sm lg:text-base transition-colors duration-200">
            CONTACT
          </Link>
        </nav>
{/* 
        <div className="hidden md:block">
          <a href="/" className="bg-[#ED2236] hover:bg-[#16171A] text-white font-medium py-4 px-4 rounded transition-all duration-300 hover:shadow-md">
            MAKE APPOINMENT
          </a>
        </div> */}

        <button
          id="mobile-menu-button"
          className="md:hidden text-gray-800 hover:text-gray-600 p-2 transition-colors duration-200"
          onClick={(e) => {
            e.stopPropagation();
            setIsMenuOpen(!isMenuOpen);
          }}
          aria-label="Toggle mobile menu"
          aria-expanded={isMenuOpen}
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

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className={`md:hidden fixed inset-0 bg-white z-20 transform ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300 ease-in-out pt-25`}
        style={{ top: isScrolled ? '56px' : '72px' }}
      >
        <div className="px-4 py-3 space-y-3">
          <Link 
            href="/" 
            className="block px-4 py-3 text-gray-800 hover:bg-gray-100 rounded-lg font-medium transition-colors duration-200" 
            onClick={handleHashLinkClick}
          >
            HOME
          </Link>
          <a 
            href="/about-us" 
            className="block px-4 py-3 text-gray-800 hover:bg-gray-100 rounded-lg font-medium transition-colors duration-200" 
            onClick={handleHashLinkClick}
          >
            ABOUT US
          </a>
          <a 
            href="/product" 
            className="block px-4 py-3 text-gray-800 hover:bg-gray-100 rounded-lg font-medium transition-colors duration-200" 
            onClick={handleHashLinkClick}
          >
            PRODUCT
          </a>
          <a 
            href="/quality" 
            className="block px-4 py-3 text-gray-800 hover:bg-gray-100 rounded-lg font-medium transition-colors duration-200" 
            onClick={handleHashLinkClick}
          >
            QUALITY
          </a>
          <Link 
            href="/contact-us" 
            className="block px-4 py-3 text-gray-800 hover:bg-gray-100 rounded-lg font-medium transition-colors duration-200"
            onClick={handleHashLinkClick}
          >
            CONTACT
          </Link>
          {/* <div className="pt-4">
            <Link 
              href="/contact-us" 
              className="block w-full bg-[#ED2236] hover:bg-[#16171A] text-white font-medium py-4 px-4 rounded-lg text-center transition-colors duration-200"
              onClick={handleHashLinkClick}
            >
              MAKE APPOINMENT
            </Link>
          </div> */}
        </div>
      </div>
    </header>
  );
};

export default Header;
