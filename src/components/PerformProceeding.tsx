import styled from "styled-components";
import ThumbnailGuide from "./ThumbnailGuide";
import BussinessComponent from "./BussinessComponent";

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
const BussinessContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  height: auto;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 768px) {
    padding-bottom: 10vh;
  }
`;
const SubContainer = styled.div`
  width: 100%;
  height: 35vw;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1vw 0;
  &.top_container {
    margin-top: 5vw;
  }
  @media screen and (max-width: 768px) {
    height: auto;
    flex-direction: column;
    box-sizing: border-box;
  }
`;
const proceeding = [
  {
    proceedState: "proceeding",
    name: "향동 티아모 오피스",
    location: "경기도 고양시 향동지구 일반상업지역 내동",
    supply: "지하6층, 지상15층",
    scale: "약 16,800㎡",
    link: "https://tia-mo.co.kr/",
    imageUrl: "http://www.ti-a-mo.com/upload/gallery/low3.png",
  },
  {
    proceedState: "proceeding",
    name: "청라 더리브 티아모 까사",
    location: "인천광역시 서구 청라동",
    supply: "지하3층, 지상46층, 523세대",
    scale: "약 91,500㎡",
    link: "http://xn--hl0bk9gg2dbuc99a12kqofz2kxlreyo.com/",
    imageUrl:
      "http://www.ti-a-mo.com/upload/gallery/%EB%8D%94%EB%A6%AC%EB%B8%8C%ED%8B%B0%EC%95%84%EB%AA%A8%EA%B9%8C%EC%82%AC.jpg",
  },
  {
    proceedState: "proceeding",
    name: "인덕원역 더리브 디하우트",
    location: "경기도 안양시 동안구 평촌동",
    supply: "지하6층, 지상15층",
    scale: "약 36,000㎡",
    link: "http://www.indeokwon-dhaut.com/",
    imageUrl:
      "http://www.ti-a-mo.com/upload/gallery/%ED%8F%89%EC%B4%8C%EC%A1%B0%EA%B0%902.jpg",
  },
  {
    proceedState: "proceeding",
    name: "광명 티아모 IT타워",
    location: "경기도 광명시 하안동",
    supply: "지하4층, 지상16층",
    scale: "약56,670㎡",
    link: "http://tia-mo.net/teaser/gwang/",
    imageUrl:
      "http://www.ti-a-mo.com/upload/gallery/%EA%B4%91%EB%AA%85_upload.jpg",
  },
  {
    proceedState: "proceeding",
    name: "청라 더리브 티아모",
    location: "청라 IHP 첨단산업단지",
    supply: "지하2층, 지상10층",
    scale: "약 109,028㎡",
    link: "http://tia-mo.net/teaser/chung/index.asp",
    imageUrl:
      "http://www.ti-a-mo.com/upload/gallery/%EC%B2%AD%EB%9D%BC_upload.jpg",
  },
];
function chunk(data: Dprops[], size = 1) {
  const arr: Dprops[][] = [];

  for (let i = 0; i < data.length; i += size) {
    arr.push(data.slice(i, i + size));
  }
  if (arr[arr.length - 1].length === 1) {
    for (let i = 0; i < 2; i++) {
      arr[arr.length - 1].push({
        proceedState: "",
        name: "",
        location: "",
        supply: "",
        scale: "",
        link: "",
        imageUrl: "",
      });
    }
  }
  if (arr[arr.length - 1].length === 2) {
    arr[arr.length - 1].push({
      proceedState: "",
      name: "",
      location: "",
      supply: "",
      scale: "",
      link: "",
      imageUrl: "",
    });
  }
  return arr;
}
interface Dprops {
  proceedState: string;
  name: string;
  location: string;
  supply: string;
  scale: string;
  link: string;
  imageUrl: string;
}
function PerformProceeding() {
  const proceedingBussiness = chunk(proceeding, 3);
  return (
    <Wrapper>
      <ThumbnailGuide
        thumbnailUrl="perform.jpg"
        firstPathName="사업실적"
        lastPathName="진행사업"
        listType="perform"
        currentFocus="진행사업"
      />
      <BussinessContainer>
        {proceedingBussiness.map((item, idx) => {
          return idx === 0 ? (
            <SubContainer className="top_container">
              {item.map((bussiness, idx) => {
                return (
                  <BussinessComponent
                    proceedState={bussiness.proceedState}
                    name={bussiness.name}
                    location={bussiness.location}
                    supply={bussiness.supply}
                    scale={bussiness.scale}
                    link={bussiness.link}
                    imageUrl={bussiness.imageUrl}
                    key={idx}
                  />
                );
              })}
            </SubContainer>
          ) : (
            <SubContainer>
              {item.map((bussiness, idx) => {
                return (
                  <BussinessComponent
                    proceedState={bussiness.proceedState}
                    name={bussiness.name}
                    location={bussiness.location}
                    supply={bussiness.supply}
                    scale={bussiness.scale}
                    link={bussiness.link}
                    imageUrl={bussiness.imageUrl}
                    key={idx}
                  />
                );
              })}
            </SubContainer>
          );
        })}
      </BussinessContainer>
    </Wrapper>
  );
}

export default PerformProceeding;
