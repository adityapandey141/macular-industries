import React from 'react';
import { IoLocationSharp } from 'react-icons/io5';
import { MdEmail } from 'react-icons/md';
import { FaPhoneAlt } from 'react-icons/fa';


const ContactDetails = () => {
  return (
    <div className="bg-white py-8">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6 ">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 sm:gap-8">
        
   
          <div className="flex flex-col items-center text-center px-4">
            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
              <IoLocationSharp className="h-6 w-6 text-black" />
            </div>
            <h3 className="text-base sm:text-xl font-medium text-black mb-2">Visit our place</h3>
            <p className="text-gray-900 text-sm sm:text-lg">Surat (Gujarat), India</p>
          </div>

          <div className="flex flex-col items-center text-center px-4">
            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
              <FaPhoneAlt className="h-6 w-6 text-black" />
            </div>
            <h3 className="text-base sm:text-xl font-medium text-black mb-2">Contact us</h3>
            <p className="text-gray-900 text-sm sm:text-lg mt-1">+917985663499</p>
          </div>

      
          <div className="flex flex-col items-center text-center px-4">
            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
              <MdEmail  className="h-6 w-6 text-black" />
            </div>
            <h3 className="text-base sm:text-xl font-medium text-black mb-2">Email Address</h3>
            <p className="text-gray-900 text-sm sm:text-lg break-words">macularelectric@gmail.com</p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ContactDetails;
