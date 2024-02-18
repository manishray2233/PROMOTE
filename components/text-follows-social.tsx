import type { NextPage } from "next";
import Points from "./points";

const TextFollowsSocial: NextPage = () => {
  return (
    <div className="flex-1 flex flex-col items-start justify-start gap-[30px] min-w-[424px] max-w-full text-left text-mini text-dimgray-700 font-noto-sans mq850:min-w-full">
      <div className="self-stretch flex flex-row items-start justify-start gap-[39px] max-w-full shrink-0 text-gold mq850:flex-wrap mq850:gap-[39px]">
        <img className="h-[88px] w-[88px] relative" alt="" src="/icon-7.svg" />
        <div className="flex-1 flex flex-col items-start justify-start gap-[15px] min-w-[341px] max-w-full mq450:min-w-full">
          <div className="relative tracking-[0.14em] leading-[156.5%] uppercase font-medium">
            <span>//</span>
            <span className="text-khaki">{` `}</span>
            <span className="text-gray-200">02 . about this service</span>
          </div>
          <h1 className="m-0 self-stretch relative text-21xl leading-[110.5%] font-semibold font-nunito text-gray-200 mq450:text-5xl mq450:leading-[27px] mq850:text-13xl mq850:leading-[35px]">
            We take your business reach from thousands to millions
          </h1>
        </div>
      </div>
      <div className="self-stretch h-px relative box-border border-t-[1px] border-solid border-lightgray-200" />
      <div className="self-stretch relative text-lg leading-[156.5%]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit
        sollicitudinbibendum senectus scelerisque non. Turpis matis morbi vivera
        ipsum adipiscing Mauris volutpat sagittis, sit nulla. Velit et augues
        vitae Mattis at nibh nullas placerat imperdiet cursus viverra justo
        amet. Ipsum duis tempor.
      </div>
      <Points
        dolorDuisLoremEnimEuTurpi="Dolor duis lorem enim eu turpis potenti nulla semper "
        loremAEgetBlanditAcNequeD="Lorem a eget blandit ac neque dapibus pulvinar"
        pellentesqueNonIntegerAcI="Pellentesque non integer ac id imperdiet sit bibendum"
      />
    </div>
  );
};

export default TextFollowsSocial;
