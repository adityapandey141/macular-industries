import React from "react";
import HeroSection from "@/components/HeroSection";
import AboutUs from "@/components/AboutUs";
import ProductCategories from "@/components/ProductCategories";
import WhyChooseUs from "@/components/WhyChooseUs";
import Gallery from "@/components/Gallery";
import CTA from "@/components/CTA";

const page = () => {
  return (
    <div>
      <HeroSection />
      <AboutUs />
      <ProductCategories />
      <WhyChooseUs />
      <Gallery />
      <CTA />
    </div>
  );
};

export default page;
