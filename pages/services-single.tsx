import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import Services2 from "../components/services2";
import TextFollowsSocial from "../components/text-follows-social";
import Proccess2 from "../components/proccess2";
import Footer from "../components/footer";

const ServicesSingle: NextPage = () => {
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
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-center justify-start pt-14 px-0 pb-0 box-border gap-[150px] tracking-[normal] mq850:gap-[150px] mq1225:gap-[150px]">
      <section className="w-[1248px] flex flex-row items-start justify-start pt-0 pb-[23px] pr-[23px] pl-5 box-border max-w-full text-left text-51xl text-gray-200 font-nunito">
        <div className="flex-1 flex flex-col items-start justify-start gap-[49px] max-w-full mq850:gap-[49px]">
          <header className="w-[1193px] flex flex-row items-center justify-between gap-[20px] max-w-full text-left text-11xl text-darkslategray-600 font-nunito">
            <div className="flex flex-row items-center justify-start gap-[7px]">
              <div className="h-[81px] w-[81px] relative">
                <div className="absolute top-[75.2px] left-[6.2px] rounded-[50%] bg-khaki w-[57px] h-[57px] [transform:_rotate(-90deg)] [transform-origin:0_0]" />
                <div className="absolute top-[40.59px] left-[81.2px] rounded-[50%] bg-mediumslateblue w-[57.4px] h-[57.4px] [transform:_rotate(135deg)] [transform-origin:0_0] z-[1]" />
              </div>
              <div className="flex flex-col items-start justify-start pt-0 px-0 pb-[9px]">
                <h2 className="m-0 relative text-inherit leading-[160%] font-extrabold font-inherit whitespace-nowrap">
                  Promote
                </h2>
              </div>
            </div>
            <div className="h-[69px] w-[509px] flex flex-col items-start justify-start py-5 pr-[19px] pl-0 box-border max-w-full text-lg-3 text-gray-200 mq1225:w-[19px]">
              <div className="self-stretch flex flex-row items-start justify-between gap-[20px] mq1225:hidden">
                <div
                  className="relative tracking-[0.01em] leading-[24.44px] capitalize font-medium cursor-pointer"
                  onClick={onHomeTextClick}
                >
                  Home
                </div>
                <div
                  className="relative tracking-[0.01em] leading-[24.44px] capitalize cursor-pointer"
                  onClick={onAboutTextClick}
                >
                  about
                </div>
                <b
                  className="relative tracking-[0.01em] leading-[24.44px] capitalize cursor-pointer"
                  onClick={onSevicesTextClick}
                >
                  Sevices
                </b>
                <div className="flex flex-row items-center justify-start gap-[11px]">
                  <div className="relative tracking-[0.01em] leading-[24.44px] capitalize font-medium whitespace-nowrap">{`Pages `}</div>
                  <img
                    className="h-3.5 w-3.5 relative"
                    alt=""
                    src="/utility-pages.svg"
                  />
                </div>
                <div
                  className="relative tracking-[0.01em] leading-[24.44px] capitalize font-medium cursor-pointer"
                  onClick={onBlogTextClick}
                >
                  Blog
                </div>
              </div>
            </div>
            <div className="flex flex-row items-center justify-center text-lg text-white">
              <div className="rounded-6xs bg-gray-200 flex flex-row items-center justify-center pt-[17px] pb-[18px] pr-[35px] pl-[39px] whitespace-nowrap">
                <div className="relative leading-[160%] capitalize font-medium">{`Get Started `}</div>
              </div>
            </div>
          </header>
          <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-1 box-border max-w-full">
            <div className="flex-1 flex flex-row items-center justify-start gap-[17px] max-w-full mq1225:flex-wrap">
              <div className="w-[553px] flex flex-col items-start justify-start py-5 px-0 box-border gap-[30px] min-w-[553px] max-w-full mq850:min-w-full mq1225:flex-1">
                <h1 className="m-0 self-stretch relative text-inherit leading-[110.5%] font-bold font-inherit mq450:text-23xl mq450:leading-[46px] mq850:text-37xl mq850:leading-[62px]">
                  <p className="m-0">Social Media</p>
                  <p className="m-0">Marketing</p>
                </h1>
                <div className="self-stretch relative text-lg leading-[156.5%] font-noto-sans text-dimgray-700">
                  <p className="m-0">
                    Lorem Ipsum is simply dummy text of the printing and
                    industry
                  </p>
                  <p className="m-0">
                    ftyuu Ipsum has been the industry's not only five centuries,
                    but
                  </p>
                  <p className="m-0">
                    also the leap into electronic typesetting.
                  </p>
                </div>
              </div>
              <div className="h-[569px] flex-1 relative min-w-[410px] flex items-center justify-center">
                <img
                  className="h-full flex-1 max-w-full overflow-hidden min-w-[410px] object-contain absolute left-[-33px] top-[84px] w-full [transform:scale(2.247)] mq850:min-w-full"
                  loading="eager"
                  alt=""
                  src="/image6@2x.png"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Services2 />
      <section className="w-[1240px] flex flex-row items-start justify-start py-0 px-5 box-border gap-[64px] max-w-full mq450:gap-[64px] mq850:gap-[64px] mq1225:flex-wrap">
        <div className="h-[477px] w-[483px] relative min-h-[477px] flex items-center justify-center">
          <img
            className="h-full w-full min-h-[477px] max-w-full object-contain absolute left-[114px] top-[125px] [transform:scale(2.224)] mq1225:flex-1"
            alt=""
            src="/image-14@2x.png"
          />
        </div>
        <TextFollowsSocial />
      </section>
      <Proccess2 />
      <Footer logo="/logo5@2x.png" />
    </div>
  );
};

export default ServicesSingle;
