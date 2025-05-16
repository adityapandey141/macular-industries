"use client";
import React, { useState } from 'react';

const CTA3 = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState({ submitting: false });
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus({ submitting: true });
    setSuccess(false);

    console.log('Email submitted:', email);

    // Simulate delay (e.g., API call)
    setTimeout(() => {
      setStatus({ submitting: false });
      setSuccess(true);
      setEmail('');
    }, 1500);
  };

  return (
   <div className="relative z-20 -mb-24 mt-[-50px] w-full">
  <div className="max-w-7xl mx-auto px-4 py-8">
    <div className="relative bg-red-600 rounded-md overflow-hidden p-8">
      <div className="absolute top-0 right-0 left-0 bottom-0 opacity-10">
        <div className="transform rotate-10 -translate-y-1/4 translate-x-1/4">
          <div className="h-full w-full border-t-4 border-white"></div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row md:items-center justify-between relative z-10">
        <div className="md:w-1/2 mb-6 md:mb-0">
          <h1 className="text-2xl sm:text-4xl font-bold text-white mt-4 sm:mt-2 mb-4">
            Ready to Partner with a Trusted Manufacturer?
          </h1>
        </div>

        <div className="md:w-1/2">
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email address"
              required
              className="px-4 py-3 w-full sm:flex-1 bg-white text-black rounded-md"
            />
            <button
              type="submit"
              disabled={status.submitting}
              className={`sm:min-w-40 px-6 py-3 rounded-md bg-white text-black hover:text-white hover:bg-[#16171A] font-semibold flex items-center justify-center gap-2 transition-all duration-300 hover:shadow-md cursor-pointer ${
                status.submitting ? 'opacity-50 cursor-not-allowed' : ''
              }`}
            >
              {status.submitting ? (
                <>
                  <svg
                    className="animate-spin h-5 w-5 text-black"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                  </svg>
                  Sending...
                </>
              ) : (
                "Request a Quote"
              )}
            </button>
          </form>
          <div className="mt-2">
            {success && (
              <p className="text-white text-sm font-semibold">
                ✅ Email submitted successfully!
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  );
};

export default CTA3;
// "use client";
// import Link from "next/link";
// import Image from "next/image";
// import ctaphoto from "../assets/ctaphoto.jpg";

// const CTA3 = () => {
//   return (
//     <section className="bg-[#ED2236] py-20  mb-[-50px]">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 ">
         
//           <div className="w-full md:w-1/2 flex justify-center">
//             <Image
//               src={ctaphoto}
//               alt="Product illustration"
//               width={400}
//               height={250}
//               className="object-cover rounded-lg shadow-lg"
//               priority
//             />
//           </div>

//           <div className="w-full md:w-1/2 text-center md:text-left">
//             <h2 className="text-2xl sm:text-4xl font-bold text-white leading-tight">
//               Trust Macular for Products You Can Rely On
//             </h2>

//             <Link href="/contact-us" className="inline-block mt-6 sm:mt-8">
//               <button className="bg-[#16171A] hover:bg-white text-white hover:text-black px-6 py-3 rounded-lg text-base sm:text-lg font-medium shadow-md transition-all duration-300 w-full sm:w-auto">
//                 Partner with Us
//               </button>
//             </Link>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default CTA3;
