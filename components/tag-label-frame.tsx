import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type TagLabelFrameType = {
  icon?: string;
  socialMediaMarketing?: string;
  nextlevelMarketingComText?: string;

  /** Style props */
  propBorder?: CSSProperties["border"];
  propBackgroundColor?: CSSProperties["backgroundColor"];
  propColor?: CSSProperties["color"];
};

const TagLabelFrame: NextPage<TagLabelFrameType> = ({
  icon,
  socialMediaMarketing,
  nextlevelMarketingComText,
  propBorder,
  propBackgroundColor,
  propColor,
}) => {
  const buttonStyle: CSSProperties = useMemo(() => {
    return {
      border: propBorder,
      backgroundColor: propBackgroundColor,
    };
  }, [propBorder, propBackgroundColor]);

  const readMore1Style: CSSProperties = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  return (
    <div className="h-[475px] w-[352px] rounded-11xl [background:linear-gradient(180deg,_#36363e,_#292930)] box-border flex flex-row items-start justify-start py-[41px] px-[39px] text-left text-6xl text-white font-nunito border-[1px] border-solid border-darkslategray-200">
      <div className="h-[] w-[274px] flex flex-col items-start justify-start gap-[26px]">
        <img
          className="w-[153px] h-[153px] relative object-contain"
          alt=""
          src={icon}
        />
        <div className="w-[274px] h-[] flex flex-col items-start justify-start gap-[14px]">
          <h3 className="m-0 w-[266px] h-7 relative text-inherit leading-[110.5%] font-semibold font-inherit inline-block">
            {socialMediaMarketing}
          </h3>
          <div className="w-[274px] h-[84px] relative text-lg leading-[156.5%] font-noto-sans text-lightgray-100 inline-block shrink-0">{`Lorem ipsum dolor sit amet, ea mundi malorum cum, ocurreret reprehendunt. `}</div>
        </div>
        <button
          className="cursor-pointer [border:none] pt-[17px] px-[70px] pb-[18px] bg-khaki w-[266px] h-[62px] rounded-6xs flex flex-col items-center justify-center box-border"
          style={buttonStyle}
        >
          <div className="w-[126px] h-[27px] flex flex-row items-center justify-center gap-[8px]">
            <div
              className="h-[27px] w-[104px] relative text-lg leading-[160%] capitalize font-medium font-nunito text-gray-200 text-center inline-block shrink-0"
              style={readMore1Style}
            >
              Read More
            </div>
            <img
              className="h-3.5 w-3.5 relative object-contain"
              alt=""
              src={nextlevelMarketingComText}
            />
          </div>
        </button>
      </div>
    </div>
  );
};

export default TagLabelFrame;
