import React from "react";
import Dot from "../assets/Dot.png";
import Logo2 from "../assets/Logo2.png";
import Insta from "../assets/icon1.png";
import Tw from "../assets/icon2.png";
import Fb from "../assets/icon3.png";
import Tiktok from "../assets/icon4.png";
const Connect = () => {
  return (
    <div className=" bg-[#2C2C2C]">
      {/* <div className=" mx-10 2xl:mx-40">
        <div className=" w-full lg:max-w-[500px] mx-auto text-center py-5 lg:py-20">
          <p className=" font-[400] text-[14px] lg:text-[18px] text-[#333333] py-1 lg:py-5">
            Join Us for a Momentous Event! Witness History Live
          </p>

          <p className=" text-[#333333] font-[400] text-[24px] lg:text-[36px] leading-[53px] py-1 lg:py-5">
            Pushing <span className=" text-[#FE4D01]">Beyond Limits</span>
          </p>
          <p className=" font-[400] text-[14px] lg:text-[16px] text-[#696969]">
            Brace yourself for an exhilarating display of sheer willpower and
            resilience."
          </p>

          <div className=" flex items-center justify-between py-10">
            <div className="">
              <div className=" flex items-center gap-5">
                <img src={Dot} alt="" />
                <p className=" font-[400] text-[16px] lg:text-[18px] text-[#333333]">
                  Date
                </p>
              </div>
              <p className=" font-[400] text-[14px] lg:text-[16px] text-[#616161]">
                12th January, 2024
              </p>
            </div>

            <div className="">
              <div className=" flex items-center gap-5">
                <img src={Dot} alt="" />
                <p className=" font-[400] text-[16px] lg:text-[18px] text-[#333333]">
                  Time
                </p>
              </div>
              <p className=" font-[400] text-[14px] lg:text-[16px] text-[#616161]">
                08:00 am(24hrs)
              </p>
            </div>
            <div className="">
              <div className=" flex items-center gap-5">
                <img src={Dot} alt="" />
                <p className=" font-[400] text-[16px] lg:text-[18px] text-[#333333]">
                  Venue
                </p>
              </div>
              <p className=" font-[400] text-[14px] lg:text-[16px] text-[#616161]">
                Lekki Lagos, Nigeria
              </p>
            </div>
          </div>
        </div>
        <div className=" flex items-center justify-end">
          <p className=" text-[16px] font-[400] text-[#FE4D01] underline lg:py-3">
            See Event Details Here
          </p>
        </div>
      </div> */}

      {/* <div className="bg-[#FE4D01] py-5">
        <marquee direction="left">
          <div className=" flex items-center gap-5">
            <img src={Logo2} alt="" />
            <img src={Logo2} alt="" />
            <img src={Logo2} alt="" />
            <img src={Logo2} alt="" />
            <img src={Logo2} alt="" />
            <img src={Logo2} alt="" />
            <img src={Logo2} alt="" />
          </div>
        </marquee>
      </div> */}

      <div className=" mx-10 2xl:mx-40 py-5">
        <p className=" font-[400] text-[14px] lg:text-[20px] text-[#ffffff] leading-[26px] lg:leading-[38px]">
          Connect with us on social media to stay updated on the latest
          developments and join the conversation. Use the hashtags
          #PushUpMania24 #BreakTheLimits to share your support, stories, and
          follow the journey towards breaking records for a cause.
        </p>
        <div className=" flex items-center gap-2 lg:gap-5 py-10">
          <a href="https://www.instagram.com/pushupmania_?igsh=NTc4MTIwNjQ2YQ==" target="_blank">
             <img src={Insta}  className=" w-[50px] lg:w-[80px]" />
          </a>

        <a href="https://twitter.com/pushupmania_?t=yrPTdaoQuoomOVeXJb6XAA&s=09" target="_blank">
             <img src={Tw}  className=" w-[50px] lg:w-[80px]" />
          </a>

        <a href="https://www.youtube.com/@Theinfernoisaac" target="_blank">
             <img src={Fb}  className=" w-[50px] lg:w-[80px]" />
          </a>
          
          
          {/* <img src={Tiktok} alt="" className="w-[50px] lg:w-[80px]" /> */}
        </div>
      </div>
    </div>
  );
};

export default Connect;
