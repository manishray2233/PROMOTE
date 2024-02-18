import type { NextPage } from "next";
import Heading from "./heading";
import ServicesButtonFrame from "./services-button-frame";
import EmailInputFrame from "./email-input-frame";

const Location1: NextPage = () => {
  return (
    <section className="w-[1200px] h-[2258px] flex flex-col items-start justify-start pt-0 px-0 pb-[9px] box-border gap-[19px] text-left text-6xl text-gray-200 font-nunito">
      <div className="w-[1199px] h-[715px] flex flex-row items-start justify-start pt-0 px-0 pb-[94px] box-border gap-[17px]">
        <div className="h-[622px] w-[612px] flex flex-col items-start justify-start gap-[34px]">
          <Heading
            icon="/icon-14.svg"
            services="07 . Benifits"
            highImpactServicesToTakeY="Benifit of working with Maruncy"
            propWidth="612px"
            propAlignSelf="unset"
            propMinWidth="unset"
            propColor="#292930"
            propColor1="#292930"
          />
          <div className="w-[567.1px] h-[458.7px] relative flex items-center justify-center">
            <img
              className="w-full h-full object-contain absolute left-[-92px] top-[-17px] [transform:scale(2.313)]"
              alt=""
              src="/graphics-21@2x.png"
            />
          </div>
        </div>
        <div className="h-[463px] w-[570px] flex flex-col items-start justify-start gap-[47px]">
          <ServicesButtonFrame
            icon="/icon-15.svg"
            headerGroupPlaceholder="Page Rankings"
            loremIpsumIsSimplyDummyTe="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            propWidth="570px"
            propPadding="unset"
            propAlignSelf="unset"
            propWidth1="186px"
            propWidth2="448px"
            propAlignSelf1="unset"
            propHeight="58px"
          />
          <div className="w-[570px] h-[123px] flex flex-row items-start justify-start">
            <img
              className="h-[86px] w-[86px] relative"
              alt=""
              src="/icon-16.svg"
            />
            <div className="h-[123px] w-[484px] flex flex-col items-start justify-start pt-[7px] px-0 pb-0 box-border">
              <div className="w-[484px] h-[116px] flex flex-col items-start justify-start gap-[22px]">
                <div className="w-[484px] h-9 flex flex-col items-start justify-start gap-[8px]">
                  <div className="w-[215px] h-7 flex flex-row items-start justify-start py-0 pr-0 pl-[17px] box-border">
                    <h3 className="m-0 h-7 w-[198px] relative text-inherit leading-[110.5%] font-semibold font-inherit inline-block">
                      Site Optimisation
                    </h3>
                  </div>
                  <div className="w-[484px] h-0 relative box-border border-t-[1px] border-solid border-lightgray-200" />
                </div>
                <div className="w-[448px] h-[58px] flex flex-row items-start justify-start py-0 pr-0 pl-[18px] box-border text-lg text-dimgray-700 font-noto-sans">
                  <div className="h-[58px] w-[430px] relative leading-[156.5%] inline-block shrink-0">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <ServicesButtonFrame
            icon="/icon-17.svg"
            headerGroupPlaceholder={`Reporting & Analysis`}
            loremIpsumIsSimplyDummyTe="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            propWidth="570px"
            propPadding="unset"
            propAlignSelf="unset"
            propWidth1="259px"
            propWidth2="448px"
            propAlignSelf1="unset"
            propHeight="58px"
          />
        </div>
      </div>
      <div className="w-[1200px] h-[101px] flex flex-row items-start justify-start pt-0 px-0 pb-[101px] box-border">
        <div className="h-0 w-[1200px] relative box-border border-t-[1px] border-solid border-lightgray-300" />
      </div>
      <div className="w-[1199px] h-[778px] flex flex-col items-center justify-start gap-[51px] text-mini text-mediumslateblue font-noto-sans">
        <div className="w-[558px] h-[247px] flex flex-col items-center justify-start gap-[34px]">
          <img
            className="w-[88px] h-[88px] relative"
            alt=""
            src="/icon-18.svg"
          />
          <div className="w-[558px] h-[125px] flex flex-col items-center justify-start gap-[14px]">
            <div className="w-[143px] h-[23px] relative tracking-[0.14em] leading-[156.5%] uppercase font-medium inline-block">
              <span>//</span>
              <span className="text-mediumaquamarine-100">{` `}</span>
              <span className="text-gray-200">08 . Articles</span>
            </div>
            <h1 className="m-0 w-[558px] h-[88px] relative text-21xl leading-[110.5%] font-semibold font-nunito text-gray-200 text-center inline-block">
              <p className="m-0">Browse our content on growth</p>
              <p className="m-0"> marketing</p>
            </h1>
          </div>
        </div>
        <div className="w-[1199px] h-[480px] rounded-3xs bg-lemonchiffon flex flex-row items-center justify-start py-[85px] px-[90px] box-border gap-[96px] text-gray-200">
          <EmailInputFrame
            marketing="Marketing"
            howToIncreaseYourTwitterR="How to increase your Twitter reach by over 200% with this simple trick"
          />
          <img
            className="h-[296.9px] w-[453.1px] relative object-cover"
            alt=""
            src="/image-6@2x.png"
          />
        </div>
      </div>
      <div className="w-[1199px] h-[598px] flex flex-col items-center justify-start gap-[54px]">
        <div className="w-[1199px] h-[480px] rounded-3xs bg-aliceblue flex flex-row items-center justify-start py-[85px] px-[90px] box-border gap-[96px]">
          <img
            className="h-[296.9px] w-[453.1px] relative object-cover"
            alt=""
            src="/image-7@2x.png"
          />
          <EmailInputFrame
            marketing="Condent"
            howToIncreaseYourTwitterR="How to reach out for guest posts to increase your SEO authority"
            marketingDisplay="inline-block"
          />
        </div>
        <div className="w-[202px] h-16 rounded-6xs bg-gray-200 flex flex-row items-center justify-start pt-[17px] pb-[18px] pr-[34px] pl-[35px] box-border gap-[7px]">
          <input
            className="w-[110px] [border:none] [outline:none] font-medium font-nunito text-lg bg-[transparent] h-[29px] relative leading-[160%] capitalize text-white text-left inline-block"
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
  );
};

export default Location1;
