import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type IconPagesType = {
  icon?: string;
  ourServices?: string;
  weHaveExtensiveExperience?: string;
  socialMediaMarketing?: string;

  /** Style props */
  propColor?: CSSProperties["color"];
  propColor1?: CSSProperties["color"];
  propColor2?: CSSProperties["color"];
  propColor3?: CSSProperties["color"];
};

const IconPages: NextPage<IconPagesType> = ({
  icon,
  ourServices,
  weHaveExtensiveExperience,
  socialMediaMarketing,
  propColor,
  propColor1,
  propColor2,
  propColor3,
}) => {
  const span2Style: CSSProperties = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  const span3Style: CSSProperties = useMemo(() => {
    return {
      color: propColor1,
    };
  }, [propColor1]);

  const ourServicesStyle: CSSProperties = useMemo(() => {
    return {
      color: propColor2,
    };
  }, [propColor2]);

  const weHaveExtensiveContainerStyle: CSSProperties = useMemo(() => {
    return {
      color: propColor3,
    };
  }, [propColor3]);

  return (
    <div className="flex flex-col items-center justify-start gap-[34px] max-w-full text-left text-mini text-gold font-noto-sans mq850:gap-[34px]">
      <img
        className="w-[88px] h-[88px] relative z-[1]"
        loading="eager"
        alt=""
        src={icon}
      />
      <div className="flex flex-col items-center justify-start gap-[14px]">
        <div className="relative tracking-[0.14em] leading-[156.5%] uppercase font-medium z-[1]">
          <span style={span2Style}>//</span>
          <span className="text-khaki" style={span3Style}>{` `}</span>
          <span className="text-lightgray-100" style={ourServicesStyle}>
            {ourServices}
          </span>
        </div>
        <h1
          className="m-0 relative text-21xl leading-[110.5%] font-semibold font-nunito text-white text-center z-[1] mq450:text-5xl mq450:leading-[27px] mq850:text-13xl mq850:leading-[35px]"
          style={weHaveExtensiveContainerStyle}
        >
          <p className="m-0">{weHaveExtensiveExperience}</p>
          <p className="m-0">{socialMediaMarketing}</p>
        </h1>
      </div>
    </div>
  );
};

export default IconPages;
