import React from 'react';
import HBanner from "../assets/HBanner.jpg";

const ProductHeader = () => {
  return (
    <section
      className="w-full bg-cover bg-center bg-no-repeat h-64 sm:h-80 md:h-96"
      style={{
        backgroundImage: `url(${HBanner})`,
      }}
    >
      <div className="bg-gradient-to-r from-green-50 via-yellow-50 to-purple-50 bg-opacity-10 w-full h-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-12 md:py-24 flex items-center h-full">
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black">
              PRODUCT
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductHeader;
