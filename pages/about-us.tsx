import type { NextPage } from "next";
import { useCallback } from "react";
import Navigation1 from "../components/navigation1";
import Line from "../components/line";
import { useRouter } from "next/router";
import Services31 from "../components/services3";
import Location3 from "../components/location3";
import Location2 from "../components/location2";
import Footer from "../components/footer";

const AboutUs: NextPage = () => {
  const router = useRouter();

  const onButtonClick = useCallback(() => {
    router.push("/contact-us");
  }, [router]);

  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-end justify-start pt-0 px-0 pb-[97px] box-border tracking-[normal]">
      <Navigation1 />
      <Line />
      <section className="self-stretch flex flex-col items-center justify-start pt-0 px-0 pb-[163px] box-border gap-[151px] max-w-full shrink-0 text-left text-mini text-gold font-noto-sans mq925:gap-[151px] mq925:pb-[45px] mq925:box-border mq1350:gap-[151px] mq1350:pb-[69px] mq1350:box-border">
        <div className="w-[1202px] flex flex-row items-start justify-start py-0 pr-0 pl-0.5 box-border max-w-full shrink-0 mq1350:max-w-[calc(100%_-_2px)]">
          <div className="flex-1 flex flex-row items-start justify-start gap-[17px] max-w-full mq1350:flex-wrap">
            <div className="h-[524px] w-[530px] relative min-h-[524px] flex items-center justify-center">
              <img
                className="h-full w-full min-h-[524px] max-w-full object-contain absolute left-[102px] top-[93px] [transform:scale(1.909)] mq1350:flex-1"
                loading="eager"
                alt=""
                src="/image7@2x.png"
              />
            </div>
            <div className="flex-1 flex flex-col items-start justify-start gap-[36px] min-w-[424px] max-w-full mq925:gap-[36px] mq925:min-w-full">
              <div className="self-stretch flex flex-row items-start justify-start py-0 pr-px pl-0 box-border gap-[39px] max-w-full shrink-0 mq925:flex-wrap mq925:gap-[39px]">
                <img
                  className="h-[88px] w-[88px] relative"
                  loading="eager"
                  alt=""
                  src="/icon-7.svg"
                />
                <div className="flex-1 flex flex-col items-start justify-start gap-[15px] min-w-[341px] max-w-full mq450:min-w-full">
                  <div className="w-[173px] relative tracking-[0.14em] leading-[156.5%] uppercase font-medium inline-block box-border pr-5">
                    <span>//</span>
                    <span className="text-khaki">{` `}</span>
                    <span className="text-gray-200">01 . About Us</span>
                  </div>
                  <h1 className="m-0 self-stretch relative text-21xl leading-[110.5%] font-semibold font-nunito text-gray-200 mq450:text-5xl mq450:leading-[27px] mq925:text-13xl mq925:leading-[35px]">
                    The #1 digital marketing services company
                  </h1>
                </div>
              </div>
              <div className="self-stretch h-px relative box-border border-t-[1px] border-solid border-lightgray-200" />
              <div className="self-stretch flex flex-row items-start justify-start py-0 pr-2.5 pl-0 gap-[20px] mq925:flex-wrap">
                <div className="flex-[0.9611] rounded-3xs bg-gray-200 flex flex-row items-center justify-start py-[15px] pr-[25px] pl-[15px] box-border gap-[17px] min-w-[203px] mq450:flex-1">
                  <div className="h-[75px] w-[311.7px] relative rounded-3xs bg-gray-200 hidden" />
                  <img
                    className="h-[45.1px] w-[32.9px] relative object-contain z-[1]"
                    alt=""
                    src="/013-goals@2x.png"
                  />
                  <input
                    className="w-[calc(100%_-_72.9px)] [border:none] [outline:none] font-semibold font-nunito text-6xl bg-[transparent] h-7 flex-1 relative leading-[110.5%] text-white text-left inline-block min-w-[133px] z-[1] mq450:text-xl mq450:leading-[22px]"
                    placeholder="Development Scale"
                    type="text"
                  />
                </div>
                <div className="flex-1 rounded-3xs bg-gray-200 flex flex-row items-end justify-start py-[23px] pr-[13px] pl-4 box-border gap-[13px] min-w-[203px]">
                  <div className="h-[75px] w-[311.7px] relative rounded-3xs bg-gray-200 hidden" />
                  <img
                    className="self-stretch w-[36.9px] relative max-h-full object-contain min-h-[29px] z-[1]"
                    alt=""
                    src="/017-megaphone@2x.png"
                  />
                  <input
                    className="w-[calc(100%_-_65.9px)] [border:none] [outline:none] font-semibold font-nunito text-6xl bg-[transparent] h-7 flex-1 relative leading-[110.5%] text-white text-left inline-block min-w-[140px] z-[1] mq450:text-xl mq450:leading-[22px]"
                    placeholder={`Research & Strategy`}
                    type="text"
                  />
                </div>
              </div>
              <div className="self-stretch relative text-lg leading-[156.5%] text-dimgray-700 pr-1">
                <p className="m-0">{`Lorem ipsum dolors sit non amet consectetur adipiscing elit fringilla aliquam `}</p>
                <p className="m-0">
                  Aliquam vestibulum libero morbi blandit cursus risus. Laoreet
                  non curabitur gravida arcu ac tortor semper vivera nam libero
                  justo laoreet mollis aliquam ut porttitor leo a diam.
                </p>
              </div>
              <button
                className="cursor-pointer pt-[17px] pb-[18px] pr-[29px] pl-[35px] bg-[transparent] rounded-6xs flex flex-row items-center justify-end border-[1.5px] border-solid border-gray-200 hover:bg-dimgray-1000 hover:box-border hover:border-[1.5px] hover:border-solid hover:border-dimgray-500"
                onClick={onButtonClick}
              >
                <div className="relative text-lg leading-[160%] capitalize font-medium font-nunito text-gray-200 text-center">
                  Get in touch
                </div>
              </button>
            </div>
          </div>
        </div>
        <Services31 />
        <div className="flex flex-col items-center justify-start py-0 px-5 box-border gap-[60px] max-w-full shrink-0 text-mediumslateblue mq925:gap-[60px]">
          <div className="flex flex-col items-center justify-start gap-[34px] max-w-full mq925:gap-[34px]">
            <img
              className="w-[88px] h-[88px] relative"
              alt=""
              src="/icon-35.svg"
            />
            <div className="flex flex-col items-center justify-start gap-[14px]">
              <div className="relative tracking-[0.14em] leading-[156.5%] uppercase font-medium">
                <span>//</span>
                <span className="text-khaki">{` `}</span>
                <span className="text-gray-200">03 . OUR TEAM</span>
              </div>
              <h1 className="m-0 relative text-21xl leading-[110.5%] font-semibold font-nunito text-gray-200 text-center mq450:text-5xl mq450:leading-[27px] mq925:text-13xl mq925:leading-[35px]">
                Our team of expert marketers
              </h1>
            </div>
          </div>
          <div className="w-[1200px] h-[574px] overflow-x-auto shrink-0 flex flex-row items-start justify-center gap-[30px] max-w-full">
            <Location3
              image="/image-15@2x.png"
              pippaClarkson="Pippa	Clarkson"
              facebook="/facebook.svg"
              twitter="/twitter.svg"
              instagramIcon={false}
            />
            <Location3
              image="/image-23@2x.png"
              pippaClarkson="Richard	Walsh"
              facebook="/facebook-1.svg"
              twitter="/twitter-1.svg"
              instagramIcon
              propBackgroundColor="unset"
              propBorder="unset"
              propBackground="linear-gradient(111.05deg, #e9f7ff, #ffdbd4 51.05%, #fff3ca)"
              propWidth="174px"
              propAlignSelf="stretch"
              propWidth1="63.9px"
              propHeight="27px"
              propMinHeight="unset"
              propMinHeight1="unset"
              propMinHeight2="unset"
            />
            <Location3
              image="/image-32@2x.png"
              pippaClarkson="Richard	Walsh"
              facebook="/facebook-1.svg"
              twitter="/twitter-1.svg"
              instagramIcon
              propBackgroundColor="#fff"
              propBorder="1px solid #dcdcdc"
              propBackground="unset"
              propWidth="174px"
              propAlignSelf="stretch"
              propWidth1="63.9px"
              propHeight="27px"
              propMinHeight="unset"
              propMinHeight1="unset"
              propMinHeight2="unset"
            />
          </div>
        </div>
      </section>
      <Location2 />
      <Footer logo="/logo6@2x.png" />
    </div>
  );
};

export default AboutUs;
