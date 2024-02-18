import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type Component3Type = {
  onlineMediaManagement?: string;

  /** Style props */
  propAlignSelf?: CSSProperties["alignSelf"];
  propGap?: CSSProperties["gap"];
  propAlignSelf1?: CSSProperties["alignSelf"];
};

const Component3: NextPage<Component3Type> = ({
  onlineMediaManagement,
  propAlignSelf,
  propGap,
  propAlignSelf1,
}) => {
  const readmorebuttonStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
    };
  }, [propAlignSelf]);

  const contentStyle: CSSProperties = useMemo(() => {
    return {
      gap: propGap,
      alignSelf: propAlignSelf1,
    };
  }, [propGap, propAlignSelf1]);

  return (
    <div
      className="rounded-3xs bg-darkslategray-400 flex flex-col items-center justify-center py-[42px] px-11 box-border opacity-[0.5] max-w-full text-left text-11xl text-white font-nunito mq850:pl-[22px] mq850:pr-[22px] mq850:box-border"
      style={readmorebuttonStyle}
    >
      <div
        className="flex flex-row items-center justify-center gap-[56px] max-w-full mq850:flex-wrap mq850:gap-[56px]"
        style={contentStyle}
      >
        <div className="relative leading-[110.5%] font-semibold inline-block max-w-full mq450:text-lg mq450:leading-[20px] mq850:text-5xl mq850:leading-[27px]">
          {onlineMediaManagement}
        </div>
        <img className="h-[46px] w-[46px] relative" alt="" src="/pattern.svg" />
      </div>
    </div>
  );
};

export default Component3;
