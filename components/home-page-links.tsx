import type { NextPage } from "next";

const HomePageLinks: NextPage = () => {
  return (
    <div className="w-[940px] flex flex-col items-start justify-start py-0 px-5 box-border gap-[50px] max-w-full text-left text-xl text-dimgray-700 font-noto-sans mq850:gap-[50px]">
      <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[11px] gap-[41px] text-21xl text-darkslategray-500 font-nunito mq450:gap-[41px]">
        <h1 className="m-0 h-[-3px] relative text-inherit leading-[133.2%] capitalize font-bold font-inherit inline-block z-[1] mq850:text-13xl mq850:leading-[43px] mq450:text-5xl mq450:leading-[32px]">
          Project Overview
        </h1>
        <div className="self-stretch h-14 relative text-lg leading-[156.5%] font-noto-sans text-dimgray-700 inline-block">
          Veniam quae. Nostrum facere repellendus minus quod aut aliquam neque
          reiciendis. Qui beatae vel magnam repudiandae ipsum repellat
          repudiandae. Voluptate at dolores ut dolor sint occaecati similique.
          Velit eius ab delectus temporibus.
        </div>
      </div>
      <div className="w-[652px] flex flex-col items-start justify-start gap-[25px] max-w-full">
        <div className="self-stretch relative leading-[160%] capitalize mq450:text-base mq450:leading-[26px]">
          <ul className="m-0 font-inherit text-inherit pl-[27px]">
            <li>
              Dolor duis lorem enim eu turpis potenti nulla semper velit sed
            </li>
          </ul>
        </div>
        <div className="self-stretch relative leading-[160%] capitalize mq450:text-base mq450:leading-[26px]">
          <ul className="m-0 font-inherit text-inherit pl-[27px]">
            <li>
              Lorem a eget blandit ac neque amet amet non dapibus pulvinar
            </li>
          </ul>
        </div>
        <div className="self-stretch relative leading-[160%] capitalize mq450:text-base mq450:leading-[26px]">
          <ul className="m-0 font-inherit text-inherit pl-[27px]">
            <li>
              Pellentesque non integer ac id imperdiet blandit sit bibendum
            </li>
          </ul>
        </div>
      </div>
      <div className="self-stretch h-[192.7px] relative text-lg leading-[156.5%] inline-block shrink-0">
        <p className="m-0">
          Lorem ipsum dolor sit amet consectetur adipiscing elit nunc donec vel
          sem ut ipsum odio duis vel sem et ornare consequat. Bibendum nibh et
          eget magna at habitant mauris nisi pellentesque morbi massa in
          eleifend tempus pellentesque sed pellentesque ridiculus aliquam
          maecenas turpis vulputate pellentesque maecenas egestas platea
          dictumst.
        </p>
        <p className="m-0"></p>
        <p className="m-0">
          Lorem ipsum dolor sit amet consectetur adipiscing elit mollis justo
          integer vitae aliquet elit velit dictum. Commodo facilisi sapien
          natoque eu elit odio est libero scelerisque urna aliquet id mauris
          suspendisse.
        </p>
      </div>
      <div className="w-[661px] flex flex-col items-start justify-start gap-[29px] max-w-full">
        <div className="self-stretch flex flex-row flex-wrap items-start justify-start [row-gap:20px] max-w-full shrink-0">
          <div className="h-[61px] flex-1 relative leading-[160%] capitalize inline-block min-w-[10px] max-w-full mq450:text-base mq450:leading-[26px]">
            1.
          </div>
          <div className="w-[35px] flex flex-col items-start justify-start py-0 px-0 box-border">
            <div className="w-[626px] relative leading-[160%] capitalize inline-block max-w-[1789%] shrink-0 mq450:text-base mq450:leading-[26px]">
              the unbanked population, combat counterfeiting and improve
              cross-border .
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start py-0 px-0 box-border max-w-full shrink-0">
          <div className="w-[704px] flex flex-row flex-wrap items-end justify-start [row-gap:20px] max-w-[107%] shrink-0">
            <div className="flex-1 flex flex-col items-start justify-start pt-0 px-0 pb-0 box-border min-w-[407px] max-w-full mq850:min-w-full">
              <div className="mb-[-1px] self-stretch h-[61px] relative leading-[160%] capitalize inline-block shrink-0 mq450:text-base mq450:leading-[26px]">{`2. `}</div>
            </div>
            <div className="w-[78px] flex flex-col items-start justify-start py-0 px-0 box-border">
              <div className="w-[669px] relative leading-[160%] capitalize inline-block max-w-[858%] shrink-0 mq450:text-base mq450:leading-[26px]">
                transactions to name a few. Even if we disregard the notion of
                bitcoin as a speculative
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start py-0 px-0 box-border max-w-full shrink-0">
          <div className="w-[704px] flex flex-row flex-wrap items-start justify-start [row-gap:20px] max-w-[107%] shrink-0">
            <div className="h-[61px] flex-1 relative leading-[160%] capitalize inline-block min-w-[12px] max-w-full shrink-0 mq450:text-base mq450:leading-[26px]">{`3. `}</div>
            <div className="w-[78px] flex flex-col items-start justify-start py-0 px-0 box-border">
              <div className="w-[669px] relative leading-[160%] capitalize inline-block max-w-[858%] shrink-0 mq450:text-base mq450:leading-[26px]">
                Even if we disregard the notion of bitcoin as a speculative
                asset or store of value.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch relative text-lg leading-[156.5%]">
        Veniam quae. Nostrum facere repellendus minus quod aut aliquam neque
        reiciendis. Qui beatae vel magnam repudiandae ipsum repellat
        repudiandae. Voluptate at dolores ut dolor sint occaecati similique.
        Velit eius ab delectus temporibus.
      </div>
    </div>
  );
};

export default HomePageLinks;
