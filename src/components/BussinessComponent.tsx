import styled from "styled-components";
const Wrapper = styled.div`
  width: 30vw;
  height: 100%;
  margin: 0 1vw;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px,
    rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;
  box-sizing: border-box;
  @media screen and (max-width: 768px) {
    width: 85%;
    height: 50vh;
    margin: 1vh 0;
  }
`;
const EmptyWrapper = styled.div`
  width: 30vw;
  height: 100%;
  margin: 0 1vw;
  border-radius: 10px;
  box-sizing: border-box;
`;
const ImageContainer = styled.div`
  width: 100%;
  height: 60%;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  @media screen and (max-width: 768px) {
    height: 60%;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
  }
`;
const TitleContainer = styled.div<SProps>`
  width: 100%;
  height: 2.5vw;
  margin-top: 1vw;
  display: flex;
  padding: 0 1vw;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  @media screen and (max-width: 768px) {
    height: 2.5vh;
    padding: 0 1vh;
    margin-top: 1vh;
  }
  h4 {
    font-size: 1.1vw;
    font-weight: 600;
    @media screen and (max-width: 768px) {
      font-size: 1.4vh;
    }
  }
  span {
    font-size: 1vw;
    background-color: ${(props) =>
      props.bussinessState === "proceeding"
        ? "#6ab04c;"
        : props.bussinessState === "done"
        ? "#30336b"
        : "#f9ca24"};
    color: white;
    padding: 5px 15px;
    border-radius: 10px;
    @media screen and (max-width: 768px) {
      font-size: 1.2vh;
    }
  }
`;
const MetaInto = styled.div`
  width: 100%;
  height: 20%;
  margin-top: 1vw;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 768px) {
    margin-top: 3vh;
  }
`;
const MetaIntoSubContainer = styled.div`
  width: 100%;
  height: 1.5vw;
  padding-left: 1vw;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  margin: 0.5vw 0;
  @media screen and (max-width: 768px) {
    margin: 1vh 0;
    padding-left: 1vh;
  }
  span {
    font-size: 1vw;
    margin-right: 2vw;
    font-weight: 600;
    @media screen and (max-width: 768px) {
      font-size: 1.3vh;
      margin: 0.5vh 0;
      margin-right: 1vh;
    }
  }
  small {
    font-size: 1vw;
    color: #535c68;
    @media screen and (max-width: 768px) {
      font-size: 1.2vh;
    }
  }
`;
const RefLinkContainer = styled.div`
  width: 100%;
  height: 5%;
  padding: 0 1vw;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  flex-direction: row-reverse;
  position: relative;
  @media screen and (max-width: 768px) {
    padding: 0 1vh;
  }
  a {
    text-decoration: none;
    font-size: 1.2vw;
    color: white;
    background-color: #30336b;
    border-radius: 20px;
    padding: 1vw 2vw;
    transition: all 0.2s ease-in-out;
    position: absolute;
    top: -1.5vw;
    @media screen and (max-width: 768px) {
      font-size: 1.2vh;
      padding: 1vh 2vh;
    }
    &:hover {
      background-color: #130f40;
    }
  }
  span {
    font-size: 1.2vw;
    color: rgba(255, 255, 255, 0.8);
    background-color: #7f8c8d;
    border-radius: 20px;
    padding: 1vw 2vw;
    transition: all 0.2s ease-in-out;
    position: absolute;
    top: -1.5vw;
    &:hover {
      cursor: pointer;
    }
    @media screen and (max-width: 768px) {
      font-size: 1.2vh;
      padding: 1vh 2vh;
    }
  }
`;
interface SProps {
  bussinessState: string;
}
interface IProps {
  proceedState: string;
  name: string;
  location: string;
  supply: string;
  scale: string;
  link: string;
  imageUrl: string;
}
function BussinessComponent({
  proceedState,
  name,
  location,
  supply,
  scale,
  link,
  imageUrl,
}: IProps) {
  return name === "" ? (
    <EmptyWrapper></EmptyWrapper>
  ) : (
    <Wrapper>
      <ImageContainer>
        <img src={imageUrl} alt="" />
      </ImageContainer>
      <TitleContainer bussinessState={proceedState}>
        <h4>{name}</h4>
        {proceedState === "proceeding" ? (
          <span>진행중</span>
        ) : proceedState === "done" ? (
          <span>완료사업</span>
        ) : (
          <span>예정사업</span>
        )}
      </TitleContainer>
      <MetaInto>
        <MetaIntoSubContainer>
          <span>위치</span>
          <small>{location}</small>
        </MetaIntoSubContainer>
        <MetaIntoSubContainer>
          <span>공급</span>
          <small>{supply}</small>
        </MetaIntoSubContainer>
        <MetaIntoSubContainer>
          <span>규모</span>
          <small>{scale}</small>
        </MetaIntoSubContainer>
      </MetaInto>
      <RefLinkContainer>
        {!(link === "") ? (
          <a href={link} target="_blank">
            홈페이지 방문
          </a>
        ) : (
          <span>홈페이지 방문</span>
        )}
      </RefLinkContainer>
    </Wrapper>
  );
}

export default BussinessComponent;
