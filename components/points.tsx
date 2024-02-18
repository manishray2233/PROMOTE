import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type PointsType = {
  dolorDuisLoremEnimEuTurpi?: string;
  loremAEgetBlanditAcNequeD?: string;
  pellentesqueNonIntegerAcI?: string;

  /** Style props */
  propMinWidth?: CSSProperties["minWidth"];
};

const Points: NextPage<PointsType> = ({
  dolorDuisLoremEnimEuTurpi,
  loremAEgetBlanditAcNequeD,
  pellentesqueNonIntegerAcI,
  propMinWidth,
}) => {
  const pointsStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  return (
    <div
      className="flex flex-col items-start justify-start gap-[25px] max-w-full text-left text-xl text-dimgray-700 font-noto-sans"
      style={pointsStyle}
    >
      <div className="flex flex-row items-end justify-start gap-[10px]">
        <img className="h-[26px] w-[26px] relative" alt="" src="/vector1.svg" />
        <div className="relative leading-[160%] capitalize mq450:text-base mq450:leading-[26px]">
          {dolorDuisLoremEnimEuTurpi}
        </div>
      </div>
      <div className="flex flex-row items-end justify-start gap-[10px] max-w-full">
        <div className="flex flex-col items-start justify-start pt-0 px-0 pb-0.5">
          <img
            className="w-[26px] h-[26px] relative"
            alt=""
            src="/vector1.svg"
          />
        </div>
        <div className="relative leading-[160%] capitalize mq450:text-base mq450:leading-[26px]">
          {loremAEgetBlanditAcNequeD}
        </div>
      </div>
      <div className="flex flex-row items-center justify-start gap-[10px]">
        <img className="h-[26px] w-[26px] relative" alt="" src="/vector1.svg" />
        <div className="relative leading-[160%] capitalize mq450:text-base mq450:leading-[26px]">
          {pellentesqueNonIntegerAcI}
        </div>
      </div>
    </div>
  );
};

export default Points;
