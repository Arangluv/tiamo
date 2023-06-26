import styled from "styled-components";
import ThumbnailGuide from "./components/ThumbnailGuide";

const Wrapper = styled.div`
  width: 100%;
  height: auto;
  border: 0.1vw solid rgba(255, 255, 255, 0);
`;
const SubWrapper = styled.div`
  width: 100%;
  border: 0.1vw solid rgba(255, 255, 255, 0);
  height: 160vh;
  margin-top: 13vw;
  @media screen and (max-width: 768px) {
    margin-top: 13vh;
    height: 100vh;
  }
`;
const Title = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-top: 5vw;
  h2 {
    color: #7f8c8d;
    font-size: 1.5vw;
    font-weight: 500;
    margin-bottom: 1vw;
    @media screen and (max-width: 768px) {
      font-size: 2vh;
      margin-bottom: 1vh;
    }
  }
  h3 {
    font-size: 2vw;
    font-weight: 800;
    margin-bottom: 1vw;
    @media screen and (max-width: 768px) {
      font-size: 2.5vh;
      margin-bottom: 1vh;
    }
  }
  span {
    font-size: 1.1vw;
    color: #7f8c8d;
    @media screen and (max-width: 768px) {
      font-size: 1.5vh;
    }
  }
`;
const BussinessAreaContainer = styled.div`
  width: 100%;
  margin-top: 3vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media screen and (max-width: 768px) {
    margin-top: 3vh;
  }
`;
const SubContainer = styled.div`
  width: 100%;
  height: 30vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 2vw;
  @media screen and (max-width: 768px) {
    margin-bottom: 2vh;
    height: 20vh;
  }
`;
const AreaBox = styled.div`
  width: 25%;
  height: 30vh;
  margin: 0 1vw;
  border-radius: 20px;
  position: relative;
  padding: 1vw;
  box-sizing: border-box;
  box-shadow: 1px 1px 5px #535c68;
  @media screen and (max-width: 768px) {
    height: 20vh;
  }
  span {
    margin-top: 0;
    margin-left: 1vw;
    font-size: 1.2vw;
    color: #535c68;
    font-weight: 600;
    @media screen and (max-width: 768px) {
      font-size: 1.2vh;
      display: block;
      margin: 1vh;
    }
  }
  img {
    position: absolute;
    bottom: 1vw;
    right: 1vw;
    width: 10vw;
    height: 10vw;
    @media screen and (max-width: 768px) {
      right: 1vh;
      bottom: 1vh;
    }
  }
`;
function Bussiness() {
  return (
    <Wrapper>
      <SubWrapper>
        <ThumbnailGuide
          thumbnailUrl="bussiness.jpg"
          firstPathName="사업분야"
          lastPathName=""
          listType="bussiness"
          currentFocus="사업분야"
        />
        <Title>
          <h2>Bussiness</h2>
          <h3>Tiamo Bussiness Areas</h3>
          <span>
            뜨거운 열정으로 다양한 사업분야에 도전하고 있는 기업입니다
          </span>
        </Title>
        <BussinessAreaContainer>
          <SubContainer style={{ marginTop: "2vw" }}>
            <AreaBox>
              <span>부동산 개발업</span>
              <img src={process.env.PUBLIC_URL + "/sub04_ico09.png"} />
            </AreaBox>
            <AreaBox>
              <span>부동산 임대업</span>
              <img src={process.env.PUBLIC_URL + "/sub04_ico03.png"} />
            </AreaBox>
            <AreaBox>
              <span>주택건설 사업</span>
              <img src={process.env.PUBLIC_URL + "/sub04_ico10.png"} />
            </AreaBox>
          </SubContainer>
          <SubContainer>
            <AreaBox>
              <span>무역업</span>
              <img src={process.env.PUBLIC_URL + "/sub04_ico04.png"} />
            </AreaBox>
            <AreaBox>
              <span>의류, 잡화, 피혁도·소매업</span>
              <img src={process.env.PUBLIC_URL + "/sub04_ico05.png"} />
            </AreaBox>
            <AreaBox>
              <span>광고대행업</span>
              <img src={process.env.PUBLIC_URL + "/sub04_ico08.png"} />
            </AreaBox>
          </SubContainer>
        </BussinessAreaContainer>
      </SubWrapper>
    </Wrapper>
  );
}

export default Bussiness;
