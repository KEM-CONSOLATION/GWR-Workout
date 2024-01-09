import React from "react";
import Diff from "../assets/Diff.png";
import motherChild from "../assets/motherChild1.png";
const Difference = () => {
  return (
    <div className=" bg-[#1F1F1F] py-10">
      <div className="">
        <p className="  py-10 text-center font-[500] text-[32px] text-[#ffffff]">
          Future Goals and Impact
        </p>
        <img src={motherChild} className=" w-full" alt="" />
        <div className=" mx-10 2xl:mx-40">
          <div className="">
            <p className=" font-[400] text-[16px] lg:text-[24px] leading-[30px] mt-5  lg:leading-[46px] text-[#ffffff]">
              Impact on Infant and Maternal Mortality:
            </p>
            <p className=" font-[400] text-[14px] lg:text-[18px] leading-[30px] mt-5  lg:leading-[46px] text-[#acacac]">
              Our primary goal extends beyond setting a record. It's about
              leveraging this platform to ignite conversations, raise awareness,
              and advocate for improved maternal and infant healthcare. Through
              this attempt, we aspire to catalyze a movement that drives
              impactful change, saving lives and securing a healthier future for
              Nigerian families.
            </p>
          </div>

          <div className="">
            <p className=" font-[400] text-[16px] lg:text-[24px] leading-[30px] mt-5  lg:leading-[46px] text-[#ffffff]">
              Community and Awareness Building:
            </p>
            <p className=" font-[400] text-[14px] lg:text-[18px] leading-[30px] mt-5  lg:leading-[46px] text-[#acacac]">
              Through this record-breaking attempt, we aim to harness attention,
              initiating conversations, fostering support networks, and
              mobilizing resources. This isn't just about achieving a record;
              it's about catalyzing a movement—a unified effort towards
              improving maternal and infant healthcare in Nigeria
            </p>
          </div>
        </div>
      </div>

      <div className=" mx-10 2xl:mx-40 my-20">
        <p className=" text-center font-[500] text-[32px] text-[#ffffff]">
          Make a Difference
        </p>

        <div className="grid md:grid-cols-2 gap-10 py-10">
          <div className="order-2 md:order-1">
            <p className="font-[400] text-[#ACACAC] text-[14px] lg:text-[20px] leading-[20px] lg:leading-[36px] my-5">
              We invite like-minded organizations, philanthropists, and
              individuals passionate about healthcare and social impact to join
              hands with us. Your partnership or sponsorship will not only
              support the event but will also contribute directly to initiatives
              addressing infant and maternal mortality in Nigeria. Together, we
              can make a tangible difference and save lives. Contact us to
              explore partnership opportunities and become a part of this
              impactful journey.
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
