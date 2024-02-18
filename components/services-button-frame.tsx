import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type ServicesButtonFrameType = {
  icon?: string;
  headerGroupPlaceholder?: string;
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

const ServicesButtonFrame: NextPage<ServicesButtonFrameType> = ({
  icon,
  headerGroupPlaceholder,
  loremIpsumIsSimplyDummyTe,
  propWidth,
  propPadding,
  propAlignSelf,
  propWidth1,
  propWidth2,
  propAlignSelf1,
  propHeight,
}) => {
  const servicesButtonFrameStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
      padding: propPadding,
      alignSelf: propAlignSelf,
    };
  }, [propWidth, propPadding, propAlignSelf]);

  const headerGroupStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth1,
    };
  }, [propWidth1]);

  const logoIconStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth2,
      alignSelf: propAlignSelf1,
    };
  }, [propWidth2, propAlignSelf1]);

  const loremIpsumIs1Style: CSSProperties = useMemo(() => {
    return {
      height: propHeight,
    };
  }, [propHeight]);

  return (
    <div
      className="w-[570px] h-[131px] flex flex-row items-start justify-start pt-0 px-0 pb-2 box-border text-left text-lg text-dimgray-700 font-noto-sans"
      style={servicesButtonFrameStyle}
    >
      <img className="h-[86px] w-[86px] relative z-[1]" alt="" src={icon} />
      <div className="h-[123px] w-[484px] flex flex-col items-start justify-start pt-[7px] px-0 pb-0 box-border">
        <div className="w-[484px] h-[116px] flex flex-col items-start justify-start gap-[22px]">
          <div className="w-[484px] h-9 flex flex-col items-start justify-start gap-[8px]">
            <input
              className="w-[241px] [border:none] [outline:none] bg-[transparent] h-7 flex flex-row items-start justify-start py-0 px-[17px] box-border font-nunito font-semibold text-6xl text-gray-200"
              placeholder={headerGroupPlaceholder}
              type="text"
              style={headerGroupStyle}
            />
            <div className="w-[484px] h-0 relative box-border border-t-[1px] border-solid border-lightgray-200" />
          </div>
          <div
            className="w-[448px] h-[58px] flex flex-row items-start justify-start py-0 pr-0 pl-[18px] box-border"
            style={logoIconStyle}
          >
            <div
              className="h-[58px] w-[430px] relative leading-[156.5%] inline-block shrink-0"
              style={loremIpsumIs1Style}
            >
              {loremIpsumIsSimplyDummyTe}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesButtonFrame;
