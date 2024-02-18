import type { NextPage } from "next";

const GroupIcons: NextPage = () => {
  return (
    <div className="self-stretch flex flex-col items-start justify-start gap-[20px] max-w-full text-left text-11xl text-gray-200 font-nunito">
      <div className="self-stretch rounded-3xs bg-white box-border flex flex-row items-center justify-between py-[27px] pr-8 pl-7 gap-[20px] max-w-full border-[1.5px] border-solid border-gainsboro-400 mq850:flex-wrap">
        <div className="h-[100px] w-[900px] relative rounded-3xs bg-white box-border hidden max-w-full border-[1.5px] border-solid border-gainsboro-400" />
        <input
          className="w-[450px] [border:none] [outline:none] font-semibold font-nunito text-11xl bg-[transparent] h-[33px] relative leading-[110.5%] text-gray-200 text-left inline-block max-w-full z-[1] mq450:text-lg mq450:leading-[20px] mq850:text-5xl mq850:leading-[27px]"
          placeholder="Can I cancel or change my order?"
          type="text"
        />
        <img
          className="h-[46px] w-[46px] relative z-[1]"
          alt=""
          src="/icon-32.svg"
        />
      </div>
      <div className="self-stretch rounded-3xs [background:linear-gradient(124.11deg,_#e9f7ff,_#ffdbd4_51.05%,_#fff3ca)] flex flex-col items-center justify-start pt-[31px] px-[30px] pb-[60px] box-border gap-[7px] max-w-full">
        <div className="w-[900px] h-[200px] relative rounded-3xs [background:linear-gradient(124.11deg,_#e9f7ff,_#ffdbd4_51.05%,_#fff3ca)] hidden max-w-full" />
        <div className="self-stretch flex flex-row items-start justify-between gap-[20px] max-w-full mq850:flex-wrap">
          <h2 className="m-0 relative text-inherit leading-[110.5%] font-semibold font-inherit inline-block max-w-full z-[1] mq450:text-lg mq450:leading-[20px] mq850:text-5xl mq850:leading-[27px]">
            What’s your support line to call to ask questions?
          </h2>
          <img
            className="h-[46px] w-[46px] relative z-[1]"
            alt=""
            src="/icon-42.svg"
          />
        </div>
        <div className="self-stretch flex flex-row items-start justify-start py-0 px-[3px] box-border max-w-full text-lg text-dimgray-700 font-noto-sans">
          <div className="w-[791px] relative leading-[156.5%] inline-block shrink-0 max-w-full z-[1]">{`Lorem Ipsum has been the industry's standard from dummy text ever since the unknown printer to galley of type and make a type specimen book. `}</div>
        </div>
      </div>
      <div className="self-stretch rounded-3xs bg-white box-border flex flex-row items-center justify-between py-[27px] pr-8 pl-7 gap-[20px] max-w-full border-[1.5px] border-solid border-gainsboro-400 mq850:flex-wrap">
        <div className="h-[100px] w-[900px] relative rounded-3xs bg-white box-border hidden max-w-full border-[1.5px] border-solid border-gainsboro-400" />
        <input
          className="w-[525px] [border:none] [outline:none] font-semibold font-nunito text-11xl bg-[transparent] h-[33px] relative leading-[110.5%] text-gray-200 text-left inline-block max-w-full z-[1] mq450:text-lg mq450:leading-[20px] mq850:text-5xl mq850:leading-[27px]"
          placeholder="I have a promotional or discount code?"
          type="text"
        />
        <img
          className="h-[46px] w-[46px] relative z-[1]"
          alt=""
          src="/icon-32.svg"
        />
      </div>
      <div className="self-stretch rounded-3xs bg-white box-border flex flex-row items-center justify-between py-[27px] pr-8 pl-7 gap-[20px] max-w-full border-[1.5px] border-solid border-gainsboro-400 mq850:flex-wrap">
        <div className="h-[100px] w-[900px] relative rounded-3xs bg-white box-border hidden max-w-full border-[1.5px] border-solid border-gainsboro-400" />
        <input
          className="w-[547px] [border:none] [outline:none] font-semibold font-nunito text-11xl bg-[transparent] h-[33px] relative leading-[110.5%] text-gray-200 text-left inline-block max-w-full z-[1] mq450:text-lg mq450:leading-[20px] mq850:text-5xl mq850:leading-[27px]"
          placeholder="Can I integrate my store with Facebook?"
          type="text"
        />
        <img
          className="h-[46px] w-[46px] relative z-[1]"
          alt=""
          src="/icon-32.svg"
        />
      </div>
      <div className="self-stretch rounded-3xs bg-white box-border flex flex-row items-center justify-between py-[27px] pr-8 pl-7 gap-[20px] max-w-full border-[1.5px] border-solid border-gainsboro-400 mq850:flex-wrap">
        <div className="h-[100px] w-[900px] relative rounded-3xs bg-white box-border hidden max-w-full border-[1.5px] border-solid border-gainsboro-400" />
        <input
          className="w-[515px] [border:none] [outline:none] font-semibold font-nunito text-11xl bg-[transparent] h-[33px] relative leading-[110.5%] text-gray-200 text-left inline-block max-w-full z-[1] mq450:text-lg mq450:leading-[20px] mq850:text-5xl mq850:leading-[27px]"
          placeholder="Where is my order? Quisque molestie"
          type="text"
        />
        <img
          className="h-[46px] w-[46px] relative z-[1]"
          alt=""
          src="/icon-32.svg"
        />
      </div>
    </div>
  );
};

export default GroupIcons;
