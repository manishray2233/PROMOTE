import type { NextPage } from "next";
import ArticleThumbnail from "./article-thumbnail";

const ReadMoreButton: NextPage = () => {
  return (
    <section className="w-[1920px] h-[1429px] flex flex-row items-start justify-start pt-0 px-0 pb-[39px] box-border text-left text-mini text-white font-nunito">
      <div className="h-[1390px] w-[1920px] bg-gray-200 flex flex-col items-center justify-start py-[161px] pr-[358px] pl-[360px] box-border gap-[100px]">
        <img
          className="w-[1920px] relative h-[1382px] hidden"
          alt=""
          src="/background1.svg"
        />
        <div className="w-[1200px] h-[178px] flex flex-row items-center justify-start gap-[150px] text-lightgray-100 font-noto-sans">
          <div className="h-[178px] w-[845px] flex flex-row items-start justify-start gap-[39px]">
            <img
              className="h-[88px] w-[88px] relative z-[1]"
              alt=""
              src="/icon-12.svg"
            />
            <div className="h-[178px] w-[718px] flex flex-col items-start justify-start">
              <div className="w-[190px] h-[46px] relative tracking-[0.14em] leading-[156.5%] uppercase font-medium inline-block z-[1]">
                <p className="m-0">
                  <span className="text-gold">//</span>
                  <span className="text-khaki">{` `}</span>
                  <span>05 . CASE STUDIES</span>
                </p>
              </div>
              <div className="w-[710px] h-[132px] flex flex-row items-start justify-start py-0 px-0 box-border text-21xl text-white font-nunito">
                <h1 className="m-0 h-[132px] w-[718px] relative text-inherit leading-[110.5%] font-semibold font-inherit inline-block shrink-0 z-[1]">
                  1520 -Project Done. Browse our latest case study on Marketing
                  Agency
                </h1>
              </div>
            </div>
          </div>
          <div className="h-[66px] w-[205px] flex flex-col items-start justify-start pt-1 px-0 pb-0 box-border">
            <button className="cursor-pointer [border:none] pt-[15px] px-5 pb-[18px] bg-white w-[205px] h-[62px] rounded-6xs flex flex-row items-center justify-start box-border gap-[7px] z-[1]">
              <img
                className="w-[205px] relative rounded-6xs h-[62px] hidden"
                alt=""
                src="/rectangle-14.svg"
              />
              <div className="h-[29px] w-[140px] relative text-lg leading-[160%] capitalize font-medium font-nunito text-gray-200 text-left inline-block z-[1]">
                More cacestudys
              </div>
              <div className="h-[17px] w-3.5 flex flex-col items-start justify-start pt-[3px] px-0 pb-0 box-border">
                <img
                  className="w-3.5 h-3.5 relative object-contain z-[1]"
                  alt=""
                  src="/vector-9.svg"
                />
              </div>
            </button>
          </div>
        </div>
        <div className="w-[1200px] h-[576px] flex flex-row items-center justify-start gap-[27px] z-[1] text-11xl">
          <div className="h-[] w-[559px] flex flex-col items-start justify-start gap-[25px]">
            <ArticleThumbnail onlineMediaManagement="Online Media Management" />
            <div className="w-[558px] h-[] rounded-3xs bg-darkslategray-400 shadow-[0px_18px_50px_rgba(0,_0,_0,_0.25)] box-border flex flex-col items-start justify-start py-[41px] px-[49px] text-lg text-khaki font-noto-sans border-[1px] border-solid border-dimgray-300">
              <div className="w-[460px] h-[] flex flex-col items-start justify-start gap-[30px]">
                <div className="w-[460px] h-[] flex flex-row items-start justify-start gap-[104px]">
                  <div className="h-[] w-[310px] flex flex-col items-start justify-start gap-[9px]">
                    <div className="w-[181px] h-7 relative leading-[156.5%] inline-block">
                      Branding / Marketing
                    </div>
                    <div className="w-[310px] h-[33px] relative text-11xl leading-[110.5%] font-semibold font-nunito text-white inline-block">
                      Experiential Marketing
                    </div>
                  </div>
                  <img
                    className="h-[46px] w-[46px] relative"
                    alt=""
                    src="/button.svg"
                  />
                </div>
                <div className="w-[420px] h-[84px] relative leading-[156.5%] text-lightgray-100 inline-block">
                  Lorem Ipsum has been the industry's standard from dummy text
                  ever since the unknown printer to galley of type and make.
                </div>
              </div>
            </div>
            <ArticleThumbnail
              onlineMediaManagement="Email Marketing "
              propAlignSelf="unset"
              propGap="202px"
              propAlignSelf1="unset"
            />
          </div>
          <img
            className="h-[546px] w-[614px] relative object-contain"
            alt=""
            src="/image-5@2x.png"
          />
        </div>
        <div className="w-[1202px] h-[114px] flex flex-col items-start justify-start gap-[68px] text-21xl">
          <div className="w-[1200px] h-0 relative box-border z-[1] border-t-[1px] border-solid border-dimgray-400" />
          <div className="w-[1202px] h-[46px] flex flex-row items-start justify-start gap-[121px] z-[1]">
            <div className="h-[46px] w-[227px] flex flex-row items-start justify-start gap-[21px]">
              <div className="h-11 w-24 relative leading-[110.5%] font-semibold inline-block">
                <span>325</span>
                <span className="text-mediumslateblue">+</span>
              </div>
              <div className="h-[46px] w-[110px] relative text-mini tracking-[0.14em] leading-[156.5%] uppercase font-medium font-noto-sans text-lightgray-100 inline-block">
                <p className="m-0">{`Clients `}</p>
                <p className="m-0">Worldwide</p>
              </div>
            </div>
            <div className="h-[46px] w-[216px] flex flex-row items-center justify-start gap-[15px]">
              <div className="h-11 w-24 relative leading-[110.5%] font-semibold inline-block">
                <span>975</span>
                <span className="text-crimson">+</span>
              </div>
              <div className="h-[46px] w-[105px] relative text-mini tracking-[0.14em] leading-[156.5%] uppercase font-medium font-noto-sans text-lightgray-100 inline-block">
                <p className="m-0">{`Projects `}</p>
                <p className="m-0">Completed</p>
              </div>
            </div>
            <div className="h-[46px] w-[175px] flex flex-row items-center justify-start gap-[16px]">
              <div className="h-11 w-[72px] relative leading-[110.5%] font-semibold inline-block">
                <span>70</span>
                <span className="text-khaki">+</span>
              </div>
              <div className="h-[46px] w-[87px] relative text-mini tracking-[0.14em] leading-[156.5%] uppercase font-medium font-noto-sans text-lightgray-100 inline-block">
                <p className="m-0">{`Team `}</p>
                <p className="m-0">Members</p>
              </div>
            </div>
            <div className="h-[46px] w-[221px] flex flex-row items-center justify-start gap-[12px]">
              <div className="h-11 w-[107px] relative leading-[110.5%] font-semibold inline-block">
                <span>85m</span>
                <span className="text-springgreen">+</span>
              </div>
              <div className="h-[46px] w-[102px] relative text-mini tracking-[0.14em] leading-[156.5%] uppercase font-medium font-noto-sans text-lightgray-100 inline-block">
                <p className="m-0">Revenue</p>
                <p className="m-0">Generated</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReadMoreButton;
