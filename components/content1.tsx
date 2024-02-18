import type { NextPage } from "next";

export type Content1Type = {
  icon?: string;
  sanFranciscoUSA?: string;
};

const Content1: NextPage<Content1Type> = ({ icon, sanFranciscoUSA }) => {
  return (
    <div className="flex-1 rounded-11xl bg-white shadow-[0px_2px_4px_rgba(146,_146,_146,_0.25)] flex flex-row items-center justify-center py-[50px] px-[31px] box-border min-w-[284px] max-w-full text-left text-6xl text-gray-200 font-nunito mq450:pt-8 mq450:pb-8 mq450:box-border">
      <div className="flex-1 flex flex-col items-start justify-start pt-0 px-0 pb-0 gap-[22px]">
        <img
          className="w-[76.5px] h-[57.3px] relative object-contain"
          alt=""
          src={icon}
        />
        <div className="self-stretch flex flex-col items-start justify-start gap-[16px]">
          <h3 className="m-0 relative text-inherit leading-[110.5%] font-semibold font-inherit mq450:text-xl mq450:leading-[22px]">
            {sanFranciscoUSA}
          </h3>
          <div className="self-stretch flex flex-col items-start justify-start gap-[21px] text-xl text-dimgray-700 font-noto-sans">
            <div className="h-[62px] relative leading-[156.5%] inline-block mq450:text-base mq450:leading-[25px]">
              <p className="m-0">1650 Page. San Francisco,</p>
              <p className="m-0">California(CA), 94117</p>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[18px] font-nunito">
              <div className="flex flex-row items-start justify-start gap-[10px]">
                <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
                  <img
                    className="w-[22px] h-[22px] relative"
                    alt=""
                    src="/vector-22.svg"
                  />
                </div>
                <div className="relative leading-[110.5%] font-medium mq450:text-base mq450:leading-[18px]">
                  (414) 809 - 2567
                </div>
              </div>
              <div className="self-stretch flex flex-row items-center justify-start gap-[10px]">
                <img
                  className="h-[16.5px] w-[22px] relative"
                  alt=""
                  src="/icon-64.svg"
                />
                <div className="relative leading-[110.5%] font-medium whitespace-nowrap mq450:text-base mq450:leading-[18px]">
                  Contact@marketingagency.com
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content1;
