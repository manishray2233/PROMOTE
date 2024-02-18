import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type Component5Type = {
  image?: string;
  icon?: string;

  /** Style props */
  propBackgroundColor?: CSSProperties["backgroundColor"];
  propWidth?: CSSProperties["width"];
  propHeight?: CSSProperties["height"];

  /** Action props */
  onButtonClick?: () => void;
};

const Component5: NextPage<Component5Type> = ({
  image,
  icon,
  propBackgroundColor,
  propWidth,
  propHeight,
  onButtonClick,
}) => {
  const divStyle: CSSProperties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
    };
  }, [propBackgroundColor]);

  const iconStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
      height: propHeight,
    };
  }, [propWidth, propHeight]);

  return (
    <div
      className="self-stretch rounded-3xs bg-aliceblue flex flex-row items-center justify-center p-[50px] box-border max-w-full text-left text-6xl text-gray-200 font-nunito mq850:pt-8 mq850:pb-8 mq850:box-border mq1225:pl-[25px] mq1225:pr-[25px] mq1225:box-border"
      style={divStyle}
    >
      <div className="flex-1 flex flex-row items-start justify-start gap-[50px] max-w-full mq850:gap-[50px] mq1225:flex-wrap">
        <img
          className="h-[460px] flex-1 relative max-w-full overflow-hidden object-cover min-w-[341px] min-h-[460px] mq850:min-w-full mq1225:flex-1"
          loading="eager"
          alt=""
          src={image}
        />
        <div className="flex-[0.861] rounded-3xs bg-white shadow-[0px_2px_4px_rgba(146,_146,_146,_0.25)] flex flex-col items-center justify-start pt-[49px] pb-12 pr-9 pl-[37px] box-border gap-[40px] min-w-[341px] max-w-full mq850:gap-[40px] mq850:min-w-full mq1225:flex-1 mq450:pt-8 mq450:pb-[31px] mq450:box-border">
          <div className="w-[525px] h-[460px] relative rounded-3xs bg-white shadow-[0px_2px_4px_rgba(146,_146,_146,_0.25)] hidden max-w-full" />
          <div className="self-stretch flex flex-col items-start justify-start gap-[10px]">
            <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-2.5 gap-[21px]">
              <img
                className="w-[119.3px] h-[40.4px] relative object-cover z-[1]"
                alt=""
                src={icon}
                style={iconStyle}
              />
              <div className="self-stretch h-px relative box-border z-[1] border-t-[1px] border-solid border-whitesmoke-500" />
            </div>
            <h3 className="m-0 self-stretch relative text-inherit leading-[110.5%] font-semibold font-inherit z-[1] mq450:text-xl mq450:leading-[22px]">
              How we helped Google to increase conversion rate on G-Suite by 25%
              in less than 30 days
            </h3>
            <div className="self-stretch relative text-lg leading-[156.5%] font-noto-sans text-dimgray-700 z-[1]">{`Tincidunt donec vulputate ipsum erat urna auctor. Eget phasellus ideirs.adipiscing elit. Tincidunt donec vulputate ipsum erat urna auctor. `}</div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start">
            <button
              className="cursor-pointer [border:none] pt-[17px] px-[30px] pb-[18px] bg-gray-200 rounded-6xs flex flex-row items-center justify-start gap-[8px] whitespace-nowrap z-[1] hover:bg-dimgray-500"
              onClick={onButtonClick}
            >
              <div className="relative text-lg leading-[160%] capitalize font-medium font-nunito text-white text-left">
                Read case study
              </div>
              <img
                className="h-3.5 w-3.5 relative object-contain"
                alt=""
                src="/vector-27.svg"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Component5;
