import React, { useState } from "react";
import Calendar from "../assets/calendar.png";
import Clock from "../assets/clock.png";
import map from "../assets/map.png";
import info from "../assets/info.png";
import thumb from "../assets/thumb.png";
import computer from "../assets/computer.png";
import camera from "../assets/camera.png";
import hourGlass from "../assets/hourGlass.png";
import fitness from "../assets/fitness.png";
import fitness2 from "../assets/fitness2.png";
import trivia from "../assets/trivia.png";
import Youtube from "../assets/Youtube.png";
import Tw from "../assets/Tw.png";
import Fb from "../assets/Fb.png";
import Insta from "../assets/Insta.png";
import Logo2 from "../assets/LOGO3.png";

import FAQ from "./FAQ";
import Modal from "./Modal";
const EventContent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSuccessModalOpan, setSuccessModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };
  const openModal2 = () => {
    setIsModalOpen(false);
    setSuccessModalOpen(true);
  };
  const closeModal2 = () => {
    setSuccessModalOpen(false);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="">
      <div className=" mx-5 2xl:mx-40  my-20">
        <div className=" border-2 px-5 py-5 rounded-lg my-10">
          <div className=" ">
            <p className="inline rounded-lg text-[#FE4D01] text-[14px] px-5 py-2 bg-[#FFF0BB]">
              Upcoming Events
            </p>
            <div className=" flex flex-col justify-center items-center">
              <p className=" font-[400] text-[16px] lg:text-[24px] text-[#333333] py-5">
                Get ready to witness resilience and grit in real time!
              </p>
              <p className=" font-[500] text-[16px] lg:text-[32px] text-[#FE4D01] py-10">
                {" "}
                PushUp-Mania24{" "}
              </p>
              <div className="   py-5 flex items-center gap-5">
                <div className=" flex flex-col items-center">
                  <p className=" text-[16px] lg:text-[55px] font-Orbitron font-[400] text-[#FE4D01] ">
                    122
                  </p>
                  <p className=" text-[#616161] text-[20px]">Days</p>
                </div>
                <p>:</p>
                <div className=" flex flex-col items-center">
                  <p className=" text-[16px] lg:text-[55px] font-Orbitron font-[400] text-[#FE4D01]">
                    122
                  </p>
                  <p className=" text-[#616161] text-[20px]">Hours</p>
                </div>
                <p>:</p>

                <div className=" flex flex-col items-center">
                  <p className=" text-[16px] lg:text-[55px] font-Orbitron font-[400] text-[#FE4D01]">
                    122
                  </p>
                  <p className=" text-[#616161] text-[20px]">Minutes</p>
                </div>
                <p>:</p>

                <div className=" flex flex-col items-center">
                  <p className=" text-[16px] lg:text-[55px] font-Orbitron font-[400] text-[#FE4D01]">
                    122
                  </p>
                  <p className=" text-[#616161] text-[20px]">Seconds</p>
                </div>
              </div>

              <p
                className="inline cursor-pointer rounded-lg text-[#ffffff] text-[16px] font-[700] px-5 py-2 bg-[#FE4D01]"
                onClick={openModal}
              >
                Reserve a Slot
              </p>
            </div>
          </div>
        </div>
        {isModalOpen && (
          <Modal isOpen={isModalOpen} onClose={closeModal} className="">
            <div className=" flex flex-col justify-center items-center text-center ">
              <p className="font-[400] text-[14px] lg:text-[24px]">
                Reserve a slot{" "}
              </p>
              <img src={Logo2} alt="" className=" w-[200px] py-5" />

              <div className="   py-5 flex items-center gap-5">
                <div className=" flex flex-col items-center">
                  <p className=" text-[14px] lg:text-[32px] font-Orbitron font-[400] text-[#FE4D01] ">
                    122
                  </p>
                  <p className=" text-[#616161] text-[12px] lg:text-[20px]">
                    Days
                  </p>
                </div>
                <p>:</p>
                <div className=" flex flex-col items-center">
                  <p className=" text-[14px] lg:text-[32px] font-Orbitron font-[400] text-[#FE4D01]">
                    122
                  </p>
                  <p className=" text-[#616161] text-[12px] lg:text-[20px]">
                    Hours
                  </p>
                </div>
                <p>:</p>

                <div className=" flex flex-col items-center">
                  <p className=" text-[14px] lg:text-[32px] font-Orbitron font-[400] text-[#FE4D01]">
                    122
                  </p>
                  <p className=" text-[#616161] text-[12px] lg:text-[20px]">
                    Minutes
                  </p>
                </div>
                <p>:</p>

                <div className=" flex flex-col items-center">
                  <p className=" text-[14px] lg:text-[32px] font-Orbitron font-[400] text-[#FE4D01]">
                    122
                  </p>
                  <p className=" text-[#616161] text-[12px] lg:text-[20px]">
                    Seconds
                  </p>
                </div>
              </div>
            </div>

            <div className=" ">
              <div className=" w-full  border  flex justify-center items-center gap-5">
                <div className="  flex items-center gap-2 lg:gap-5 py-5">
                  <img src={Calendar} alt="" className=" w-[16px] h-[16px]" />
                  <p className=" text-[#5E5E5E] font-[400] text-[14px] lg:text-[16px]">
                    12th January, 2024
                  </p>
                </div>

                <div className="  flex items-center gap-2 lg:gap-5 py-5">
                  <img src={Clock} alt="" className=" w-[16px] h-[16px]" />
                  <p className=" text-[#5E5E5E] font-[400] text-[14px] lg:text-[16px]">
                    07:00 AM Prompt
                  </p>
                </div>
                <div className="  flex items-center gap-2 lg:gap-5 py-5">
                  <img src={map} alt="" className=" w-[16px] h-[16px]" />
                  <p className=" text-[#5E5E5E] font-[400] text-[14px] lg:text-[16px]">
                    Lekki Lagos, Nigeria
                  </p>
                </div>
                <div className="  flex items-center gap-2 lg:gap-5 py-5">
                  <img src={computer} alt="" className=" w-[16px] h-[16px]" />
                  <p className=" text-[#5E5E5E] font-[400] text-[14px] lg:text-[16px]">
                    PushUp-Mania24 (Youtube)
                  </p>
                </div>
              </div>

              <div className="">
                <form action="">
                  <div className=" my-5">
                    <label htmlFor="" className="">
                      Full Name
                    </label>
                    <input
                      type="text"
                      className=" w-full border py-2 px-3 my-2 rounded-lg"
                      placeholder="Enter your Full Name"
                    />
                  </div>

                  <div className=" my-5">
                    <label htmlFor="" className="">
                      Email address
                    </label>
                    <input
                      type="email"
                      className=" w-full border py-2 px-3 my-2 rounded-lg"
                      placeholder="Enter your Email address"
                    />
                  </div>

                  <div className=" my-5">
                    <label htmlFor="" className="">
                      Phone number
                    </label>
                    <input
                      type="phone"
                      className=" w-full border py-2 px-3 my-2 rounded-lg"
                      placeholder="Enter Phone number"
                    />
                  </div>
                </form>

                <div className=" flex items-center justify-center">
                  <button
                    className=" bg-[#FE4D01] rounded font-[400] text-[16px] text-[#ffffff] py-2 px-10"
                    onClick={openModal2}
                  >
                    Submit Rsvp
                  </button>
                </div>
              </div>
            </div>
          </Modal>
        )}

        {isSuccessModalOpan && (
          <Modal isOpen={openModal2} onClose={closeModal2} className="">
            <div className=" flex flex-col justify-center items-center text-center ">
              <p className="font-[400] text-[14px] lg:text-[24px]">
                Reservation Confirmed!{" "}
              </p>
              <img src={Logo2} alt="" className=" w-[200px] py-5" />
              <p className=" font-[400] text-[14px] lg:text-[18px]  text-[#333333]">
                Thank you for reserving your slot.
              </p>
              <p className=" font-[400] text-[14px] lg:text-[24px] text-[#333333] py-10">
                You are all set to attend the PushUp-
                <span className=" text-[#FE4D01]">Mania24</span> event on 12th
                December 2024.
              </p>
              <p className=" font-[400] text-[12px] lg:text-[14px]  text-[#616161] py-5">
                An email confirmation has been sent to celesteyinou@gmail.com
                with further event details
              </p>
              <div className=" w-full  border  flex justify-center items-center gap-5">
                <div className="  flex items-center gap-2 lg:gap-5 py-5">
                  <img src={Calendar} alt="" className=" w-[16px] h-[16px]" />
                  <p className=" text-[#5E5E5E] font-[400] text-[14px] lg:text-[16px]">
                    12th January, 2024
                  </p>
                </div>

                <div className="  flex items-center gap-2 lg:gap-5 py-5">
                  <img src={Clock} alt="" className=" w-[16px] h-[16px]" />
                  <p className=" text-[#5E5E5E] font-[400] text-[14px] lg:text-[16px]">
                    07:00 AM Prompt
                  </p>
                </div>
                <div className="  flex items-center gap-2 lg:gap-5 py-5">
                  <img src={map} alt="" className=" w-[16px] h-[16px]" />
                  <p className=" text-[#5E5E5E] font-[400] text-[14px] lg:text-[16px]">
                    Lekki Lagos, Nigeria
                  </p>
                </div>
                <div className="  flex items-center gap-2 lg:gap-5 py-5">
                  <img src={computer} alt="" className=" w-[16px] h-[16px]" />
                  <p className=" text-[#5E5E5E] font-[400] text-[14px] lg:text-[16px]">
                    PushUp-Mania24 (Youtube)
                  </p>
                </div>
              </div>

              <div className=" flex items-center gap-2 lg:gap-5 py-10">
                <img src={Fb} alt="" className="w-[36px] h-[36px]" />
                <img src={Tw} alt="" className="w-[36px] h-[36px]" />
                <img src={Insta} alt="" className="w-[36px] h-[36px]" />
                <img src={Youtube} alt="" className="w-[36px] h-[36px]" />
              </div>
            </div>
            <div className=" flex items-center justify-between">
              <img src={fitness2} alt="" />
              <img src={fitness} alt="" />
            </div>
          </Modal>
        )}

        <div className="border-2 px-5 lg:px-10 py-5 rounded-lg">
          <div className="">
            <div className=" border-b-2 flex gap-5 lg:gap-10 py-5">
              <img src={Calendar} alt="" />
              <p className=" text-[#5E5E5E] font-[400] text-[16px] lg:text-[20px]">
                12th January, 2024
              </p>
            </div>

            <div className=" border-b-2 flex gap-5 lg:gap-10 py-5">
              <img src={Clock} alt="" />
              <p className=" text-[#5E5E5E] font-[400] text-[16px] lg:text-[20px]">
                07:00 AM Prompt
              </p>
            </div>
            <div className=" border-b-2 flex gap-5 lg:gap-10 py-5">
              <img src={map} alt="" />
              <p className=" text-[#5E5E5E] font-[400] text-[16px] lg:text-[20px]">
                Lekki Lagos, Nigeria
              </p>
            </div>

            <div className="  flex gap-5 lg:gap-10 py-5">
              <img src={info} alt="" className=" w-[26px] h-[26px]" />
              <p className=" text-[#5E5E5E] font-[400] text-[16px] lg:text-[20px]">
                The PushUp- <span className=" text-[#FE4D01]">Mania24</span> is
                a challenge that is majorly created to create awareness on the
                increase in maternity and child mortality frate in Nigeria.
                Lorem ipsum dolor sit amet consectetur. Nibh pulvinar lectus vel
                semper condimentum. Sit dolor at egestas in nulla. Porttitor
                lacus pellentesque id suspendisse tellus. Faucibus ac vehicula
                neque nisl aliquam. Arcu eget fermentum pharetra ultricies arcu
                eget. Pellentesque rutrum eget enim consequat quam id. In et
                dictum eu ut. Id amet metus sit lectus mauris tortor bibendum
                nunc. Purus vitae mauris iaculis quam commodo nec viverra
                malesuada. Ac neque at nibh sed donec. Eleifend viverra volutpat
                et amet vitae mattis felis.
              </p>
            </div>

            <div className=" grid lg:grid-cols-3 items-center">
              <div className="  flex gap-5 lg:gap-10 py-5">
                <img src={thumb} alt="" />
                <p className=" text-[#5E5E5E] font-[400] text-[16px] lg:text-[20px]">
                  Direct interaction with the instructor
                </p>
              </div>
              <div className="  flex gap-5 lg:gap-10 py-5">
                <img src={computer} alt="" />
                <p className=" text-[#5E5E5E] font-[400] text-[16px] lg:text-[20px]">
                  Access on mobile and web
                </p>
              </div>
              <div className="  flex gap-5 lg:gap-10 py-5">
                <img src={computer} alt="" />
                <p className=" text-[#5E5E5E] font-[400] text-[16px] lg:text-[20px]">
                  Access on mobile and web
                </p>
              </div>
              <div className="  flex gap-5 lg:gap-10 py-5">
                <img src={camera} alt="" />
                <p className=" text-[#5E5E5E] font-[400] text-[16px] lg:text-[20px]">
                  Session recording after the workshop
                </p>
              </div>
              <div className="  flex gap-5 lg:gap-10 py-5">
                <img src={hourGlass} alt="" />
                <p className=" text-[#5E5E5E] font-[400] text-[16px] lg:text-[20px]">
                  1 hour live session
                </p>
              </div>
              <div className="  flex gap-5 lg:gap-10 py-5">
                <img src={hourGlass} alt="" />
                <p className=" text-[#5E5E5E] font-[400] text-[16px] lg:text-[20px]">
                  1 hour live session
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className=" my-10">
          <img src={trivia} alt="" />
        </div>

        <FAQ />

        <div className="">
          <p className=" font-[400] text-[20px] py-10">
            Don&apos;t see the answer you&apos;re looking for?{" "}
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
        <div className=" mx-10 2xl:mx-40 py-5">
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
    </div>
  );
};

export default EventContent;
