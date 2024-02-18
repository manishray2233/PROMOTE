import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type EnterYourEmailType = {
  img?: string;
  accountability?: string;

  /** Style props */
  propLeft?: CSSProperties["left"];
  propRight?: CSSProperties["right"];
};

const EnterYourEmail: NextPage<EnterYourEmailType> = ({
  img,
  accountability,
  propLeft,
  propRight,
}) => {
  const lineIconStyle: CSSProperties = useMemo(() => {
    return {
      left: propLeft,
      right: propRight,
    };
  }, [propLeft, propRight]);

  return (
    <div className="w-[380px] rounded-11xl [background:linear-gradient(180deg,_#36363e,_#292930)] box-border shrink-0 flex flex-row items-center justify-center py-[50px] px-[39px] max-w-full text-center text-6xl text-white font-nunito border-[1px] border-solid border-darkslategray-200 mq925:pt-8 mq925:pb-8 mq925:box-border">
      <div className="flex-1 flex flex-col items-center justify-start pt-0 px-0 pb-[45px] relative gap-[14px] mq450:pb-[29px] mq450:box-border">
        <div className="w-[153px] flex flex-row items-start justify-start pt-0 px-0 pb-[11px] box-border">
          <div className="h-[153px] flex-1 relative">
            <div className="absolute top-[0px] left-[-0.5px] rounded-[50%] bg-gray-200 w-full h-full" />
            <img
              className="absolute top-[31.5px] left-[31.1px] w-[90px] h-[90px] object-cover z-[1]"
              loading="eager"
              alt=""
              src={img}
            />
          </div>
        </div>
        <h3 className="m-0 relative text-inherit leading-[110.5%] font-semibold font-inherit mq450:text-xl mq450:leading-[22px]">
          {accountability}
        </h3>
        <div className="self-stretch relative text-lg leading-[156.5%] font-noto-sans text-lightgray-100">
          Lorem ipsum dolor sit amet consecte tur adipiscing elit olme do semper
          dalaracc lacus vel facilisis volutpat est velitolm.
        </div>
        <img
          className="w-20 h-[2.5px] absolute my-0 mx-[!important] bottom-[-2.5px] left-[calc(50%_-_40px)]"
          alt=""
          src="/line1.svg"
          style={lineIconStyle}
        />
      </div>
    </div>
  );
};

export default EnterYourEmail;
