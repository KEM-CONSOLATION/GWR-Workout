import React from "react";
import FAQHero from "../Components/FAQHero";
import FAQ from "../Components/FAQ";
import trivia from "../assets/trivia.png";
import Youtube from "../assets/Youtube.png";
import Tw from "../assets/Tw.png";
import Fb from "../assets/Fb.png";
import Insta from "../assets/Insta.png";
import Footer from "../Components/Footer";
const FAQPage = () => {
  return (
    <div>
      <FAQHero />
      <FAQ />
      <div className="mx-10 2xl:mx-40  my-10">
        <img src={trivia} alt="" className=" w-full" />

        <div className="">
          <p className=" font-[400] text-[20px] py-10">
            Don't see the answer you're looking for?{" "}
            <span className=" font-[600] text-[#616161]">
              Post Your Question
            </span>
            . You can also leave messages, and words of encouragement in a way
            to show solidarity for this cause.{" "}
          </p>

          <div className=" w-full">
            <form action="">
              <textarea
                placeholder="please submit your questions"
                name=""
                id=""
                cols="30"
                rows="10"
                className=" w-full px-5 py-5 border-2 mb-5 rounded-md border-[#9B9B9B]"
              ></textarea>
              <button className=" bg-[#FE4D01] rounded font-[400] text-[16px] text-[#ffffff] py-2 px-10">
                Post
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className=" bg-[#FEDFD1]">
        <div className=" mx-10 2xl:mx-40 py-10">
          <p className=" font-[400] text-[14px] lg:text-[20px] text-[#616161] leading-[26px] lg:leading-[38px]">
            Stay connected on these social media platforms to get live updates
            and exclusive content, behind-the-scenes moments, real-time event
            coverage, event highlights and videos.
          </p>
          <div className=" flex items-center gap-2 lg:gap-5 py-10">
            <img src={Fb} alt="" className="w-[50px] lg:w-[80px]" />
            <img src={Tw} alt="" className="w-[50px] lg:w-[80px]" />
            <img src={Insta} alt="" className="w-[50px] lg:w-[80px]" />
            <img src={Youtube} alt="" className="w-[50px] lg:w-[80px]" />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default FAQPage;
