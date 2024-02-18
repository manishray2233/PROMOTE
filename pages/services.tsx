import type { NextPage } from "next";
import { useCallback } from "react";
import FrameComponent8 from "../components/frame-component8";
import LinkFrame from "../components/link-frame";
import { useRouter } from "next/router";
import Footer from "../components/footer";

const Services3: NextPage = () => {
  const router = useRouter();

  const onButtonClick = useCallback(() => {
    router.push("/contact-us");
  }, [router]);

  const onButton1Click = useCallback(() => {
    router.push("/contact-us");
  }, [router]);

  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-center justify-start pt-0 px-0 pb-[65px] box-border tracking-[normal]">
      <FrameComponent8 />
      <LinkFrame />
      <section className="w-[1240px] flex flex-row items-start justify-start pt-0 px-5 pb-[150px] box-border max-w-full shrink-0 text-left text-26xl text-gray-200 font-nunito mq850:pb-[97px] mq850:box-border">
        <div className="flex-1 flex flex-row items-end justify-start py-[90px] px-[70px] box-border relative min-h-[433px] max-w-full mq450:pt-[58px] mq450:pb-[58px] mq450:box-border mq850:pl-[35px] mq850:pr-[35px] mq850:box-border">
          <img
            className="h-full w-full absolute my-0 mx-[!important] top-[0.4px] right-[0px] bottom-[-0.4px] left-[0px] max-w-full overflow-hidden max-h-full object-cover"
            loading="eager"
            alt=""
            src="/background8@2x.png"
          />
          <div className="flex flex-col items-start justify-start gap-[56px] max-w-full z-[1] mq850:gap-[56px]">
            <h1 className="m-0 relative text-inherit leading-[110.5%] font-extrabold font-inherit mq450:text-8xl mq450:leading-[30px] mq850:text-17xl mq850:leading-[40px]">
              <p className="m-0">
                <span>{`Get in touch and `}</span>
                <span className="text-mediumslateblue">start</span>
              </p>
              <p className="m-0">
                <span className="text-mediumslateblue">growing</span>
                <span> your startup today</span>
              </p>
            </h1>
            <div className="flex flex-row items-center justify-start py-0 pr-[5px] pl-0 box-border gap-[28px] max-w-full mq850:flex-wrap">
              <button
                className="cursor-pointer [border:none] py-[17px] px-8 bg-gray-200 rounded-6xs flex flex-row items-center justify-center whitespace-nowrap hover:bg-dimgray-500"
                onClick={onButtonClick}
              >
                <div className="relative text-lg leading-[160%] capitalize font-medium font-nunito text-white text-center">
                  Get in touch
                </div>
              </button>
              <button
                className="cursor-pointer pt-[17px] px-[35px] pb-[18px] bg-[transparent] rounded-6xs flex flex-col items-center justify-center border-[1.5px] border-solid border-gray-200"
                onClick={onButton1Click}
              >
                <div className="flex flex-row items-center justify-center">
                  <div className="relative text-lg leading-[160%] capitalize font-medium font-nunito text-gray-200 text-left whitespace-nowrap">
                    Get Started
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </section>
      <Footer logo="/logo6@2x.png" />
    </div>
  );
};

export default Services3;
