import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";

const Navigation1: NextPage = () => {
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
    <section className="self-stretch h-[606px] flex flex-row items-start justify-start py-0 pr-0 pl-px box-border max-w-full text-left text-51xl text-gray-200 font-nunito">
      <div className="self-stretch flex-1 flex flex-col items-center justify-start py-[66px] pr-[35px] pl-5 box-border relative gap-[252px] max-w-full z-[2] mq450:gap-[252px] mq925:gap-[252px] mq925:pt-[43px] mq925:pb-[43px] mq925:box-border mq1350:gap-[252px]">
        <img
          className="w-full h-full absolute my-0 mx-[!important] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full object-cover"
          alt=""
          src="/banner-image@2x.png"
        />
        <header className="w-[1193px] flex flex-row items-center justify-between gap-[20px] max-w-full text-left text-11xl text-darkslategray-600 font-nunito">
          <div className="flex flex-row items-center justify-start gap-[7px]">
            <div className="h-[81px] w-[81px] relative">
              <div className="absolute top-[75.2px] left-[6.2px] rounded-[50%] bg-khaki w-[57px] h-[57px] [transform:_rotate(-90deg)] [transform-origin:0_0] z-[3]" />
              <div className="absolute top-[40.59px] left-[81.2px] rounded-[50%] bg-mediumslateblue w-[57.4px] h-[57.4px] [transform:_rotate(135deg)] [transform-origin:0_0] z-[4]" />
            </div>
            <div className="flex flex-col items-start justify-start pt-0 px-0 pb-[9px]">
              <h2 className="m-0 relative text-inherit leading-[160%] font-extrabold font-inherit whitespace-nowrap z-[3]">
                Promote
              </h2>
            </div>
          </div>
          <div className="h-[69px] w-[509px] flex flex-col items-start justify-start py-5 pr-[23px] pl-0 box-border max-w-full text-lg-3 text-gray-200 mq925:w-[23px]">
            <div className="self-stretch flex flex-row items-start justify-between py-0 pr-px pl-0 gap-[20px] mq925:hidden">
              <div
                className="relative tracking-[0.01em] leading-[24.44px] capitalize font-medium cursor-pointer z-[3]"
                onClick={onHomeTextClick}
              >
                Home
              </div>
              <b
                className="relative tracking-[0.01em] leading-[24.44px] capitalize cursor-pointer z-[3]"
                onClick={onAboutTextClick}
              >
                about
              </b>
              <div
                className="relative tracking-[0.01em] leading-[24.44px] capitalize font-medium cursor-pointer z-[3]"
                onClick={onSevicesTextClick}
              >
                Sevices
              </div>
              <div className="flex flex-row items-center justify-start gap-[12px]">
                <div className="relative tracking-[0.01em] leading-[24.44px] capitalize font-medium whitespace-nowrap z-[3]">{`Pages `}</div>
                <img
                  className="h-3.5 w-3.5 relative z-[3]"
                  alt=""
                  src="/utility-pages.svg"
                />
              </div>
              <div
                className="relative tracking-[0.01em] leading-[24.44px] capitalize font-medium cursor-pointer z-[3]"
                onClick={onBlogTextClick}
              >
                Blog
              </div>
            </div>
          </div>
          <div className="flex flex-row items-center justify-center z-[3] text-lg text-white">
            <div className="rounded-6xs bg-gray-200 flex flex-row items-center justify-center pt-[17px] pb-[18px] pr-[35px] pl-[39px] whitespace-nowrap">
              <div className="relative leading-[160%] capitalize font-medium">{`Get Started `}</div>
            </div>
          </div>
        </header>
        <div className="flex flex-row items-start justify-start py-0 pr-0 pl-8 box-border max-w-full">
          <h1 className="m-0 relative text-inherit leading-[110.5%] font-extrabold font-inherit z-[1] mq450:text-23xl mq450:leading-[46px] mq925:text-37xl mq925:leading-[62px]">
            <span>{`About `}</span>
            <span className="text-mediumslateblue">Us</span>
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Navigation1;
