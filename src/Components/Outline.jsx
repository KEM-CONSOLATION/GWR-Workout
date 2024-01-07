import React from "react";
import Pic from "../assets/pic.png";

const Outline = () => {
  return (
    <div className=" mx-10 2xl:mx-40 my-40 ">
      <div className="">
        <div className=" bg-[#FEDFD1] px-10 pt-40 relative rounded-lg">
          <div className="grid md:grid-cols-2 justify-start gap-10 md:gap-20 lg:gap-40 items-center">
            <div className=" grid md:flex  gap-5">
              <div className="  inline-grid gap-5 lg:pb-20">
                <div className=" bg-white p-10 rounded-xl ">
                  <img src={Pic} alt="" />
                  <div className=" py-5">
                    <p className=" font-[700] text-[14px] text-[#001117]">
                      Training regimen
                    </p>
                    <p className=" text-[#4E6269] font-[500] text-[12px]">
                      72694 - 736473
                    </p>
                  </div>
                  <div className=" text-[#4E6269] font-[400] text-[12px]">
                    <p>Hulksville Clinic</p>
                    <p>Mid / 87 Locations</p>
                  </div>
                </div>
                <div className=" bg-white p-10 rounded-xl ">
                  <img src={Pic} alt="" />
                  <div className=" py-5">
                    <p className=" font-[700] text-[14px] text-[#001117]">
                      Training regimen
                    </p>
                    <p className=" text-[#4E6269] font-[500] text-[12px]">
                      72694 - 736473
                    </p>
                  </div>
                  <div className=" text-[#4E6269] font-[400] text-[12px]">
                    <p>Hulksville Clinic</p>
                    <p>Mid / 87 Locations</p>
                  </div>
                </div>
              </div>

              <div className="hidden  lg:inline-grid gap-5 pt-20">
                <div className=" bg-white p-10 rounded-xl ">
                  <img src={Pic} alt="" />
                  <div className=" py-5">
                    <p className=" font-[700] text-[14px] text-[#001117]">
                      Training regimen
                    </p>
                    <p className=" text-[#4E6269] font-[500] text-[12px]">
                      72694 - 736473
                    </p>
                  </div>
                  <div className=" text-[#4E6269] font-[400] text-[12px]">
                    <p>Hulksville Clinic</p>
                    <p>Mid / 87 Locations</p>
                  </div>
                </div>
                <div className=" bg-white p-10 rounded-xl ">
                  <img src={Pic} alt="" />
                  <div className=" py-5">
                    <p className=" font-[700] text-[14px] text-[#001117]">
                      Training regimen
                    </p>
                    <p className=" text-[#4E6269] font-[500] text-[12px]">
                      72694 - 736473
                    </p>
                  </div>
                  <div className=" text-[#4E6269] font-[400] text-[12px]">
                    <p>Hulksville Clinic</p>
                    <p>Mid / 87 Locations</p>
                  </div>
                </div>
              </div>
            </div>
            <div className=" max-w-[410px] mb-5">
              <p className=" font-[700] text-[14px] text-[#FE4D01]">
                TRAINING REGIMEN AND ROUTINE
              </p>
              <p className=" font-[400] text-[16px] lg:text-[32px] text-[#001117] leading-[23px] lg:leading-[47px]  py-4 lg:py-5">
                Lorem ipsum dolor sit amet consectetur. Nisl duis potenti.
              </p>
              <p className=" text-[14px] font-[400] text-[#4E6269] leading-[20px]  py-3 lg:py-5">
                Lorem ipsum dolor sit amet consectetur. Vestibulum diam montes
                morbi ultricies risus dui egestas eget. Integer curabitur
                bibendum leo porta pellentesque condimentum potenti neque.
                Cursus accumsan amet aliquet.
              </p>
              <p className=" px-5 py-3 bg-[#FE4D01] rounded-md inline text-white">
                See Outline
              </p>
            </div>
          </div>
          <div className=" absolute top-[-40px] lg:max-w-5xl mx-auto">
            <div className=" bg-white w-full drop-shadow-lg flex items-center justify-between px-20 gap-40 py-5 rounded-md">
              <div className=" text-black text-center flex flex-col justify-center items-center">
                <p className=" font-[400] text-[20px] lg:text-[32px] leading-[47px]">
                  98.45%
                </p>
                <p className=" font-[500] text-[14px] lg:text-[16px]">
                  Positive Feedback
                </p>
                <p className=" font-[400] text-[14px]">Lorem ipsum </p>
              </div>
              <div className=" text-black text-center hidden md:flex flex-col justify-center items-center">
                <p className=" font-[400] text-[20px] lg:text-[32px] leading-[47px]">
                  98.45%
                </p>
                <p className=" font-[500] text-[14px] lg:text-[16px]">
                  Positive Feedback
                </p>
                <p className=" font-[400] text-[14px]">Lorem ipsum </p>
              </div>
              <div className=" text-black text-center hidden md:flex flex-col justify-center items-center">
                <p className=" font-[400] text-[20px] lg:text-[32px] leading-[47px]">
                  98.45%
                </p>
                <p className=" font-[500] text-[14px] lg:text-[16px]">
                  Positive Feedback
                </p>
                <p className=" font-[400] text-[14px]">Lorem ipsum </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Outline;
