import type { NextPage } from "next";
import FrameComponent1 from "./frame-component1";
import Background from "./background";
import Getintouchwith from "./getintouchwith";

const IndustryStandard: NextPage = () => {
  return (
    <section className="w-[1240px] flex flex-col items-center justify-start py-0 px-5 box-border gap-[50px] max-w-full shrink-0 text-left text-mini text-gray-200 font-nunito mq850:gap-[50px]">
      <FrameComponent1
        icon="/icon1.svg"
        contactUs="01 . Contact Us"
        letsBuildSomethingAwesome="Let’s build something awesome together"
      />
      <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[30px] max-w-full text-6xl">
        <Background contact="Contact" vector="/vector-11.svg" email="Email" />
        <Background
          contact="Call"
          vector="/vector-21.svg"
          email="Phone"
          propWidth="89px"
          propTextAlign="center"
          propGap="13px"
          propWidth1="25px"
          propBorderRadius="unset"
        />
        <Background
          contact="Office"
          vector="/icon-111.svg"
          email="Location"
          propWidth="106px"
          propTextAlign="center"
          propGap="19px"
          propWidth1="19px"
          propBorderRadius="unset"
        />
      </div>
      <div className="self-stretch rounded-mini [background:linear-gradient(151.16deg,_#fff8f8,_#f5f7ff)] flex flex-col items-center justify-start py-[97px] px-5 box-border gap-[50px] max-w-full text-xl mq1225:pt-[63px] mq1225:pb-[63px] mq1225:box-border mq450:pt-[41px] mq450:pb-[41px] mq450:box-border mq850:gap-[50px]">
        <div className="w-[1000px] flex flex-col items-start justify-start gap-[15px] max-w-full">
          <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[50px] max-w-full mq850:gap-[50px]">
            <div className="flex-1 flex flex-col items-start justify-start gap-[20px] min-w-[309px] max-w-full">
              <Getintouchwith
                fullName="Full name *"
                johnDavidPlaceholder="John David"
              />
              <Getintouchwith
                fullName="Company *"
                johnDavidPlaceholder="yourcompany name here"
                propWidth="207px"
              />
              <div className="relative leading-[160%] capitalize font-semibold mq450:text-base mq450:leading-[26px]">
                Message *
              </div>
            </div>
            <div className="flex-1 flex flex-col items-start justify-start gap-[20px] min-w-[309px] max-w-full">
              <Getintouchwith
                fullName="Your email *"
                johnDavidPlaceholder="example@yourmail.com"
                propWidth="195px"
              />
              <div className="self-stretch flex flex-col items-start justify-start gap-[15px] max-w-full">
                <div className="relative leading-[160%] capitalize font-semibold mq450:text-base mq450:leading-[26px]">
                  Subject *
                </div>
                <div className="self-stretch rounded-6xs bg-white box-border flex flex-row items-center justify-start pt-[17px] px-[31px] pb-[18px] max-w-full whitespace-nowrap text-lg text-dimgray-700 border-[1px] border-solid border-gainsboro-400">
                  <div className="h-16 w-[475px] relative rounded-6xs bg-white box-border hidden max-w-full border-[1px] border-solid border-gainsboro-400" />
                  <div className="relative leading-[160%] capitalize font-medium z-[1]">
                    How can we Help
                  </div>
                </div>
              </div>
            </div>
          </div>
          <textarea
            className="bg-white h-[301px] w-auto [outline:none] self-stretch rounded-6xs box-border flex flex-row items-start justify-start p-[31px] font-nunito font-medium text-lg text-dimgray-700 border-[1px] border-solid border-gainsboro-400"
            placeholder="Hello there,I would like to talk about how to..."
            rows={15}
            cols={50}
          />
        </div>
        <button className="cursor-pointer [border:none] py-4 pr-[35px] pl-[38px] bg-gray-200 rounded-6xs flex flex-row items-center justify-center whitespace-nowrap hover:bg-dimgray-500">
          <div className="relative text-lg leading-[160%] capitalize font-medium font-nunito text-white text-left">
            Sent Message
          </div>
        </button>
      </div>
    </section>
  );
};

export default IndustryStandard;
