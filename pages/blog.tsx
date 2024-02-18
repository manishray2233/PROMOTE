import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import Banner4 from "../components/banner4";
import HowToIncreaseReach from "../components/how-to-increase-reach";
import FrameComponent7 from "../components/frame-component7";
import Subscribe from "../components/subscribe";
import Frame from "../components/frame";
import Footer from "../components/footer";

const Blog: NextPage = () => {
  const router = useRouter();

  const onTextContainerClick = useCallback(() => {
    router.push("/blog-single");
  }, [router]);

  const onContainerClick = useCallback(() => {
    router.push("/blog-single");
  }, [router]);

  const onContainer2Click = useCallback(() => {
    router.push("/blog-single");
  }, [router]);

  const onContainer1Click = useCallback(() => {
    router.push("/blog-single");
  }, [router]);

  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-center justify-start gap-[150px] tracking-[normal] mq850:gap-[150px] mq1225:gap-[150px]">
      <Banner4 />
      <section className="w-[1240px] flex flex-col items-start justify-start py-0 px-5 box-border gap-[62px] max-w-full shrink-0 mq450:gap-[62px] mq850:gap-[62px]">
        <div className="self-stretch flex flex-row items-center justify-between gap-[20px] max-w-full mq1225:flex-wrap">
          <HowToIncreaseReach
            icon="/icon-18.svg"
            articles="01 . Articles"
            browseOurContentOn="Browse our content on"
            growthMarketing="growth marketing"
          />
          <div className="w-[490px] flex flex-row items-start justify-start py-5 pr-px pl-0 box-border gap-[19px] min-w-[490px] max-w-full mq450:flex-wrap mq850:min-w-full mq1225:flex-1 mq1225:pr-0 mq1225:box-border">
            <div className="flex-1 rounded-6xs box-border flex flex-row items-center justify-start pt-[17px] px-[26px] pb-4 min-w-[141px] max-w-full border-[0px] border-solid border-gray-200">
              <img
                className="h-[62px] w-[350px] relative rounded-6xs hidden max-w-full"
                alt=""
                src="/rectangle-143.svg"
              />
              <input
                className="w-[141px] [border:none] [outline:none] font-medium font-nunito text-lg bg-[transparent] h-[29px] relative leading-[160%] text-gray-100 text-left inline-block z-[1]"
                placeholder="Search the blog..."
                type="text"
              />
            </div>
            <button className="cursor-pointer [border:none] pt-4 px-4 pb-[17px] bg-gray-200 w-[120px] rounded-6xs flex flex-row items-center justify-center box-border hover:bg-dimgray-500">
              <div className="relative text-lg leading-[160%] capitalize font-medium font-nunito text-white text-left">
                Search
              </div>
            </button>
          </div>
        </div>
        <div className="self-stretch rounded-3xs bg-lemonchiffon flex flex-row items-center justify-start py-[85px] px-[90px] box-border gap-[96px] max-w-full mq850:gap-[96px] mq850:py-[55px] mq850:px-[22px] mq850:box-border mq1225:flex-wrap mq1225:gap-[96px] mq1225:pl-[45px] mq1225:pr-[45px] mq1225:box-border">
          <FrameComponent7 />
          <img
            className="h-[296.9px] w-[453.1px] relative object-cover max-w-full mq1225:flex-1"
            loading="eager"
            alt=""
            src="/image5@2x.png"
          />
        </div>
      </section>
      <Subscribe pattern="/pattern11@2x.png" />
      <section className="w-[1240px] flex flex-col items-center justify-start py-0 px-5 box-border gap-[60px] max-w-full shrink-0 text-left text-21xl text-gray-200 font-nunito mq850:gap-[60px]">
        <div className="self-stretch flex flex-row items-center justify-between gap-[20px] max-w-full mq850:flex-wrap mq850:justify-center">
          <h1 className="m-0 relative text-inherit leading-[110.5%] font-semibold font-inherit mq450:text-5xl mq450:leading-[27px] mq850:text-13xl mq850:leading-[35px]">
            Latest posts
          </h1>
          <div className="w-[532px] flex flex-row items-center justify-center gap-[20px] max-w-full mq850:flex-wrap">
            <button className="cursor-pointer [border:none] pt-4 px-[27px] pb-[17px] bg-gray-200 rounded-6xs flex flex-row items-center justify-center hover:bg-dimgray-500">
              <div className="relative text-lg leading-[160%] capitalize font-medium font-nunito text-white text-left">
                All
              </div>
            </button>
            <button className="cursor-pointer pt-4 px-[25px] pb-[17px] bg-[transparent] w-[116px] rounded-6xs box-border flex flex-row items-center justify-center border-[1.5px] border-solid border-gray-200 hover:bg-dimgray-1000 hover:box-border hover:border-[1.5px] hover:border-solid hover:border-dimgray-500">
              <div className="relative text-lg leading-[160%] capitalize font-medium font-nunito text-gray-200 text-left">
                Growth
              </div>
            </button>
            <button className="cursor-pointer pt-4 px-[25px] pb-[17px] bg-[transparent] w-[119px] rounded-6xs box-border flex flex-row items-center justify-center border-[1.5px] border-solid border-gray-200 hover:bg-dimgray-1000 hover:box-border hover:border-[1.5px] hover:border-solid hover:border-dimgray-500">
              <div className="relative text-lg leading-[160%] capitalize font-medium font-nunito text-gray-200 text-left">
                Content
              </div>
            </button>
            <button className="cursor-pointer pt-4 px-[23px] pb-[17px] bg-[transparent] flex-1 rounded-6xs box-border flex flex-row items-center justify-center min-w-[103px] border-[1.5px] border-solid border-gray-200 hover:bg-dimgray-1000 hover:box-border hover:border-[1.5px] hover:border-solid hover:border-dimgray-500">
              <div className="relative text-lg leading-[160%] capitalize font-medium font-nunito text-gray-200 text-left">
                Social Media
              </div>
            </button>
          </div>
        </div>
        <div className="self-stretch flex flex-col items-center justify-start gap-[51px] max-w-full mq850:gap-[51px]">
          <Frame
            image="/image-13@2x.png"
            image1="/image-22@2x.png"
            onTextContainerClick={onTextContainerClick}
            onContainerClick={onContainerClick}
          />
          <Frame
            image="/image-31@2x.png"
            image1="/image-41@2x.png"
            propBackground="unset"
            propBackgroundColor="#fff"
            propBorder="1.5px solid #dcdcdc"
            propPadding="0px 1px 0px 0px"
            onTextContainerClick={onContainer2Click}
            onContainerClick={onContainer1Click}
          />
        </div>
      </section>
      <Footer logo="/logo4@2x.png" />
    </div>
  );
};

export default Blog;
