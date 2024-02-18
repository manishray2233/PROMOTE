import type { NextPage } from "next";

const SubscribeBox: NextPage = () => {
  return (
    <div className="h-[652px] w-[399px] rounded-6xs bg-darkslategray-300 flex flex-col items-center justify-start pt-[61px] px-[49px] pb-[49px] box-border relative gap-[13px] z-[1] text-left text-18xl text-white font-nunito">
      <div className="w-[57.4px] h-[57.4px] absolute my-0 mx-[!important] top-[89.59px] left-[134.2px] rounded-[50%] bg-mediumslateblue [transform:_rotate(135deg)] [transform-origin:0_0] z-[1]" />
      <div className="w-[293px] h-[284px] flex flex-row items-start justify-start py-0 pr-1.5 pl-0 box-border">
        <div className="h-[284px] w-[287px] flex flex-col items-start justify-start gap-[19px]">
          <div className="w-60 h-[63px] flex flex-row items-start justify-start py-0 pr-0 pl-[7px] box-border">
            <div className="h-[63px] w-[233px] flex flex-row items-end justify-start gap-[25px]">
              <div className="h-[57px] w-[57px] relative rounded-[50%] bg-khaki [transform:_rotate(-90deg)]" />
              <div className="h-[63px] w-[151px] flex flex-col items-start justify-start pt-0 px-0 pb-1 box-border">
                <h1 className="m-0 w-[151px] h-[59px] relative text-inherit leading-[160%] font-extrabold font-inherit inline-block">
                  Promote
                </h1>
              </div>
            </div>
          </div>
          <img
            className="w-[287px] h-[202px] relative object-cover"
            loading="eager"
            alt=""
            src="/logo1@2x.png"
          />
        </div>
      </div>
      <div className="w-[293px] h-[90px] flex flex-row items-start justify-start pt-0 pb-[5px] px-0 box-border text-6xl">
        <div className="h-[85px] w-72 flex flex-col items-start justify-start gap-[1px]">
          <h3 className="m-0 w-[168px] h-7 relative text-inherit leading-[110.5%] font-semibold font-inherit inline-block">
            Subscribe now
          </h3>
          <div className="w-72 h-14 relative text-lg leading-[156.5%] font-noto-sans text-lightgray-100 whitespace-pre-wrap inline-block">{`Industry's standard from dummy and make a type  book. `}</div>
        </div>
      </div>
      <input
        className="w-[293px] [border:none] [outline:none] bg-dimgray-600 h-[67px] rounded-6xs flex flex-row items-start justify-start pt-4 px-[26px] pb-[22px] box-border font-nunito font-medium text-lg text-white"
        placeholder="Enter Your Email..."
        type="text"
      />
      <button className="cursor-pointer [border:none] pt-[15px] pb-[18px] pr-[109px] pl-[106px] bg-khaki w-[293px] h-[62px] rounded-6xs flex flex-row items-center justify-center box-border">
        <img
          className="w-[293px] relative rounded-6xs h-[62px] hidden"
          alt=""
          src="/background3.svg"
        />
        <div className="h-[29px] w-[78px] relative text-lg leading-[160%] capitalize font-medium font-nunito text-gray-200 text-left inline-block z-[1]">
          Subscribe
        </div>
      </button>
    </div>
  );
};

export default SubscribeBox;
