import React from "react";
import Navbar from "./Navbar";

const HeroSection = () => {
  return (
    <div className="relative bg-red-400 bg-HeroImage  bg-cover bg-center">
      <div className="absolute inset-0 bg-[#FE4D018C] "></div>
      <Navbar />
      <div className=" max-w-[400px] mx-auto  text-center text-white relative z-10 ">
        <div className="  my-20 text-center mx-auto">
          <p className=" text-[16px] lg:text-[18px] font-[400]">
            Pushing Beyond Boundaries
          </p>
          <p className=" text-[24px] lg:text-[64px] font-[600] py-10">
            FITNESS ARENA UNLOCKED
          </p>
          <p className="text-[16px] lg:text-[20px] font-[400]">
            Join us for a Historic Record-Breaking Event
          </p>
        </div>

        <div className=" flex items-center justify-between border-t py-10 font-[400] text-[14px] lg:text-[20px] mx-10 md:mx-0">
          <div className="">
            <p>3rd January, 2024</p>
          </div>
          <div className="">
            <p>Lekki Lagos, Nigeria</p>
          </div>
        </div>
      </div>

      <div className=" flex items-center justify-center my-20">
        <div className=" bg-white shadow-lg shadow-[#61616140] shadow-inner-[#61616140] px-10 rounded-full absolute bottom-[-40px] py-5 flex items-center gap-5">
          <div className=" flex flex-col items-center">
            <p className=" text-[16px] lg:text-[24px] font-Orbitron font-[400] text-[#FE4D01] lg:text-[#B40C3E]">
              122
            </p>
            <p className=" text-[#616161]">Days</p>
          </div>
          <p>:</p>
          <div className=" flex flex-col items-center">
            <p className=" text-[16px] lg:text-[24px] font-Orbitron font-[400] text-[#FE4D01] lg:text-[#B40C3E]">
              122
            </p>
            <p className=" text-[#616161]">Hours</p>
          </div>
          <p>:</p>

          <div className=" flex flex-col items-center">
            <p className=" text-[16px] lg:text-[24px] font-Orbitron font-[400] text-[#FE4D01] lg:text-[#B40C3E]">
              122
            </p>
            <p className=" text-[#616161]">Minutes</p>
          </div>
          <p>:</p>

          <div className=" flex flex-col items-center">
            <p className=" text-[16px] lg:text-[24px] font-Orbitron font-[400] text-[#FE4D01] lg:text-[#B40C3E]">
              122
            </p>
            <p className=" text-[#616161]">Seconds</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
