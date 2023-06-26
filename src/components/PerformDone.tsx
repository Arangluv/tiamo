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
const done = [
  {
    proceedState: "done",
    name: "G밸리 더리브 스마트타워",
    location: "서울시 금천구 가산동",
    supply: "지식산업센터(공장) + 근린생활시설 (지하4층 ~ 지상15층)",
    scale: "총10,487.11평",
    link: "",
    imageUrl: "http://www.ti-a-mo.com/upload/gallery/09.PNG",
  },
  {
    proceedState: "done",
    name: "천안아산역 더리브",
    location: "충남 아산시 배방읍 장재리",
    supply: "오피스텔 593세대 (지하4층 ~ 지상45층) + 근린생활시설 29실",
    scale: "총27,654.83평",
    link: "",
    imageUrl: "http://www.ti-a-mo.com/upload/gallery/08.PNG",
  },
  {
    proceedState: "done",
    name: "문래동 하우스디비즈 지식산업센터 신축공사",
    location: "서울 영등포구 문래동5가",
    supply: "지식산업센터 (지하3층 ~ 지상14층)",
    scale: "총11,867.89평",
    link: "",
    imageUrl: "http://www.ti-a-mo.com/upload/gallery/06.PNG",
  },
];

function PerformDone() {
  const doneBussiness = chunk(done, 3);
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
        {doneBussiness.map((item, idx) => {
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

export default PerformDone;
