import type { NextPage } from "next";
import { useCallback } from "react";
import EnterYourEmail from "./enter-your-email";
import { useRouter } from "next/router";

const Services31: NextPage = () => {
  const router = useRouter();

  const onButtonClick = useCallback(() => {
    router.push("/contact-us");
  }, [router]);

  const onButton1Click = useCallback(() => {
    router.push("/services");
  }, [router]);

  return (
    <div className="self-stretch bg-gray-200 flex flex-col items-center justify-start pt-[151px] pb-[150px] pr-0 pl-[290px] box-border gap-[54px] max-w-full shrink-0 text-left text-mini text-gold font-noto-sans mq925:gap-[54px] mq925:pl-[72px] mq925:pt-16 mq925:pb-[63px] mq925:box-border mq1350:pl-[145px] mq1350:pt-[98px] mq1350:pb-[97px] mq1350:box-border">
      <img
        className="w-[1920px] h-[1153.1px] relative hidden max-w-full"
        alt=""
        src="/background10.svg"
      />
      <div className="w-[885px] flex flex-row items-start justify-start max-w-full">
        <div className="flex flex-col items-center justify-start py-0 pr-5 pl-0 box-border gap-[34px] max-w-full mq925:gap-[34px]">
          <img
            className="w-[88px] h-[88px] relative z-[1]"
            alt=""
            src="/icon-115.svg"
          />
          <div className="flex flex-col items-center justify-start gap-[14px]">
            <div className="relative tracking-[0.14em] leading-[156.5%] uppercase font-medium z-[1]">
              <span>//</span>
              <span className="text-khaki">{` `}</span>
              <span className="text-lightgray-100">02 . OUR VALUES</span>
            </div>
            <h1 className="m-0 relative text-21xl leading-[110.5%] font-semibold font-nunito text-white text-center z-[1] mq450:text-5xl mq450:leading-[27px] mq925:text-13xl mq925:leading-[35px]">
              The core values behind our work
            </h1>
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start py-0 px-0 box-border max-w-full text-center text-6xl text-white font-nunito">
        <div className="w-[1680px] flex flex-row items-center justify-start [row-gap:20px] max-w-[103%] shrink-0 mq1850:flex-wrap">
          <img
            className="h-[70px] w-[70px] relative z-[1]"
            loading="eager"
            alt=""
            src="/subscribe-now.svg"
          />
          <div className="w-[1560px] overflow-x-auto shrink-0 flex flex-row items-start justify-start gap-[30px] max-w-full z-[1]">
            <div className="w-[380px] rounded-11xl [background:linear-gradient(180deg,_#36363e,_#292930)] box-border shrink-0 flex flex-row items-center justify-center py-[50px] px-[39px] max-w-full border-[1px] border-solid border-darkslategray-200 mq925:pt-8 mq925:pb-8 mq925:box-border">
              <div className="flex-1 flex flex-col items-center justify-start gap-[25px]">
                <div className="w-[153px] h-[153px] relative">
                  <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-gray-200 w-full h-full" />
                  <img
                    className="absolute top-[31.5px] left-[31.5px] w-[90px] h-[90px] object-cover z-[1]"
                    alt=""
                    src="/icon-26@2x.png"
                  />
                </div>
                <div className="self-stretch flex flex-col items-center justify-start gap-[14px]">
                  <h3 className="m-0 relative text-inherit leading-[110.5%] font-semibold font-inherit mq450:text-xl mq450:leading-[22px]">
                    Efficiency
                  </h3>
                  <div className="self-stretch flex flex-col items-center justify-start gap-[45px] text-lg text-lightgray-100 font-noto-sans mq450:gap-[45px]">
                    <div className="self-stretch relative leading-[156.5%]">
                      Lorem ipsum dolor sit amet consecte tur adipiscing elit
                      olme do semper dalaracc lacus vel facilisis volutpat est
                      velitolm.
                    </div>
                    <img
                      className="w-20 h-[2.5px] relative"
                      loading="eager"
                      alt=""
                      src="/line1.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
            <EnterYourEmail
              img="/img2@2x.png"
              accountability="Accountability"
            />
            <EnterYourEmail
              img="/img-12@2x.png"
              accountability="Commitment"
              propLeft="unset"
              propRight="109.9px"
            />
            <div className="w-[380px] rounded-11xl [background:linear-gradient(180deg,_#36363e,_#292930)] box-border shrink-0 flex flex-row items-center justify-center py-[50px] px-[39px] relative gap-[10px] max-w-full border-[1px] border-solid border-darkslategray-200 mq925:pt-8 mq925:pb-8 mq925:box-border">
              <div className="flex-1 flex flex-col items-center justify-start gap-[45px] mq450:gap-[45px]">
                <div className="self-stretch flex flex-col items-center justify-start gap-[25px]">
                  <div className="w-[153px] h-[153px] relative">
                    <div className="absolute top-[0px] left-[0.1px] rounded-[50%] bg-gray-200 w-full h-full" />
                    <img
                      className="absolute top-[31.5px] left-[31.6px] w-[90px] h-[90px] object-cover z-[1]"
                      alt=""
                      src="/img-21@2x.png"
                    />
                  </div>
                  <div className="self-stretch flex flex-col items-center justify-start gap-[14px]">
                    <h3 className="m-0 relative text-inherit leading-[110.5%] font-semibold font-inherit mq450:text-xl mq450:leading-[22px]">
                      Team Work
                    </h3>
                    <div className="self-stretch relative text-lg leading-[156.5%] font-noto-sans text-lightgray-100">
                      Lorem ipsum dolor sit amet consecte tur adipiscing elit
                      olme do semper dalaracc lacus vel facilisis volutpat est
                      velitolm.
                    </div>
                  </div>
                </div>
                <img
                  className="w-20 h-[2.5px] relative"
                  alt=""
                  src="/line1.svg"
                />
              </div>
              <div className="h-[70px] w-[70px] absolute my-0 mx-[!important] bottom-[203.7px] left-[-30px] z-[2] flex items-center justify-center">
                <img
                  className="h-full w-full z-[2] object-contain absolute left-[0px] top-[10px] [transform:scale(1.343)]"
                  alt=""
                  src="/-11.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[666px] flex flex-row items-start justify-start max-w-full">
        <div className="flex flex-row items-start justify-center py-0 pr-5 pl-0 box-border gap-[28px] max-w-full z-[1] mq450:flex-wrap">
          <button
            className="cursor-pointer py-[17px] px-[31px] bg-[transparent] rounded-6xs flex flex-row items-center justify-center border-[1.5px] border-solid border-white hover:bg-gainsboro-500 hover:box-border hover:border-[1.5px] hover:border-solid hover:border-gainsboro-100"
            onClick={onButtonClick}
          >
            <div className="relative text-lg leading-[160%] capitalize font-medium font-nunito text-white text-center">
              Get in touch
            </div>
          </button>
          <button
            className="cursor-pointer [border:none] pt-[17px] px-[25px] pb-[18px] bg-white rounded-6xs flex flex-col items-center justify-center"
            onClick={onButton1Click}
          >
            <div className="flex flex-row items-center justify-center gap-[8px]">
              <div className="relative text-lg leading-[160%] capitalize font-medium font-nunito text-gray-200 text-left">
                Our Services
              </div>
              <img
                className="h-3.5 w-3.5 relative object-contain"
                alt=""
                src="/vector-1.svg"
              />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Services31;
