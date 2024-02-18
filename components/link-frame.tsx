import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import Component6 from "./component6";

const LinkFrame: NextPage = () => {
  const router = useRouter();

  const onButtonClick = useCallback(() => {
    router.push("/services-single");
  }, [router]);

  const onButton2Click = useCallback(() => {
    router.push("/services-single");
  }, [router]);

  const onButton3Click = useCallback(() => {
    router.push("/services-single");
  }, [router]);

  const onButton4Click = useCallback(() => {
    router.push("/services-single");
  }, [router]);

  const onButton5Click = useCallback(() => {
    router.push("/services-single");
  }, [router]);

  const onButton6Click = useCallback(() => {
    router.push("/services-single");
  }, [router]);

  return (
    <section className="self-stretch flex flex-row items-start justify-start pt-0 pb-[109px] pr-0 pl-px box-border max-w-full shrink-0 text-center text-mini text-gold font-noto-sans mq1225:pb-[46px] mq1225:box-border mq450:pb-[30px] mq450:box-border">
      <div className="flex-1 bg-gray-200 flex flex-row items-center justify-center p-[153px] box-border max-w-full shrink-0 mq1225:py-[99px] mq1225:px-[76px] mq1225:box-border mq450:pt-[42px] mq450:pb-[42px] mq450:box-border mq850:py-16 mq850:px-[38px] mq850:box-border">
        <img
          className="h-[1623.6px] w-[1920px] relative hidden max-w-full"
          alt=""
          src="/background7.svg"
        />
        <div className="flex flex-col items-center justify-start gap-[52px] max-w-full z-[1] mq850:gap-[52px]">
          <div className="flex flex-col items-center justify-start gap-[34px] max-w-full mq450:gap-[34px]">
            <img
              className="w-[88px] h-[88px] relative"
              loading="eager"
              alt=""
              src="/icon3.svg"
            />
            <div className="flex flex-col items-center justify-start gap-[15px]">
              <div className="relative tracking-[0.14em] leading-[156.5%] uppercase font-medium">
                <span>//</span>
                <span className="text-khaki">{` `}</span>
                <span className="text-lightgray-100">01 . Services</span>
              </div>
              <div className="relative text-21xl leading-[110.5%] font-semibold font-nunito text-white mq450:text-5xl mq450:leading-[27px] mq850:text-13xl mq850:leading-[35px]">
                <p className="m-0">
                  High-impact services to take your business
                </p>
                <p className="m-0">to the next level</p>
              </div>
            </div>
          </div>
          <div className="w-[1200px] overflow-x-auto flex flex-row flex-wrap items-start justify-start gap-[67px_68px] min-h-[1017px] max-w-full text-left text-6xl text-white font-nunito mq450:gap-[67px_68px] mq850:gap-[67px_68px]">
            <Component6
              icon="/icon-114@2x.png"
              socialMediaMarketing="Social Media Marketing"
              getInTouchCTA="/vector-1.svg"
              onButtonClick={onButtonClick}
            />
            <Component6
              icon="/icon-25@2x.png"
              socialMediaMarketing="Paid Advertising"
              getInTouchCTA="/vector-2.svg"
              propBorder="1px solid #535355"
              propBackgroundColor="transparent"
              propColor="#525255"
              onButtonClick={onButton2Click}
            />
            <Component6
              icon="/icon-34@2x.png"
              socialMediaMarketing="Advanced Analytics"
              getInTouchCTA="/vector-2.svg"
              propBorder="1px solid #535355"
              propBackgroundColor="transparent"
              propColor="#525255"
              onButtonClick={onButton3Click}
            />
            <Component6
              icon="/icon-44@2x.png"
              socialMediaMarketing="SEO Optimization"
              getInTouchCTA="/vector-2.svg"
              propBorder="1px solid #535355"
              propBackgroundColor="transparent"
              propColor="#525255"
              onButtonClick={onButton4Click}
            />
            <Component6
              icon="/icon-53@2x.png"
              socialMediaMarketing="Funnel Optimization"
              getInTouchCTA="/vector-2.svg"
              propBorder="1px solid #535355"
              propBackgroundColor="transparent"
              propColor="#525255"
              onButtonClick={onButton5Click}
            />
            <Component6
              icon="/icon-63@2x.png"
              socialMediaMarketing="Condent Marketing"
              getInTouchCTA="/vector-2.svg"
              propBorder="1px solid #535355"
              propBackgroundColor="transparent"
              propColor="#525255"
              onButtonClick={onButton6Click}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LinkFrame;
