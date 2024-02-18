import type { NextPage } from "next";

const FrameComponent4: NextPage = () => {
  return (
    <div className="w-[570px] flex flex-row items-start justify-start [row-gap:20px] max-w-full shrink-0 text-left text-lg text-dimgray-700 font-noto-sans mq850:flex-wrap">
      <img
        className="h-[86px] w-[86px] relative z-[1]"
        alt=""
        src="/icon-9.svg"
      />
      <div className="flex-1 flex flex-col items-start justify-start pt-[7px] px-0 pb-0 box-border min-w-[315px] max-w-full">
        <div className="self-stretch flex flex-col items-center justify-start gap-[22px] max-w-full">
          <div className="self-stretch h-9 flex flex-col items-start justify-start gap-[8px] max-w-full">
            <input
              className="w-[321px] [border:none] [outline:none] bg-[transparent] h-7 flex flex-row items-start justify-start py-0 px-[17px] box-border font-nunito font-semibold text-6xl text-gray-200 max-w-full"
              placeholder="Team of Industry Experts"
              type="text"
            />
            <div className="self-stretch h-px relative box-border border-t-[1px] border-solid border-lightgray-200" />
          </div>
          <div className="self-stretch flex flex-row items-start justify-start py-0 pr-7 pl-[18px] box-border max-w-full">
            <div className="flex-1 relative leading-[156.5%] inline-block max-w-full">
              consectetur amet dolor sit comeneer ilremsilom dolce issilm acalrm
              leoinsion duycoqun consemleint lorem.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent4;
