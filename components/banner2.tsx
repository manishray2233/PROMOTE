import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import Background1 from "./background1";

const Banner2: NextPage = () => {
  const router = useRouter();

  const onHomeTextClick = useCallback(() => {
    router.push("/");
  }, [router]);

  const onAboutTextClick = useCallback(() => {
    router.push("/about-us");
  }, [router]);

  const onSevicesTextClick = useCallback(() => {
    router.push("/services");
  }, [router]);

  const onBlogTextClick = useCallback(() => {
    router.push("/blog");
  }, [router]);

  return (
    <div className="self-stretch h-[606px] flex flex-col items-center justify-start pt-14 pb-[129px] pr-[47px] pl-5 box-border relative gap-[252px] max-w-full text-center text-51xl text-gray-200 font-nunito mq1225:gap-[252px] mq1225:pr-[23px] mq1225:box-border mq450:gap-[252px] mq850:gap-[252px] mq850:pt-9 mq850:pb-[84px] mq850:box-border">
      <div className="w-full h-[605.5px] absolute my-0 mx-[!important] right-[0px] bottom-[0.5px] left-[0px] shrink-0 flex items-center justify-center z-[0]">
        <img
          className="w-full h-full max-w-full overflow-hidden shrink-0 object-contain absolute left-[0px] top-[5px] [transform:scale(1.018)]"
          alt=""
          src="/banner-image@2x.png"
        />
      </div>
      <Background1
        onHomeTextClick={onHomeTextClick}
        onAboutTextClick={onAboutTextClick}
        onSevicesTextClick={onSevicesTextClick}
        onBlogTextClick={onBlogTextClick}
      />
      <div className="flex flex-row items-start justify-start py-0 pr-px pl-[27px] box-border max-w-full">
        <h1 className="m-0 relative text-inherit leading-[110.5%] font-extrabold font-inherit z-[1] mq450:text-23xl mq450:leading-[46px] mq850:text-37xl mq850:leading-[62px]">
          Let’s Talk
        </h1>
      </div>
    </div>
  );
};

export default Banner2;
