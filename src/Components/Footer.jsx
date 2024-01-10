import React from "react";
import Logo2 from "../assets/FooterLogo.png";
import Tw from "../assets/Tw.png";
import Fb from "../assets/Fb.png";
import Insta from "../assets/Insta.png";
const Footer = () => {
  return (
    <div className=" bg-[#FE4D01] py-10 text-white">
      <div className=" mx-10 2xl:mx-40">
        {/* <div className=" grid lg:grid-cols-3  items-center gap-10 border-b"> */}
        <div className=" grid gap-10 lg:gap-40 lg:flex justify-start items-center border-b pb-10">
          <div className=" max-w-[400px]">
            <img src={Logo2} alt="" className=" " />
            {/* <p className=" font-[400] text-[16px] py-5 leading-[30px]">
              Lorem ipsum dolor sit amet consectetur. Nunc dui at diam semper
              habitasse malesuada pharetra euismod. Sodales et enim nullam
              ornare dictumst quis mauris in adipiscing. Quis velit eget et.
            </p> */}
          </div>

          <div className=" max-w-[400px] w-full">
            <p className=" font-[400] text-[16px] pb-5">
              Subscribe to newsletters to receive updates, news, notifications
              about this event
            </p>
            <div className=" flex items-center gap-3">
              <input
                type="text"
                placeholder="Your Email"
                className=" border-2 text-white placeholder:text-white px-2 border-white bg-[#FE4D01] py-3 w-full"
              />
              <button className=" bg-white font-[400] text-[16px] text-[#FE4D01] py-3 px-5">
                Subscribe
              </button>
            </div>
          </div>
          {/* <div className="max-w-[400px]">
            <p className=" font-[400] text-[16px] pb-5">Follow us On:</p>
            <div className=" flex items-center gap-5">
              <img src={Tw} alt="" className=" border rounded-full w-[50px] " />
              <img src={Fb} alt="" className=" border rounded-full w-[50px] " />
              <img
                src={Insta}
                alt=""
                className=" border rounded-full w-[50px] "
              />
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Footer;
