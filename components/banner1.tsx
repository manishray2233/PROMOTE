import type { NextPage } from "next";

const Banner1: NextPage = () => {
  return (
    <div className="w-[1920px] h-[1156px] flex flex-col items-center justify-start pt-[61px] pb-[355px] pr-[360px] pl-[354px] box-border relative gap-[189px] z-[1] text-left text-mini text-gold font-noto-sans">
      <img
        className="w-full h-[1156px] absolute my-0 mx-[!important] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden shrink-0 object-cover"
        alt=""
        src="/banner-image@2x.png"
      />
      <header className="w-[1206px] h-[81px] flex flex-row items-center justify-start gap-[175px] text-left text-11xl text-darkslategray-600 font-nunito">
        <div className="h-[81px] w-[211px] flex flex-row items-center justify-start gap-[7px]">
          <div className="h-[81px] w-[81px] relative">
            <div className="absolute top-[75.2px] left-[6.2px] rounded-[50%] bg-khaki w-[57px] h-[57px] [transform:_rotate(-90deg)] [transform-origin:0_0] z-[2]" />
            <div className="absolute top-[40.59px] left-[81.2px] rounded-[50%] bg-mediumslateblue w-[57.4px] h-[57.4px] [transform:_rotate(135deg)] [transform-origin:0_0] z-[3]" />
          </div>
          <div className="h-[57px] w-[123px] flex flex-col items-start justify-start pt-0 px-0 pb-[9px] box-border">
            <h2 className="m-0 w-[123px] h-12 relative text-inherit leading-[160%] font-extrabold font-inherit inline-block z-[2]">
              Promote
            </h2>
          </div>
        </div>
        <div className="h-16 w-[820px] flex flex-row items-center justify-start gap-[47px] text-lg text-gray-200">
          <div className="h-10 w-[600px] flex flex-col items-start justify-start pt-2.5 px-0 pb-0 box-border">
            <div className="w-[600px] h-[30px] flex flex-row items-start justify-start gap-[58px]">
              <div className="h-[29px] w-[500px] flex flex-col items-start justify-start relative">
                <img
                  className="w-3.5 h-3.5 absolute my-0 mx-[!important] right-[77px] bottom-[7.4px] z-[2]"
                  alt=""
                  src="/subscribe-box.svg"
                />
                <div className="w-[500px] h-[29px] relative leading-[160%] capitalize font-medium whitespace-pre-wrap inline-block z-[3]">
                  Home About Services Pages Blog
                </div>
                <div className="w-[50px] h-0 relative">
                  <div className="absolute top-[-0.4px] left-[0px] box-border w-[50px] h-0 z-[4] border-t-[3px] border-solid border-mediumslateblue" />
                  <div className="absolute top-[-0.4px] left-[0px] box-border w-[25px] h-0 z-[5] border-t-[3px] border-solid border-khaki" />
                </div>
              </div>
              <div className="h-[29px] w-[42px] relative leading-[160%] capitalize font-medium inline-block z-[2]">
                LogIn
              </div>
            </div>
          </div>
          <button className="cursor-pointer [border:none] pt-[17px] pb-[18px] pr-[35px] pl-[39px] bg-gray-200 h-16 w-[173px] rounded-6xs flex flex-row items-center justify-center box-border z-[2]">
            <div className="h-[29px] w-[99px] relative text-lg leading-[160%] capitalize font-medium font-nunito text-white text-left inline-block">
              Get Started
            </div>
          </button>
        </div>
      </header>
      <div className="w-[1194px] h-[470px] flex flex-row items-start justify-start py-0 pr-[454px] pl-0 box-border">
        <div className="h-[470px] w-[740px] flex flex-col items-start justify-start gap-[28px]">
          <div className="w-[84px] h-[23px] relative tracking-[0.14em] leading-[156.5%] uppercase font-medium inline-block z-[1]">
            <span>//</span>
            <span className="text-gray-200">Agency</span>
          </div>
          <div className="w-[740px] h-[327px] flex flex-col items-start justify-start pt-0 px-0 pb-1.5 box-border gap-[34px] text-51xl text-gray-200 font-nunito">
            <h1 className="m-0 w-[740px] h-[231px] relative text-inherit leading-[110.5%] font-extrabold font-inherit inline-block z-[1]">
              <span>{`A fully integrated
digital `}</span>
              <span className="text-mediumslateblue">marketing</span>
              <span> agency</span>
            </h1>
            <div className="w-[593px] h-14 relative text-lg leading-[156.5%] font-noto-sans text-dimgray-700 inline-block z-[1]">
              Lorem ipsum dolor sit amet, ea mundi malorum cum, ocurreret
              reprehendunt ius ex. Ut vis mazim erroribus forensibus.
            </div>
          </div>
          <div className="w-[375px] h-16 flex flex-row items-start justify-start gap-[20px]">
            <button className="cursor-pointer [border:none] pt-[17px] px-[33px] pb-[18px] bg-gray-200 h-16 w-[182px] rounded-6xs flex flex-row items-center justify-end box-border z-[1]">
              <div className="h-[29px] w-[110px] relative text-lg leading-[160%] capitalize font-medium font-nunito text-white text-center inline-block">
                Our Services
              </div>
            </button>
            <button className="cursor-pointer pt-[17px] px-[33px] pb-[18px] bg-[transparent] h-16 w-[173px] rounded-6xs box-border flex flex-row items-center justify-end z-[1] border-[1.5px] border-solid border-gray-200">
              <div className="h-[29px] w-[101px] relative text-lg leading-[160%] capitalize font-medium font-nunito text-gray-200 text-center inline-block">
                Get Started
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner1;
