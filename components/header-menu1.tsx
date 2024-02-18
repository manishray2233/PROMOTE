import type { NextPage } from "next";

const HeaderMenu1: NextPage = () => {
  return (
    <div className="h-[554px] w-[390px] rounded-3xs bg-gray-200 flex flex-col items-center justify-start pt-5 pb-[45px] pr-[22px] pl-[38px] box-border gap-[30px] text-center text-6xl text-white font-nunito">
      <div className="w-[330px] h-[119px] flex flex-row items-end justify-start gap-[41px]">
        <div className="h-[73px] w-9 flex flex-col items-start justify-start pt-0 px-0 pb-[18px] box-border">
          <img
            className="w-[36.4px] h-[55px] relative object-cover"
            alt=""
            src="/img-11@2x.png"
          />
        </div>
        <div className="h-[119px] w-[253px] flex flex-row items-end justify-start gap-[10px]">
          <div className="h-[94px] w-[90px] flex flex-col items-start justify-start pt-0 px-0 pb-[5px] box-border">
            <div className="w-[90px] h-[89px] flex flex-col items-center justify-start gap-[7px]">
              <h3 className="m-0 w-[83px] h-7 relative text-inherit leading-[110.5%] font-bold font-inherit inline-block">
                Starter
              </h3>
              <div className="w-[90px] h-[54px] relative text-31xl leading-[110.5%] font-black inline-block shrink-0">
                <p className="m-0">$49</p>
              </div>
            </div>
          </div>
          <div className="h-[119px] w-[153px] flex flex-col items-end justify-start gap-[35px] text-mini text-gray-200 font-noto-sans">
            <div className="w-[89px] h-10 rounded-4xs bg-khaki flex flex-row items-center justify-center pt-0.5 px-px pb-px box-border z-[1]">
              <div className="w-[89px] relative rounded-4xs bg-khaki h-10 hidden" />
              <div className="h-[37px] w-[69px] relative leading-[244%] uppercase font-medium inline-block z-[1]">
                Popular
              </div>
            </div>
            <div className="w-[153px] h-11 flex flex-row items-start justify-start py-0 pr-[57px] pl-0 box-border text-lg text-white">
              <div className="h-11 w-24 relative leading-[244%] inline-block">
                /Per Month
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[329px] h-0 flex flex-row items-start justify-start py-0 pr-[27px] pl-0 box-border">
        <img className="h-px w-[302px] relative" alt="" src="/line.svg" />
      </div>
      <div className="w-[323px] h-[216px] flex flex-row items-start justify-start py-0 pr-[74px] pl-0 box-border text-left text-lg font-noto-sans">
        <div className="h-[216px] w-[249px] flex flex-row items-start justify-start relative gap-[9px]">
          <div className="h-[162px] w-4 flex flex-col items-start justify-start pt-3.5 px-0 pb-0 box-border">
            <div className="w-4 h-[148px] flex flex-col items-start justify-start gap-[25px]">
              <img className="w-4 h-4 relative" alt="" src="/vector-10.svg" />
              <div className="w-4 h-[107px] flex flex-col items-start justify-start gap-[28px]">
                <img className="w-4 h-4 relative" alt="" src="/vector-10.svg" />
                <div className="w-4 h-[63px] flex flex-col items-start justify-start gap-[31px]">
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
          <img
            className="h-[22.6px] w-[22.6px] absolute my-0 mx-[!important] bottom-[4.7px] left-[-3px] object-contain"
            alt=""
            src="/vector-13.svg"
          />
        </div>
      </div>
      <div className="w-[329px] h-16 flex flex-row items-start justify-start py-0 pr-4 pl-0 box-border">
        <button className="cursor-pointer [border:none] pt-[17px] px-[17px] pb-[18px] bg-whitesmoke-200 h-16 w-[313px] rounded-6xs flex flex-row items-center justify-center box-border">
          <div className="h-[29px] w-[117px] relative text-lg leading-[160%] capitalize font-medium font-nunito text-gray-200 text-center inline-block">
            Purchase Plan
          </div>
        </button>
      </div>
    </div>
  );
};

export default HeaderMenu1;
