import React from "react";
import gym1 from "../assets/gym1.png";
import gym2 from "../assets/gym2.png";
import gym3 from "../assets/gym3.png";
import VideoLg from "../assets/VideoLg.png";

const Achievements = () => {
  return (
    <div className="">
      <div className=" bg-[#FE4D01] py-20">
        <div className=" flex items-center justify-between lg:justify-center mx-10 lg:mx-0 lg:gap-48">
          <div className=" text-white text-center flex flex-col justify-center items-center">
            <img src={gym1} alt="" className=" w-[37px] lg:w-full" />
            <p className=" font-[400] text-[20px] lg:text-[32px] leading-[47px]">
              98.45%
            </p>
            <p className=" font-[500] text-[14px] lg:text-[16px]">
              Training milestone
            </p>
            <p className=" font-[400] text-[14px]">Lorem ipsum </p>
          </div>
          <div className=" text-white text-center flex flex-col justify-center items-center">
            <img src={gym2} alt="" className="w-[37px] lg:w-full" />
            <p className=" font-[400] text-[20px] lg:text-[32px] leading-[47px]">
              3,000+
            </p>
            <p className=" font-[500] text-[14px] lg:text-[16px]">
              Training milestone
            </p>
            <p className=" font-[400] text-[14px]">Lorem ipsum </p>
          </div>
          <div className=" text-white text-center flex flex-col justify-center items-center">
            <img src={gym3} alt="" className="w-[37px] lg:w-full" />
            <p className=" font-[400] text-[20] lg:text-[32px] leading-[47px]">
              2,500+
            </p>
            <p className=" font-[500] text-[14px] lg:text-[16px]">
              Training milestone
            </p>
            <p className=" font-[400] text-[14px]">Lorem ipsum </p>
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
