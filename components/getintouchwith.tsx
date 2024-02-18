import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type GetintouchwithType = {
  fullName?: string;
  johnDavidPlaceholder?: string;

  /** Style props */
  propWidth?: CSSProperties["width"];
};

const Getintouchwith: NextPage<GetintouchwithType> = ({
  fullName,
  johnDavidPlaceholder,
  propWidth,
}) => {
  const johnDavidStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  return (
    <div className="self-stretch flex flex-col items-start justify-start gap-[13px] max-w-full text-left text-xl text-gray-200 font-nunito">
      <div className="relative leading-[160%] capitalize font-semibold mq450:text-base mq450:leading-[26px]">
        {fullName}
      </div>
      <div className="self-stretch rounded-6xs bg-white box-border flex flex-row items-center justify-start pt-[17px] px-[31px] pb-[18px] max-w-full border-[1px] border-solid border-gainsboro-400">
        <div className="h-16 w-[475px] relative rounded-6xs bg-white box-border hidden max-w-full border-[1px] border-solid border-gainsboro-400" />
        <input
          className="w-[89px] [border:none] [outline:none] font-medium font-nunito text-lg bg-[transparent] h-[29px] relative leading-[160%] capitalize text-dimgray-700 text-left inline-block z-[1]"
          placeholder={johnDavidPlaceholder}
          type="text"
          style={johnDavidStyle}
        />
      </div>
    </div>
  );
};

export default Getintouchwith;
