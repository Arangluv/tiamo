import styled from "styled-components";
import ThumbnailGuide from "./ThumbnailGuide";
import BussinessComponent from "./BussinessComponent";

const Wrapper = styled.div`
  width: 100%;
  border: 0.1vw solid rgba(255, 255, 255, 0);
  min-height: 30vh;
  height: auto;
  margin-top: 13vw;
  @media screen and (max-width: 768px) {
    margin-top: 13vh;
  }
`;
const BussinessContainer = styled.div`
  width: 100%;
  min-height: 50vh;
  height: auto;
  display: flex;
  flex-direction: column;
  padding-bottom: 3vw;
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
const intended = [
  {
    proceedState: "intended",
    name: "파주 티아모 까사",
    location: "파주시 금촌동",
    supply: "층수미정, 267세대",
    scale: "약 24,000㎡",
    link: "",
    imageUrl:
      "http://www.ti-a-mo.com/upload/gallery/%ED%8C%8C%EC%A3%BC%EA%B8%88%EC%B4%8C%EB%8F%99%ED%88%AC%EC%8B%9C%EB%8F%84UPLOAD.jpg",
  },
];

function PerformIntend() {
  const intendedBussiness = chunk(intended, 3);
  return (
    <Wrapper>
      <ThumbnailGuide
        thumbnailUrl="perform.jpg"
        firstPathName="사업실적"
        lastPathName="예정사업"
        listType="perform"
        currentFocus="예정사업"
      />
      <BussinessContainer>
        {intendedBussiness.map((item, idx) => {
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

export default PerformIntend;
