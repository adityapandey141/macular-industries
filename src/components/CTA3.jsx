
"use client";
import Link from "next/link";
import Image from "next/image";
import ctaphoto from "../assets/ctaphoto.jpg";

const CTA3 = () => {
  return (
    <section className="bg-[#ED2236] py-12 sm:py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10">
          <div className="w-full md:w-1/2 flex justify-center mb-6 md:mb-0">
            <Image
              src={ctaphoto}
              alt="Product illustration"
              width={500}
              height={350}
              className="rounded-xl object-cover w-full max-w-md shadow-lg"
              priority
            />
          </div>
          <div className="w-full md:w-1/2 text-center md:text-left">
              <h2 className="text-4xl font-bold text-white mt-4">
              Trust Macular for Products You Can Rely On
            </h2>
            <Link href="/contact-us" className="inline-block mt-6 sm:mt-8">
              <button className="bg-[#16171A] hover:bg-blue-500 text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg text-base sm:text-lg font-medium shadow-md transition-all duration-300 w-full sm:w-auto">
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