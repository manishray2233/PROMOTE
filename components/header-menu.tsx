import type { NextPage } from "next";
import LineSeparator from "./line-separator";

const HeaderMenu: NextPage = () => {
  return (
    <div className="h-[554px] w-[389px] rounded-3xs bg-whitesmoke-100 box-border flex flex-col items-center justify-start py-[45px] px-[38px] gap-[30px] text-left text-lg text-dimgray-700 font-noto-sans border-[1px] border-solid border-gainsboro-200">
      <LineSeparator img="/img-2@2x.png" prop="$99" />
      <div className="w-[313px] h-0 flex flex-row items-start justify-start py-0 pr-[11px] pl-0 box-border">
        <img className="h-px w-[302px] relative" alt="" src="/line.svg" />
      </div>
      <div className="w-[313px] h-[216px] flex flex-row items-start justify-start py-0 pr-16 pl-0 box-border">
        <div className="h-[216px] w-[249px] flex flex-row items-center justify-start gap-[9px]">
          <div className="h-[200px] w-4 flex flex-col items-start justify-start pt-1.5 px-0 pb-0 box-border">
            <div className="w-4 h-[194px] flex flex-col items-start justify-start gap-[25px]">
              <img className="w-4 h-4 relative" alt="" src="/vector-10.svg" />
              <div className="w-4 h-[153px] flex flex-col items-start justify-start gap-[28px]">
                <img className="w-4 h-4 relative" alt="" src="/vector-10.svg" />
                <div className="w-4 h-[109px] flex flex-col items-start justify-start gap-[30px]">
                  <img
                    className="w-4 h-4 relative"
                    alt=""
                    src="/vector-10.svg"
                  />
                  <img
                    className="w-4 h-4 relative"
                    alt=""
                    src="/vector-10.svg"
                  />
                  <img
                    className="w-4 h-4 relative"
                    alt=""
                    src="/vector-10.svg"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="h-[216px] w-56 relative leading-[244%] inline-block shrink-0">
            Email MarketingContent MarketingVoice OptimizeSEO ConsultingVideo
            MarketingAdvertising
          </div>
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

export default HeaderMenu;
