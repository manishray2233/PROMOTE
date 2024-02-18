import type { NextPage } from "next";
import Points from "./points";

const Proccess2: NextPage = () => {
  return (
    <section className="w-[1200px] rounded-3xs [background:linear-gradient(111.05deg,_#e9f7ff,_#ffdbd4_51.05%,_#fff3ca)] flex flex-col items-center justify-start pt-[149px] px-5 pb-[147px] box-border relative gap-[25px] max-w-full text-left text-21xl text-gray-200 font-nunito mq1525:w-[calc(100%_-_40px)] mq850:pt-[97px] mq850:pb-24 mq850:box-border">
      <img
        className="w-[1200px] h-[716.5px] relative rounded-3xs hidden max-w-full z-[0]"
        alt=""
        src="/background6.svg"
      />
      <div className="w-px h-[227px] absolute my-0 mx-[!important] top-[227px] right-[515px] box-border z-[1] border-r-[1.5px] border-dashed border-darksalmon" />
      <div className="w-[970px] flex flex-row flex-wrap items-start justify-start gap-[26px] max-w-full shrink-0">
        <div className="flex-1 flex flex-row items-start justify-start gap-[52px] min-w-[398px] max-w-full mq850:flex-wrap mq850:gap-[52px] mq850:min-w-full">
          <div className="flex-1 flex flex-col items-start justify-start gap-[19px] min-w-[308px] max-w-full">
            <h1 className="m-0 w-[447px] relative text-inherit leading-[110.5%] font-semibold font-inherit inline-block max-w-full z-[1] mq450:text-5xl mq450:leading-[27px] mq850:text-13xl mq850:leading-[35px]">
              Our bulletproof process to win on Social Media
            </h1>
            <div className="self-stretch h-px relative box-border z-[1] border-t-[1px] border-solid border-lightgray-200" />
          </div>
          <img
            className="h-[86px] w-[86px] relative object-contain z-[2]"
            loading="eager"
            alt=""
            src="/1@2x.png"
          />
        </div>
        <div className="w-[332px] flex flex-col items-start justify-start gap-[13px] max-w-full text-6xl">
          <h3 className="m-0 relative text-inherit leading-[110.5%] font-semibold font-inherit z-[1] mq450:text-xl mq450:leading-[22px]">
            Social Media Content Plan
          </h3>
          <div className="self-stretch relative text-lg leading-[156.5%] font-noto-sans text-dimgray-700 z-[1]">{`consectetur amet dolor sit comeneer ilremsilom dolce issilm acalrm `}</div>
        </div>
      </div>
      <div className="w-[970px] flex flex-row flex-wrap items-end justify-start gap-[50px] max-w-full shrink-0 text-lg text-dimgray-700 font-noto-sans mq850:gap-[50px]">
        <div className="flex-1 flex flex-col items-start justify-start pt-0 px-0 pb-1 box-border min-w-[309px] max-w-full">
          <div className="self-stretch relative leading-[156.5%] whitespace-pre-wrap z-[1]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
            sollicitudinbibendum senectus scelerisque non. Turpis matis morbi
            vivera ipsum adipiscing Mauris volutpat Ipsum duis tempor.
          </div>
        </div>
        <div className="w-[444px] flex flex-row items-start justify-start gap-[26px] max-w-full text-6xl text-gray-200 font-nunito mq450:flex-wrap">
          <img
            className="h-[86px] w-[86px] relative object-contain z-[2]"
            alt=""
            src="/1-1@2x.png"
          />
          <div className="flex-1 flex flex-col items-start justify-start gap-[13px] min-w-[216px] max-w-full">
            <h3 className="m-0 relative text-inherit leading-[110.5%] font-semibold font-inherit z-[1] mq450:text-xl mq450:leading-[22px]">{`Publishing & Execution`}</h3>
            <div className="self-stretch relative text-lg leading-[156.5%] font-noto-sans text-dimgray-700 z-[1]">{`consectetur amet dolor sit comeneer ilremsilom dolce issilm acalrm `}</div>
          </div>
        </div>
      </div>
      <div className="w-[970px] flex flex-row items-center justify-between gap-[20px] max-w-full shrink-0 text-6xl mq1225:flex-wrap">
        <Points
          dolorDuisLoremEnimEuTurpi="Dolor duis lorem enim eu nulla semper "
          loremAEgetBlanditAcNequeD="Lorem a eget blandit ac neque pulvinar"
          pellentesqueNonIntegerAcI="Pellentesque non integer ac id bibendum"
          propMinWidth="432px"
        />
        <div className="w-[444px] flex flex-row items-start justify-start py-5 px-0 box-border gap-[26px] min-w-[444px] max-w-full mq450:flex-wrap mq850:min-w-full mq1225:flex-1">
          <div className="w-[86px] flex flex-row items-center justify-center z-[2]">
            <div className="h-[86px] flex-1 relative">
              <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-white box-border w-full h-full border-[0px] border-solid border-mistyrose-200" />
              <img
                className="absolute top-[19.2px] left-[19.2px] w-[47.7px] h-[47.7px] object-cover z-[1]"
                loading="eager"
                alt=""
                src="/img1@2x.png"
              />
            </div>
          </div>
          <div className="flex-1 flex flex-col items-start justify-start gap-[13px] min-w-[216px] max-w-full">
            <h3 className="m-0 relative text-inherit leading-[110.5%] font-semibold font-inherit z-[1] mq450:text-xl mq450:leading-[22px]">{`Measure & Scale`}</h3>
            <div className="self-stretch relative text-lg leading-[156.5%] font-noto-sans text-dimgray-700 z-[1]">{`consectetur amet dolor sit comeneer ilremsilom dolce issilm acalrm `}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Proccess2;
