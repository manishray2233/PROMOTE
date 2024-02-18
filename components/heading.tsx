import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type HeadingType = {
  icon?: string;
  services?: string;
  highImpactServicesToTakeY?: string;

  /** Style props */
  propWidth?: CSSProperties["width"];
  propAlignSelf?: CSSProperties["alignSelf"];
  propMinWidth?: CSSProperties["minWidth"];
  propColor?: CSSProperties["color"];
  propColor1?: CSSProperties["color"];
};

const Heading: NextPage<HeadingType> = ({
  icon,
  services,
  highImpactServicesToTakeY,
  propWidth,
  propAlignSelf,
  propMinWidth,
  propColor,
  propColor1,
}) => {
  const headingStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
      alignSelf: propAlignSelf,
    };
  }, [propWidth, propAlignSelf]);

  const titleStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  const servicesStyle: CSSProperties = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  const highImpactServicesToStyle: CSSProperties = useMemo(() => {
    return {
      color: propColor1,
    };
  }, [propColor1]);

  return (
    <div
      className="h-[] w-[747px] flex flex-row items-start justify-start gap-[39px] text-left text-mini text-gold font-noto-sans"
      style={headingStyle}
    >
      <img
        className="h-[88px] w-[88px] relative"
        loading="eager"
        alt=""
        src={icon}
      />
      <div
        className="h-[] w-[620px] flex flex-col items-start justify-start gap-[15px]"
        style={titleStyle}
      >
        <div className="w-[142px] h-[23px] relative tracking-[0.14em] leading-[156.5%] uppercase font-medium inline-block">
          <span>//</span>
          <span className="text-khaki">{` `}</span>
          <span className="text-lightgray-100" style={servicesStyle}>
            {services}
          </span>
        </div>
        <h1
          className="m-0 w-[620px] h-[88px] relative text-21xl leading-[110.5%] font-semibold font-nunito text-white inline-block"
          style={highImpactServicesToStyle}
        >
          {highImpactServicesToTakeY}
        </h1>
      </div>
    </div>
  );
};

export default Heading;
