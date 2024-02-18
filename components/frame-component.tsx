import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type FrameComponentType = {
  marketing?: string;
  howToIncreaseYourTwitterR?: string;

  /** Style props */
  propWidth?: CSSProperties["width"];
};

const FrameComponent: NextPage<FrameComponentType> = ({
  marketing,
  howToIncreaseYourTwitterR,
  propWidth,
}) => {
  const readMoreStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  return (
    <div className="flex-1 flex flex-col items-start justify-start gap-[26px] min-w-[305px] max-w-full text-left text-mini text-gray-200 font-noto-sans">
      <div className="w-[435px] flex flex-row items-center justify-between gap-[20px] max-w-full mq450:flex-wrap">
        <button className="cursor-pointer py-2 pr-[19px] pl-[21px] bg-[transparent] rounded-40xl flex flex-row items-center justify-center border-[0px] border-solid border-gray-200 hover:bg-dimgray-1000 hover:box-border hover:border-[1px] hover:border-solid hover:border-dimgray-500">
          <img
            className="h-[45px] w-[123px] relative rounded-40xl hidden"
            alt=""
            src="/rectangle-141.svg"
          />
          <div className="relative text-lg leading-[160%] capitalize font-medium font-nunito text-gray-200 text-left z-[1]">
            {marketing}
          </div>
        </button>
        <div className="relative tracking-[0.14em] leading-[156.5%] uppercase font-medium">
          September 1, 2022
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start gap-[9px] max-w-full text-6xl font-nunito">
        <h3 className="m-0 w-[452px] relative text-inherit leading-[110.5%] font-semibold font-inherit inline-block max-w-full mq450:text-xl mq450:leading-[22px]">
          {howToIncreaseYourTwitterR}
        </h3>
        <div className="self-stretch relative text-lg leading-[156.5%] font-noto-sans text-dimgray-700">{`Tincidunt donec vulputate ipsum erat urna auctor. Eget phasellus ideirs.adipiscing elit. Tincidunt donec vulputate ipsum erat urna auctor. `}</div>
      </div>
      <div className="w-[158px] rounded-6xs bg-white flex flex-row items-center justify-start pt-[17px] px-6 pb-[18px] box-border gap-[4px]">
        <input
          className="w-[calc(100%_-_62px)] [border:none] [outline:none] font-medium font-nunito text-lg bg-[transparent] h-[29px] flex-1 relative leading-[160%] capitalize text-gray-200 text-left inline-block min-w-[55px]"
          placeholder="Read More "
          type="text"
          style={readMoreStyle}
        />
        <img
          className="h-3.5 w-3.5 relative object-contain"
          alt=""
          src="/vector-1.svg"
        />
      </div>
    </div>
  );
};

export default FrameComponent;
