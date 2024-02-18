import type { NextPage } from "next";
import Banner from "../components/banner";
import Services from "../components/services";
import FrameComponent5 from "../components/frame-component5";
import FrameComponent4 from "../components/frame-component4";
import Proccess from "../components/proccess";
import Texttestimonial from "../components/texttestimonial";
import Imageplaceholder from "../components/imageplaceholder";
import Content from "../components/content";
import FrameComponent3 from "../components/frame-component3";
import Component2 from "../components/component2";
import Component1 from "../components/component1";
import Component from "../components/component";
import IconPages from "../components/icon-pages";
import FrameComponent from "../components/frame-component";
import Footer from "../components/footer";

const Homepage: NextPage = () => {
  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-center justify-start pt-0 px-0 pb-[198px] box-border gap-[141px] tracking-[normal] mq850:gap-[141px] mq1225:gap-[141px]">
      <section className="self-stretch h-[2670px] flex flex-row items-start justify-start py-0 pr-0 pl-px box-border max-w-full mq450:h-auto">
        <div className="mt-[-10px] flex-1 flex flex-col items-start justify-start pt-0 px-0 pb-0 box-border max-w-full shrink-0">
          <Banner />
          <Services />
        </div>
      </section>
      <section className="w-[1240px] flex flex-col items-start justify-start pt-0 px-5 pb-[39px] box-border gap-[80px] max-w-full text-left text-mini text-gold font-noto-sans mq450:gap-[80px] mq850:gap-[80px]">
        <div className="self-stretch flex flex-row items-start justify-start gap-[33px] max-w-full mq850:gap-[33px] mq1225:flex-wrap">
          <div className="h-[851px] w-[514px] relative flex items-center justify-center">
            <img
              className="h-full w-full max-w-full object-contain absolute left-[65px] top-[53px] [transform:scale(2.035)] mq1225:flex-1"
              loading="eager"
              alt=""
              src="/image@2x.png"
            />
          </div>
          <div className="flex-1 flex flex-col items-end justify-start gap-[30px] min-w-[424px] max-w-full mq850:min-w-full">
            <div className="self-stretch flex flex-row items-start justify-start gap-[39px] max-w-full shrink-0 mq850:flex-wrap mq850:gap-[39px]">
              <img
                className="h-[88px] w-[88px] relative"
                alt=""
                src="/icon-7.svg"
              />
              <div className="flex-1 flex flex-col items-start justify-start gap-[15px] min-w-[341px] max-w-full mq450:min-w-full">
                <div className="relative tracking-[0.14em] leading-[156.5%] uppercase font-medium">
                  <span>//</span>
                  <span className="text-khaki">{` `}</span>
                  <span className="text-gray-200">02 . About Us</span>
                </div>
                <h1 className="m-0 self-stretch relative text-21xl leading-[110.5%] font-semibold font-nunito text-gray-200 mq450:text-5xl mq450:leading-[27px] mq850:text-13xl mq850:leading-[35px]">
                  The #1 digital marketing services company
                </h1>
              </div>
            </div>
            <div className="self-stretch h-px relative box-border border-t-[1px] border-solid border-lightgray-200" />
            <div className="self-stretch flex flex-row items-start justify-start pt-0 pb-3 pr-1 pl-0 box-border max-w-full shrink-0 text-lg text-dimgray-700">
              <div className="h-[95px] flex-1 relative leading-[156.5%] inline-block max-w-full">
                <p className="m-0">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry
                </p>
                <p className="m-0">
                  ftyuu Ipsum has been the industry's standard book. It has
                  survived not only five centuries, but also the leap into
                  electronic typesetting.
                </p>
              </div>
            </div>
            <div className="w-[570px] flex flex-row items-start justify-start pt-0 px-0 pb-5 box-border [row-gap:20px] max-w-full shrink-0 mq850:flex-wrap">
              <img
                className="h-[86px] w-[86px] relative z-[1]"
                alt=""
                src="/icon-8.svg"
              />
              <div className="flex-1 flex flex-col items-start justify-start pt-[7px] px-0 pb-0 box-border min-w-[315px] max-w-full">
                <FrameComponent5 loremIpsumIsSimplyDummyTe="Lorem Ipsum is simply dummy text of the printing and typesetting industry." />
              </div>
            </div>
            <FrameComponent4 />
          </div>
        </div>
        <Proccess />
      </section>
      <section className="w-[1239px] flex flex-col items-start justify-start pt-0 px-5 pb-9 box-border gap-[43px] max-w-full text-left text-xl text-gray-200 font-nunito mq850:gap-[43px]">
        <Texttestimonial />
        <div className="self-stretch flex flex-row items-end justify-start gap-[26px] max-w-full mq1225:flex-wrap">
          <Imageplaceholder />
          <div className="flex-1 rounded-6xs [background:linear-gradient(151.16deg,_#fff8f8,_#f5f7ff)] flex flex-col items-center justify-start pt-8 px-[26px] pb-14 box-border gap-[39px] max-w-full mq450:pt-[21px] mq450:pb-9 mq450:box-border mq850:gap-[39px]">
            <Content />
            <div className="w-[394px] flex flex-row items-start justify-start max-w-full">
              <div className="flex flex-row items-start justify-start relative">
                <b className="relative leading-[156.5%] mq450:text-base mq450:leading-[25px]">
                  Peeter pawl
                </b>
                <div className="my-0 mx-[!important] absolute bottom-[-24px] left-[-70px] flex flex-row items-end justify-start gap-[10px] text-lg text-dimgray-700 font-noto-sans">
                  <img
                    className="h-[57px] w-[57px] relative object-cover"
                    alt=""
                    src="/image-4@2x.png"
                  />
                  <div className="flex flex-col items-start justify-start pt-0 px-0 pb-0.5">
                    <div className="relative leading-[156.5%]">Designer</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <FrameComponent3 />
      <section className="w-[1241px] flex flex-col items-center justify-start pt-0 px-5 pb-[49px] box-border gap-[41px] max-w-full text-left text-mini text-mediumslateblue font-noto-sans mq450:pb-[21px] mq450:box-border mq850:gap-[41px] mq850:pb-8 mq850:box-border">
        <div className="flex flex-col items-center justify-start gap-[34px] max-w-full mq850:gap-[34px]">
          <img
            className="w-[88px] h-[88px] relative"
            alt=""
            src="/icon-13.svg"
          />
          <div className="flex flex-col items-center justify-start gap-[14px]">
            <div className="relative tracking-[0.14em] leading-[156.5%] uppercase font-medium">
              <span>//</span>
              <span className="text-khaki">{` `}</span>
              <span className="text-gray-200">{`06 . Price & Plan`}</span>
            </div>
            <h1 className="m-0 relative text-21xl leading-[110.5%] font-semibold font-nunito text-gray-200 text-center mq450:text-5xl mq450:leading-[27px] mq850:text-13xl mq850:leading-[35px]">
              Our Flexible Pricing Plans
            </h1>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start py-0 pr-1.5 pl-0 box-border gap-[17px] max-w-full mq1225:flex-wrap">
          <Component2 />
          <Component1 />
          <Component />
        </div>
      </section>
      <section className="w-[1240px] flex flex-col items-start justify-start pt-0 px-5 pb-[9px] box-border gap-[19px] max-w-full text-left text-mini text-gold font-noto-sans">
        <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[94px] box-border gap-[17px] max-w-full mq850:pb-[61px] mq850:box-border mq1225:flex-wrap">
          <div className="flex-1 flex flex-col items-start justify-start gap-[34px] min-w-[398px] max-w-full shrink-0 mq850:gap-[34px] mq850:min-w-full">
            <div className="self-stretch flex flex-row items-start justify-start gap-[39px] max-w-full mq850:flex-wrap mq850:gap-[39px]">
              <img
                className="h-[88px] w-[88px] relative"
                alt=""
                src="/icon-14.svg"
              />
              <div className="flex-1 flex flex-col items-start justify-start gap-[15px] min-w-[315px] max-w-full">
                <div className="relative tracking-[0.14em] leading-[156.5%] uppercase font-medium">
                  <span>//</span>
                  <span className="text-khaki">{` `}</span>
                  <span className="text-gray-200">07 . Benifits</span>
                </div>
                <h1 className="m-0 self-stretch relative text-21xl leading-[110.5%] font-semibold font-nunito text-gray-200 mq450:text-5xl mq450:leading-[27px] mq850:text-13xl mq850:leading-[35px]">
                  Benifit of working with Maruncy
                </h1>
              </div>
            </div>
            <div className="w-[567.1px] h-[458.7px] relative flex items-center justify-center">
              <img
                className="w-full h-full max-w-full object-contain absolute left-[-92px] top-[-17px] [transform:scale(2.313)]"
                alt=""
                src="/graphics-2@2x.png"
              />
            </div>
          </div>
          <div className="w-[570px] flex flex-col items-start justify-start gap-[47px] min-w-[570px] max-w-full shrink-0 mq850:gap-[47px] mq850:min-w-full mq1225:flex-1">
            <FrameComponent5
              icon="/icon-15.svg"
              frame38Placeholder="Page Rankings"
              loremIpsumIsSimplyDummyTe="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
              propWidth="unset"
              propPadding="unset"
              propAlignSelf="stretch"
              propWidth1="unset"
            />
            <FrameComponent5
              icon="/icon-16.svg"
              frame38Placeholder="Site Optimisation"
              loremIpsumIsSimplyDummyTe="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
              propWidth="unset"
              propPadding="unset"
              propAlignSelf="stretch"
              propWidth1="unset"
            />
            <FrameComponent5
              icon="/icon-17.svg"
              frame38Placeholder={`Reporting & Analysis`}
              loremIpsumIsSimplyDummyTe="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
              propWidth="unset"
              propPadding="unset"
              propAlignSelf="stretch"
              propWidth1="unset"
            />
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[101px] box-border max-w-full">
          <div className="h-px flex-1 relative box-border max-w-full border-t-[1px] border-solid border-lightgray-300" />
        </div>
        <div className="self-stretch flex flex-col items-center justify-start gap-[51px] max-w-full mq850:gap-[51px]">
          <IconPages
            icon="/icon-18.svg"
            ourServices="08 . Articles"
            weHaveExtensiveExperience="Browse our content on growth"
            socialMediaMarketing=" marketing"
            propColor="#5956e8"
            propColor1="#93e1a4"
            propColor2="#292930"
            propColor3="#292930"
          />
          <div className="self-stretch rounded-3xs bg-lemonchiffon flex flex-row items-center justify-start py-[85px] px-[90px] box-border gap-[96px] max-w-full mq850:gap-[96px] mq850:py-[55px] mq850:px-[22px] mq850:box-border mq1225:flex-wrap mq1225:gap-[96px] mq1225:pl-[45px] mq1225:pr-[45px] mq1225:box-border">
            <FrameComponent
              marketing="Marketing"
              howToIncreaseYourTwitterR="How to increase your Twitter reach by over 200% with this simple trick"
            />
            <img
              className="h-[296.9px] w-[453.1px] relative object-cover max-w-full mq1225:flex-1"
              alt=""
              src="/image-6@2x.png"
            />
          </div>
        </div>
        <div className="self-stretch flex flex-col items-center justify-start gap-[54px] max-w-full mq850:gap-[54px]">
          <div className="self-stretch rounded-3xs bg-aliceblue flex flex-row items-center justify-start py-[85px] pr-[89px] pl-[90px] box-border gap-[97px] max-w-full mq850:gap-[97px] mq850:py-[55px] mq850:px-[22px] mq850:box-border mq1225:flex-wrap mq1225:gap-[97px] mq1225:pl-[45px] mq1225:pr-11 mq1225:box-border">
            <img
              className="h-[296.9px] w-[453.1px] relative object-cover max-w-full mq1225:flex-1"
              alt=""
              src="/image-7@2x.png"
            />
            <FrameComponent
              marketing="Condent"
              howToIncreaseYourTwitterR="How to reach out for guest posts to increase your SEO authority"
              propWidth="calc(100% - 61px)"
            />
          </div>
          <div className="w-[203px] rounded-6xs bg-gray-200 flex flex-row items-center justify-start pt-[17px] px-[35px] pb-[18px] box-border gap-[8px]">
            <input
              className="w-[calc(100%_-_84px)] [border:none] [outline:none] font-medium font-nunito text-lg bg-[transparent] h-[29px] flex-1 relative leading-[160%] capitalize text-white text-left inline-block min-w-[66px]"
              placeholder="More articles"
              type="text"
            />
            <img
              className="h-3.5 w-3.5 relative object-contain"
              alt=""
              src="/vector-27.svg"
            />
          </div>
        </div>
      </section>
      <Footer logo="/logo@2x.png" />
    </div>
  );
};

export default Homepage;
