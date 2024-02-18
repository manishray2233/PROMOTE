import type { NextPage } from "next";

const VerticalSpacer: NextPage = () => {
  return (
    <section className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[49px] box-border max-w-full text-left text-26xl text-white font-nunito mq850:pb-8 mq850:box-border">
      <div className="flex-1 bg-gray-200 flex flex-row items-center justify-center pt-[3px] pb-0.5 pr-[53px] pl-5 box-border max-w-full mq1225:pr-[26px] mq1225:box-border">
        <img
          className="h-[500px] w-[1920px] relative hidden max-w-full"
          alt=""
          src="/background4.svg"
        />
        <div className="w-[1711px] flex flex-col items-center justify-start pt-[166px] pb-[167px] pr-5 pl-[53px] box-border relative gap-[50px] max-w-full mq850:gap-[50px] mq850:pl-[26px] mq850:pt-[108px] mq850:pb-[109px] mq850:box-border">
          <img
            className="w-full h-full absolute my-0 mx-[!important] top-[0.3px] right-[0.6px] bottom-[-0.6px] left-[-0.1px] max-w-full overflow-hidden max-h-full object-contain z-[1]"
            loading="eager"
            alt=""
            src="/pattern1@2x.png"
          />
          <h1 className="m-0 relative text-inherit leading-[110.5%] font-extrabold font-inherit inline-block max-w-full z-[2] mq850:text-17xl mq850:leading-[40px] mq450:text-8xl mq450:leading-[30px]">
            <span>{`Subscribe to our `}</span>
            <span className="text-khaki">newsletter</span>
          </h1>
          <div className="w-[518px] flex flex-row flex-wrap items-start justify-start gap-[20px] max-w-full">
            <input
              className="w-full [border:none] [outline:none] bg-dimgray-600 h-[62px] flex-1 rounded-6xs flex flex-row items-center justify-start pt-[17px] px-[26px] pb-4 box-border font-nunito font-medium text-lg text-white min-w-[227px] max-w-full z-[2]"
              placeholder="Enter Your Email..."
              type="text"
            />
            <button className="cursor-pointer [border:none] pt-4 px-4 pb-[17px] bg-khaki w-[148px] rounded-6xs flex flex-row items-center justify-center box-border z-[2] hover:bg-goldenrod">
              <div className="relative text-lg leading-[160%] capitalize font-medium font-nunito text-gray-200 text-left">
                Subscribe
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VerticalSpacer;
