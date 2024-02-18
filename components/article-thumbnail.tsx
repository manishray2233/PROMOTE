import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type ArticleThumbnailType = {
  onlineMediaManagement?: string;

  /** Style props */
  propAlignSelf?: CSSProperties["alignSelf"];
  propGap?: CSSProperties["gap"];
  propAlignSelf1?: CSSProperties["alignSelf"];
};

const ArticleThumbnail: NextPage<ArticleThumbnailType> = ({
  onlineMediaManagement,
  propAlignSelf,
  propGap,
  propAlignSelf1,
}) => {
  const articleThumbnailStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
    };
  }, [propAlignSelf]);

  const content1Style: CSSProperties = useMemo(() => {
    return {
      gap: propGap,
      alignSelf: propAlignSelf1,
    };
  }, [propGap, propAlignSelf1]);

  return (
    <div
      className="w-[559px] h-[130px] rounded-3xs bg-darkslategray-400 flex flex-col items-center justify-center py-[42px] px-11 box-border opacity-[0.5] text-left text-11xl text-white font-nunito"
      style={articleThumbnailStyle}
    >
      <div
        className="w-[471px] h-[46px] flex flex-row items-center justify-center gap-[56px]"
        style={content1Style}
      >
        <div className="h-[33px] w-[369px] relative leading-[110.5%] font-semibold inline-block">
          {onlineMediaManagement}
        </div>
        <img className="h-[46px] w-[46px] relative" alt="" src="/pattern.svg" />
      </div>
    </div>
  );
};

export default ArticleThumbnail;
