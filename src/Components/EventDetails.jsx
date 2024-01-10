import React from "react";
import Story1 from "../assets/Story1.png";
import Story2 from "../assets/Story2.png";
import What from "../assets/What.png";
import When from "../assets/When.png";
import Where from "../assets/Where.png";
import Why from "../assets/Why.png";
import EventCard from "./EventCard";
import handLeft from "../assets/handLeft.png";
import handright from "../assets/handright.png";
import womanBaby from "../assets/womanBaby.png";
import womanBaby2 from "../assets/womanBaby2.png";
import { Link } from "react-router-dom";

const EventDetails = () => {
  return (
    <div className=" bg-[#1F1F1F] py-20">
      <div className=" text-center">
        <p className=" text-[#FE4D01] text-[12px] lg:text-[14px] font-[700] ">
          BRIEF EVENT DETAILS
        </p>
        <p className=" font-[400] text-[16px] lg:text-[32px] text-[#ffffff]">
          Be In The Know with Major Details
        </p>
      </div>

      <div className=" grid sm:grid-cols-2 sm:mx-10 md:grid-cols-4 gap-16 md:gap-0 py-20">
        <div className="" data-aos="fade-up">
          <EventCard
            img={What}
            title="What?"
            text="The PushUp-Mania24  is a challenge that is majorly created to create awareness on the increase in maternity and child mortality rate in Nigeria."
          />
        </div>
        <div className="" data-aos="fade-down">
          <EventCard
            img={When}
            title="When?"
            text="The PushUp-Mania24 will take place on January 12th—mark your calendars for an unforgettable experience!"
          />
        </div>
        <div className="" data-aos="fade-right">
          <EventCard
            img={Where}
            title="Where?"
            text="This event will take place at Pure Fitness Gym, Marwa-Lekki, Lagos. There will also be an active 24/7 livestream on every social media channel"
          />
        </div>
        <div className="" data-aos="fade-left">
          <EventCard
            img={Why}
            title="Why?"
            text="Beyond the physical feat, this attempt holds personal significance—a testament to a relentless determination and an attempt to create awareness "
          />
        </div>
      </div>

      <div className="">
        <p className=" text-center text-[#ffffff] font-[500] text-[20px] lg:text-[32px]">
          The <span className=" text-[#FE4D01]">PushUp-Mania24</span> Story
        </p>
        <p className=" font-[400] text-[14px] lg:text-[20px] max-w-[1200px] mx-auto text-center text-[#ACACAC]">
          {" "}
          On January 12, 2024, Isaac Matui Thomas, 32yrs old, a fitness
          enthusiast, boxing prospect and screenwriter based out of Lagos,
          Nigeria will be simultaneously attempting the following records for
          Guinness World Records (GWR):
        </p>
        <div className=" flex justify-between items-center my-10 mx-10 2xl:mx-40 text-center">
          <div className=" w-[30px] lg:max-w-[70px]">
            <img src={handLeft} alt="" />
          </div>
          <div className="">
            <p
              className=" text-[#ffffff] text-[14px] lg:text-[40px] leading-[23px] lg:leading-[66px]"
              data-aos="fade-left"
            >
              Most Push Ups in <span className=" text-[#FE4D01]">1hr</span>{" "}
              (current record 3,347)
            </p>
            <p
              className=" text-[#ffffff] text-[14px] lg:text-[40px] leading-[23px] lg:leading-[66px]"
              data-aos="fade-down"
            >
              Most Push Ups in <span className=" text-[#FE4D01]">8hrs</span>{" "}
              (current record 14,444)
            </p>
            <p
              className=" text-[#ffffff] text-[14px] lg:text-[40px] leading-[23px] lg:leading-[66px]"
              data-aos="fade-up"
            >
              Most Push Ups in <span className=" text-[#FE4D01]">12hrs</span>{" "}
              (current record 20,085)
            </p>
            <p
              className=" text-[#ffffff] text-[14px] lg:text-[40px] leading-[23px] lg:leading-[66px]"
              data-aos="fade-right"
            >
              Most Push Ups in <span className=" text-[#FE4D01]">24hrs</span>{" "}
              (current record 46,001)
            </p>
          </div>
          <div className="w-[30px] lg:max-w-[70px]">
            <img src={handright} alt="" />
          </div>
        </div>
        <div className=" my-20 mx-10 2xl:mx-40">
          <p
            className=" font-[500] text-[32px] leading-[46px] text-[#ffffff] text-center"
            data-aos="fade-down"
          >
            Mission and Motivation{" "}
          </p>

          <img
            src={womanBaby}
            className=" hidden md:block w-full"
            alt=""
            data-aos="fade-up"
          />
          <img
            src={womanBaby2}
            className=" w-full block md:hidden"
            alt=""
            data-aos="fade-up"
          />
          <p
            className=" font-[400] text-[16px] lg:text-[20px] leading-[30px] mt-5  lg:leading-[46px] text-[#ffffff]"
            data-aos="fade-down"
          >
            Focused on enhancing infant and maternal health in Nigeria, the
            initiative involves strategic partnerships with NGOs, government
            agencies, and private foundations. Rooted in practical experience
            gained during an internship with TSHIP in Bauchi and Sokoto under
            USAID sponsorship, active collaboration across departments provided
            valuable insights into addressing the persistent challenges of
            infant and maternal mortality.
          </p>

          <p
            className=" font-[400] text-[16px] lg:text-[20px] leading-[30px] mt-5  lg:leading-[46px] text-[#ffffff]"
            data-aos="fade-up"
          >
            This hands-on approach included on-the-ground data collection
            through community outreach, awareness campaigns, and the
            distribution of vital resources to expectant mothers. Contributions
            were made to frameworks for Integrated Community Case Management of
            Childhood Illnesses (ICCM) and Integrated Management of Childhood
            Illnesses in Nigeria (IMCN), emphasizing a holistic approach to
            child health. Supported by statistical evidence from sources like
            Statista and UNICEF, the initiative aims to raise awareness about
            infant and maternal mortality as a national and sub-Saharan Africa
            concern. The strategic choice of Lagos as the focal point leverages
            its central position in Nigeria, offering extensive media coverage
            and access to essential facilities, with the goal of generating
            unprecedented attention and making these critical issues a societal
            priority.
          </p>
        </div>{" "}
        {/* <StoryCard
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
        /> */}
      </div>
      {/* <div className="">
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
      </div> */}
    </div>
  );
};

export default EventDetails;
