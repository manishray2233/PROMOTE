import type { NextPage } from "next";
import Heading from "./heading";
import ServicesButtonFrame from "./services-button-frame";

const SingleContactButtonFrame: NextPage = () => {
  return (
    <div className="h-[648px] w-[653px] flex flex-col items-end justify-start gap-[42px] text-left text-lg text-dimgray-700 font-noto-sans">
      <div className="w-[653px] h-[284px] flex flex-col items-start justify-start gap-[30px]">
        <Heading
          icon="/icon-7.svg"
          services="02 . About Us"
          highImpactServicesToTakeY="The #1 digital marketing services company"
          propWidth="652px"
          propAlignSelf="unset"
          propMinWidth="unset"
          propColor="#292930"
          propColor1="#292930"
        />
        <div className="w-[653px] h-0 relative box-border border-t-[1px] border-solid border-lightgray-200" />
        <div className="w-[649px] h-[95px] relative leading-[156.5%] inline-block shrink-0">
          <p className="m-0">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry
          </p>
          <p className="m-0">
            ftyuu Ipsum has been the industry's standard book. It has survived
            not only five centuries, but also the leap into electronic
            typesetting.
          </p>
        </div>
      </div>
      <ServicesButtonFrame
        icon="/icon-8.svg"
        headerGroupPlaceholder="Guaranteed Results"
        loremIpsumIsSimplyDummyTe="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
      />
      <ServicesButtonFrame
        icon="/icon-9.svg"
        headerGroupPlaceholder="Team of Industry Experts"
        loremIpsumIsSimplyDummyTe="consectetur amet dolor sit comeneer ilremsilom dolce issilm acalrm leoinsion duycoqun consemleint lorem."
        propWidth="570px"
        propPadding="unset"
        propAlignSelf="unset"
        propWidth1="304px"
        propWidth2="448px"
        propAlignSelf1="unset"
        propHeight="84px"
      />
    </div>
  );
};

export default SingleContactButtonFrame;
