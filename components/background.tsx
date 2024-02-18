import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type BackgroundType = {
  contact?: string;
  vector?: string;
  email?: string;

  /** Style props */
  propWidth?: CSSProperties["width"];
  propTextAlign?: CSSProperties["textAlign"];
  propGap?: CSSProperties["gap"];
  propWidth1?: CSSProperties["width"];
  propBorderRadius?: CSSProperties["borderRadius"];
};

const Background: NextPage<BackgroundType> = ({
  contact,
  vector,
  email,
  propWidth,
  propTextAlign,
  propGap,
  propWidth1,
  propBorderRadius,
}) => {
  const tagStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const contactStyle: CSSProperties = useMemo(() => {
    return {
      textAlign: propTextAlign,
    };
  }, [propTextAlign]);

  const frameDiv2Style: CSSProperties = useMemo(() => {
    return {
      gap: propGap,
    };
  }, [propGap]);

  const vectorIconStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth1,
      borderRadius: propBorderRadius,
    };
  }, [propWidth1, propBorderRadius]);

  return (
    <div className="flex-1 rounded-6xs [background:linear-gradient(111.05deg,_#e9f7ff,_#ffdbd4_51.05%,_#fff3ca)] flex flex-row items-center justify-center p-[25px] box-border min-w-[285px] max-w-full text-left text-6xl text-gray-200 font-nunito">
      <div className="h-[220px] flex-1 rounded-6xs bg-white shadow-[0px_2px_4px_rgba(146,_146,_146,_0.25)] flex flex-row items-start justify-center p-5 box-border max-w-full">
        <div className="flex-1 flex flex-col items-start justify-start py-0 px-[5px] gap-[17px]">
          <button
            className="cursor-pointer [border:none] p-1.5 bg-khaki w-[123px] rounded-40xl flex flex-row items-center justify-center box-border hover:bg-goldenrod"
            style={tagStyle}
          >
            <div
              className="relative text-xl leading-[160%] capitalize font-semibold font-nunito text-gray-200 text-left mq450:text-base mq450:leading-[26px]"
              style={contactStyle}
            >
              {contact}
            </div>
          </button>
          <div className="self-stretch h-px relative box-border border-t-[1px] border-solid border-whitesmoke-500" />
          <div className="flex flex-col items-start justify-start gap-[10px]">
            <div
              className="flex flex-row items-end justify-start gap-[9px]"
              style={frameDiv2Style}
            >
              <img
                className="h-[22px] w-[29.3px] relative rounded-10xs"
                alt=""
                src={vector}
                style={vectorIconStyle}
              />
              <h3 className="m-0 relative text-inherit leading-[110.5%] font-semibold font-inherit mq450:text-xl mq450:leading-[22px]">
                {email}
              </h3>
            </div>
            <div className="flex flex-row items-start justify-start py-0 pr-0 pl-[38px] text-lg text-dimgray-700 font-noto-sans">
              <div className="relative leading-[156.5%] whitespace-nowrap">
                nextlevel@marketing.com
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Background;
