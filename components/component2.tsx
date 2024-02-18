import type { NextPage } from "next";
import FrameComponent2 from "./frame-component2";

const Component2: NextPage = () => {
  return (
    <div className="flex-[0.9517] rounded-3xs bg-whitesmoke-100 box-border flex flex-col items-center justify-start py-[45px] pr-[34px] pl-[38px] gap-[30px] min-w-[292px] max-w-full text-center text-6xl text-gray-200 font-nunito border-[1px] border-solid border-gainsboro-200 mq450:gap-[30px] mq450:flex-1 mq850:pt-[29px] mq850:pb-[29px] mq850:box-border">
      <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[34px] pl-0">
        <div className="flex-1 flex flex-col items-center justify-start">
          <div className="flex flex-row items-start justify-start py-0 pr-[23px] pl-0">
            <h3 className="m-0 relative text-inherit leading-[110.5%] font-bold font-inherit mq450:text-xl mq450:leading-[22px]">
              Starter
            </h3>
          </div>
          <div className="self-stretch flex flex-row items-start justify-center gap-[35px] mt-[-4px] text-31xl mq450:flex-wrap mq450:gap-[35px]">
            <img
              className="h-[51.6px] w-[49.1px] relative object-cover"
              loading="eager"
              alt=""
              src="/img@2x.png"
            />
            <div className="flex-1 flex flex-col items-start justify-start pt-[11px] px-0 pb-0 box-border min-w-[128px]">
              <div className="self-stretch flex flex-row items-end justify-start gap-[11px]">
                <div className="flex-1 flex flex-col items-start justify-start pt-0 px-0 pb-[5px]">
                  <div className="relative leading-[110.5%] font-black whitespace-nowrap mq450:text-11xl mq450:leading-[33px] mq850:text-21xl mq850:leading-[44px]">
                    <p className="m-0">$29</p>
                  </div>
                </div>
                <div className="relative text-lg leading-[244%] font-noto-sans text-dimgray-700">
                  /Per Month
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch h-0 flex flex-row items-start justify-start py-0 pr-3 pl-px box-border">
        <img
          className="flex-1 relative max-w-full overflow-clip max-h-[unset]"
          alt=""
          src="/line.svg"
        />
      </div>
      <FrameComponent2 />
      <button className="cursor-pointer [border:none] pt-[17px] px-[17px] pb-[18px] bg-gray-200 self-stretch rounded-6xs flex flex-row items-center justify-center whitespace-nowrap hover:bg-dimgray-500">
        <div className="relative text-lg leading-[160%] capitalize font-medium font-nunito text-white text-center">
          Purchase Plan
        </div>
      </button>
    </div>
  );
};

export default Component2;
