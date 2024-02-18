import type { NextPage } from "next";

const Imageplaceholder: NextPage = () => {
  return (
    <div className="flex-1 rounded-6xs [background:linear-gradient(151.16deg,_#fff8f8,_#f5f7ff)] flex flex-col items-center justify-start py-8 px-[26px] box-border gap-[37px] max-w-full text-left text-6xl text-gray-200 font-noto-sans mq850:gap-[37px] mq450:pt-[21px] mq450:pb-[21px] mq450:box-border">
      <div className="self-stretch rounded-6xs bg-white shadow-[0px_2px_4px_rgba(146,_146,_146,_0.25)] flex flex-col items-center justify-start py-12 px-[37px] box-border gap-[19px] max-w-full">
        <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[7px] pl-0 box-border max-w-full">
          <div className="flex-1 flex flex-row items-center justify-between gap-[20px] max-w-full mq850:flex-wrap">
            <div className="flex flex-row items-start justify-start gap-[5px]">
              <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
                <div className="w-9 h-[33px] relative">
                  <div className="absolute top-[-0.11px] left-[19.64px] rounded-7xl bg-mediumslateblue w-[32.9px] h-[8.8px] [transform:_rotate(60deg)] [transform-origin:0_0]" />
                  <div className="absolute top-[3.9px] left-[24.1px] rounded-7xl bg-darkslategray-100 w-[32.9px] h-[8.8px] [transform:_rotate(120deg)] [transform-origin:0_0] z-[1]" />
                  <div className="absolute top-[22.5px] left-[1px] rounded-7xl bg-hotpink w-[34px] h-[9px] z-[2]" />
                </div>
              </div>
              <h3 className="m-0 relative text-inherit leading-[156.5%] font-bold font-inherit mq450:text-xl mq450:leading-[31px]">
                Company
              </h3>
            </div>
            <img
              className="h-[31.1px] w-[158.8px] relative"
              loading="eager"
              alt=""
              src="/star.svg"
            />
          </div>
        </div>
        <div className="self-stretch h-px flex flex-row items-start justify-start py-0 pr-2 pl-0 box-border max-w-full">
          <div className="h-px flex-1 relative box-border max-w-full border-t-[1px] border-solid border-whitesmoke-500" />
        </div>
        <div className="self-stretch flex flex-col items-center justify-center relative text-lg text-dimgray-700">
          <div className="self-stretch relative leading-[156.5%]">{`Lorem Ipsum has been the industry's standard from dummy text ever since the unknown printer to galley of type and make a type specimen book. `}</div>
          <img
            className="w-[22px] h-[22px] absolute my-0 mx-[!important] right-[95px] bottom-[2px] object-contain z-[1]"
            alt=""
            src="/image-1@2x.png"
          />
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start text-xl font-nunito">
        <div className="flex flex-row items-center justify-start gap-[13px] mq450:flex-wrap">
          <img
            className="h-[57px] w-[57px] relative object-contain"
            alt=""
            src="/image-2@2x.png"
          />
          <div className="flex flex-col items-start justify-start">
            <div className="h-[25px] flex flex-row items-start justify-start pt-0 px-0 pb-0 box-border">
              <b className="mb-[-6px] relative leading-[156.5%] inline-block mq450:text-base mq450:leading-[25px]">
                John Carter
              </b>
            </div>
            <div className="relative text-lg leading-[156.5%] font-noto-sans text-dimgray-700">
              Marketing Lead at Google
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Imageplaceholder;
