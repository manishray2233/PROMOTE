import type { NextPage } from "next";
import Heading from "./heading";
import TagLabelFrame from "./tag-label-frame";

const Services1: NextPage = () => {
  return (
    <div className="w-[1920px] h-[1579px] bg-gray-200 flex flex-row items-start justify-center py-[173px] px-[360px] box-border mt-[-55px] text-left text-mini text-gold font-noto-sans">
      <div className="h-[] w-[1200px] flex flex-col items-start justify-start gap-[90px]">
        <div className="w-[1200px] h-[] flex flex-row items-end justify-start gap-[279px]">
          <Heading
            icon="/icon.svg"
            services="01 . Services"
            highImpactServicesToTakeY="High-impact services to take your business to the next level"
          />
          <button className="cursor-pointer [border:none] pt-[17px] px-6 pb-[18px] bg-white h-[62px] w-[174px] rounded-6xs flex flex-col items-center justify-center box-border">
            <div className="w-[126px] h-[27px] flex flex-row items-center justify-center gap-[8px]">
              <div className="h-[27px] w-[108px] relative text-lg leading-[160%] capitalize font-medium font-nunito text-gray-200 text-left inline-block shrink-0">
                Our Services
              </div>
              <img
                className="h-3.5 w-3.5 relative object-contain"
                alt=""
                src="/vector-1.svg"
              />
            </div>
          </button>
        </div>
        <div className="w-[1200px] h-[] flex flex-row flex-wrap items-start justify-start gap-[67px_68px] text-6xl text-white font-nunito">
          <TagLabelFrame
            icon="/icon-110@2x.png"
            socialMediaMarketing="Social Media Marketing"
            nextlevelMarketingComText="/vector-1.svg"
          />
          <TagLabelFrame
            icon="/icon-23@2x.png"
            socialMediaMarketing="Paid Advertising"
            nextlevelMarketingComText="/vector-2.svg"
            propBorder="1px solid #535355"
            propBackgroundColor="transparent"
            propColor="#525255"
          />
          <TagLabelFrame
            icon="/icon-31@2x.png"
            socialMediaMarketing="Advanced Analytics"
            nextlevelMarketingComText="/vector-2.svg"
            propBorder="1px solid #535355"
            propBackgroundColor="transparent"
            propColor="#525255"
          />
          <TagLabelFrame
            icon="/icon-41@2x.png"
            socialMediaMarketing="SEO Optimization"
            nextlevelMarketingComText="/vector-2.svg"
            propBorder="1px solid #535355"
            propBackgroundColor="transparent"
            propColor="#525255"
          />
          <TagLabelFrame
            icon="/icon-51@2x.png"
            socialMediaMarketing="Funnel Optimization"
            nextlevelMarketingComText="/vector-2.svg"
            propBorder="1px solid #535355"
            propBackgroundColor="transparent"
            propColor="#525255"
          />
          <TagLabelFrame
            icon="/icon-61@2x.png"
            socialMediaMarketing="Condent Marketing"
            nextlevelMarketingComText="/vector-2.svg"
            propBorder="1px solid #535355"
            propBackgroundColor="transparent"
            propColor="#525255"
          />
        </div>
      </div>
    </div>
  );
};

export default Services1;
