import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import Component4 from "./component4";

const Services: NextPage = () => {
  const router = useRouter();

  const onButtonClick = useCallback(() => {
    router.push("/services");
  }, [router]);

  return (
    <div className="self-stretch bg-gray-200 flex flex-col items-center justify-start py-[173px] px-5 box-border gap-[90px] max-w-full mt-[-55px] text-left text-mini text-gold font-noto-sans mq450:gap-[90px] mq450:pb-[47px] mq450:box-border mq850:gap-[90px] mq850:pb-[73px] mq850:box-border mq1225:pb-28 mq1225:box-border">
      <div className="w-[1200px] flex flex-row items-end justify-between gap-[20px] max-w-full mq1225:flex-wrap">
        <div className="w-[747px] flex flex-row items-start justify-start gap-[39px] max-w-full mq850:flex-wrap mq850:gap-[39px]">
          <img
            className="h-[88px] w-[88px] relative"
            loading="eager"
            alt=""
            src="/icon.svg"
          />
          <div className="flex-1 flex flex-col items-start justify-start gap-[15px] min-w-[403px] max-w-full mq850:min-w-full">
            <div className="relative tracking-[0.14em] leading-[156.5%] uppercase font-medium">
              <span>//</span>
              <span className="text-khaki">{` `}</span>
              <span className="text-lightgray-100">01 . Services</span>
            </div>
            <h1 className="m-0 self-stretch relative text-21xl leading-[110.5%] font-semibold font-nunito text-white mq450:text-5xl mq450:leading-[27px] mq850:text-13xl mq850:leading-[35px]">
              High-impact services to take your business to the next level
            </h1>
          </div>
        </div>
        <button
          className="cursor-pointer [border:none] pt-[17px] px-6 pb-[18px] bg-white rounded-6xs flex flex-col items-center justify-center"
          onClick={onButtonClick}
        >
          <div className="flex flex-row items-center justify-center gap-[8px]">
            <div className="relative text-lg leading-[160%] capitalize font-medium font-nunito text-gray-200 text-left">
              Our Services
            </div>
            <img
              className="h-3.5 w-3.5 relative object-contain"
              alt=""
              src="/vector-1.svg"
            />
          </div>
        </button>
      </div>
      <div className="w-[1200px] h-[1017px] overflow-x-auto shrink-0 flex flex-row flex-wrap items-start justify-start gap-[67px] max-w-full text-6xl text-white font-nunito mq450:gap-[67px] mq850:gap-[67px]">
        <Component4
          icon="/icon-1@2x.png"
          socialMediaMarketing="Social Media Marketing"
        />
        <Component4
          icon="/icon-2@2x.png"
          socialMediaMarketing="Paid Advertising"
        />
        <Component4
          icon="/icon-3@2x.png"
          socialMediaMarketing="Advanced Analytics"
        />
        <Component4
          icon="/icon-4@2x.png"
          socialMediaMarketing="SEO Optimization"
        />
        <Component4
          icon="/icon-5@2x.png"
          socialMediaMarketing="Funnel Optimization"
        />
        <Component4
          icon="/icon-6@2x.png"
          socialMediaMarketing="Condent Marketing"
        />
      </div>
    </div>
  );
};

export default Services;
