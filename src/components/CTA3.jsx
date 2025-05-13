"use client";
import Link from "next/link";
import Image from "next/image";
import ctaphoto from "../assets/ctaphoto.jpg";

const CTA3 = () => {
  return (
    <section className="bg-[#D61E00] py-12 mb-[-50px]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-10">
      <div className="md:w-1/2 flex justify-center">
          <Image
            src={ctaphoto}
            alt="cta"
            width={500}
            height={350}
            className="rounded-xl object-contain"
          />
        </div>
        <div className="md:w-1/2">
          <h2 className="text-4xl font-bold text-white mt-4">
         Trust Macular for Products You Can Rely On
          </h2>
         
          <Link href="/contact-us">
            <button className="mt-6 bg-[#ED2236] hover:bg-[#16171A] text-white px-6 py-3 rounded-lg text-lg font-medium shadow-md  transition-all">
              Partner with Us
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTA3;