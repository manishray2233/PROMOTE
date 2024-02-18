import type { NextPage } from "next";

export type FooterType = {
  logo?: string;
};

const Footer: NextPage<FooterType> = ({ logo }) => {
  return (
    <footer className="self-stretch bg-gray-200 flex flex-row items-start justify-start py-[191px] px-[360px] box-border gap-[99px] max-w-full text-left text-18xl text-white font-nunito mq1525:flex-wrap mq850:gap-[99px] mq850:py-[81px] mq850:px-[90px] mq850:box-border mq1225:gap-[99px] mq1225:py-[124px] mq1225:px-[180px] mq1225:box-border">
      <img
        className="h-[1034px] w-[1920px] relative hidden max-w-full"
        alt=""
        src="/background2.svg"
      />
      <div className="w-[399px] rounded-6xs bg-darkslategray-300 flex flex-col items-center justify-start pt-[61px] px-12 pb-12 box-border relative gap-[13px] min-w-[399px] max-w-full z-[1] mq1525:flex-1 mq450:pl-5 mq450:pr-5 mq450:box-border mq850:pt-10 mq850:pb-[31px] mq850:box-border mq1225:min-w-full">
        <div className="self-stretch flex flex-row items-start justify-start pt-0 px-3 pb-1.5">
          <div className="flex flex-row items-end justify-start gap-[25px] mq450:flex-wrap">
            <div className="h-[57px] w-[57px] relative rounded-[50%] bg-khaki [transform:_rotate(-90deg)]" />
            <div className="flex flex-col items-start justify-start pt-0 px-0 pb-[5px]">
              <h1 className="m-0 relative text-inherit leading-[160%] font-extrabold font-inherit mq450:text-3xl mq450:leading-[36px] mq850:text-11xl mq850:leading-[47px]">
                Promote
              </h1>
            </div>
          </div>
        </div>
        <div className="w-[57.4px] h-[57.4px] absolute my-0 mx-[!important] top-[89.59px] left-[134.2px] rounded-[50%] bg-mediumslateblue [transform:_rotate(135deg)] [transform-origin:0_0] z-[1]" />
        <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[11px] pl-[5px]">
          <img
            className="h-[202px] flex-1 relative max-w-full overflow-hidden object-contain"
            loading="eager"
            alt=""
            src={logo}
          />
        </div>
        <div className="self-stretch flex flex-row items-start justify-start pt-0 pb-[5px] pr-2.5 pl-[5px] text-6xl">
          <div className="flex-1 flex flex-col items-start justify-start gap-[1px]">
            <h3 className="m-0 relative text-inherit leading-[110.5%] font-semibold font-inherit mq450:text-xl mq450:leading-[22px]">
              Subscribe now
            </h3>
            <div className="self-stretch relative text-lg leading-[156.5%] font-noto-sans text-lightgray-100 whitespace-pre-wrap">{`Industry's standard from dummy and make a type  book. `}</div>
          </div>
        </div>
        <input
          className="w-full [border:none] [outline:none] bg-dimgray-600 self-stretch h-[67px] rounded-6xs flex flex-row items-start justify-start pt-4 px-[31px] pb-[22px] box-border font-nunito font-medium text-lg text-white min-w-[182px]"
          placeholder="Enter Your Email..."
          type="text"
        />
        <button className="cursor-pointer [border:none] pt-3.5 pb-[19px] pr-[23px] pl-5 bg-khaki w-[293px] rounded-6xs flex flex-row items-center justify-center box-border hover:bg-goldenrod">
          <img
            className="h-[62px] w-[293px] relative rounded-6xs hidden"
            alt=""
            src="/background3.svg"
          />
          <div className="relative text-lg leading-[160%] capitalize font-medium font-nunito text-gray-200 text-left z-[1]">
            Subscribe
          </div>
        </button>
      </div>
      <div className="flex-1 flex flex-col items-start justify-start gap-[50px] min-w-[456px] max-w-full text-6xl mq850:gap-[50px] mq1225:min-w-full">
        <div className="w-[662px] flex flex-row items-start justify-between gap-[20px] max-w-full mq1225:flex-wrap">
          <div className="flex flex-col items-start justify-start gap-[17px] min-w-[255px] mq1225:flex-1">
            <div className="flex flex-row items-center justify-start gap-[5px]">
              <img
                className="h-[22px] w-[22px] relative z-[1]"
                alt=""
                src="/vector-28.svg"
              />
              <h3 className="m-0 relative text-inherit leading-[110.5%] font-semibold font-inherit z-[1] mq450:text-xl mq450:leading-[22px]">
                Get in touch with
              </h3>
            </div>
            <button className="cursor-pointer [border:none] pt-3 pb-[11px] pr-[31px] pl-8 bg-darkslategray-300 rounded-6xs flex flex-row items-center justify-center whitespace-nowrap z-[1] hover:bg-dimgray-200">
              <img
                className="h-[62px] w-[255px] relative rounded-6xs hidden"
                alt=""
                src="/rectangle-142.svg"
              />
              <b className="relative text-6xl leading-[156.5%] font-noto-sans text-khaki text-left z-[1]">
                +1 917 000 1212
              </b>
            </button>
            <a
              className="relative text-lg leading-[156.5%] font-noto-sans text-[inherit] [text-decoration:none] z-[1]"
              href="mailto:borgholm@qodeinteractive.com"
              target="_blank"
            >
              {" "}
              nextlevel@marketing.com
            </a>
          </div>
          <div className="flex flex-col items-start justify-start gap-[20px] min-w-[297px] text-lg font-noto-sans mq1225:flex-1">
            <div className="flex flex-row items-center justify-start gap-[3px] text-6xl font-nunito">
              <img
                className="h-[21px] w-4 relative z-[1]"
                alt=""
                src="/icon-19.svg"
              />
              <h3 className="m-0 relative text-inherit leading-[110.5%] font-semibold font-inherit z-[1] mq450:text-xl mq450:leading-[22px]">
                Location
              </h3>
            </div>
            <div className="relative leading-[156.5%] z-[1]">
              <p className="m-0">10 Suna House 65 Rivington Street</p>
              <p className="m-0">London EC2A 3QQ</p>
            </div>
            <div className="relative [text-decoration:underline] leading-[156.5%] text-khaki z-[1]">
              location
            </div>
          </div>
        </div>
        <div className="self-stretch h-px relative box-border z-[1] border-t-[1px] border-solid border-dimgray-100" />
        <div className="w-[638px] flex flex-row items-start justify-between gap-[20px] max-w-full mq850:flex-wrap">
          <div className="flex flex-col items-start justify-start gap-[30px]">
            <div className="flex flex-row items-start justify-start gap-[3px]">
              <img
                className="h-[30px] w-[30px] relative min-h-[30px] z-[1]"
                alt=""
                src="/icon-20.svg"
              />
              <h3 className="m-0 relative text-inherit leading-[110.5%] font-semibold font-inherit z-[1] mq450:text-xl mq450:leading-[22px]">
                Pages
              </h3>
            </div>
            <div className="relative text-lg leading-[211.5%] font-noto-sans z-[1]">
              <p className="m-0">Home</p>
              <p className="m-0">About</p>
              <p className="m-0">Blog</p>
              <p className="m-0">Pricing Single</p>
              <p className="m-0">Contact</p>
              <p className="m-0">Services</p>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start gap-[30px]">
            <div className="flex flex-row items-start justify-start gap-[3px]">
              <img
                className="h-7 w-7 relative min-h-[28px] z-[1]"
                alt=""
                src="/icon-21.svg"
              />
              <h3 className="m-0 relative text-inherit leading-[110.5%] font-semibold font-inherit z-[1] mq450:text-xl mq450:leading-[22px]">
                Uitility Pages
              </h3>
            </div>
            <div className="relative text-lg leading-[211.5%] font-noto-sans z-[1]">
              <p className="m-0">Styleguide</p>
              <p className="m-0">404 Not Found</p>
              <p className="m-0">Password Protected</p>
              <p className="m-0">Licenses</p>
              <p className="m-0">Changelog</p>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start gap-[30px]">
            <div className="flex flex-row items-center justify-start gap-[3px]">
              <div className="flex flex-col items-start justify-start pt-0 px-0 pb-0.5">
                <img
                  className="w-5 h-4 relative z-[1]"
                  alt=""
                  src="/icon-22.svg"
                />
              </div>
              <h3 className="m-0 relative text-inherit leading-[110.5%] font-semibold font-inherit z-[1] mq450:text-xl mq450:leading-[22px]">
                Follows
              </h3>
            </div>
            <div className="relative text-lg leading-[211.5%] font-noto-sans z-[1]">
              <p className="m-0">Facebook</p>
              <p className="m-0">Twitter</p>
              <p className="m-0">Instagram</p>
              <p className="m-0">LinkedIn</p>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-col items-center justify-start gap-[17px] max-w-full text-lg font-noto-sans">
          <div className="self-stretch h-px relative box-border z-[1] border-t-[1px] border-solid border-dimgray-100" />
          <div className="flex flex-row items-start justify-start py-0 pr-[13px] pl-0 box-border max-w-full">
            <div className="relative leading-[211.5%] z-[1]">
              Copyright © Nextlevel | Designed by VictorFlow - Powered by
              Webflow
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
