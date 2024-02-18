import type { NextPage } from "next";

export type FrameComponent2Type = {
  img?: string;
  prop?: string;
};

const FrameComponent2: NextPage<FrameComponent2Type> = ({ img, prop }) => {
  return (
    <div className="self-stretch flex flex-row items-start justify-start py-0 px-1 text-left text-lg text-dimgray-700 font-noto-sans">
      <div className="w-[249px] flex flex-row items-start justify-start relative gap-[9px]">
        <div className="flex flex-col items-start justify-start pt-3.5 px-0 pb-0">
          <div className="flex flex-col items-start justify-start gap-[26px]">
            <img className="w-4 h-4 relative" alt="" src="/vector-10.svg" />
            <img className="w-4 h-4 relative" alt="" src="/vector-10.svg" />
            <img className="w-4 h-4 relative" alt="" src="/vector-10.svg" />
          </div>
        </div>
        <div className="h-[216px] flex-1 relative leading-[244%] inline-block">
          Email MarketingContent MarketingVoice OptimizeSEO ConsultingVideo
          MarketingAdvertising
        </div>
        <img
          className="h-[22.6px] w-[22.6px] absolute my-0 mx-[!important] bottom-[50.7px] left-[-3px] object-contain"
          alt=""
          src="/vector-13.svg"
        />
        <img
          className="h-[22.6px] w-[22.6px] absolute my-0 mx-[!important] bottom-[4.7px] left-[-3px] object-contain"
          alt=""
          src="/vector-13.svg"
        />
      </div>
    </div>
  );
};

export default FrameComponent2;
