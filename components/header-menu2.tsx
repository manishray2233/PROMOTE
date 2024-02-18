import type { NextPage } from "next";
import LineSeparator from "./line-separator";

const HeaderMenu2: NextPage = () => {
  return (
    <div className="h-[554px] w-[391px] rounded-3xs bg-whitesmoke-100 box-border flex flex-col items-center justify-start py-[45px] px-[38px] gap-[30px] text-center text-6xl text-gray-200 font-nunito border-[1px] border-solid border-gainsboro-200">
      <LineSeparator img="/img@2x.png" prop="$29" />
      <div className="w-[313px] h-0 flex flex-row items-start justify-start py-0 pr-[11px] pl-0 box-border">
        <img className="h-px w-[302px] relative" alt="" src="/line.svg" />
      </div>
      <div className="w-[307px] h-[216px] flex flex-row items-start justify-start py-0 pr-[58px] pl-0 box-border text-left text-lg text-dimgray-700 font-noto-sans">
        <div className="h-[216px] w-[249px] flex flex-row items-start justify-start relative gap-[9px]">
          <div className="h-[115px] w-4 flex flex-col items-start justify-start pt-3.5 px-0 pb-0 box-border">
            <div className="w-4 h-[101px] flex flex-col items-start justify-start gap-[26px]">
              <img className="w-4 h-4 relative" alt="" src="/vector-10.svg" />
              <img className="w-4 h-4 relative" alt="" src="/vector-10.svg" />
              <img className="w-4 h-4 relative" alt="" src="/vector-10.svg" />
            </div>
          </div>
          <div className="h-[216px] w-56 relative leading-[244%] inline-block shrink-0">
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
      <button className="cursor-pointer [border:none] pt-[17px] px-[17px] pb-[18px] bg-gray-200 w-[313px] h-16 rounded-6xs flex flex-row items-center justify-center box-border">
        <div className="h-[29px] w-[117px] relative text-lg leading-[160%] capitalize font-medium font-nunito text-white text-center inline-block">
          Purchase Plan
        </div>
      </button>
    </div>
  );
};

export default HeaderMenu2;
