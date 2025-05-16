"use client";
import Link from "next/link";
import Image from "next/image";
import ctaphoto from "../assets/ctaphoto.jpg";

const CTA3 = () => {
  return (
    <section className="bg-[#ED2236] py-20  mb-[-50px]">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6">
        <div className="flex flex-col md:flex-row items-center ">
         
          <div className="w-full md:w-1/2 flex justify-center">
            <Image
              src={ctaphoto}
              alt="Product illustration"
              width={400}
              height={250}
              className="object-cover rounded-lg shadow-lg"
              priority
            />
          </div>

          <div className="w-full md:w-1/2 text-center md:text-left">
            <h2 className="text-2xl sm:text-4xl font-bold text-white leading-tight">
              Trust Macular for Products You Can Rely On
            </h2>

            <Link href="/contact-us" className="inline-block mt-6 sm:mt-8">
              <button className="bg-[#16171A] hover:bg-white text-white hover:text-black px-6 py-3 rounded-lg text-base sm:text-lg font-medium shadow-md transition-all duration-300 w-full sm:w-auto">
                Partner with Us
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA3;
