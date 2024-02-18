import type { NextPage } from "next";
import ImageContainer from "../components/image-container";
import FrameComponent6 from "../components/frame-component6";
import Footer from "../components/footer";

const BlogSingle: NextPage = () => {
  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-center justify-start gap-[158px] tracking-[normal] text-center text-51xl text-gray-200 font-nunito mq850:gap-[158px] mq1225:gap-[158px]">
      <ImageContainer />
      <FrameComponent6 />
      <div className="w-[302px] h-[77px] relative hidden">
        <div className="absolute top-[0px] left-[0px] leading-[110.5%] font-extrabold inline-block w-full h-full mq850:text-37xl mq850:leading-[62px] mq450:text-23xl mq450:leading-[46px]">
          <span>{`Our `}</span>
          <span className="text-mediumslateblue">Blog</span>
        </div>
      </div>
      <Footer logo="/logo31@2x.png" />
    </div>
  );
};

export default BlogSingle;
