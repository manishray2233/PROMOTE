import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";

const Banner: NextPage = () => {
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
    <div className="self-stretch flex flex-col items-center justify-start pt-[51px] pb-[355px] pr-[35px] pl-5 box-border relative gap-[189px] max-w-full z-[1] text-left text-mini text-gold font-noto-sans mq450:gap-[189px] mq850:gap-[189px] mq850:pt-[21px] mq850:pb-[150px] mq850:box-border mq1225:gap-[189px] mq1225:pt-[33px] mq1225:pb-[231px] mq1225:box-border">
      <img
        className="w-full h-full absolute my-0 mx-[!important] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden shrink-0 object-cover"
        alt=""
        src="/banner-image@2x.png"
      />
      <header className="w-[1193px] flex flex-row items-center justify-between gap-[20px] max-w-full text-left text-11xl text-darkslategray-600 font-nunito">
        <div className="flex flex-row items-center justify-start gap-[7px]">
          <div className="h-[81px] w-[81px] relative">
            <div className="absolute top-[75.2px] left-[6.2px] rounded-[50%] bg-khaki w-[57px] h-[57px] [transform:_rotate(-90deg)] [transform-origin:0_0] z-[2]" />
            <div className="absolute top-[40.59px] left-[81.2px] rounded-[50%] bg-mediumslateblue w-[57.4px] h-[57.4px] [transform:_rotate(135deg)] [transform-origin:0_0] z-[3]" />
          </div>
          <div className="flex flex-col items-start justify-start pt-0 px-0 pb-[9px]">
            <h2 className="m-0 relative text-inherit leading-[160%] font-extrabold font-inherit whitespace-nowrap z-[2]">
              Promote
            </h2>
          </div>
        </div>
        <div className="h-[69px] w-[509px] flex flex-col items-start justify-start py-5 pr-[23px] pl-0 box-border max-w-full text-lg-3 text-gray-200 mq1225:w-[23px]">
          <div className="self-stretch flex flex-row items-start justify-between py-0 pr-0.5 pl-0 gap-[20px] mq1225:hidden">
            <b
              className="relative tracking-[0.01em] leading-[24.44px] capitalize cursor-pointer z-[2]"
              onClick={onHomeTextClick}
            >
              Home
            </b>
            <div
              className="relative tracking-[0.01em] leading-[24.44px] capitalize font-medium cursor-pointer z-[2]"
              onClick={onAboutTextClick}
            >
              about
            </div>
            <div
              className="relative tracking-[0.01em] leading-[24.44px] capitalize font-medium cursor-pointer z-[2]"
              onClick={onSevicesTextClick}
            >
              Sevices
            </div>
            <div className="flex flex-row items-center justify-start gap-[12px]">
              <div className="relative tracking-[0.01em] leading-[24.44px] capitalize font-medium whitespace-nowrap z-[2]">{`Pages `}</div>
              <img
                className="h-3.5 w-3.5 relative z-[2]"
                alt=""
                src="/utility-pages.svg"
              />
            </div>
            <div
              className="relative tracking-[0.01em] leading-[24.44px] capitalize font-medium cursor-pointer z-[2]"
              onClick={onBlogTextClick}
            >
              Blog
            </div>
          </div>
        </div>
        <div className="flex flex-row items-center justify-center z-[2] text-lg text-white">
          <div className="rounded-6xs bg-gray-200 flex flex-row items-center justify-center pt-[17px] pb-[18px] pr-[35px] pl-[39px] whitespace-nowrap">
            <div className="relative leading-[160%] capitalize font-medium">{`Get Started `}</div>
          </div>
        </div>
      </header>
      <div className="w-[1185px] flex flex-row items-start justify-start max-w-full">
        <div className="w-[740px] flex flex-col items-start justify-start gap-[34px] max-w-full mq850:gap-[34px]">
          <div className="self-stretch flex flex-col items-start justify-start gap-[28px] max-w-full">
            <div className="relative tracking-[0.14em] leading-[156.5%] uppercase font-medium z-[1]">
              <span>//</span>
              <span className="text-gray-200">Agency</span>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-1.5 box-border max-w-full text-51xl text-gray-200 font-nunito">
              <h1 className="m-0 flex-1 relative text-inherit leading-[110.5%] font-extrabold font-inherit inline-block max-w-full z-[1] mq450:text-23xl mq450:leading-[46px] mq850:text-37xl mq850:leading-[62px]">
                <span>{`A fully integrated
digital `}</span>
                <span className="text-mediumslateblue">marketing</span>
                <span> agency</span>
              </h1>
            </div>
            <div className="w-[593px] relative text-lg leading-[156.5%] text-dimgray-700 inline-block max-w-full z-[1]">
              Lorem ipsum dolor sit amet, ea mundi malorum cum, ocurreret
              reprehendunt ius ex. Ut vis mazim erroribus forensibus.
            </div>
          </div>
          <div className="w-[375px] flex flex-row flex-wrap items-start justify-start gap-[20px] max-w-full">
            <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-row items-center justify-center z-[1]">
              <div className="rounded-6xs bg-gray-200 flex flex-row items-center justify-end pt-[17px] pb-[18px] pr-[33px] pl-[39px] whitespace-nowrap">
                <div className="relative text-lg leading-[160%] capitalize font-medium font-nunito text-white text-center">
                  Our Services
                </div>
              </div>
            </button>
            <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex-1 flex flex-row items-center justify-center min-w-[112px] z-[1]">
              <div className="flex-1 flex flex-row items-center justify-center">
                <div className="flex-1 rounded-6xs flex flex-row items-center justify-end pt-[17px] pb-[18px] pr-[33px] pl-[39px] border-[1.5px] border-solid border-gray-200">
                  <div className="relative text-lg leading-[160%] capitalize font-medium font-nunito text-gray-200 text-center whitespace-nowrap">
                    Get Started
                  </div>
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
