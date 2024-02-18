import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type FrameComponent5Type = {
  icon?: string;
  frame38Placeholder?: string;
  loremIpsumIsSimplyDummyTe?: string;

  /** Style props */
  propWidth?: CSSProperties["width"];
  propPadding?: CSSProperties["padding"];
  propAlignSelf?: CSSProperties["alignSelf"];
  propWidth1?: CSSProperties["width"];
  propWidth2?: CSSProperties["width"];
  propAlignSelf1?: CSSProperties["alignSelf"];
  propHeight?: CSSProperties["height"];
};

const FrameComponent5: NextPage<FrameComponent5Type> = ({
  icon,
  frame38Placeholder,
  loremIpsumIsSimplyDummyTe,
  propWidth,
  propPadding,
  propAlignSelf,
  propWidth1,
  propWidth2,
  propAlignSelf1,
  propHeight,
}) => {
  const frameDivStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
      padding: propPadding,
      alignSelf: propAlignSelf,
    };
  }, [propWidth, propPadding, propAlignSelf]);

  const frameInputStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth1,
    };
  }, [propWidth1]);

  const loremIpsumIsStyle: CSSProperties = useMemo(() => {
    return {
      height: propHeight,
    };
  }, [propHeight]);

  return (
    <div
      className="self-stretch flex flex-col items-start justify-start gap-[22px] max-w-full text-left text-lg text-dimgray-700 font-noto-sans"
      style={frameDivStyle}
    >
      <div className="self-stretch h-9 flex flex-col items-start justify-start gap-[8px]">
        <input
          className="w-64 [border:none] [outline:none] bg-[transparent] h-7 flex flex-row items-start justify-start py-0 px-[15px] box-border font-nunito font-semibold text-6xl text-gray-200"
          placeholder="Guaranteed Results"
          type="text"
        />
        <div className="self-stretch h-px relative box-border border-t-[1px] border-solid border-lightgray-200" />
      </div>
      <div className="w-[466px] flex flex-row items-start justify-start py-0 px-[18px] box-border max-w-full">
        <div
          className="flex-1 relative leading-[156.5%] inline-block max-w-full"
          style={loremIpsumIsStyle}
        >
          {loremIpsumIsSimplyDummyTe}
        </div>
      </div>
    </div>
  );
};

export default FrameComponent5;
