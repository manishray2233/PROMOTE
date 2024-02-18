import type { NextPage } from "next";

const DesignerName: NextPage = () => {
  return (
    <section className="w-[1240px] flex flex-col items-center justify-start pt-0 px-5 pb-5 box-border gap-[40px] max-w-full text-left text-mini text-gray-200 font-noto-sans mq850:gap-[40px]">
      <div className="flex flex-col items-center justify-start gap-[22px] max-w-full shrink-0">
        <div className="w-[293px] flex flex-row items-center justify-start py-0 pr-0.5 pl-0 box-border gap-[16.5px]">
          <img
            className="h-[40.4px] flex-1 relative max-w-full overflow-hidden object-contain"
            alt=""
            src="/image-1002@2x.png"
          />
          <img className="h-0.5 w-[15px] relative" alt="" src="/logo3.svg" />
          <div className="flex-1 relative tracking-[0.14em] leading-[156.5%] uppercase font-medium shrink-0">
            April 1, 2023
          </div>
        </div>
        <h1 className="m-0 relative text-26xl leading-[110.5%] font-bold font-nunito text-center mq850:text-17xl mq850:leading-[40px] mq450:text-8xl mq450:leading-[30px]">
          <p className="m-0">
            How we helped Google to increase conversion rate on
          </p>
          <p className="m-0">{`G-Suite by 25% in less than 30 days `}</p>
        </h1>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[18px] gap-[40px] shrink-0 text-6xl font-nunito mq850:gap-[40px]">
        <img
          className="self-stretch h-[559.7px] relative max-w-full overflow-hidden shrink-0 object-cover"
          loading="eager"
          alt=""
          src="/image2@2x.png"
        />
        <div className="self-stretch flex flex-row items-start justify-between py-0 pr-[3px] pl-0 gap-[20px] mq850:flex-wrap">
          <div className="flex flex-col items-start justify-start gap-[1px]">
            <h3 className="m-0 relative text-inherit leading-[101.2%] font-semibold font-inherit mq450:text-xl mq450:leading-[20px]">
              Client
            </h3>
            <div className="relative text-xl leading-[160%] capitalize font-noto-sans text-dimgray-700 mq450:text-base mq450:leading-[26px]">
              YouTube
            </div>
          </div>
          <div className="flex flex-col items-start justify-start gap-[1px]">
            <h3 className="m-0 relative text-inherit leading-[101.2%] font-semibold font-inherit mq450:text-xl mq450:leading-[20px]">
              Services
            </h3>
            <div className="relative text-xl leading-[160%] capitalize font-noto-sans text-dimgray-700 mq450:text-base mq450:leading-[26px]">
              Paid Advertising
            </div>
          </div>
          <div className="flex flex-col items-start justify-start gap-[1px]">
            <h3 className="m-0 relative text-inherit leading-[101.2%] font-semibold font-inherit mq450:text-xl mq450:leading-[20px]">
              Platforms
            </h3>
            <div className="relative text-xl leading-[160%] capitalize font-noto-sans text-dimgray-700 mq450:text-base mq450:leading-[26px]">
              YouTube Creators
            </div>
          </div>
          <div className="flex flex-col items-start justify-start gap-[4px]">
            <h3 className="m-0 relative text-inherit leading-[101.2%] font-semibold font-inherit mq450:text-xl mq450:leading-[20px]">
              Results
            </h3>
            <div className="relative text-21xl leading-[110.5%] font-semibold text-mediumslateblue mq850:text-13xl mq850:leading-[35px] mq450:text-5xl mq450:leading-[27px]">
              85m+
            </div>
            <div className="relative text-xl leading-[160%] capitalize font-noto-sans text-dimgray-700 mq450:text-base mq450:leading-[26px]">
              More Visitors Per Year
            </div>
          </div>
        </div>
      </div>
      <img
        className="self-stretch relative max-w-full overflow-hidden max-h-full shrink-0"
        alt=""
        src="/vector.svg"
      />
    </section>
  );
};

export default DesignerName;
