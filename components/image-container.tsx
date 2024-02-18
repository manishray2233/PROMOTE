import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";

const ImageContainer: NextPage = () => {
  const router = useRouter();

  const onHomeTextClick = useCallback(() => {
    router.push("/");
  }, [router]);

  const onAboutTextClick = useCallback(() => {
    router.push("/about-us");
  }, [router]);

  const onSevicesTextClick = useCallback(() => {
    router.push("/services");
  }, [router]);

  const onBlogTextClick = useCallback(() => {
    router.push("/blog");
  }, [router]);

  return (
    <section className="self-stretch flex flex-col items-center justify-start pt-14 pb-[92px] pr-6 pl-5 box-border relative gap-[96px] min-h-[882px] max-w-full text-left text-mini text-gray-200 font-noto-sans mq850:gap-[96px] mq850:pt-9 mq850:pb-[60px] mq850:box-border mq450:gap-[96px]">
      <div className="w-full h-[calc(100%_-_287px)] absolute my-0 mx-[!important] top-[0px] right-[0px] bottom-[287px] left-[0px] flex items-center justify-center z-[0]">
        <img
          className="w-full h-full max-w-full overflow-hidden max-h-full object-contain absolute left-[0px] top-[5px] [transform:scale(1.018)]"
          alt=""
          src="/banner-image@2x.png"
        />
      </div>
      <img
        className="w-[1200px] h-[559.7px] absolute my-0 mx-[!important] bottom-[-118.7px] left-[calc(50%_-_600px)] object-cover z-[1]"
        loading="eager"
        alt=""
        src="/image4@2x.png"
      />
      <header className="w-[1204px] flex flex-row items-start justify-start py-0 pr-[11px] pl-0 box-border max-w-full text-left text-11xl text-darkslategray-600 font-nunito">
        <div className="flex-1 flex flex-row items-center justify-between gap-[20px] max-w-full">
          <div className="flex flex-row items-center justify-start gap-[7px]">
            <div className="h-[81px] w-[81px] relative">
              <div className="absolute top-[75.2px] left-[6.2px] rounded-[50%] bg-khaki w-[57px] h-[57px] [transform:_rotate(-90deg)] [transform-origin:0_0] z-[1]" />
              <div className="absolute top-[40.59px] left-[81.2px] rounded-[50%] bg-mediumslateblue w-[57.4px] h-[57.4px] [transform:_rotate(135deg)] [transform-origin:0_0] z-[2]" />
            </div>
            <div className="flex flex-col items-start justify-start pt-0 px-0 pb-[9px]">
              <h2 className="m-0 relative text-inherit leading-[160%] font-extrabold font-inherit whitespace-nowrap z-[1]">
                Promote
              </h2>
            </div>
          </div>
          <div className="h-[69px] w-[509px] flex flex-col items-start justify-start py-5 pr-[23px] pl-0 box-border max-w-full text-lg-3 text-gray-200 mq1225:w-[23px]">
            <div className="self-stretch flex flex-row items-start justify-between py-0 pr-0.5 pl-0 gap-[20px] mq1225:hidden">
              <div
                className="relative tracking-[0.01em] leading-[24.44px] capitalize font-medium cursor-pointer z-[1]"
                onClick={onHomeTextClick}
              >
                Home
              </div>
              <div
                className="relative tracking-[0.01em] leading-[24.44px] capitalize cursor-pointer z-[1]"
                onClick={onAboutTextClick}
              >
                about
              </div>
              <div
                className="relative tracking-[0.01em] leading-[24.44px] capitalize font-medium cursor-pointer z-[1]"
                onClick={onSevicesTextClick}
              >
                Sevices
              </div>
              <div className="flex flex-row items-center justify-start gap-[11px]">
                <div className="relative tracking-[0.01em] leading-[24.44px] capitalize font-medium whitespace-nowrap z-[1]">{`Pages `}</div>
                <img
                  className="h-3.5 w-3.5 relative z-[1]"
                  alt=""
                  src="/utility-pages.svg"
                />
              </div>
              <b
                className="relative tracking-[0.01em] leading-[24.44px] capitalize cursor-pointer z-[1]"
                onClick={onBlogTextClick}
              >
                Blog
              </b>
            </div>
          </div>
          <div className="flex flex-row items-center justify-center z-[1] text-lg text-white">
            <div className="rounded-6xs bg-gray-200 flex flex-row items-center justify-center pt-[17px] pb-[18px] pr-[35px] pl-[39px] whitespace-nowrap">
              <div className="relative leading-[160%] capitalize font-medium">{`Get Started `}</div>
            </div>
          </div>
        </div>
      </header>
      <div className="w-[1204px] flex flex-row items-start justify-start py-0 pr-0 pl-1 box-border max-w-full">
        <div className="flex-1 flex flex-col items-start justify-start gap-[22px] max-w-full">
          <div className="flex flex-row items-center justify-start gap-[53px] max-w-full mq450:flex-wrap mq450:gap-[53px]">
            <button className="cursor-pointer py-2 pr-[19px] pl-[21px] bg-[transparent] rounded-40xl flex flex-row items-center justify-center z-[1] border-[0px] border-solid border-gray-200 hover:bg-dimgray-1000 hover:box-border hover:border-[1px] hover:border-solid hover:border-dimgray-500">
              <img
                className="h-[45px] w-[123px] relative rounded-40xl hidden"
                alt=""
                src="/rectangle-141.svg"
              />
              <div className="relative text-lg leading-[160%] capitalize font-medium font-nunito text-gray-200 text-left z-[1]">
                Marketing
              </div>
            </button>
            <div className="relative tracking-[0.14em] leading-[156.5%] uppercase font-medium z-[1]">
              September 1, 2022
            </div>
          </div>
          <h1 className="m-0 self-stretch relative text-26xl leading-[110.5%] font-bold font-nunito z-[1] mq850:text-17xl mq850:leading-[40px] mq450:text-8xl mq450:leading-[30px]">
            <p className="m-0">How to increase your Twitter reach by</p>
            <p className="m-0">over 200% with this simple trick</p>
          </h1>
        </div>
      </div>
    </section>
  );
};

export default ImageContainer;
