import React from "react";
import gym1 from "../assets/gym1.png";
import gym2 from "../assets/gym2.png";
import gym3 from "../assets/gym3.png";
import VideoLg from "../assets/workout.png";

const Achievements = () => {
  return (
    <div className="">
      <p className=" py-10 font-[700] text-[14px] lg:text-[32px] text-[#ffffff] bg-[#1F1F1F] text-center ">
        TRAINING REGIMEN AND ROUTINE
      </p>
      <div className=" bg-[#FE4D01] py-10">
        <div className=" flex items-center justify-between lg:justify-center mx-10 lg:mx-0 lg:gap-48">
          <div className=" text-white text-center flex flex-col justify-center items-center">
            <img src={gym1} alt="" className=" w-[37px] lg:w-[50px]" />
            {/* <p className=" font-[400] text-[20px] lg:text-[32px] leading-[47px]">
              98.45%
            </p> */}
            <p className=" font-[500] text-[14px] lg:text-[16px]">
              Strength & Endurance
            </p>
            <p className=" font-[400] text-[14px]">Regimen A </p>
          </div>
          <div className=" text-white text-center flex flex-col justify-center items-center">
            <img src={gym3} alt="" className="w-[37px] lg:w-[50px]" />
            {/* <p className=" font-[400] text-[20px] lg:text-[32px] leading-[47px]">
              3,000+
            </p> */}
            <p className=" font-[500] text-[14px] lg:text-[16px]">Roadwork</p>
            <p className=" font-[400] text-[14px]">Regimen B </p>
          </div>
          <div className=" text-white text-center flex flex-col justify-center items-center">
            <img src={gym2} alt="" className="w-[37px] lg:w-[50px]" />
            {/* <p className=" font-[400] text-[20] lg:text-[32px] leading-[47px]">
              2,500+
            </p> */}
            <p className=" font-[500] text-[14px] lg:text-[16px]">
              Gym sessions
            </p>
            <p className=" font-[400] text-[14px]">Regimen C </p>
          </div>
          <div className=" text-white text-center flex flex-col justify-center items-center">
            <img src={gym3} alt="" className="w-[37px] lg:w-[50px]" />
            {/* <p className=" font-[400] text-[20] lg:text-[32px] leading-[47px]">
              2,500+
            </p> */}
            <p className=" font-[500] text-[14px] lg:text-[16px]">Cardio</p>
            <p className=" font-[400] text-[14px]">Regimen D </p>
          </div>
        </div>
      </div>

      <div className="">
        <img src={VideoLg} alt="" className=" w-full" />
      </div>
    </div>
  );
};

export default Achievements;
