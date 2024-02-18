import type { NextPage } from "next";

export type Component4Type = {
  icon?: string;
  socialMediaMarketing?: string;
};

const Component4: NextPage<Component4Type> = ({
  icon,
  socialMediaMarketing,
}) => {
  return (
    <div className="w-[352px] rounded-11xl [background:linear-gradient(180deg,_#36363e,_#292930)] box-border shrink-0 flex flex-row items-center justify-center py-[41px] px-[38px] text-left text-6xl text-white font-nunito border-[1px] border-solid border-darkslategray-200 mq850:pt-[173px] mq850:pb-[27px] mq850:box-border">
      <div className="flex-1 flex flex-col items-start justify-start gap-[26px]">
        <img
          className="w-[153px] h-[153px] relative object-contain"
          alt=""
          src={icon}
        />
        <div className="self-stretch flex flex-col items-start justify-start gap-[14px]">
          <h3 className="m-0 relative text-inherit leading-[110.5%] font-semibold font-inherit mq450:text-xl mq450:leading-[22px]">
            {socialMediaMarketing}
          </h3>
          <div className="self-stretch relative text-lg leading-[156.5%] font-noto-sans text-lightgray-100">{`Lorem ipsum dolor sit amet, ea mundi malorum cum, ocurreret reprehendunt. `}</div>
        </div>
        <button className="cursor-pointer [border:none] p-0 bg-[transparent] w-[266px] flex flex-row items-center justify-center">
          <div className="flex-1 rounded-6xs flex flex-row items-center justify-center pt-[17px] px-[17px] pb-[18px] border-[1px] border-solid border-dimgray-800">
            <div className="w-[126px] flex flex-row items-center justify-start gap-[8px]">
              <div className="flex-1 relative text-lg leading-[160%] capitalize font-medium font-nunito text-dimgray-900 text-center">
                Read More
              </div>
              <img
                className="h-3.5 w-3.5 relative object-contain"
                alt=""
                src="/vector-2.svg"
              />
            </div>
          </div>
        </button>
      </div>
    </div>
  );
};

export default Component4;
