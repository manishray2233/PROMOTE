import type { NextPage } from "next";

const Component1: NextPage = () => {
  return (
    <div className="flex-1 rounded-3xs bg-gray-200 flex flex-col items-center justify-start pt-5 pb-[45px] pr-5 pl-[38px] box-border gap-[30px] min-w-[292px] max-w-full text-center text-6xl text-white font-nunito mq450:gap-[30px] mq850:pb-[29px] mq850:box-border">
      <div className="self-stretch flex flex-row items-end justify-start gap-[41px] mq450:flex-wrap mq450:gap-[41px]">
        <div className="h-[73px] flex flex-col items-start justify-start pt-0 px-0 pb-[18px] box-border">
          <img
            className="w-[36.4px] flex-1 relative max-h-full object-contain"
            alt=""
            src="/img-1@2x.png"
          />
        </div>
        <div className="flex-1 flex flex-row items-end justify-start gap-[11px] min-w-[165px]">
          <div className="flex flex-col items-start justify-start pt-0 px-0 pb-[5px]">
            <div className="flex flex-col items-center justify-start gap-[7px]">
              <h3 className="m-0 relative text-inherit leading-[110.5%] font-bold font-inherit mq450:text-xl mq450:leading-[22px]">
                Starter
              </h3>
              <div className="relative text-31xl leading-[110.5%] font-black whitespace-nowrap mq450:text-11xl mq450:leading-[33px] mq850:text-21xl mq850:leading-[44px]">
                <p className="m-0">$49</p>
              </div>
            </div>
          </div>
          <div className="flex-1 flex flex-col items-end justify-start gap-[35px] text-mini text-gray-200 font-noto-sans">
            <div className="w-[89px] rounded-4xs bg-khaki flex flex-row items-center justify-center pt-0.5 px-px pb-px box-border z-[1]">
              <div className="h-10 w-[89px] relative rounded-4xs bg-khaki hidden" />
              <div className="relative leading-[244%] uppercase font-medium z-[1]">
                Popular
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start text-lg text-white">
              <div className="relative leading-[244%]">/Per Month</div>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch h-0 flex flex-row items-start justify-start py-0 pr-7 pl-px box-border">
        <img
          className="flex-1 relative max-w-full overflow-clip max-h-[unset]"
          alt=""
          src="/line.svg"
        />
      </div>
      <div className="self-stretch flex flex-row items-start justify-start py-0 px-1 text-left text-lg font-noto-sans">
        <div className="w-[249px] flex flex-row items-start justify-start relative gap-[9px]">
          <div className="flex flex-col items-start justify-start pt-3.5 px-0 pb-0">
            <div className="flex flex-col items-start justify-start gap-[25px]">
              <img className="w-4 h-4 relative" alt="" src="/vector-10.svg" />
              <div className="flex flex-col items-start justify-start gap-[28px]">
                <img className="w-4 h-4 relative" alt="" src="/vector-10.svg" />
                <div className="flex flex-col items-start justify-start gap-[31px]">
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
          <div className="h-[216px] flex-1 relative leading-[244%] inline-block">
            Email MarketingContent MarketingVoice OptimizeSEO ConsultingVideo
            MarketingAdvertising
          </div>
          <img
            className="h-[22.6px] w-[22.6px] absolute my-0 mx-[!important] bottom-[4.7px] left-[-3px] object-contain"
            alt=""
            src="/vector-13.svg"
          />
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[17px] pl-px">
        <button className="cursor-pointer [border:none] pt-[17px] px-[17px] pb-[18px] bg-whitesmoke-200 flex-1 rounded-6xs flex flex-row items-center justify-center whitespace-nowrap hover:bg-gainsboro-300">
          <div className="relative text-lg leading-[160%] capitalize font-medium font-nunito text-gray-200 text-center">
            Purchase Plan
          </div>
        </button>
      </div>
    </div>
  );
};

export default Component1;
