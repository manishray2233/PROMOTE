import type { NextPage } from "next";
import Banner1 from "../components/banner1";
import Services1 from "../components/services1";
import SingleContactButtonFrame from "../components/single-contact-button-frame";
import Proccess1 from "../components/proccess1";
import Heading from "../components/heading";
import ReadMoreButton from "../components/read-more-button";
import FrameD from "../components/frame-d";
import HeaderMenu2 from "../components/header-menu2";
import HeaderMenu1 from "../components/header-menu1";
import HeaderMenu from "../components/header-menu";
import Location1 from "../components/location1";
import SubscribeBox from "../components/subscribe-box";
import FooterContent from "../components/footer-content";

const Homepage1: NextPage = () => {
  return (
    <div className="w-full h-[12116px] absolute my-0 mx-[!important] top-[-6058px] left-[-960px] bg-white overflow-hidden flex flex-col items-center justify-start gap-[141px]">
      <section className="w-[1920px] h-[2680px] flex flex-col items-start justify-start">
        <Banner1 />
        <Services1 />
      </section>
      <section className="w-[1200px] h-[2414px] flex flex-col items-start justify-start pt-0 px-0 pb-[39px] box-border gap-[80px]">
        <div className="w-[1200px] h-[851px] flex flex-row items-start justify-start gap-[33px]">
          <div className="h-[851px] w-[514px] relative flex items-center justify-center">
            <img
              className="h-full w-full object-contain absolute left-[65px] top-[53px] [transform:scale(2.035)]"
              loading="eager"
              alt=""
              src="/image1@2x.png"
            />
          </div>
          <SingleContactButtonFrame />
        </div>
        <Proccess1 />
      </section>
      <section className="w-[1199px] h-[626px] flex flex-col items-start justify-start pt-0 px-0 pb-9 box-border gap-[43px] text-left text-6xl text-gray-200 font-noto-sans">
        <div className="w-[1199px] h-[129px] flex flex-row items-end justify-start gap-[428px]">
          <Heading
            icon="/icon-11.svg"
            services="04 . Testimonial"
            highImpactServicesToTakeY="We work with customers across all industries"
            propWidth="612px"
            propAlignSelf="unset"
            propMinWidth="unset"
            propColor="#292930"
            propColor1="#292930"
          />
          <div className="h-[70px] w-[159px] flex flex-row items-start justify-start gap-[19px]">
            <img
              className="h-[70px] w-[70px] relative"
              alt=""
              src="/image-frame.svg"
            />
            <div className="h-[70px] w-[70px] relative flex items-center justify-center">
              <img
                className="h-full w-full object-contain absolute left-[0px] top-[10px] [transform:scale(1.343)]"
                alt=""
                src="/-1.svg"
              />
            </div>
          </div>
        </div>
        <div className="w-[1198px] h-[419px] flex flex-row items-end justify-start gap-[26px]">
          <div className="h-[419px] w-[586px] rounded-6xs [background:linear-gradient(151.16deg,_#fff8f8,_#f5f7ff)] flex flex-col items-center justify-start py-8 px-[26px] box-border gap-[37px]">
            <div className="w-[534px] h-[258px] rounded-6xs bg-white shadow-[0px_2px_4px_rgba(146,_146,_146,_0.25)] flex flex-col items-center justify-start py-12 px-[37px] box-border gap-[19px]">
              <div className="w-[460px] h-[39px] flex flex-row items-start justify-start py-0 pr-[7px] pl-0 box-border">
                <div className="h-[39px] w-[453px] flex flex-row items-center justify-start gap-[135px]">
                  <div className="h-[39px] w-[159px] flex flex-row items-start justify-start gap-[5px]">
                    <div className="h-[33px] w-9 relative">
                      <div className="absolute top-[-0.11px] left-[19.64px] rounded-7xl bg-mediumslateblue w-[32.9px] h-[8.8px] [transform:_rotate(60deg)] [transform-origin:0_0]" />
                      <div className="absolute top-[3.9px] left-[24.1px] rounded-7xl bg-darkslategray-100 w-[32.9px] h-[8.8px] [transform:_rotate(120deg)] [transform-origin:0_0] z-[1]" />
                      <div className="absolute top-[22.5px] left-[1px] rounded-7xl bg-hotpink w-[34px] h-[9px] z-[2]" />
                    </div>
                    <h3 className="m-0 h-[39px] w-[118px] relative text-inherit leading-[156.5%] font-bold font-inherit inline-block">
                      Company
                    </h3>
                  </div>
                  <img
                    className="h-[31.1px] w-[158.8px] relative"
                    loading="eager"
                    alt=""
                    src="/star.svg"
                  />
                </div>
              </div>
              <div className="w-[460px] h-0 flex flex-row items-start justify-start py-0 pr-[9px] pl-0 box-border">
                <div className="h-0 w-[451px] relative box-border border-t-[1px] border-solid border-whitesmoke-500" />
              </div>
              <div className="w-[460px] h-[84px] relative text-lg text-dimgray-700">
                <div className="absolute top-[0px] left-[0px] leading-[156.5%] inline-block w-[460px]">{`Lorem Ipsum has been the industry's standard from dummy text ever since the unknown printer to galley of type and make a type specimen book. `}</div>
                <img
                  className="absolute top-[60px] left-[343px] w-[22px] h-[22px] object-cover z-[1]"
                  alt=""
                  src="/image-1@2x.png"
                />
              </div>
            </div>
            <div className="w-[534px] h-[59px] flex flex-row items-start justify-start py-0 pr-[244px] pl-0 box-border text-xl font-nunito">
              <div className="h-[59px] w-[290px] flex flex-row items-center justify-start gap-[13px]">
                <img
                  className="h-[57px] w-[57px] relative object-cover"
                  alt=""
                  src="/image-2@2x.png"
                />
                <div className="h-[59px] w-[220px] flex flex-col items-start justify-start">
                  <div className="w-[101px] h-[31px] flex flex-row items-start justify-start py-0 px-0 box-border">
                    <b className="h-[31px] w-[107px] relative leading-[156.5%] inline-block">
                      John Carter
                    </b>
                  </div>
                  <div className="w-[220px] h-7 relative text-lg leading-[156.5%] font-noto-sans text-dimgray-700 inline-block">
                    Marketing Lead at Google
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="h-[418px] w-[586px] rounded-6xs [background:linear-gradient(151.16deg,_#fff8f8,_#f5f7ff)] flex flex-col items-center justify-start py-8 px-[26px] box-border gap-[37px]">
            <div className="w-[534px] h-[260px] rounded-6xs bg-white shadow-[0px_2px_4px_rgba(146,_146,_146,_0.25)] flex flex-col items-center justify-start py-12 px-[37px] box-border gap-[19px]">
              <div className="w-[460px] h-[42px] flex flex-row items-start justify-start py-0 pr-1 pl-0 box-border">
                <div className="h-[42px] w-[456px] flex flex-row items-center justify-start gap-[114px]">
                  <div className="h-[42px] w-[183px] flex flex-row items-end justify-start gap-[2px]">
                    <div className="h-[37px] w-[63px] relative">
                      <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-limegreen w-[29px] h-[29px]" />
                      <img
                        className="absolute top-[0px] left-[26px] rounded-sm w-[37px] h-[37px]"
                        alt=""
                        src="/frame.svg"
                      />
                    </div>
                    <div className="h-[42px] w-[118px] flex flex-col items-start justify-start pt-0 px-0 pb-[3px] box-border">
                      <h3 className="m-0 w-[118px] h-[39px] relative text-inherit leading-[156.5%] font-bold font-inherit inline-block">
                        Company
                      </h3>
                    </div>
                  </div>
                  <img
                    className="h-[31.1px] w-[158.8px] relative"
                    alt=""
                    src="/star-1.svg"
                  />
                </div>
              </div>
              <div className="w-[460px] h-0 flex flex-row items-start justify-start py-0 pr-[9px] pl-0 box-border">
                <div className="h-0 w-[451px] relative box-border border-t-[1px] border-solid border-whitesmoke-500" />
              </div>
              <div className="w-[460px] h-[84px] relative text-lg text-dimgray-700">
                <div className="absolute top-[0px] left-[0px] leading-[156.5%] inline-block w-[460px]">{`Lorem Ipsum has been the industry's standard from dummy text ever since the unknown printer to galley of type and make a type specimen book. `}</div>
                <img
                  className="absolute top-[60px] left-[343px] w-[22px] h-[22px] object-cover z-[1]"
                  alt=""
                  src="/image-3@2x.png"
                />
              </div>
            </div>
            <div className="w-[534px] h-[57px] flex flex-row items-start justify-start py-0 pr-[351px] pl-0 box-border text-xl font-nunito">
              <div className="h-[57px] w-[183px] flex flex-row items-start justify-start gap-[13px]">
                <img
                  className="h-[57px] w-[57px] relative object-cover"
                  alt=""
                  src="/image-4@2x.png"
                />
                <div className="h-[31px] w-[113px] flex flex-row items-start justify-start relative">
                  <b className="h-[31px] w-[113px] relative leading-[156.5%] inline-block">
                    Peeter pawl
                  </b>
                  <div className="h-7 w-[74px] absolute my-0 mx-[!important] bottom-[-24px] left-[0px] text-lg leading-[156.5%] font-noto-sans text-dimgray-700 inline-block">
                    Designer
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ReadMoreButton />
      <section className="w-[1200px] h-[847px] flex flex-col items-center justify-start pt-0 px-0 pb-[49px] box-border gap-[41px]">
        <FrameD
          icon="/icon-13.svg"
          proccess={`06 . Price & Plan`}
          aSimpleYetPowerfulAndEffi="Our Flexible Pricing Plans"
          propFlex="unset"
          propAlignSelf="unset"
          propAlignSelf1="unset"
          propHeight="44px"
          propDisplay="inline-block"
        />
        <div className="w-[1202px] h-[554px] flex flex-row items-start justify-start gap-[16px]">
          <HeaderMenu2 />
          <HeaderMenu1 />
          <HeaderMenu />
        </div>
      </section>
      <Location1 />
      <footer className="w-[1920px] h-[1034px] bg-gray-200 flex flex-row items-start justify-start py-[191px] px-[360px] box-border gap-[99px]">
        <img
          className="w-[1920px] relative h-[1034px] hidden"
          alt=""
          src="/background2.svg"
        />
        <SubscribeBox />
        <FooterContent />
      </footer>
    </div>
  );
};

export default Homepage1;
