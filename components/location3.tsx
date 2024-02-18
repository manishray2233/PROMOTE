import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type Location3Type = {
  image?: string;
  pippaClarkson?: string;
  facebook?: string;
  twitter?: string;
  instagramIcon?: boolean;

  /** Style props */
  propBackgroundColor?: CSSProperties["backgroundColor"];
  propBorder?: CSSProperties["border"];
  propBackground?: CSSProperties["background"];
  propWidth?: CSSProperties["width"];
  propAlignSelf?: CSSProperties["alignSelf"];
  propWidth1?: CSSProperties["width"];
  propHeight?: CSSProperties["height"];
  propMinHeight?: CSSProperties["minHeight"];
  propMinHeight1?: CSSProperties["minHeight"];
  propMinHeight2?: CSSProperties["minHeight"];
};

const Location3: NextPage<Location3Type> = ({
  image,
  pippaClarkson,
  facebook,
  twitter,
  instagramIcon,
  propBackgroundColor,
  propBorder,
  propBackground,
  propWidth,
  propAlignSelf,
  propWidth1,
  propHeight,
  propMinHeight,
  propMinHeight1,
  propMinHeight2,
}) => {
  const locationStyle: CSSProperties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
      border: propBorder,
      background: propBackground,
    };
  }, [propBackgroundColor, propBorder, propBackground]);

  const content3Style: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const nameStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
    };
  }, [propAlignSelf]);

  const socialMediaStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth1,
      height: propHeight,
    };
  }, [propWidth1, propHeight]);

  const facebookIconStyle: CSSProperties = useMemo(() => {
    return {
      minHeight: propMinHeight,
    };
  }, [propMinHeight]);

  const twitterIconStyle: CSSProperties = useMemo(() => {
    return {
      minHeight: propMinHeight1,
    };
  }, [propMinHeight1]);

  const instagramIconStyle: CSSProperties = useMemo(() => {
    return {
      minHeight: propMinHeight2,
    };
  }, [propMinHeight2]);

  return (
    <div
      className="self-stretch w-[380px] rounded-11xl bg-white box-border shrink-0 flex flex-row items-start justify-center py-[25px] px-6 text-center text-6xl text-gray-200 font-nunito border-[1px] border-solid border-gainsboro-400 mq925:pt-5 mq925:pb-5 mq925:box-border"
      style={locationStyle}
    >
      <div className="h-[499px] flex-1 flex flex-row items-start justify-center max-w-full">
        <div className="self-stretch flex-1 flex flex-col items-center justify-start gap-[30px] max-w-full">
          <img
            className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover"
            alt=""
            src={image}
          />
          <div
            className="flex flex-col items-center justify-start gap-[24px]"
            style={content3Style}
          >
            <img className="w-20 h-[2.5px] relative" alt="" src="/line-4.svg" />
            <div
              className="flex flex-col items-center justify-start gap-[8px]"
              style={nameStyle}
            >
              <h3 className="m-0 relative text-inherit leading-[114.5%] font-bold font-inherit whitespace-nowrap mq450:text-xl mq450:leading-[23px]">
                {pippaClarkson}
              </h3>
              <div className="relative text-lg leading-[150%] font-noto-sans text-dimgray-700">
                Lead Manager
              </div>
            </div>
            <div
              className="flex flex-row items-start justify-center gap-[10px]"
              style={socialMediaStyle}
            >
              <img
                className="h-[27px] w-[27px] relative rounded-381xl overflow-hidden shrink-0 min-h-[27px]"
                loading="eager"
                alt=""
                src={facebook}
                style={facebookIconStyle}
              />
              <img
                className="h-[27px] w-[27px] relative rounded-381xl overflow-hidden shrink-0 min-h-[27px]"
                loading="eager"
                alt=""
                src={twitter}
                style={twitterIconStyle}
              />
              {!instagramIcon && (
                <img
                  className="h-[27px] w-[27px] relative rounded-381xl overflow-hidden shrink-0 hidden min-h-[27px]"
                  alt=""
                  src="/instagram.svg"
                  style={instagramIconStyle}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location3;
