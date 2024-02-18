import type { NextPage } from "next";
import Banner2 from "../components/banner2";
import IndustryStandard from "../components/industry-standard";
import Subscribe from "../components/subscribe";
import FrameComponent1 from "../components/frame-component1";
import GroupIcons from "../components/group-icons";
import Footer from "../components/footer";

const ContactUs: NextPage = () => {
  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-center justify-start gap-[150px] tracking-[normal] text-left text-lg text-lightgray-100 font-noto-sans mq1225:gap-[150px] mq850:gap-[150px]">
      <Banner2 />
      <div className="w-[460px] h-[84px] relative leading-[156.5%] hidden max-w-full">{`Lorem Ipsum has been the industry's standard from dummy text ever since the unknown printer to galley of type and make a type specimen book. `}</div>
      <div className="w-[460px] h-[84px] relative leading-[156.5%] hidden max-w-full">{`Lorem Ipsum has been the industry's standard from dummy text ever since the unknown printer to galley of type and make a type specimen book. `}</div>
      <div className="w-[460px] h-[84px] relative leading-[156.5%] hidden max-w-full">{`Lorem Ipsum has been the industry's standard from dummy text ever since the unknown printer to galley of type and make a type specimen book. `}</div>
      <IndustryStandard />
      <div className="w-[460px] h-[84px] relative leading-[156.5%] hidden max-w-full">{`Lorem Ipsum has been the industry's standard from dummy text ever since the unknown printer to galley of type and make a type specimen book. `}</div>
      <Subscribe pattern="/pattern1@2x.png" />
      <div className="w-[940px] flex flex-col items-center justify-start py-0 px-5 box-border gap-[50px] max-w-full shrink-0 mq850:gap-[50px]">
        <FrameComponent1
          icon="/icon-11.svg"
          contactUs="02 . FAQ"
          letsBuildSomethingAwesome="Frequently Asked Questions"
          propPadding="unset"
          propTextAlign="center"
          propColor="#fec90c"
          propDisplay="inline-block"
        />
        <GroupIcons />
      </div>
      <Footer logo="/logo2@2x.png" />
    </div>
  );
};

export default ContactUs;
