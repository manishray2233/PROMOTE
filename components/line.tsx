import type { NextPage } from "next";

const Line: NextPage = () => {
  return (
    <section className="self-stretch flex flex-row items-start justify-start pt-0 px-px pb-[200px] box-border max-w-full text-left text-21xl text-white font-nunito mq450:pb-[130px] mq450:box-border">
      <div className="flex-1 bg-gray-200 flex flex-row items-center justify-center p-[102px] box-border max-w-full mq925:pl-[25px] mq925:pr-[25px] mq925:box-border mq1350:pl-[51px] mq1350:pr-[51px] mq1350:box-border">
        <img
          className="h-[250px] w-[1920px] relative hidden max-w-full"
          alt=""
          src="/background9.svg"
        />
        <div className="w-[1202px] flex flex-row items-start justify-between gap-[20px] max-w-full z-[1] mq1350:flex-wrap">
          <div className="flex flex-row items-start justify-start gap-[19px]">
            <div className="relative leading-[110.5%] font-semibold mq450:text-5xl mq450:leading-[27px] mq925:text-13xl mq925:leading-[35px]">
              <span>325</span>
              <span className="text-mediumslateblue">+</span>
            </div>
            <div className="relative text-mini tracking-[0.14em] leading-[156.5%] uppercase font-medium font-noto-sans text-lightgray-100">
              <p className="m-0">{`Clients `}</p>
              <p className="m-0">Worldwide</p>
            </div>
          </div>
          <div className="flex flex-row items-center justify-start gap-[12px]">
            <div className="relative leading-[110.5%] font-semibold mq450:text-5xl mq450:leading-[27px] mq925:text-13xl mq925:leading-[35px]">
              <span>975</span>
              <span className="text-crimson">+</span>
            </div>
            <div className="relative text-mini tracking-[0.14em] leading-[156.5%] uppercase font-medium font-noto-sans text-lightgray-100">
              <p className="m-0">{`Projects `}</p>
              <p className="m-0">Completed</p>
            </div>
          </div>
          <div className="flex flex-row items-center justify-start gap-[16px]">
            <div className="relative leading-[110.5%] font-semibold mq450:text-5xl mq450:leading-[27px] mq925:text-13xl mq925:leading-[35px]">
              <span>70</span>
              <span className="text-khaki">+</span>
            </div>
            <div className="relative text-mini tracking-[0.14em] leading-[156.5%] uppercase font-medium font-noto-sans text-lightgray-100">
              <p className="m-0">{`Team `}</p>
              <p className="m-0">Members</p>
            </div>
          </div>
          <div className="flex flex-row items-center justify-start gap-[9px]">
            <div className="relative leading-[110.5%] font-semibold mq450:text-5xl mq450:leading-[27px] mq925:text-13xl mq925:leading-[35px]">
              <span>85m</span>
              <span className="text-springgreen">+</span>
            </div>
            <div className="relative text-mini tracking-[0.14em] leading-[156.5%] uppercase font-medium font-noto-sans text-lightgray-100">
              <p className="m-0">Revenue</p>
              <p className="m-0">Generated</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Line;
