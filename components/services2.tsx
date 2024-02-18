import type { NextPage } from "next";
import { useCallback } from "react";
import IconPages from "./icon-pages";
import TextPlan from "./text-plan";
import { useRouter } from "next/router";

const Services2: NextPage = () => {
  const router = useRouter();

  const onButtonClick = useCallback(() => {
    router.push("/contact-us");
  }, [router]);

  return (
    <section className="self-stretch bg-gray-200 flex flex-col items-center justify-start py-[150px] px-5 box-border gap-[50px] max-w-full text-left text-mini text-gold font-noto-sans mq450:pt-[41px] mq450:pb-[41px] mq450:box-border mq850:gap-[50px] mq850:pt-[63px] mq850:pb-[63px] mq850:box-border mq1225:pt-[97px] mq1225:pb-[97px] mq1225:box-border">
      <img
        className="w-[1920px] h-[1600px] relative hidden max-w-full"
        alt=""
        src="/background5.svg"
      />
      <IconPages
        icon="/icon.svg"
        ourServices="01 . our services"
        weHaveExtensiveExperience="We have extensive experience in"
        socialMediaMarketing="Social Media Marketing"
      />
      <div className="w-[1200px] flex flex-row flex-wrap items-start justify-center gap-[30px_25px] min-h-[890px] max-w-full text-center text-6xl text-white font-nunito">
        <TextPlan icon="/icon-113@2x.png" contentStrategy="Content Strategy" />
        <TextPlan icon="/icon-24@2x.png" contentStrategy="Brand Awareness" />
        <TextPlan icon="/icon-33@2x.png" contentStrategy="Video Marketing" />
        <TextPlan
          icon="/icon-43@2x.png"
          contentStrategy="Social Paid Advertising"
        />
        <TextPlan icon="/icon-52@2x.png" contentStrategy="Social Audits" />
        <div className="w-[380px] rounded-11xl [background:linear-gradient(180deg,_#36363e,_#292930)] box-border flex flex-row items-center justify-center py-[49px] px-[39px] max-w-full border-[1px] border-solid border-darkslategray-200 mq450:pt-8 mq450:pb-8 mq450:box-border">
          <div className="flex-1 flex flex-col items-center justify-start gap-[25px]">
            <div className="w-[153px] h-[153px] relative">
              <div className="absolute top-[0px] left-[0.1px] rounded-[50%] bg-gray-200 w-full h-full" />
              <img
                className="absolute top-[31.5px] left-[31.5px] w-[90px] h-[90px] object-cover z-[1]"
                alt=""
                src="/icon-62@2x.png"
              />
            </div>
            <div className="self-stretch flex flex-row items-start justify-start py-0 px-0">
              <div className="flex-1 flex flex-col items-start justify-start gap-[14px]">
                <h3 className="m-0 relative text-inherit leading-[110.5%] font-semibold font-inherit mq450:text-xl mq450:leading-[22px]">
                  Social Media Management
                </h3>
                <div className="self-stretch relative text-lg leading-[156.5%] font-noto-sans text-lightgray-100">
                  Lorem ipsum dolor sit amet consecte tur adipiscing elit olme
                  do semper dalaracc lacus vel facilisis volutpat est velitolm.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button
        className="cursor-pointer py-[17px] pr-[29px] pl-[33px] bg-[transparent] rounded-6xs flex flex-row items-center justify-center z-[1] border-[1.5px] border-solid border-white hover:bg-gainsboro-500 hover:box-border hover:border-[1.5px] hover:border-solid hover:border-gainsboro-100"
        onClick={onButtonClick}
      >
        <div className="relative text-lg leading-[160%] capitalize font-medium font-nunito text-white text-center">
          Get in touch
        </div>
      </button>
    </section>
  );
};

export default Services2;
