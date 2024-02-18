import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type FrameComponent1Type = {
  icon?: string;
  contactUs?: string;
  letsBuildSomethingAwesome?: string;

  /** Style props */
  propPadding?: CSSProperties["padding"];
  propTextAlign?: CSSProperties["textAlign"];
  propColor?: CSSProperties["color"];
  propDisplay?: CSSProperties["display"];
};

const FrameComponent1: NextPage<FrameComponent1Type> = ({
  icon,
  contactUs,
  letsBuildSomethingAwesome,
  propPadding,
  propTextAlign,
  propColor,
  propDisplay,
}) => {
  const frameDiv1Style: CSSProperties = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const contactUsStyle: CSSProperties = useMemo(() => {
    return {
      textAlign: propTextAlign,
    };
  }, [propTextAlign]);

  const spanStyle: CSSProperties = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  const letsBuildSomethingStyle: CSSProperties = useMemo(() => {
    return {
      display: propDisplay,
    };
  }, [propDisplay]);

  return (
    <div
      className="flex flex-col items-center justify-start pt-0 px-0 pb-2.5 box-border gap-[34px] max-w-full text-left text-mini text-mediumslateblue font-noto-sans mq850:gap-[34px]"
      style={frameDiv1Style}
    >
      <img
        className="w-[88px] h-[88px] relative"
        loading="eager"
        alt=""
        src={icon}
      />
      <div className="flex flex-col items-center justify-start gap-[14px]">
        <div
          className="relative tracking-[0.14em] leading-[156.5%] uppercase font-medium"
          style={contactUsStyle}
        >
          <span style={spanStyle}>//</span>
          <span className="text-khaki">{` `}</span>
          <span className="text-gray-200">{contactUs}</span>
        </div>
        <h1
          className="m-0 relative text-21xl leading-[110.5%] font-semibold font-nunito text-gray-200 text-center mq450:text-5xl mq450:leading-[27px] mq850:text-13xl mq850:leading-[35px]"
          style={letsBuildSomethingStyle}
        >
          {letsBuildSomethingAwesome}
        </h1>
      </div>
    </div>
  );
};

export default FrameComponent1;
