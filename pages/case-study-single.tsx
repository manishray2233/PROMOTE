import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import DesignerName from "../components/designer-name";
import HomePageLinks from "../components/home-page-links";
import VerticalSpacer from "../components/vertical-spacer";
import Texttestimonial from "../components/texttestimonial";
import Imageplaceholder from "../components/imageplaceholder";
import Content from "../components/content";
import Footer from "../components/footer";

const CaseStudySingle: NextPage = () => {
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
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-center justify-start pt-14 px-0 pb-0 box-border gap-[101px] tracking-[normal] mq850:gap-[101px] mq1225:gap-[101px]">
      <header className="w-[1208px] flex flex-row items-start justify-start py-0 pr-[15px] pl-0 box-border max-w-full text-left text-11xl text-darkslategray-600 font-nunito mq1225:max-w-[calc(100%_-_15px)]">
        <div className="flex-1 flex flex-row items-center justify-between gap-[20px] max-w-full">
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
          <div className="h-[69px] w-[509px] flex flex-col items-start justify-start py-5 pr-[21px] pl-0 box-border max-w-full text-lg-3 text-gray-200 mq1225:w-[21px]">
            <div className="self-stretch flex flex-row items-start justify-between py-0 pr-1 pl-0 gap-[20px] mq1225:hidden">
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
              <div
                className="relative tracking-[0.01em] leading-[24.44px] capitalize font-medium cursor-pointer"
                onClick={onSevicesTextClick}
              >
                Sevices
              </div>
              <div className="flex flex-row items-center justify-start gap-[11px]">
                <b className="relative tracking-[0.01em] leading-[24.44px] capitalize whitespace-nowrap">{`Pages `}</b>
                <img
                  className="h-3.5 w-3.5 relative"
                  alt=""
                  src="/utility-pages.svg"
                />
              </div>
              <div
                className="relative tracking-[0.01em] leading-[24.44px] capitalize cursor-pointer"
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
        </div>
      </header>
      <DesignerName />
      <HomePageLinks />
      <VerticalSpacer />
      <section className="w-[1239px] flex flex-col items-start justify-start pt-0 px-5 pb-[49px] box-border gap-[43px] max-w-full text-left text-xl text-gray-200 font-nunito mq850:gap-[43px] mq850:pb-8 mq850:box-border">
        <Texttestimonial />
        <div className="self-stretch flex flex-row items-end justify-start gap-[26px] max-w-full mq1225:flex-wrap">
          <Imageplaceholder />
          <div className="flex-1 rounded-6xs [background:linear-gradient(151.16deg,_#fff8f8,_#f5f7ff)] flex flex-col items-center justify-start py-8 px-[26px] box-border gap-[37px] max-w-full mq850:gap-[37px] mq450:pt-[21px] mq450:pb-[21px] mq450:box-border">
            <Content />
            <div className="self-stretch flex flex-row items-start justify-start">
              <div className="flex flex-row items-start justify-start gap-[13px]">
                <img
                  className="h-[57px] w-[57px] relative object-contain"
                  alt=""
                  src="/image-4@2x.png"
                />
                <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
                  <div className="flex flex-row items-start justify-start relative">
                    <b className="relative leading-[156.5%] mq450:text-base mq450:leading-[25px]">
                      Peeter pawl
                    </b>
                    <div className="absolute my-0 mx-[!important] bottom-[-22px] left-[0px] text-lg leading-[156.5%] font-noto-sans text-dimgray-700">
                      Designer
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer logo="/logo2@2x.png" />
    </div>
  );
};

export default CaseStudySingle;
