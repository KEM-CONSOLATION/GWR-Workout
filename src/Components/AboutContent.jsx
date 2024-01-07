import React from "react";
import handLeft from "../assets/handLeft.png";
import handright from "../assets/handright.png";
import Chart from "../assets/Chart.png";
import Table from "../assets/Table.png";
import Woman from "../assets/Woman.png";
import { Link } from "react-router-dom";
const AboutContent = () => {
  return (
    <div className="">
      <div className=" mx-5 2xl:mx-40">
        <p className=" font-[400] text-[16px] lg:text-[20px] leading-[30px] mt-5 lg:mt-0 lg:leading-[66px] text-[#616161]">
          My name is Isaac Matui Thomas, 32yrs old, a fitness enthusiast, boxing
          prospect and screenwriter based out of Lagos, Nigeria. <br /> On
          January 12, 2024, I’m simultaneously attempting the following records
          for Guinness World Records (GWR):
        </p>

        <div className=" flex justify-between items-center my-20 text-center">
          <div className=" w-[30px] lg:max-w-[70px]">
            <img src={handLeft} alt="" />
          </div>
          <div className="">
            <p className=" text-[#616161] text-[14px] lg:text-[40px] leading-[23px] lg:leading-[66px]">
              Most Push Ups in <span className=" text-[#FE4D01]">1hr</span>{" "}
              (current record 3,347)
            </p>
            <p className=" text-[#616161] text-[14px] lg:text-[40px] leading-[23px] lg:leading-[66px]">
              Most Push Ups in <span className=" text-[#FE4D01]">8hrs</span>{" "}
              (current record 14,444)
            </p>
            <p className=" text-[#616161] text-[14px] lg:text-[40px] leading-[23px] lg:leading-[66px]">
              Most Push Ups in <span className=" text-[#FE4D01]">12hrs</span>{" "}
              (current record 20,085)
            </p>
            <p className=" text-[#616161] text-[14px] lg:text-[40px] leading-[23px] lg:leading-[66px]">
              Most Push Ups in <span className=" text-[#FE4D01]">24hrs</span>{" "}
              (current record 46,001)
            </p>
          </div>
          <div className="w-[30px] lg:max-w-[70px]">
            <img src={handright} alt="" />
          </div>
        </div>

        <div className="">
          <p className="font-[400] text-[16px] lg:text-[20px] leading-[30px] mt-5  lg:leading-[66px] text-[#616161]">
            Driven by an unyielding passion for [relevant passion or cause],
            Isaac saw this challenge as an opportunity to push boundaries.
            Beyond the physical feat, this attempt holds personal significance—a
            testament to his relentless determination and an attempt to create
            awareness on the issue of infant and maternal mortality in Nigeria
            especially in Northern Nigeria (consisting of 19 States).
          </p>
          <div className=" my-20">
            <p className=" font-[500] text-[32px] leading-[46px] text-[#333333] text-center">
              Mission and Motivation{" "}
            </p>
            <p className=" font-[400] text-[16px] lg:text-[20px] leading-[30px] mt-5  lg:leading-[46px] text-[#616161]">
              Partner with local and international NGOs, Government agencies and
              private foundations to promote infant and maternal health in
              Nigeria; creating awareness on and working to decrease infant and
              maternal mortality rates in Nigeria.
            </p>

            <p className=" font-[400] text-[16px] lg:text-[20px] leading-[30px] mt-5  lg:leading-[46px] text-[#616161]">
              The purpose of this attempt is to create awareness on the issue of
              infant and maternal mortality in Nigeria especially in Northern
              Nigeria (consisting of 19 States), although it could well be said
              that it is a Nigerian as well as a sub-Sahara Africa problem. This
              is not a subject given sufficient attention, and I know that very
              well because I did an internship program in 2014 with Targeted
              States High Impact Project (TSHIP) under the sponsorship of USAID
              in the states of Bauchi and Sokoto.
            </p>

            <p className=" font-[400] text-[16px] lg:text-[20px] leading-[30px] mt-5  lg:leading-[46px] text-[#616161]">
              During my Internship, beginning on 5th February 2014 lasting to
              August 1st 2014, I served with three departments that worked
              closely together: Child Health Team under the leadership of Dr.
              Amos Paul Bassi, a professor of community medicine, Maternal
              Health Team under the now late Dr. ML Hadejia and also the
              Knowledge Management and Communication (KM and C) led by Mr. Dagan
              Gan. The entire TSHIP project was then led by Dr. Nosa Orobaton.
            </p>

            <p className=" font-[400] text-[16px] lg:text-[20px] leading-[30px] mt-5  lg:leading-[46px] text-[#616161]">
              I wasn’t just aware of the statistics on paper, I gathered data
              directly from the field, through community outreach program from
              Routine Immunization (RI), awareness campaigns and subsequent
              distribution of Misoprostol and Chlorhexidine (To expectant
              mothers) so I’m keenly aware of the extent of the problem. I also
              worked closely with Dr. Bassi in contributing to the framework for
              the implementation of ICCM (Integrated Community Case Management
              of Childhood Illnesses in Nigeria) and IMCN (Integrated Management
              of Childhood Illnesses in Nigeria) which were then in the early
              stages.
            </p>
            <p className=" font-[400] text-[16px] lg:text-[20px] leading-[30px] mt-5 lg:mt-5 lg:leading-[46px] text-[#616161] ">
              Below are some of the statistics captured by some agencies:
            </p>
            <p className="underline font-[400] text-[16px] lg:text-[20px] leading-[30px] mt-5 lg:mt-0 lg:leading-[46px] text-[#616161]">
              <Link
                to="https://www.statista.com/statistics/807079/infant-mortality-in-nigeria/"
                target="_blank"
              >
                {" "}
                https://www.statista.com/statistics/807079/infant-mortality-in-nigeria/{" "}
              </Link>
            </p>
            <p className="underline font-[400] text-[16px] lg:text-[20px] leading-[30px] mt-5 lg:mt-0 lg:leading-[46px] text-[#616161]">
              <Link
                to="https://www.unicef.org/nigeria/media/1636/file/Nigeria-equity-profile-health.pdf"
                target="_blank"
              >
                https://www.unicef.org/nigeria/media/1636/file/Nigeria-equity-profile-health.pdf{" "}
              </Link>
            </p>
            <p className=" font-[400] text-[16px] lg:text-[20px] leading-[30px] mt-5 lg:leading-[46px] text-[#616161]">
              {" "}
              The reason I’m choosing to make this attempt in the city of Lagos
              and not in any of the Northern states is the centrality of Lagos
              in the scheme of things in Nigeria- media coverage, population,
              right facilities, few of which are available anywhere else in the
              country. No one in the country has ever attempted this, so I’m
              confident that my attempt will generate the media coverage
              necessary for the issues I’m advocating for to be a topic of
              importance even if it’s for a day or two.
            </p>
          </div>{" "}
          <div className=" my-20">
            <p className=" font-[500] text-[32px] leading-[46px] text-[#333333] text-center">
              Progress and Preparation{" "}
            </p>

            <p className=" font-[400] text-[16px] lg:text-[20px] leading-[30px] mt-5 lg:mt- lg:leading-[46px] text-[#616161]">
              Training Progress
            </p>
            <p className=" font-[400] text-[16px] lg:text-[20px] leading-[30px] mt-5 lg:mt- lg:leading-[46px] text-[#616161]">
              The journey towards breaking records has been marked by
              significant strides. From day one to the current phase, each
              session has been a testament to his dedication. Witness the
              progress graph below, illustrating the incremental growth and
              effort invested in reaching peak performance.
            </p>

            <div className=" max-w-5xl mx-auto my-5">
              <img src={Chart} alt="" />
            </div>
          </div>{" "}
          <div className=" my-20">
            <p className=" font-[400] text-[16px] lg:text-[20px] leading-[30px] mt-5 lg:mt- lg:leading-[46px] text-[#616161]">
              Training Regimen
            </p>
            <p className=" font-[400] text-[16px] lg:text-[20px] leading-[30px] mt-5 lg:mt- lg:leading-[46px] text-[#616161]">
              Isaac’s training regimen is a meticulous blend of [mention
              training methods or disciplines] designed to enhance endurance,
              strength, and agility. With sessions lasting [mention duration]
              and focusing on [mention specific exercises or techniques], every
              minute contributes to his pursuit of excellence.
            </p>
            <div className=" max-w-5xl mx-auto my-10">
              <img src={Table} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="  ">
        <p className=" font-[500] text-[16px] lg:text-[32px] leading-[30px] mt-5 lg:my-10 text-center lg:leading-[46px] text-[#333333]">
          Training Regimen
        </p>
        <img src={Woman} alt="" className=" w-full mx-auto" />
      </div>
      <div className=" my-20 mx-10 2xl:mx-40">
        <p className=" font-[500] text-[16px] lg:text-[24px] leading-[46px] text-[#333333] text-start">
          Impact on Infant and Maternal Mortality:
        </p>
        <p className=" font-[400] text-[14px] lg:text-[20px] leading-[30px] mt-5 lg:mt- lg:leading-[46px] text-[#616161]">
          Breaking these records isn&apos;t solely about personal achievements.
          It&apos;s a platform—a voice to amplify critical issues. With Nigeria
          grappling with alarming rates of infant and maternal mortality, this
          attempt strives to spotlight these challenges, urging conversations
          and action towards lasting solutions. Nigeria faces staggering rates
          of infant and maternal mortality, with [statistics or figures]
          highlighting the urgency of the situation. Limited access to quality
          healthcare, inadequate resources, and various socio-economic factors
          contribute to this pressing issue. This attempt aims to shine a
          spotlight on these challenges, urging collective action for change.
        </p>
        <p className=" font-[400] text-[14px] lg:text-[20px] leading-[30px] mt-5  lg:leading-[46px] text-[#616161]">
          Our primary goal extends beyond setting a record. It&apos;s about
          leveraging this platform to ignite conversations, raise awareness, and
          advocate for improved maternal and infant healthcare. Through this
          attempt, we aspire to catalyze a movement that drives impactful
          change, saving lives and securing a healthier future for Nigerian
          families.
        </p>

        <p className=" font-[500] text-[16px] lg:text-[24px] leading-[46px] text-[#333333] text-start pt-5">
          Personal Connection to the Cause:
        </p>
        <p className=" font-[400] text-[14px] lg:text-[20px] leading-[30px] mt-5  lg:leading-[46px] text-[#616161]">
          For Isaac Matui Thomas, this cause hits close to home. He has
          witnessed firsthand the struggles faced by mothers and infants. The
          desire to create tangible change and ensure a brighter, healthier
          future for families fuels his determination in this endeavor.
        </p>

        <p className=" font-[500] text-[16px] lg:text-[24px] leading-[46px] text-[#333333] text-start pt-5">
          Community and Awareness Building:
        </p>
        <p className=" font-[400] text-[14px] lg:text-[20px] leading-[30px] mt-5  lg:leading-[46px] text-[#616161]">
          Through this record-breaking attempt, we aim to harness attention,
          initiating conversations, fostering support networks, and mobilizing
          resources. This isn&apos;t just about achieving a record; it&apos;s
          about catalyzing a movement—a unified effort towards improving
          maternal and infant healthcare in Nigeria
        </p>

        <p className=" font-[500] text-[16px] lg:text-[24px] leading-[46px] text-[#333333] text-start pt-5">
          Call for Partnerships and Sponsorships
        </p>
        <p className=" font-[400] text-[14px] lg:text-[20px] leading-[30px] mt-5  lg:leading-[46px] text-[#616161]">
          We invite like-minded organizations, philanthropists, and individuals
          passionate about healthcare and social impact to join hands with us.
          Your partnership or sponsorship will not only support the event but
          will also contribute directly to initiatives addressing infant and
          maternal mortality in Nigeria. Together, we can make a tangible
          difference and save lives. Contact us to explore partnership
          opportunities and become a part of this impactful journey.
        </p>
      </div>{" "}
    </div>
  );
};

export default AboutContent;
