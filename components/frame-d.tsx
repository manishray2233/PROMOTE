import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type FrameDType = {
  icon?: string;
  proccess?: string;
  aSimpleYetPowerfulAndEffi?: string;

  /** Style props */
  propFlex?: CSSProperties["flex"];
  propAlignSelf?: CSSProperties["alignSelf"];
  propAlignSelf1?: CSSProperties["alignSelf"];
  propHeight?: CSSProperties["height"];
  propDisplay?: CSSProperties["display"];
};

const FrameD: NextPage<FrameDType> = ({
  icon,
  proccess,
  aSimpleYetPowerfulAndEffi,
  propFlex,
  propAlignSelf,
  propAlignSelf1,
  propHeight,
  propDisplay,
}) => {
  const frameDStyle: CSSProperties = useMemo(() => {
    return {
      flex: propFlex,
    };
  }, [propFlex]);

  const subscribeButtonStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
    };
  }, [propAlignSelf]);

  const aSimpleYetStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: propAlignSelf1,
      height: propHeight,
      display: propDisplay,
    };
  }, [propAlignSelf1, propHeight, propDisplay]);

  return (
    <div
      className="h-[250px] w-[525px] flex flex-col items-center justify-start gap-[34px] text-left text-mini text-mediumslateblue font-noto-sans"
      style={frameDStyle}
    >
      <img className="w-[88px] h-[88px] relative z-[1]" alt="" src={icon} />
      <div
        className="w-[525px] h-32 flex flex-col items-center justify-start gap-[14px]"
        style={subscribeButtonStyle}
      >
        <div className="w-[149px] h-[23px] relative tracking-[0.14em] leading-[156.5%] uppercase font-medium inline-block z-[1]">
          <span>//</span>
          <span className="text-khaki">{` `}</span>
          <span className="text-gray-200">{proccess}</span>
        </div>
        <h1
          className="m-0 w-[525px] h-[91px] relative text-21xl leading-[110.5%] font-semibold font-nunito text-gray-200 whitespace-pre-wrap text-center inline-block shrink-0 z-[1]"
          style={aSimpleYetStyle}
        >
          {aSimpleYetPowerfulAndEffi}
        </h1>
      </div>
    </div>
  );
};

export default FrameD;
