import type { NextPage } from "next";

export type LineSeparatorType = {
  img?: string;
  prop?: string;
};

const LineSeparator: NextPage<LineSeparatorType> = ({ img, prop }) => {
  return (
    <div className="w-[315px] h-[94px] flex flex-row items-start justify-start py-0 pr-[34px] pl-0 box-border text-center text-6xl text-gray-200 font-nunito">
      <div className="h-[94px] w-[281px] flex flex-col items-center justify-start">
        <div className="w-[106px] h-7 flex flex-row items-start justify-start py-0 pr-[23px] pl-0 box-border">
          <h3 className="m-0 h-7 w-[83px] relative text-inherit leading-[110.5%] font-bold font-inherit inline-block">
            Starter
          </h3>
        </div>
        <div className="w-[281px] h-[71px] flex flex-row items-start justify-start gap-[35px] mt-[-5px] text-31xl">
          <img
            className="h-[51.6px] w-[49.1px] relative object-cover"
            loading="eager"
            alt=""
            src={img}
          />
          <div className="h-[71px] w-[197px] flex flex-col items-start justify-start pt-3 px-0 pb-0 box-border">
            <div className="w-[197px] h-[59px] flex flex-row items-end justify-start gap-[11px]">
              <div className="h-[59px] w-[90px] flex flex-col items-start justify-start pt-0 px-0 pb-[5px] box-border">
                <div className="w-[90px] h-[54px] relative leading-[110.5%] font-black inline-block shrink-0">
                  <p className="m-0">{prop}</p>
                </div>
              </div>
              <div className="h-11 w-24 relative text-lg leading-[244%] font-noto-sans text-dimgray-700 inline-block">
                /Per Month
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LineSeparator;
