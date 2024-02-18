import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type HowToIncreaseReachType = {
  icon?: string;
  articles?: string;
  browseOurContentOn?: string;
  growthMarketing?: string;

  /** Style props */
  propWidth?: CSSProperties["width"];
  propMinWidth?: CSSProperties["minWidth"];
  propMinWidth1?: CSSProperties["minWidth"];
  propColor?: CSSProperties["color"];
  propAlignSelf?: CSSProperties["alignSelf"];
};

const HowToIncreaseReach: NextPage<HowToIncreaseReachType> = ({
  icon,
  articles,
  browseOurContentOn,
  growthMarketing,
  propWidth,
  propMinWidth,
  propMinWidth1,
  propColor,
  propAlignSelf,
}) => {
  const howToIncreaseReachStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
      minWidth: propMinWidth,
    };
  }, [propWidth, propMinWidth]);

  const ellipseShapeStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth1,
    };
  }, [propMinWidth1]);

  const span1Style: CSSProperties = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  const browseOurContentContainerStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
    };
  }, [propAlignSelf]);

  return (
    <div
      className="w-[541px] flex flex-row items-start justify-start gap-[39px] min-w-[541px] max-w-full text-left text-mini text-mediumslateblue font-noto-sans mq850:flex-wrap mq850:gap-[39px] mq850:min-w-full mq1225:flex-1"
      style={howToIncreaseReachStyle}
    >
      <img
        className="h-[88px] w-[88px] relative"
        loading="eager"
        alt=""
        src={icon}
      />
      <div
        className="flex-1 flex flex-col items-start justify-start gap-[15px] min-w-[269px] max-w-full"
        style={ellipseShapeStyle}
      >
        <div className="relative tracking-[0.14em] leading-[156.5%] uppercase font-medium">
          <span>//</span>
          <span
            className="text-mediumaquamarine-100"
            style={span1Style}
          >{` `}</span>
          <span className="text-gray-200">{articles}</span>
        </div>
        <h1
          className="m-0 relative text-21xl leading-[110.5%] font-semibold font-nunito text-gray-200 mq450:text-5xl mq450:leading-[27px] mq850:text-13xl mq850:leading-[35px]"
          style={browseOurContentContainerStyle}
        >
          <p className="m-0">{browseOurContentOn}</p>
          <p className="m-0">{growthMarketing}</p>
        </h1>
      </div>
    </div>
  );
};

export default HowToIncreaseReach;
