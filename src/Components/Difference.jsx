import React from "react";
import Diff from "../assets/Diff.png";
const Difference = () => {
  return (
    <div className=" mx-10 2xl:mx-40">
      <div className="">
        <p className=" text-center font-[500] text-[32px] text-[#333333]">
          Make a Difference
        </p>

        <div className="grid md:grid-cols-2 gap-10 py-10">
          <div className="order-2 md:order-1">
            <p className="font-[400] text-[14px] lg:text-[24px] leading-[20px] lg:leading-[36px] my-5">
              Join us in making a difference! Your support matters. Whether it's
              a donation, volunteering your time, or simply spreading the
              word—every action counts. You can be a part of this vital movement
              for change and be a part of the movement towards improved maternal
              and infant healthcare in Nigeria. Click below to show your support
              and be a part of this impactful journey.
            </p>
            <p className="px-5 py-3 bg-[#FE4D01] rounded-md inline text-white">
              Support
            </p>
          </div>
          <div className="order-1 md:order-2">
            <img src={Diff} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Difference;
