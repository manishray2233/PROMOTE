import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type FrameType = {
  image?: string;
  image1?: string;

  /** Style props */
  propBackground?: CSSProperties["background"];
  propBackgroundColor?: CSSProperties["backgroundColor"];
  propBorder?: CSSProperties["border"];
  propPadding?: CSSProperties["padding"];

  /** Action props */
  onTextContainerClick?: () => void;
  onContainerClick?: () => void;
};

const Frame: NextPage<FrameType> = ({
  image,
  image1,
  propBackground,
  propBackgroundColor,
  propBorder,
  propPadding,
  onTextContainerClick,
  onContainerClick,
}) => {
  const textStyle: CSSProperties = useMemo(() => {
    return {
      background: propBackground,
      backgroundColor: propBackgroundColor,
      border: propBorder,
    };
  }, [propBackground, propBackgroundColor, propBorder]);

  const content2Style: CSSProperties = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  return (
    <div className="self-stretch flex flex-row flex-wrap items-start justify-center gap-[51px] max-w-full text-right text-mini text-gray-200 font-noto-sans mq850:gap-[51px]">
      <div
        className="flex-1 rounded-11xl [background:linear-gradient(124.11deg,_#e9f7ff,_#ffdbd4_51.05%,_#fff3ca)] flex flex-row items-start justify-center py-[43px] px-[37px] box-border min-w-[373px] max-w-full cursor-pointer mq450:min-w-full mq850:pt-7 mq850:pb-7 mq850:box-border"
        onClick={onTextContainerClick}
        style={textStyle}
      >
        <div
          className="flex-1 flex flex-col items-start justify-start gap-[30px] max-w-full"
          style={content2Style}
        >
          <img
            className="self-stretch h-[400px] relative max-w-full overflow-hidden shrink-0 object-cover"
            loading="eager"
            alt=""
            src={image}
          />
          <div className="self-stretch flex flex-col items-start justify-start gap-[22px] max-w-full">
            <div className="self-stretch flex flex-row items-center justify-between gap-[20px] mq450:flex-wrap">
              <button className="cursor-pointer py-2 px-[19px] bg-[transparent] rounded-40xl flex flex-row items-center justify-center border-[1px] border-solid border-gray-200 hover:bg-dimgray-1000 hover:box-border hover:border-[1px] hover:border-solid hover:border-dimgray-500">
                <div className="relative text-lg leading-[160%] capitalize font-medium font-nunito text-gray-200 text-left">
                  Marketing
                </div>
              </button>
              <div className="relative tracking-[0.14em] leading-[156.5%] uppercase font-medium">
                September 1, 2022
              </div>
            </div>
            <h3 className="m-0 w-[480.9px] relative text-6xl leading-[110.5%] font-semibold font-nunito text-left inline-block max-w-full mq450:text-xl mq450:leading-[22px]">
              How to increase your Twitter reach by over 200% with this simple
              trick
            </h3>
          </div>
        </div>
      </div>
      <div
        className="flex-1 rounded-11xl bg-white box-border flex flex-row items-start justify-center py-[43px] px-[35px] min-w-[373px] max-w-full cursor-pointer border-[1.5px] border-solid border-gainsboro-400 mq450:min-w-full mq850:pt-7 mq850:pb-7 mq850:box-border"
        onClick={onContainerClick}
      >
        <div className="flex-1 flex flex-col items-start justify-start py-0 pr-px pl-0 box-border gap-[30px] max-w-full">
          <img
            className="self-stretch h-[400px] relative max-w-full overflow-hidden shrink-0 object-cover"
            loading="eager"
            alt=""
            src={image1}
          />
          <div className="self-stretch flex flex-col items-start justify-start gap-[22px] max-w-full">
            <div className="self-stretch flex flex-row items-center justify-between gap-[20px] mq450:flex-wrap">
              <button className="cursor-pointer py-2 px-[19px] bg-[transparent] rounded-40xl flex flex-row items-center justify-center border-[1px] border-solid border-gray-200 hover:bg-dimgray-1000 hover:box-border hover:border-[1px] hover:border-solid hover:border-dimgray-500">
                <div className="relative text-lg leading-[160%] capitalize font-medium font-nunito text-gray-200 text-left">
                  Marketing
                </div>
              </button>
              <div className="relative tracking-[0.14em] leading-[156.5%] uppercase font-medium">
                September 1, 2022
              </div>
            </div>
            <h3 className="m-0 w-[480.9px] relative text-6xl leading-[110.5%] font-semibold font-nunito text-left inline-block max-w-full mq450:text-xl mq450:leading-[22px]">
              How to increase your Twitter reach by over 200% with this simple
              trick
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Frame;
