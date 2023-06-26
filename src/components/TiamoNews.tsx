import styled from "styled-components";
import ThumbnailGuide from "./ThumbnailGuide";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
const Wrapper = styled.div`
  width: 100%;
  border: 0.1vw solid rgba(255, 255, 255, 0);
  min-height: 160vh;
  height: auto;
  margin-top: 13vw;
  @media screen and (max-width: 768px) {
    margin-top: 13vh;
  }
`;
const NewsContainer = styled.article`
  width: 100%;
  min-height: 100vh;
  height: auto;
  display: flex;
  flex-direction: column;
  padding-top: 3vw;
`;
const NewsSubContainer = styled.div`
  width: 100%;
  height: 35vw;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1vw 0;
  margin-bottom: 6vw;
  &.top_container {
    margin-top: 5vw;
  }
  @media screen and (max-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    height: 60vh;
    /* justify-items: center;
    align-content: center; */
    grid-gap: 10px;
    box-sizing: border-box;
    padding: 1vh;
  }
`;
const NewsComponent = styled(motion.div)`
  width: 22%;
  margin: 0 1vw;
  height: 100%;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px,
    rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
  border-radius: 20px;
  transition: all 0.2s ease-in-out;
  &:hover {
    cursor: pointer;
    box-shadow: rgba(25, 42, 86, 0.3) 0px 10px 15px -3px,
      rgba(25, 42, 86, 0.3) 0px 4px 6px -2px;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    height: 30vh;
  }
`;
const ImageContainer = styled.div`
  width: 100%;
  height: 60%;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  img {
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    width: 100%;
    height: 100%;
    object-fit: fill;
  }
`;
const TitleContainer = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  padding: 0 1vw;
  box-sizing: border-box;
  h4 {
    font-size: 1.1vw;
    font-weight: 600;
    height: 100%;
    display: flex;
    align-items: center;
    @media screen and (max-width: 768px) {
      font-size: 1.2vh;
    }
  }
  span {
    font-size: 1vw;
    color: #353b48;
    font-size: 1vh;
  }
`;
const Content = styled.p`
  width: 100%;
  height: 30%;
  padding: 1vw;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  font-size: 1.1vw;
  line-height: 1.6;
  box-sizing: border-box;
  padding-top: 2vw;
  @media screen and (max-width: 768px) {
    padding: 1vh;
    padding-top: 2vh;
    font-size: 1vh;
  }
`;
const EmptyComponents = styled.div`
  width: 22%;
  margin: 0 1vw;
  height: 100%;
  @media screen and (max-width: 768px) {
  }
`;
const Overlay = styled(motion.div)`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.2);
`;
const OverlayBox = styled(motion.div)`
  width: 60%;
  height: 80%;
  border-radius: 30px;
  img {
    border-radius: 30px;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
interface NewsProps {
  thumbnailUrl: string;
  createdAt: string;
  title: string;
  content: string;
}
const variant = {
  start: {
    opacity: 0,
  },
  end: {
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.5,
    },
  },
};
const news = [
  {
    thumbnailUrl: "http://www.ti-a-mo.com/upload/sosik/tiamo11.jpg",
    createdAt: "2022.09.01",
    title: "티아모 11주년",
    content:
      "2022년 8월 31은 티아모 창립 11주년 입니다. 11주년 기념굿즈를 제작 하여 티아모 임직원들에게 배포하였습니다 :)",
  },
  {
    thumbnailUrl:
      "http://www.ti-a-mo.com/upload/sosik/%EC%A0%9C%EC%A3%BC%EB%8F%84%EC%9B%8C%ED%81%AC%EC%83%B52.jpg",
    createdAt: "2022.08.30",
    title: "2022년 8월 제주도워크샵",
    content: "하늘이 너무 파래서 요트를 타보았습니다:)",
  },
  {
    thumbnailUrl:
      "http://www.ti-a-mo.com/upload/sosik/%EC%A0%9C%EC%A3%BC%EB%8F%84%EC%9B%8C%ED%81%AC%EC%83%B5.jpg",
    createdAt: "2022.08.30",
    title: "2022년 8월 한라산 등반",
    content:
      "날이 자꾸 좋아서 제주도 한라산에 다녀왔습니다. 백록담 정상석 인증:)",
  },
  {
    thumbnailUrl:
      "http://www.ti-a-mo.com/upload/sosik/KakaoTalk_20220510_162244223_01.jpg",
    createdAt: "2022.05.10",
    title: "제주도워크샵",
    content: "티아모 화이팅 :)",
  },
  {
    thumbnailUrl:
      "http://www.ti-a-mo.com/upload/sosik/KakaoTalk_20220510_162244223.jpg",
    createdAt: "2022.05.10",
    title: "제주도워크샵",
    content: "날이 너무 좋아서 제주도에 다녀왔습니다.",
  },
  {
    thumbnailUrl:
      "http://www.ti-a-mo.com/upload/sosik/re_%EC%82%AC%EB%AC%B4%EC%8B%A43%20(2).jpg",
    createdAt: "2021.12.20",
    title: "주식회사 티아모_라운지",
    content: "주식회사 티아모_라운지",
  },
  {
    thumbnailUrl:
      "http://www.ti-a-mo.com/upload/sosik/re_%EC%82%AC%EB%AC%B4%EC%8B%A4%EC%82%AC%EC%A7%84%20(13).jpg",
    createdAt: "2021.12.20",
    title: "주식회사 티아모_휴게실",
    content: "주식회사 티아모_휴게실",
  },
  {
    thumbnailUrl:
      "http://www.ti-a-mo.com/upload/sosik/re_%EC%82%AC%EB%AC%B4%EC%8B%A4%EC%82%AC%EC%A7%84%20(17).jpg",
    createdAt: "2021.12.20",
    title: "주식회사 티아모_소회의실",
    content: "주식회사 티아모_소회의실",
  },
  {
    thumbnailUrl:
      "http://www.ti-a-mo.com/upload/sosik/rere_%EC%82%AC%EB%AC%B4%EC%8B%A4%EC%82%AC%EC%A7%84%20(3).jpg",
    createdAt: "2021.12.20",
    title: "주식회사 티아모_대회의실",
    content: "주식회사 티아모_대회의실",
  },
  {
    thumbnailUrl:
      "http://www.ti-a-mo.com/upload/sosik/re_%EC%82%AC%EB%AC%B4%EC%8B%A4%EC%82%AC%EC%A7%84%20(18).jpg",
    createdAt: "2021.12.20",
    title: "주식회사 티아모_업무공간",
    content: "주식회사 티아모_업무공간",
  },
  {
    thumbnailUrl:
      "http://www.ti-a-mo.com/upload/sosik/re_%EC%82%AC%EB%AC%B4%EC%8B%A4%EC%82%AC%EC%A7%84%20(15).jpg",
    createdAt: "2021.12.20",
    title: "주식회사 티아모_출입구",
    content: "주식회사 티아모_출입구",
  },
  {
    thumbnailUrl:
      "http://www.ti-a-mo.com/upload/sosik/%EB%93%B1%EC%82%B0%20(2).jpg",
    createdAt: "2021.10.19",
    title: "2021 티아모 가을산행",
    content: "2021 티아모 가을산행",
  },
  {
    thumbnailUrl:
      "http://www.ti-a-mo.com/upload/sosik/%EB%93%B1%EC%82%B0%20(1).jpg",
    createdAt: "2021.10.19",
    title: "2021 티아모 가을산행",
    content: "2021 티아모 가을산행",
  },
];
function chunk(data: NewsProps[], size = 1) {
  const arr: NewsProps[][] = [];
  for (let i = 0; i < data.length; i += size) {
    arr.push(data.slice(i, i + size));
  }
  if (arr[arr.length - 1].length === 1) {
    for (let i = 0; i < 3; i++) {
      arr[arr.length - 1].push({
        thumbnailUrl: "",
        createdAt: "",
        title: "",
        content: "",
      });
    }
  }
  if (arr[arr.length - 1].length === 2) {
    for (let i = 0; i < 2; i++) {
      arr[arr.length - 1].push({
        thumbnailUrl: "",
        createdAt: "",
        title: "",
        content: "",
      });
    }
  }
  if (arr[arr.length - 1].length === 3) {
    for (let i = 0; i < 1; i++) {
      arr[arr.length - 1].push({
        thumbnailUrl: "",
        createdAt: "",
        title: "",
        content: "",
      });
    }
  }
  // if (arr[arr.length - 1].length === 2) {
  //   arr[arr.length - 1].push({
  //     thumbnailUrl: "",
  //     title: "",
  //     publisher: "",
  //     createdAt: "",
  //     content: "",
  //     link: "",
  //   });
  // }
  return arr;
}
function TiamoNews() {
  const chunkArray = chunk(news, 4);
  const [layoutId, setLayoutId] = useState<null | string>(null);
  const [imageUrl, setImageUrl] = useState("");
  const handleFeedClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    if (!event.currentTarget.dataset.url) {
      return;
    }
    console.log(event.currentTarget.dataset.url);
    setImageUrl(event.currentTarget.dataset.url);
    setLayoutId(event.currentTarget.dataset.url);
  };
  const handleLayoutClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    event.stopPropagation();
    setLayoutId(null);
  };
  return (
    <>
      <Wrapper>
        <ThumbnailGuide
          thumbnailUrl="marketing.jpg"
          firstPathName="홍보센터"
          lastPathName="티아모소식"
          listType="marketing"
          currentFocus="티아모소식"
        />
        <NewsContainer>
          {chunkArray.map((news, idx) => (
            <NewsSubContainer key={idx}>
              {news.map((item) => {
                return item.title === "" ? (
                  <EmptyComponents></EmptyComponents>
                ) : (
                  <NewsComponent
                    key={item.thumbnailUrl}
                    data-url={item.thumbnailUrl}
                    layoutId={item.thumbnailUrl}
                    onClick={handleFeedClick}
                  >
                    <ImageContainer>
                      <img src={item.thumbnailUrl} alt="" />
                    </ImageContainer>
                    <TitleContainer>
                      <h4>{item.title}</h4>
                      <span>{item.createdAt}</span>
                    </TitleContainer>
                    <Content>{item.content}</Content>
                  </NewsComponent>
                );
              })}
            </NewsSubContainer>
          ))}
        </NewsContainer>
      </Wrapper>
      <AnimatePresence>
        {layoutId ? (
          <Overlay
            variants={variant}
            initial="start"
            animate="end"
            exit="exit"
            onClick={handleLayoutClick}
          >
            <OverlayBox
              variants={variant}
              initial="start"
              animate="end"
              exit="exit"
              layoutId={layoutId}
            >
              <img src={imageUrl} />
            </OverlayBox>
          </Overlay>
        ) : null}
      </AnimatePresence>
    </>
  );
}

export default TiamoNews;
