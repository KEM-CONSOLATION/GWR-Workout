import React from "react";
import Story1 from "../assets/Story1.png";
import Story2 from "../assets/Story2.png";
import What from "../assets/What.png";
import When from "../assets/When.png";
import Where from "../assets/Where.png";
import Why from "../assets/Why.png";
import EventCard from "./EventCard";
import StoryCard from "./StoryCard";

const EventDetails = () => {
  return (
    <div className=" my-20">
      <div className=" text-center">
        <p className=" text-[#FE4D01] text-[12px] lg:text-[14px] font-[700] ">
          BRIEF EVENT DETAILS
        </p>
        <p className=" font-[400] text-[16px] lg:text-[32px] text-[#001117]">
          Be In The Know with Major Details
        </p>
      </div>

      <div className=" grid sm:grid-cols-2 sm:mx-10 md:grid-cols-4 gap-16 md:gap-0 py-20">
        <EventCard
          img={What}
          title="What?"
          text="Lorem ipsum dolor sit amet consectetur. Amet et eget tortor ipsum
            massa. Amet eget ut ipsum."
        />
        <EventCard
          img={When}
          title="When?"
          text="Lorem ipsum dolor sit amet consectetur. Amet et eget tortor ipsum
            massa. Amet eget ut ipsum."
        />
        <EventCard
          img={Where}
          title="What?"
          text="Lorem ipsum dolor sit amet consectetur. Amet et eget tortor ipsum
          massa. Amet eget ut ipsum."
        />
        <EventCard
          img={Why}
          title="What?"
          text="Lorem ipsum dolor sit amet consectetur. Amet et eget tortor ipsum
        massa. Amet eget ut ipsum."
        />
      </div>

      <div className="">
        <p className=" text-center text-[#333333] font-[500] text-[20px] lg:text-[32px]">
          The <span className=" text-[#FE4D01]">PushUp-Mania24</span> Story
        </p>

        <StoryCard
          img={Story1}
          text1="Lorem ipsum dolor sit amet consectetur. Suspendisse enim risus
              tortor nibh cras ut. Ultricies hendrerit scelerisque aenean a. Sit
              pellentesque eget dui sed pulvinar felis vitae id. Faucibus donec
              lorem nibh tortor aliquet amet nunc a dignissim. Arcu sed mollis."
          text2="Lorem ipsum dolor sit amet consectetur. Suspendisse enim risus
              tortor nibh cras ut. Ultricies hendrerit scelerisque aenean a. Sit
              pellentesque eget dui sed pulvinar felis vitae id. Faucibus donec
              lorem nibh tortor aliquet amet nunc a dignissim. Arcu sed mollis."
          link="Read More"
        />
      </div>
      <div className="">
        <p className=" text-center text-[#333333] font-[500] text-[20px] lg:text-[32px]">
          The <span className=" text-[#FE4D01]"> Isaac Matui Thomas </span>{" "}
          Story
        </p>

        <StoryCard
          img={Story2}
          text1="Lorem ipsum dolor sit amet consectetur. Suspendisse enim risus
              tortor nibh cras ut. Ultricies hendrerit scelerisque aenean a. Sit
              pellentesque eget dui sed pulvinar felis vitae id. Faucibus donec
              lorem nibh tortor aliquet amet nunc a dignissim. Arcu sed mollis."
          text2="Lorem ipsum dolor sit amet consectetur. Suspendisse enim risus
              tortor nibh cras ut. Ultricies hendrerit scelerisque aenean a. Sit
              pellentesque eget dui sed pulvinar felis vitae id. Faucibus donec
              lorem nibh tortor aliquet amet nunc a dignissim. Arcu sed mollis."
          link="Read More"
        />
      </div>
    </div>
  );
};

export default EventDetails;
