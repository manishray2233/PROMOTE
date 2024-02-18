import type { NextPage } from "next";

export type TextPlanType = {
  icon?: string;
  contentStrategy?: string;
};

const TextPlan: NextPage<TextPlanType> = ({ icon, contentStrategy }) => {
  return (
    <div className="w-[380px] rounded-11xl [background:linear-gradient(180deg,_#36363e,_#292930)] box-border flex flex-row items-center justify-center py-[49px] px-[39px] max-w-full text-center text-6xl text-white font-nunito border-[1px] border-solid border-darkslategray-200 mq450:pt-8 mq450:pb-8 mq450:box-border">
      <div className="flex-1 flex flex-col items-center justify-start gap-[25px]">
        <div className="w-[153px] h-[153px] relative">
          <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-gray-200 w-full h-full" />
          <img
            className="absolute top-[31.5px] left-[31.5px] w-[90px] h-[90px] object-cover z-[1]"
            alt=""
            src={icon}
          />
        </div>
        <div className="self-stretch flex flex-col items-center justify-start gap-[14px]">
          <h3 className="m-0 relative text-inherit leading-[110.5%] font-semibold font-inherit mq450:text-xl mq450:leading-[22px]">
            {contentStrategy}
          </h3>
          <div className="self-stretch relative text-lg leading-[156.5%] font-noto-sans text-lightgray-100">
            Lorem ipsum dolor sit amet consecte tur adipiscing elit olme do
            semper dalaracc lacus vel facilisis volutpat est velitolm.
          </div>
        </div>
      </div>
    </div>
  );
};

export default TextPlan;
