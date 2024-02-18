import type { NextPage } from "next";

const Texttestimonial: NextPage = () => {
  return (
    <div className="self-stretch flex flex-row items-end justify-between gap-[20px] max-w-full text-left text-mini text-gold font-noto-sans mq850:flex-wrap">
      <div className="w-[612px] flex flex-row items-start justify-start gap-[39px] max-w-full mq850:flex-wrap mq850:gap-[39px]">
        <img
          className="h-[88px] w-[88px] relative"
          loading="eager"
          alt=""
          src="/icon-11.svg"
        />
        <div className="flex-1 flex flex-col items-start justify-start gap-[15px] min-w-[315px] max-w-full">
          <div className="relative tracking-[0.14em] leading-[156.5%] uppercase font-medium">
            <span>//</span>
            <span className="text-khaki">{` `}</span>
            <span className="text-gray-200">04 . Testimonial</span>
          </div>
          <h1 className="m-0 self-stretch relative text-21xl leading-[110.5%] font-semibold font-nunito text-gray-200 mq850:text-13xl mq850:leading-[35px] mq450:text-5xl mq450:leading-[27px]">
            We work with customers across all industries
          </h1>
        </div>
      </div>
      <div className="flex flex-row items-start justify-start gap-[19px]">
        <img
          className="h-[70px] w-[70px] relative min-h-[70px]"
          loading="eager"
          alt=""
          src="/image-frame.svg"
        />
        <div className="h-[70px] w-[70px] relative min-h-[70px] flex items-center justify-center">
          <img
            className="h-full w-full min-h-[70px] object-contain absolute left-[0px] top-[10px] [transform:scale(1.343)]"
            alt=""
            src="/-1.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default Texttestimonial;
