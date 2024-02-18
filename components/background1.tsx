import type { NextPage } from "next";

export type Background1Type = {
  /** Action props */
  onHomeTextClick?: () => void;
  onAboutTextClick?: () => void;
  onSevicesTextClick?: () => void;
  onBlogTextClick?: () => void;
};

const Background1: NextPage<Background1Type> = ({
  onHomeTextClick,
  onAboutTextClick,
  onSevicesTextClick,
  onBlogTextClick,
}) => {
  return (
    <header className="w-[1193px] flex flex-row items-center justify-between gap-[20px] max-w-full text-left text-11xl text-darkslategray-600 font-nunito">
      <div className="flex flex-row items-center justify-start gap-[7px]">
        <div className="h-[81px] w-[81px] relative">
          <div className="absolute top-[75.2px] left-[6.2px] rounded-[50%] bg-khaki w-[57px] h-[57px] [transform:_rotate(-90deg)] [transform-origin:0_0] z-[2]" />
          <div className="absolute top-[40.59px] left-[81.2px] rounded-[50%] bg-mediumslateblue w-[57.4px] h-[57.4px] [transform:_rotate(135deg)] [transform-origin:0_0] z-[3]" />
        </div>
        <div className="flex flex-col items-start justify-start pt-0 px-0 pb-[9px]">
          <h2 className="m-0 relative text-inherit leading-[160%] font-extrabold font-inherit whitespace-nowrap z-[2]">
            Promote
          </h2>
        </div>
      </div>
      <div className="h-[69px] w-[509px] flex flex-col items-start justify-start py-5 pr-[25px] pl-0 box-border max-w-full text-lg-3 text-gray-200 mq1225:w-[25px]">
        <div className="self-stretch flex flex-row items-start justify-between py-0 pr-1.5 pl-0 gap-[20px] mq1225:hidden">
          <div
            className="relative tracking-[0.01em] leading-[24.44px] capitalize font-medium cursor-pointer z-[2]"
            onClick={onHomeTextClick}
          >
            Home
          </div>
          <div
            className="relative tracking-[0.01em] leading-[24.44px] capitalize cursor-pointer z-[2]"
            onClick={onAboutTextClick}
          >
            about
          </div>
          <div
            className="relative tracking-[0.01em] leading-[24.44px] capitalize font-medium cursor-pointer z-[2]"
            onClick={onSevicesTextClick}
          >
            Sevices
          </div>
          <div className="flex flex-row items-center justify-start gap-[11px]">
            <b className="relative tracking-[0.01em] leading-[24.44px] capitalize whitespace-nowrap z-[2]">{`Pages `}</b>
            <img
              className="h-3.5 w-3.5 relative z-[2]"
              alt=""
              src="/utility-pages.svg"
            />
          </div>
          <div
            className="relative tracking-[0.01em] leading-[24.44px] capitalize cursor-pointer z-[2]"
            onClick={onBlogTextClick}
          >
            Blog
          </div>
        </div>
      </div>
      <div className="flex flex-row items-center justify-center z-[2] text-lg text-white">
        <div className="rounded-6xs bg-gray-200 flex flex-row items-center justify-center pt-[17px] pb-[18px] pr-[35px] pl-[39px] whitespace-nowrap">
          <div className="relative leading-[160%] capitalize font-medium">{`Get Started `}</div>
        </div>
      </div>
    </header>
  );
};

export default Background1;
