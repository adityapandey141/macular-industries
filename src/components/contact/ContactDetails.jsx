import React from "react";
import { IoLocationSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";

const ContactDetails = () => {
  return (
    <div className="bg-white py-8">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6 ">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 sm:gap-8">
          <div className="flex flex-col items-center text-center px-4">
            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
              <IoLocationSharp className="h-6 w-6 text-black" />
            </div>
            <h3
              className="text-base sm:text-xl font-medium text-black "
              data-aos="fade-up"
              data-aos-delay="30"
              data-aos-duration="800"
              data-aos-easing="ease-in-out"
            >
              Address
            </h3>

            <p
              className="text-gray-700 text-lg"
              data-aos="fade-up"
              data-aos-delay="30"
              data-aos-duration="900"
              data-aos-easing="ease-in-out"
            >
              05 To 07, Shree Dwarkesh,
            </p>
            <p className="text-gray-700 text-lg">
              Ind. Estate, V2, Umra, Surat,
            </p>
            <p className="text-gray-700 text-lg">
              Mangrol, Gujarat, India, 394130
            </p>
          </div>

          <div className="flex flex-col items-center text-center px-4">
            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
              <FaPhoneAlt className="h-6 w-6 text-black" />
            </div>
            <h3 className="text-base sm:text-xl font-medium text-black mb-2">
              Phone
            </h3>
            <p className="text-gray-900 text-sm sm:text-lg mt-1">
              +91 93764 50829
            </p>
          </div>

          <div className="flex flex-col items-center text-center px-4">
            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
              <MdEmail className="h-6 w-6 text-black" />
            </div>
            <h3 className="text-base sm:text-xl font-medium text-black mb-2">
              Email Address
            </h3>
            <p className="text-gray-900 text-sm sm:text-lg break-words">
              macularelectric@gmail.com{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactDetails;
