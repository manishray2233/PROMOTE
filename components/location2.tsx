import type { NextPage } from "next";
import { useCallback } from "react";
import HowToIncreaseReach from "./how-to-increase-reach";
import { useRouter } from "next/router";
import Content1 from "./content1";

const Location2: NextPage = () => {
  const router = useRouter();

  const onButtonClick = useCallback(() => {
    router.push("/contact-us");
  }, [router]);

  return (
    <section className="self-stretch rounded-3xs [background:linear-gradient(111.05deg,_#e9f7ff,_#ffdbd4_51.05%,_#fff3ca)] flex flex-col items-center justify-start py-[150px] px-5 box-border gap-[53px] max-w-full shrink-0 text-left text-6xl text-gray-200 font-nunito mq450:pt-[63px] mq450:pb-[63px] mq450:box-border mq925:gap-[53px] mq925:pt-[97px] mq925:pb-[97px] mq925:box-border">
      <img
        className="w-[1920px] h-[849.7px] relative rounded-3xs hidden max-w-full"
        alt=""
        src="/background11.svg"
      />
      <div className="w-[1200px] flex flex-row items-end justify-between gap-[20px] max-w-full z-[1] mq1350:flex-wrap">
        <HowToIncreaseReach
          icon="/icon-45.svg"
          articles="04 . OUR OFFICES"
          browseOurContentOn="Come and visit us all around"
          growthMarketing="the world"
          propWidth="747px"
          propMinWidth="unset"
          propMinWidth1="403px"
          propColor="#ffdc60"
          propAlignSelf="stretch"
        />
        <button
          className="cursor-pointer [border:none] pt-[17px] px-[25px] pb-[18px] bg-gray-200 rounded-6xs flex flex-row items-center justify-center whitespace-nowrap hover:bg-dimgray-500"
          onClick={onButtonClick}
        >
          <div className="relative text-lg leading-[160%] capitalize font-medium font-nunito text-white text-center">
            Get in touch
          </div>
        </button>
      </div>
      <div className="w-[1202px] flex flex-row items-start justify-start py-0 pr-0.5 pl-0 box-border max-w-full">
        <div className="flex-1 flex flex-row flex-wrap items-start justify-start py-0 px-0 box-border gap-[31px] max-w-full z-[1] mq925:gap-[31px]">
          <Content1
            icon="/icon-54@2x.png"
            sanFranciscoUSA="San Francisco, USA"
          />
          <Content1 icon="/mask-group@2x.png" sanFranciscoUSA="Toronto, CA" />
          <div className="flex-1 rounded-11xl bg-white shadow-[0px_2px_4px_rgba(146,_146,_146,_0.25)] flex flex-row items-center justify-center py-[50px] px-[31px] box-border min-w-[284px] max-w-full mq450:pt-8 mq450:pb-8 mq450:box-border">
            <div className="flex-1 flex flex-col items-start justify-start pt-0 px-0 pb-0 gap-[21px]">
              <img
                className="w-[76.5px] h-[57.3px] relative object-contain"
                alt=""
                src="/icon-81@2x.png"
              />
              <div className="flex flex-col items-start justify-start gap-[16px]">
                <h3 className="m-0 relative text-inherit leading-[110.5%] font-semibold font-inherit mq450:text-xl mq450:leading-[22px]">
                  San Francisco, USA
                </h3>
                <div className="relative text-xl leading-[156.5%] font-noto-sans text-dimgray-700 mq450:text-base mq450:leading-[25px]">
                  <p className="m-0">1650 Page. San Francisco,</p>
                  <p className="m-0">California(CA), 94117</p>
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[18px] text-xl text-dimgray-700">
                <div className="flex flex-row items-start justify-start gap-[10px]">
                  <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
                    <img
                      className="w-[22px] h-[22px] relative"
                      alt=""
                      src="/vector-22.svg"
                    />
                  </div>
                  <div className="relative leading-[110.5%] font-medium mq450:text-base mq450:leading-[18px]">
                    (414) 809 - 2567
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-center justify-start gap-[10px]">
                  <img
                    className="h-[16.5px] w-[22px] relative"
                    alt=""
                    src="/icon-64.svg"
                  />
                  <div className="relative leading-[110.5%] font-medium whitespace-nowrap mq450:text-base mq450:leading-[18px]">
                    Contact@marketingagency.com
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location2;
