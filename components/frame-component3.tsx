import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import Component3 from "./component3";

const FrameComponent3: NextPage = () => {
  const router = useRouter();

  const onBtnClick = useCallback(() => {
    router.push("/case-study");
  }, [router]);

  return (
    <section className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[39px] box-border max-w-full text-left text-mini text-white font-nunito">
      <div className="flex-1 bg-gray-200 flex flex-col items-center justify-start py-[161px] pr-5 pl-[22px] box-border gap-[100px] max-w-full mq450:gap-[100px] mq850:gap-[100px] mq850:pt-[68px] mq850:pb-[68px] mq850:box-border mq1225:pt-[105px] mq1225:pb-[105px] mq1225:box-border">
        <img
          className="w-[1920px] h-[1382px] relative hidden max-w-full"
          alt=""
          src="/background1.svg"
        />
        <div className="w-[1202px] flex flex-row items-start justify-start py-0 pr-0.5 pl-0 box-border max-w-full text-lightgray-100 font-noto-sans">
          <div className="flex-1 flex flex-row items-center justify-between gap-[20px] max-w-full mq1225:flex-wrap">
            <div className="w-[845px] flex flex-row items-start justify-start gap-[39px] max-w-full mq450:gap-[39px] mq850:flex-wrap">
              <img
                className="h-[88px] w-[88px] relative z-[1]"
                alt=""
                src="/icon-12.svg"
              />
              <div className="flex-1 flex flex-col items-start justify-start min-w-[467px] max-w-full mq850:min-w-full">
                <div className="h-[46px] relative tracking-[0.14em] leading-[156.5%] uppercase font-medium inline-block z-[1]">
                  <p className="m-0">
                    <span className="text-gold">//</span>
                    <span className="text-khaki">{` `}</span>
                    <span>05 . CASE STUDIES</span>
                  </p>
                </div>
                <div className="self-stretch h-[124px] flex flex-row items-start justify-start pt-0 px-0 pb-0 box-border max-w-full text-21xl text-white font-nunito">
                  <h1 className="mt-[-8px] m-0 h-[132px] flex-1 relative text-inherit leading-[110.5%] font-semibold font-inherit inline-block max-w-full z-[1] mq450:text-5xl mq450:leading-[27px] mq850:text-13xl mq850:leading-[35px]">
                    1520 -Project Done. Browse our latest case study on
                    Marketing Agency
                  </h1>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start pt-1 px-0 pb-0">
              <button
                className="cursor-pointer [border:none] pt-[15px] pb-[18px] pr-6 pl-5 bg-white rounded-6xs flex flex-row items-center justify-start gap-[7px] z-[1]"
                onClick={onBtnClick}
              >
                <img
                  className="h-[62px] w-[205px] relative rounded-6xs hidden"
                  alt=""
                  src="/rectangle-14.svg"
                />
                <div className="relative text-lg leading-[160%] capitalize font-medium font-nunito text-gray-200 text-left z-[1]">
                  More cacestudys
                </div>
                <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
                  <img
                    className="w-3.5 h-3.5 relative object-contain z-[1]"
                    alt=""
                    src="/vector-9.svg"
                  />
                </div>
              </button>
            </div>
          </div>
        </div>
        <div className="w-[1202px] flex flex-row items-start justify-start py-0 pr-0.5 pl-0 box-border max-w-full text-11xl">
          <div className="flex-1 flex flex-row items-center justify-start gap-[27px] max-w-full z-[1] mq1225:flex-wrap">
            <div className="w-[559px] flex flex-col items-start justify-start gap-[25px] min-w-[559px] max-w-full mq850:min-w-full mq1225:flex-1">
              <Component3 onlineMediaManagement="Online Media Management" />
              <div className="self-stretch rounded-3xs bg-darkslategray-400 shadow-[0px_18px_50px_rgba(0,_0,_0,_0.25)] box-border flex flex-col items-start justify-start py-[41px] pr-[50px] pl-12 max-w-full text-lg text-khaki font-noto-sans border-[1px] border-solid border-dimgray-300 mq850:pl-6 mq850:pr-[25px] mq850:box-border">
                <div className="self-stretch flex flex-col items-start justify-start gap-[30px] max-w-full">
                  <div className="self-stretch flex flex-row items-start justify-between gap-[20px] mq850:flex-wrap">
                    <div className="flex flex-col items-start justify-start gap-[9px]">
                      <div className="relative leading-[156.5%]">
                        Branding / Marketing
                      </div>
                      <div className="relative text-11xl leading-[110.5%] font-semibold font-nunito text-white mq450:text-lg mq450:leading-[20px] mq850:text-5xl mq850:leading-[27px]">
                        Experiential Marketing
                      </div>
                    </div>
                    <img
                      className="h-[46px] w-[46px] relative"
                      alt=""
                      src="/button.svg"
                    />
                  </div>
                  <div className="w-[420px] relative leading-[156.5%] text-lightgray-100 inline-block max-w-full">
                    Lorem Ipsum has been the industry's standard from dummy text
                    ever since the unknown printer to galley of type and make.
                  </div>
                </div>
              </div>
              <Component3
                onlineMediaManagement="Email Marketing "
                propAlignSelf="stretch"
                propGap="20px"
                propAlignSelf1="stretch"
              />
            </div>
            <img
              className="h-[546px] flex-1 relative max-w-full overflow-hidden object-contain min-w-[399px] mq850:min-w-full"
              alt=""
              src="/image-5@2x.png"
            />
          </div>
        </div>
        <div className="w-[1202px] flex flex-col items-start justify-start gap-[68px] max-w-full text-21xl mq450:gap-[68px] mq850:gap-[68px]">
          <div className="self-stretch h-px relative box-border z-[1] border-t-[1px] border-solid border-dimgray-400" />
          <div className="self-stretch flex flex-row items-start justify-between gap-[20px] z-[1] mq1225:flex-wrap">
            <div className="flex flex-row items-start justify-start gap-[19px]">
              <div className="relative leading-[110.5%] font-semibold mq450:text-5xl mq450:leading-[27px] mq850:text-13xl mq850:leading-[35px]">
                <span>325</span>
                <span className="text-mediumslateblue">+</span>
              </div>
              <div className="relative text-mini tracking-[0.14em] leading-[156.5%] uppercase font-medium font-noto-sans text-lightgray-100">
                <p className="m-0">{`Clients `}</p>
                <p className="m-0">Worldwide</p>
              </div>
            </div>
            <div className="flex flex-row items-center justify-start gap-[12px]">
              <div className="relative leading-[110.5%] font-semibold mq450:text-5xl mq450:leading-[27px] mq850:text-13xl mq850:leading-[35px]">
                <span>975</span>
                <span className="text-crimson">+</span>
              </div>
              <div className="relative text-mini tracking-[0.14em] leading-[156.5%] uppercase font-medium font-noto-sans text-lightgray-100">
                <p className="m-0">{`Projects `}</p>
                <p className="m-0">Completed</p>
              </div>
            </div>
            <div className="flex flex-row items-center justify-start gap-[16px]">
              <div className="relative leading-[110.5%] font-semibold mq450:text-5xl mq450:leading-[27px] mq850:text-13xl mq850:leading-[35px]">
                <span>70</span>
                <span className="text-khaki">+</span>
              </div>
              <div className="relative text-mini tracking-[0.14em] leading-[156.5%] uppercase font-medium font-noto-sans text-lightgray-100">
                <p className="m-0">{`Team `}</p>
                <p className="m-0">Members</p>
              </div>
            </div>
            <div className="flex flex-row items-center justify-start gap-[9px]">
              <div className="relative leading-[110.5%] font-semibold mq450:text-5xl mq450:leading-[27px] mq850:text-13xl mq850:leading-[35px]">
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
      </div>
    </section>
  );
};

export default FrameComponent3;
