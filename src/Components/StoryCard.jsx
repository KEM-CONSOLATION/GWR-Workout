import React from "react";
import { Link } from "react-router-dom";

const StoryCard = ({ img, text1, text2, link }) => {
  return (
    <div>
      <div className=" grid md:grid-cols-2 gap-10 my-10 lg:my-20 mx-10 2xl:mx-40 ">
        <img src={img} alt="" />
        <div className=" max-w-[600px]">
          <p className=" text-[#4E6269] leading-[26px] lg:leading-[40px] font-[400] text-[14px] lg:text-[20px] py-3">
            {text1}
          </p>
          <p className=" text-[#4E6269] leading-[26px] lg:leading-[40px] font-[400] text-[14px] lg:text-[20px] py-3">
            {text2}
          </p>
          <Link to="/">
            <p className=" border-b border-[#FE4D01] text-[#FE4D01] font-[400] text-[14px] lg:text-[20px] inline">
              {link}
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default StoryCard;
