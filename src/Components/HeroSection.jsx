import React from "react";
import Navbar from "./Navbar";

const HeroSection = () => {
  return (
    <div className="relative bg-red-400 bg-HeroImage  bg-cover bg-center">
      <div className="absolute inset-0 bg-[#000000BD] "></div>
      <Navbar />
      <div className="  mx-auto  text-center text-white relative z-10 ">
        <div className="  my-20 text-center mx-auto">
          <p
            className=" text-[16px] lg:text-[18px] font-[400]"
            data-aos="fade-down"
          >
            Fitness Milestine Unlocked
          </p>
          <p
            className=" text-[24px] lg:text-[64px] font-[600] py-10"
            data-aos="fade-up"
          >
            PUSHING BEYOND BOUNDARIES
          </p>
          <p
            className="text-[16px] lg:text-[20px] font-[400]"
            data-aos="fade-left"
          >
            Join us for a Historic Record-Breaking Event
          </p>
        </div>

        <div className=" max-w-[400px] mx-10  sm:mx-auto flex items-center justify-between border-t py-10 font-[400] text-[14px] lg:text-[20px] ">
          <div className="" data-aos="fade-right">
            <p>3rd January, 2024</p>
          </div>
          <div className="" data-aos="fade-left">
            <p>Lekki Lagos, Nigeria</p>
          </div>
        </div>
      </div>

      <div
        className=" flex items-center justify-center py-20"
        data-aos="fade-up"
      >
        <div className=" bg-[#FE4D01] shadow-lg shadow-[#61616140] shadow-inner-[#61616140] rounded absolute bottom-[-40px] w-full md:w-[800px] lg:w-[1200px]  flex items-center justify-between pr-5 gap-3 lg:gap-5">
          <div className=" flex items-center gap-5">
            <div className=" bg-[#d86839] text-white p-3 lg:p-8">
              <p className="font-[500] text-[14px] lg:text-[32px] leading-[47px]">
                12
              </p>
              <p className=" font-[300] text-[12px] lg:text-[20px] leading-[29px]">
                Jan
              </p>
            </div>
            <div className=" hidden sm:block text-white">
              <p className=" font-[400] text-[14px] lg:text-[24px] ">
                The PushUp-Mania24
              </p>
              <p className=" font-[300] text-[10px] lg:text-[20px]">
                Unveiling Resilience for Change
              </p>
            </div>
          </div>

          <div className=" flex items-center gap-5 text-white">
            <div className=" flex flex-col items-center">
              <p className=" text-[14px] lg:text-[24px] font-Orbitron font-[400] ">
                122
              </p>
              <p className="">Days</p>
            </div>
            <p>:</p>
            <div className=" flex flex-col items-center">
              <p className=" text-[14px] lg:text-[24px] font-Orbitron font-[400] ">
                122
              </p>
              <p className="">Hours</p>
            </div>
            <p>:</p>

            <div className=" flex flex-col items-center">
              <p className=" text-[14px] lg:text-[24px] font-Orbitron font-[400] ">
                122
              </p>
              <p className="">Minutes</p>
            </div>
            <p>:</p>

            <div className=" flex flex-col items-center">
              <p className=" text-[14px] lg:text-[24px] font-Orbitron font-[400] ">
                122
              </p>
              <p className="">Seconds</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
