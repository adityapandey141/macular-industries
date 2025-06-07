"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import Wshape from "../assets/Wshape.png";
import choose1 from "../assets/Home Page/Manufactured with Care.webp";
import { IoMdFlash } from "react-icons/io";

const WhyChooseUs = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const benefits = [
    {
      id: 1,
      title: "Made with Premium-Grade Materials",
      icon: (
        <svg
          width="25"
          height="25"
          viewBox="0 0 32 32"
          style={{ enableBackground: "new 0 0 512 512" }}
        >
          <g>
            <g dataName="29-Premium-quality">
              <path
                d="M29.09 13.64a4.51 4.51 0 0 1-.53-1 4.46 4.46 0 0 1 0-1.19A4.29 4.29 0 0 0 28.12 9a4.28 4.28 0 0 0-1.93-1.57 4.45 4.45 0 0 1-1-.62 4.45 4.45 0 0 1-.62-1A4.35 4.35 0 0 0 23 3.87a4.37 4.37 0 0 0-2.44-.38 4.44 4.44 0 0 1-1.19-.05 4.51 4.51 0 0 1-1-.53A4.37 4.37 0 0 0 16 2a4.37 4.37 0 0 0-2.36.91 4.51 4.51 0 0 1-1 .53 4.46 4.46 0 0 1-1.19.05A4.37 4.37 0 0 0 9 3.87a4.35 4.35 0 0 0-1.57 1.94 4.45 4.45 0 0 1-.62 1 4.45 4.45 0 0 1-1 .62A4.28 4.28 0 0 0 3.88 9a4.29 4.29 0 0 0-.39 2.44 4.46 4.46 0 0 1-.05 1.19 4.51 4.51 0 0 1-.53 1A4.37 4.37 0 0 0 2 16a4.37 4.37 0 0 0 .91 2.36 4.51 4.51 0 0 1 .53 1 4.46 4.46 0 0 1 .05 1.19A4.29 4.29 0 0 0 3.88 23a4.28 4.28 0 0 0 1.93 1.57 4.45 4.45 0 0 1 1 .62 4.45 4.45 0 0 1 .62 1A4.35 4.35 0 0 0 9 28.13a4.37 4.37 0 0 0 2.44.38 4.44 4.44 0 0 1 1.19 0 4.51 4.51 0 0 1 1 .53A4.37 4.37 0 0 0 16 30a4.37 4.37 0 0 0 2.36-.91 4.51 4.51 0 0 1 1-.53 4.46 4.46 0 0 1 1.19 0 4.37 4.37 0 0 0 2.45-.43 4.35 4.35 0 0 0 1.57-1.94 4.45 4.45 0 0 1 .62-1 4.45 4.45 0 0 1 1-.62A4.28 4.28 0 0 0 28.12 23a4.29 4.29 0 0 0 .39-2.44 4.46 4.46 0 0 1 0-1.19 4.51 4.51 0 0 1 .53-1A4.37 4.37 0 0 0 30 16a4.37 4.37 0 0 0-.91-2.36ZM16 25a9 9 0 1 1 9-9 9 9 0 0 1-9 9Z"
                fill="#ffffff"
                opacity="1"
                dataOriginal="#000000"
              />
              <path
                d="m20.88 13.45-2.75-.4-1.23-2.49a1 1 0 0 0-1.8 0l-1.23 2.49-2.75.4a1 1 0 0 0-.55 1.7l2 1.94-.47 2.74a1 1 0 0 0 .4 1 1 1 0 0 0 1 .08l2.5-1.32 2.46 1.3a1 1 0 0 0 .46.11 1 1 0 0 0 .59-.19 1 1 0 0 0 .4-1l-.47-2.74 2-1.94a1 1 0 0 0-.55-1.7Z"
                fill="#ffffff"
                opacity="1"
                dataOriginal="#000000"
              />
            </g>
          </g>
        </svg>
      ),
    },
    {
      id: 2,
      title: "In-House Manufacturing for Total Control",
      icon: (
        <svg
          width="25"
          height="25"
          viewBox="0 0 426.667 426.667"
          style={{ enableBackground: "new 0 0 512 512" }}
        >
          <g>
            <path
              d="M309.332 170.668H10.668C4.778 170.668 0 175.441 0 181.332V416c0 5.89 4.777 10.668 10.668 10.668h74.664V288c0-5.89 4.777-10.668 10.668-10.668h128c5.89 0 10.668 4.777 10.668 10.668v138.668H320V181.332c0-5.89-4.777-10.664-10.668-10.664zm0 0"
              fill="#ffffff"
              opacity="1"
            />
            <path
              d="M106.668 298.668h106.664v128H106.668zM416 234.668h-74.668v192H416c2.828 0 5.543-1.121 7.543-3.125 2.004-2 3.125-4.715 3.125-7.543V245.332c0-2.828-1.121-5.543-3.125-7.543-2-2-4.715-3.125-7.543-3.121zm-21.332 106.664h-21.336c-5.89 0-10.664-4.773-10.664-10.664S367.441 320 373.332 320h21.336c5.89 0 10.664 4.777 10.664 10.668s-4.773 10.664-10.664 10.664zm0-42.664h-21.336c-5.89 0-10.664-4.777-10.664-10.668s4.773-10.668 10.664-10.668h21.336c5.89 0 10.664 4.777 10.664 10.668s-4.773 10.668-10.664 10.668zM234.668 53.332c2.828.004 5.543-1.121 7.543-3.121s3.125-4.715 3.121-7.543c0-2.348 0-2.98 8.711-5.887 8.144-2.707 23.289-7.761 23.289-26.113 0-5.89-4.773-10.668-10.664-10.668S256 4.777 256 10.668c0 2.344 0 2.977-8.707 5.883C239.148 19.26 224 24.313 224 42.668c0 2.828 1.121 5.543 3.121 7.543a10.66 10.66 0 0 0 7.547 3.121zM277.332 74.668a10.658 10.658 0 0 0-16.582-8.875l-32 21.332A10.685 10.685 0 0 0 224 96v53.332h53.332zM144 53.332a10.65 10.65 0 0 0 7.543-3.121c2.004-2 3.125-4.715 3.125-7.543 0-2.348 0-2.98 8.707-5.887 8.145-2.707 23.293-7.761 23.293-26.113C186.668 4.778 181.891 0 176 0s-10.668 4.777-10.668 10.668c0 2.344 0 2.977-8.707 5.883-8.145 2.71-23.293 7.762-23.293 26.117 0 2.828 1.121 5.543 3.125 7.543 2 2 4.715 3.125 7.543 3.121zM186.668 74.668a10.661 10.661 0 0 0-16.586-8.875l-32 21.332a10.705 10.705 0 0 0-4.75 8.875v53.332h53.336zM53.332 53.332A10.66 10.66 0 0 0 64 42.668c0-2.348 0-2.98 8.707-5.887C80.852 34.074 96 29.02 96 10.668 96 4.778 91.223 0 85.332 0S74.668 4.777 74.668 10.668c0 2.344 0 2.977-8.711 5.883-8.144 2.71-23.289 7.762-23.289 26.117a10.65 10.65 0 0 0 3.121 7.543c2 2 4.715 3.125 7.543 3.121zM96 74.668a10.654 10.654 0 0 0-5.633-9.41 10.655 10.655 0 0 0-10.949.535l-32 21.332A10.685 10.685 0 0 0 42.668 96v53.332H96zm0 0"
              fill="#ffffff"
              opacity="1"
            />
          </g>
        </svg>
      ),
    },
    {
      id: 3,
      title: "Wide Product Range to Fit All Needs",
      icon: (
        <svg
          width="25"
          height="25"
          viewBox="0 0 512 512"
          style={{ enableBackground: "new 0 0 512 512" }}
        >
          <g>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M256 89.632c48.712 0 88.201 39.489 88.201 88.2 0 48.712-39.489 88.2-88.201 88.2s-88.199-39.488-88.199-88.2c0-48.71 39.487-88.2 88.199-88.2zm8 250.154v165.519l163.27-63.483V338.314l-127.664 49.64c-3.713 1.436-7.844-.098-9.775-3.441zm-16 165.518V339.786l-25.824 44.73a7.982 7.982 0 0 1-10.114 3.307l-127.33-49.509v103.507zm183.775-255.128L267.56 314.028l32.663 56.574 164.216-63.852zM244.44 314.028 80.224 250.176 47.561 306.75l164.217 63.852zM256 282.032c-43.803 0-81.293-27.028-96.703-65.317l-60.563 23.548L256 301.413l157.266-61.15-60.563-23.548c-15.409 38.288-52.899 65.317-96.703 65.317zm161.031-110.094c4.42 0 8 3.582 8 8s-3.58 8-8 8h-37.467a8 8 0 0 1 0-16zM248 14.696a8 8 0 0 1 16 0v37.469a8 8 0 0 1-16 0zm-80.757 24.771a7.966 7.966 0 0 1 13.813-7.937l18.734 32.449a7.966 7.966 0 0 1-13.813 7.937zm-57.576 61.88a7.981 7.981 0 0 1 8-13.812l32.448 18.734a7.982 7.982 0 0 1-8 13.812zm-18.909 82.38a8 8 0 0 1 0-16h37.468c4.419 0 8 3.582 8 8s-3.581 8-8 8zM330.38 33.635a7.968 7.968 0 0 1 10.876-2.938 7.967 7.967 0 0 1 2.938 10.875L325.46 74.021a7.965 7.965 0 1 1-13.813-7.937zm61.849 57.546a7.981 7.981 0 0 1 8 13.812l-32.449 18.734c-3.813 2.209-8.697.907-10.906-2.906s-.906-8.697 2.906-10.906zM289.396 137.61l-52.247 52.248-17.83-22.438c-4.386-5.518-12.414-6.434-17.931-2.049-5.518 4.387-6.435 12.414-2.048 17.932l26.238 33.019c4.537 6.499 13.88 7.388 19.534 1.733l62.364-62.363c4.991-4.993 4.991-13.088 0-18.082-4.992-4.992-13.087-4.992-18.08 0z"
              fill="#ffffff"
              opacity="1"
            />
          </g>
        </svg>
      ),
    },
    {
      id: 4,
      title: "Tested for Safety",
      icon: (
        <svg
          width="25"
          height="25"
          viewBox="0 0 32 32"
          style={{ enableBackground: "new 0 0 512 512" }}
        >
          <g>
            <path
              d="M26.25 9.91h-6.38c-.78 0-1.41-.63-1.41-1.41V2.13c.15.06.3.16.42.28l7.08 7.09c.12.12.22.26.29.41z"
              fill="#ffffff"
              opacity="1"
            />
            <path
              d="M19.87 11.41a2.914 2.914 0 0 1-2.91-2.91V2H7.04c-.79 0-1.42.63-1.42 1.41v25.18c0 .78.63 1.41 1.42 1.41h9.628a6.904 6.904 0 0 1-2.628-5.417 6.925 6.925 0 0 1 6.917-6.917 6.903 6.903 0 0 1 5.424 2.638V11.41zM9.623 8.434h5.112a.9.9 0 0 1 0 1.8H9.623a.9.9 0 0 1 0-1.8zm2.422 17.296h-2.42a.9.9 0 0 1 0-1.8h2.42a.9.9 0 0 1 0 1.8zm1.47-5.16h-3.89a.9.9 0 0 1 0-1.8h3.89a.9.9 0 0 1 0 1.8zm8.858-5.17H9.623a.9.9 0 0 1 0-1.8h12.75a.9.9 0 0 1 0 1.8z"
              fill="#ffffff"
              opacity="1"
            />
            <path
              d="M20.956 19.167a5.417 5.417 0 1 0 0 10.833 5.417 5.417 0 0 0 0-10.833zm2.406 5.195-2.644 2.13a.9.9 0 0 1-1.272-.145l-1.04-1.325a.901.901 0 0 1 1.416-1.112l.478.608 1.934-1.558a.9.9 0 1 1 1.128 1.402z"
              fill="#ffffff"
              opacity="1"
            />
          </g>
        </svg>
      ),
    },
  ];

  return (
    <section className="relative bg-black text-white overflow-hidden px-5 md:px-35 py-12 md:py-20 ">
      <div className="mx-auto flex flex-col-reverse lg:flex-row gap-10 lg:gap-20 relative z-10">
        <div className="w-full lg:w-1/2 ">
          <div
            class="section-subtitle flex text-base"
            data-aos="fade-up"
            data-aos-delay="30"
            data-aos-duration="800"
            data-aos-easing="ease-in-out"
          >
            <IoMdFlash className="text-icon text-lg mr-2 mt-1" />
            <span> Why Choose Us?</span>
          </div>

          <h1
            className="text-3xl sm:text-5xl font-bold text-white my-4"
            data-aos="fade-up"
            data-aos-delay="30"
            data-aos-duration="900"
            data-aos-easing="ease-in-out"
          >
            Manufactured with Care
          </h1>

          <p
            className="text-white text-base   mx-auto  md:mb-6"
            data-aos="fade-up"
            data-aos-delay="30"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
          >
            From raw materials to the final finish, every step is controlled,
            checked, and refined because when it comes to safety and quality, we
            don't take shortcuts.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-4 mt-4">
            {benefits.map((benefit) => (
              <div
                key={benefit.id}
                className="flex items-center p-4 sm:p-5 bg-gray-900 rounded-lg shadow-md"
                data-aos="fade-up"
                data-aos-delay="30"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
              >
                <div className="bg-red-500 rounded-full w-12 h-12 flex items-center justify-center mr-4 shrink-0">
                  {benefit.icon}
                </div>
                <span className="text-base ">{benefit.title}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute whyusbanner opacity-50 pointer-events-none">
        <Image src={choose1} alt="Background Pattern" className="" />
      </div>
    </section>
  );
};

export default WhyChooseUs;
