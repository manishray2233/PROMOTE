import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type Component6Type = {
  icon?: string;
  socialMediaMarketing?: string;
  getInTouchCTA?: string;

  /** Style props */
  propBorder?: CSSProperties["border"];
  propBackgroundColor?: CSSProperties["backgroundColor"];
  propColor?: CSSProperties["color"];

  /** Action props */
  onButtonClick?: () => void;
};

const Component6: NextPage<Component6Type> = ({
  icon,
  socialMediaMarketing,
  getInTouchCTA,
  propBorder,
  propBackgroundColor,
  propColor,
  onButtonClick,
}) => {
  const button1Style: CSSProperties = useMemo(() => {
    return {
      border: propBorder,
      backgroundColor: propBackgroundColor,
    };
  }, [propBorder, propBackgroundColor]);

  const readMore2Style: CSSProperties = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  return (
    <div className="w-[352px] rounded-11xl [background:linear-gradient(180deg,_#36363e,_#292930)] box-border shrink-0 flex flex-row items-start justify-start py-[41px] pr-10 pl-[38px] text-left text-6xl text-white font-nunito border-[1px] border-solid border-darkslategray-200 mq850:pt-[27px] mq850:pb-[27px] mq850:box-border">
      <div className="flex-1 flex flex-col items-start justify-start gap-[26px]">
        <img
          className="w-[153px] h-[153px] relative object-contain"
          alt=""
          src={icon}
        />
        <div className="self-stretch flex flex-col items-start justify-start gap-[14px]">
          <div className="relative leading-[110.5%] font-semibold mq450:text-xl mq450:leading-[22px]">
            {socialMediaMarketing}
          </div>
          <div className="self-stretch relative text-lg leading-[156.5%] font-noto-sans text-lightgray-100">{`Lorem ipsum dolor sit amet, ea mundi malorum cum, ocurreret reprehendunt. `}</div>
        </div>
        <button
          className="cursor-pointer [border:none] pt-[17px] px-[70px] pb-[18px] bg-khaki w-[266px] rounded-6xs flex flex-col items-center justify-center box-border"
          onClick={onButtonClick}
          style={button1Style}
        >
          <div className="self-stretch flex flex-row items-center justify-center gap-[8px] mq450:flex-wrap">
            <div
              className="flex-1 relative text-lg leading-[160%] capitalize font-medium font-nunito text-gray-200 text-center inline-block min-w-[68px]"
              style={readMore2Style}
            >
              Read More
            </div>
            <img
              className="h-3.5 w-3.5 relative object-contain"
              alt=""
              src={getInTouchCTA}
            />
          </div>
        </button>
      </div>
    </div>
  );
};

export default Component6;
