import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type EmailInputFrameType = {
  marketing?: string;
  howToIncreaseYourTwitterR?: string;

  /** Style props */
  marketingDisplay?: CSSProperties["display"];
};

const EmailInputFrame: NextPage<EmailInputFrameType> = ({
  marketing,
  howToIncreaseYourTwitterR,
  marketingDisplay,
}) => {
  const marketingStyle: CSSProperties = useMemo(() => {
    return {
      display: marketingDisplay,
    };
  }, [marketingDisplay]);

  return (
    <div className="h-[310px] w-[470px] flex flex-col items-start justify-start gap-[26px] text-left text-mini text-gray-200 font-noto-sans">
      <div className="w-[435px] h-[45px] flex flex-row items-center justify-start gap-[140px]">
        <button className="cursor-pointer py-2 pr-[21px] pl-[23px] bg-[transparent] h-[45px] w-[123px] rounded-40xl box-border flex flex-row items-center justify-center border-[0px] border-solid border-gray-200">
          <img
            className="w-[123px] relative rounded-40xl h-[45px] hidden"
            alt=""
            src="/rectangle-141.svg"
          />
          <div
            className="h-[29px] w-[79px] relative text-lg leading-[160%] capitalize font-medium font-nunito text-gray-200 text-left inline-block z-[1]"
            style={marketingStyle}
          >
            {marketing}
          </div>
        </button>
        <div className="h-[23px] w-[172px] relative tracking-[0.14em] leading-[156.5%] uppercase font-medium inline-block">
          September 1, 2022
        </div>
      </div>
      <div className="w-[470px] h-[149px] flex flex-col items-start justify-start gap-[9px] text-6xl font-nunito">
        <h3 className="m-0 w-[452px] h-14 relative text-inherit leading-[110.5%] font-semibold font-inherit inline-block">
          {howToIncreaseYourTwitterR}
        </h3>
        <div className="w-[470px] h-[84px] relative text-lg leading-[156.5%] font-noto-sans text-dimgray-700 inline-block">{`Tincidunt donec vulputate ipsum erat urna auctor. Eget phasellus ideirs.adipiscing elit. Tincidunt donec vulputate ipsum erat urna auctor. `}</div>
      </div>
      <div className="w-[158px] h-16 rounded-6xs bg-white flex flex-row items-center justify-start pt-[17px] px-6 pb-[18px] box-border gap-[4px]">
        <input
          className="w-[92px] [border:none] [outline:none] font-medium font-nunito text-lg bg-[transparent] h-[29px] relative leading-[160%] capitalize text-gray-200 text-left inline-block"
          placeholder="Read More "
          type="text"
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

export default EmailInputFrame;
