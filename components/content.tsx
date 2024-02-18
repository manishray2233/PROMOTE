import type { NextPage } from "next";

const Content: NextPage = () => {
  return (
    <div className="self-stretch rounded-6xs bg-white shadow-[0px_2px_4px_rgba(146,_146,_146,_0.25)] flex flex-col items-center justify-start py-12 px-[37px] box-border gap-[19px] max-w-full text-left text-6xl text-gray-200 font-noto-sans">
      <div className="self-stretch flex flex-row items-start justify-start py-0 pr-1 pl-0 box-border max-w-full">
        <div className="flex-1 flex flex-row items-center justify-between gap-[20px] max-w-full mq850:flex-wrap">
          <div className="flex flex-row items-end justify-start gap-[2px]">
            <div className="h-[37px] w-[63px] relative">
              <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-limegreen w-[29px] h-[29px]" />
              <img
                className="absolute top-[0px] left-[26px] rounded-sm w-[37px] h-[37px]"
                alt=""
                src="/frame.svg"
              />
            </div>
            <div className="flex flex-col items-start justify-start pt-0 px-0 pb-[3px]">
              <h3 className="m-0 relative text-inherit leading-[156.5%] font-bold font-inherit mq450:text-xl mq450:leading-[31px]">
                Company
              </h3>
            </div>
          </div>
          <img
            className="h-[31.1px] w-[158.8px] relative"
            alt=""
            src="/star-1.svg"
          />
        </div>
      </div>
      <div className="self-stretch h-0 flex flex-row items-start justify-start py-0 pr-2 pl-0 box-border max-w-full">
        <div className="h-px flex-1 relative box-border max-w-full border-t-[1px] border-solid border-whitesmoke-500" />
      </div>
      <div className="self-stretch flex flex-col items-center justify-center relative text-lg text-dimgray-700">
        <div className="self-stretch relative leading-[156.5%]">{`Lorem Ipsum has been the industry's standard from dummy text ever since the unknown printer to galley of type and make a type specimen book. `}</div>
        <img
          className="w-[22px] h-[22px] absolute my-0 mx-[!important] right-[95px] bottom-[2px] object-contain z-[1]"
          alt=""
          src="/image-3@2x.png"
        />
      </div>
    </div>
  );
};

export default Content;
