import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";

const Wrapper = styled.div`
  width: 100%;
  height: auto;
  position: relative;
  background-color: white;
  margin-bottom: 0;
  @media screen and (max-width: 768px) {
    padding-top: 3vh;
    height: 70vh;
  }
`;
const Overview = styled.div`
  width: 100%;
  height: 45vh;
  display: flex;
  flex-direction: column;
`;
const OverviewTitle = styled.div`
  width: 100%;
  margin-top: 1vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  h2 {
    color: #7f8c8d;
    font-size: 1.5vw;
    margin-bottom: 1vw;
    @media screen and (max-width: 768px) {
      font-size: 2vh;
      margin-bottom: 1vh;
    }
  }
  small {
    font-size: 2vw;
    font-weight: 800;
    margin-bottom: 2vw;
    @media screen and (max-width: 768px) {
      font-size: 2.5vh;
      margin-bottom: 1vh;
    }
  }
`;
const IntroductionContainer = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0 5vw;
  @media screen and (max-width: 768px) {
    height: 50%;
    margin-top: 4vh;
  }
`;
const IntroductionItem = styled.div`
  width: 10vw;
  height: 10vw;
  border-radius: 20px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease-in-out;
  @media screen and (max-width: 768px) {
    border-radius: 10px;
    width: 12vh;
    height: 12vh;
    img {
      width: 70%;
      height: 60%;
    }
  }
  &:hover {
    cursor: pointer;
    box-shadow: 1px 1px 7px gray;
  }
  span {
    font-size: 1.1vw;
    font-weight: 600;
    margin-top: 1vw;
    color: #273c75;
    @media screen and (max-width: 768px) {
      font-size: 1.1vh;
      margin-top: 1vh;
    }
  }
`;
const BussinessPart = styled.div`
  width: 100%;
  height: 40vh;
  display: flex;
  justify-content: space-between;
  position: relative;
  img {
    opacity: 0.95;
    object-fit: cover;
    width: 100%;
    height: 100%;
    position: absolute;
    filter: brightness(0.8);
  }
  @media screen and (max-width: 768px) {
    height: 16vh;
  }
`;
const BussinessPartDescription = styled.div`
  width: 50%;
  height: 100%;
  z-index: 999;
  margin-left: 5vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  span {
    color: white;
  }
  div {
    width: 60px;
    border: 2px solid white;
    margin: 2vw 0;
    @media screen and (max-width: 768px) {
      border: 1px solid white;
    }
  }
  #description_part_1 {
    color: #dcdde1;
    font-size: 1.5vw;
    font-weight: 700;
    @media screen and (max-width: 768px) {
      font-size: 1.5vh;
      margin-bottom: 0.5vh;
    }
  }
  #description_part_2 {
    margin-top: 0.5vw;
    font-weight: 600;
    @media screen and (max-width: 768px) {
      font-size: 1.5vh;
    }
  }
  #description_part_3 {
    font-size: 1.2vw;
    @media screen and (max-width: 768px) {
      font-size: 8px;
    }
  }
`;
const BussinessPartViewMore = styled.div`
  width: 30%;
  height: 100%;
  z-index: 999;
  margin-right: 3vw;
  display: flex;
  justify-content: center;
  align-items: center;
  a {
    margin-top: 7vw;
    background-color: white;
    color: black;
    text-decoration: none;
    border: 2px solid white;
    border-radius: 30px;
    padding: 1vw 2.5vw;
    font-size: 1.2vw;
    font-weight: 500;
    transition: all 0.2s ease-in-out;
    @media screen and (max-width: 768px) {
      font-size: 1vh;
    }
  }
  a:hover {
    background-color: #273c75;
    border-color: #273c75;
    color: white;
  }
`;
function MainLastPart() {
  const navigator = useNavigate();
  return (
    <Wrapper>
      <Overview>
        <OverviewTitle>
          <h2>회사소개</h2>
          <small>Company Introduction</small>
        </OverviewTitle>
        <IntroductionContainer>
          <IntroductionItem onClick={() => navigator("/company/overview")}>
            <img
              src={process.env.PUBLIC_URL + `/introduction/sec02_ico01.png`}
              alt="company introduction image"
            />
            <span>회사 개요</span>
          </IntroductionItem>
          <IntroductionItem onClick={() => navigator("/company/history")}>
            <img
              src={process.env.PUBLIC_URL + `/introduction/sec02_ico02.png`}
              alt="company introduction image"
            />
            <span>회사 연혁</span>
          </IntroductionItem>
          <IntroductionItem onClick={() => navigator("/company/organization")}>
            <img
              src={process.env.PUBLIC_URL + `/introduction/sec02_ico03.png`}
              alt="company introduction image"
            />
            <span>조직도</span>
          </IntroductionItem>
        </IntroductionContainer>
      </Overview>
      <BussinessPart>
        <img
          src={process.env.PUBLIC_URL + `/main2.jpg`}
          alt="bussiness part introduction part"
        />
        <BussinessPartDescription>
          <span id="description_part_1">BUSINESS AREAS</span>
          <span id="description_part_2">various business fields</span>
          <div></div>
          <span id="description_part_3">
            티아모는 여러 사업분야를 전문적으로 수행하고 있습니다
          </span>
        </BussinessPartDescription>
        <BussinessPartViewMore>
          <Link to="/bussiness">View More</Link>
        </BussinessPartViewMore>
      </BussinessPart>
    </Wrapper>
  );
}

export default MainLastPart;
