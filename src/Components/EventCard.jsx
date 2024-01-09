import React from "react";

const EventCard = ({ img, title, text }) => {
  return (
    <div className=" max-w-[300px] mx-auto">
      <div className=" grid gap-5">
        <img src={img} alt="" />
        <p className=" text-[16px] lg:text-[20px] text-[#ffffff]">{title}</p>
        <p className=" font-[400] text-[14px] text-[#ffffff]">{text}</p>
      </div>
    </div>
  );
};

export default EventCard;
