import type { NextPage } from "next";

const FooterContent: NextPage = () => {
  return (
    <div className="h-[645px] w-[702px] flex flex-col items-start justify-start gap-[50px] text-left text-6xl text-white font-nunito">
      <div className="w-[662px] h-[152px] flex flex-row items-start justify-start gap-[110px]">
        <div className="h-[152px] w-[255px] flex flex-col items-start justify-start gap-[17px]">
          <div className="w-[223px] h-7 flex flex-row items-center justify-start gap-[5px]">
            <img
              className="h-[22px] w-[22px] relative z-[1]"
              alt=""
              src="/vector-28.svg"
            />
            <h3 className="m-0 h-7 w-[196px] relative text-inherit leading-[110.5%] font-semibold font-inherit inline-block z-[1]">
              Get in touch with
            </h3>
          </div>
          <button className="cursor-pointer [border:none] pt-3 pb-[11px] pr-[31px] pl-8 bg-darkslategray-300 w-[255px] h-[62px] rounded-6xs flex flex-row items-center justify-center box-border z-[1]">
            <img
              className="w-[255px] relative rounded-6xs h-[62px] hidden"
              alt=""
              src="/rectangle-142.svg"
            />
            <b className="h-[39px] w-48 relative text-6xl leading-[156.5%] inline-block font-noto-sans text-khaki text-left z-[1]">
              +1 917 000 1212
            </b>
          </button>
          <a
            className="w-[225px] h-7 relative text-lg leading-[156.5%] font-noto-sans text-[inherit] inline-block [text-decoration:none] z-[1]"
            href="mailto:borgholm@qodeinteractive.com"
            target="_blank"
          >
            {" "}
            nextlevel@marketing.com
          </a>
        </div>
        <div className="h-[152px] w-[297px] flex flex-col items-start justify-start gap-[20px] text-lg font-noto-sans">
          <div className="w-[116px] h-7 flex flex-row items-center justify-start gap-[7px] text-6xl font-nunito">
            <img
              className="h-[21px] w-4 relative z-[1]"
              alt=""
              src="/icon-19.svg"
            />
            <h3 className="m-0 h-7 w-[93px] relative text-inherit leading-[110.5%] font-semibold font-inherit inline-block z-[1]">
              Location
            </h3>
          </div>
          <div className="w-[297px] h-14 relative leading-[156.5%] inline-block z-[1]">
            <p className="m-0">10 Suna House 65 Rivington Street</p>
            <p className="m-0">London EC2A 3QQ</p>
          </div>
          <div className="w-[67px] h-7 relative [text-decoration:underline] leading-[156.5%] text-khaki inline-block z-[1]">
            location
          </div>
        </div>
      </div>
      <div className="w-[702px] h-0 relative box-border z-[1] border-t-[1px] border-solid border-dimgray-100" />
      <div className="w-[638px] h-72 flex flex-row items-start justify-start gap-[111px]">
        <div className="h-72 w-[120px] flex flex-col items-start justify-start gap-[30px]">
          <div className="w-[99px] h-[30px] flex flex-row items-start justify-start gap-[3px]">
            <img
              className="h-[30px] w-[30px] relative z-[1]"
              alt=""
              src="/icon-20.svg"
            />
            <h3 className="m-0 h-7 w-[66px] relative text-inherit leading-[110.5%] font-semibold font-inherit inline-block z-[1]">
              Pages
            </h3>
          </div>
          <div className="w-[120px] h-[228px] relative text-lg leading-[211.5%] font-noto-sans inline-block z-[1]">
            <p className="m-0">Home</p>
            <p className="m-0">About</p>
            <p className="m-0">Blog</p>
            <p className="m-0">Pricing Single</p>
            <p className="m-0">Contact</p>
            <p className="m-0">Services</p>
          </div>
        </div>
        <div className="h-[248px] w-[183px] flex flex-col items-start justify-start gap-[30px]">
          <div className="w-[183px] h-7 flex flex-row items-start justify-start gap-[3px]">
            <img className="h-7 w-7 relative z-[1]" alt="" src="/icon-21.svg" />
            <h3 className="m-0 h-7 w-[152px] relative text-inherit leading-[110.5%] font-semibold font-inherit inline-block z-[1]">
              Uitility Pages
            </h3>
          </div>
          <div className="w-[173px] h-[190px] relative text-lg leading-[211.5%] font-noto-sans inline-block z-[1]">
            <p className="m-0">Styleguide</p>
            <p className="m-0">404 Not Found</p>
            <p className="m-0">Password Protected</p>
            <p className="m-0">Licenses</p>
            <p className="m-0">Changelog</p>
          </div>
        </div>
        <div className="h-[210px] w-[113px] flex flex-col items-start justify-start gap-[30px]">
          <div className="w-[113px] h-7 flex flex-row items-center justify-start gap-[7px]">
            <img className="h-4 w-5 relative z-[1]" alt="" src="/icon-22.svg" />
            <h3 className="m-0 h-7 w-[86px] relative text-inherit leading-[110.5%] font-semibold font-inherit inline-block z-[1]">
              Follows
            </h3>
          </div>
          <div className="w-[93px] h-[152px] relative text-lg leading-[211.5%] font-noto-sans inline-block z-[1]">
            <p className="m-0">Facebook</p>
            <p className="m-0">Twitter</p>
            <p className="m-0">Instagram</p>
            <p className="m-0">LinkedIn</p>
          </div>
        </div>
      </div>
      <div className="w-[702px] h-[55px] flex flex-col items-center justify-start gap-[17px] text-lg font-noto-sans">
        <div className="w-[702px] h-0 relative box-border z-[1] border-t-[1px] border-solid border-dimgray-100" />
        <div className="w-[606px] h-[38px] flex flex-row items-start justify-start py-0 pr-[13px] pl-0 box-border">
          <div className="h-[38px] w-[593px] relative leading-[211.5%] inline-block z-[1]">
            Copyright © Nextlevel | Designed by VictorFlow - Powered by Webflow
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterContent;
