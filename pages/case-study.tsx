import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import Banner3 from "../components/banner3";
import FrameComponent1 from "../components/frame-component1";
import Component5 from "../components/component5";
import Footer from "../components/footer";

const CaseStudy: NextPage = () => {
  const router = useRouter();

  const onButtonClick = useCallback(() => {
    router.push("/case-study-single");
  }, [router]);

  const onButton2Click = useCallback(() => {
    router.push("/case-study-single");
  }, [router]);

  const onButton3Click = useCallback(() => {
    router.push("/case-study-single");
  }, [router]);

  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-center justify-start gap-[150px] tracking-[normal] mq850:gap-[150px] mq1225:gap-[150px]">
      <Banner3 />
      <section className="w-[1240px] flex flex-col items-center justify-start py-0 px-5 box-border gap-[49px] max-w-full shrink-0 mq850:gap-[49px]">
        <FrameComponent1
          icon="/icon2.svg"
          contactUs="01 . CASE STUDIES"
          letsBuildSomethingAwesome="Browse our case studies"
          propPadding="unset"
          propTextAlign="left"
          propColor="#5956e8"
          propDisplay="inline-block"
        />
        <div className="self-stretch flex flex-col items-start justify-start gap-[50px] max-w-full mq850:gap-[50px]">
          <Component5
            image="/image3@2x.png"
            icon="/icon-112@2x.png"
            onButtonClick={onButtonClick}
          />
          <Component5
            image="/image-11@2x.png"
            icon="/image-1007@2x.png"
            propBackgroundColor="#ffdbd4"
            propWidth="147px"
            propHeight="45px"
            onButtonClick={onButton2Click}
          />
          <Component5
            image="/image-21@2x.png"
            icon="/image-1008@2x.png"
            propBackgroundColor="#fff3ca"
            propWidth="174px"
            propHeight="37px"
            onButtonClick={onButton3Click}
          />
        </div>
      </section>
      <Footer logo="/logo31@2x.png" />
    </div>
  );
};

export default CaseStudy;
