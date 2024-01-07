import React from "react";
import Navbar from "./Navbar";
import AboutContent from "./AboutContent";

const AboutHeroSection = () => {
  return (
    <div>
      <div className="relative bg-red-400 bg-HeroImage  bg-cover bg-center h-[40vh] md:h-[90vh]">
        <div className="absolute inset-0 bg-[#FE4D018C] "></div>
        <Navbar />
      </div>
    </div>
  );
};

export default AboutHeroSection;
