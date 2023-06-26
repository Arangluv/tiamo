import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { MdArrowForwardIos } from "react-icons/md";
import { AiFillHome } from "react-icons/ai";
const ThumbnailContainer = styled.div`
  width: 100%;
  height: 20vw;
  display: flex;
  flex-direction: column;
  position: relative;
  @media screen and (max-width: 768px) {
    height: 20vh;
  }
  img {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 1;
    filter: brightness(50%);
  }
`;
const Navigation = styled.div`
  width: 100%;
  height: 4vw;
  display: flex;
  z-index: 999;
  align-items: center;
  justify-content: center;
  margin-top: 1vw;
  @media screen and (max-width: 768px) {
    margin-top: 2.5vh;
  }
  span,
  svg {
    color: white;
  }
  span {
    font-size: 1.2vw;
    @media screen and (max-width: 768px) {
      font-size: 1.3vh;
    }
  }
  svg {
    margin: 0 1vw;
    width: 1.5vw;
    height: 1.5vw;
    @media screen and (max-width: 768px) {
      width: 1.5vh;
      height: 1.5vh;
    }
  }
`;
const Title = styled.div`
  display: flex;
  justify-content: center;
  z-index: 999;
  margin-top: 3vw;
  @media screen and (max-width: 768px) {
    margin-top: 4.5vh;
  }
  h2 {
    font-size: 3vw;
    color: white;
    font-weight: 700;
    @media screen and (max-width: 768px) {
      font-size: 2vh;
    }
  }
`;
const NavBtnList = styled.div`
  width: 100%;
  margin-top: 4vw;
  display: flex;
  justify-content: center;
  background-color: none;
  @media screen and (max-width: 768px) {
    margin-top: 3.5vh;
  }
`;
const Button = styled.button<AccentProps>`
  margin: 0 2vw;
  z-index: 0;
  background-color: ${(props) => (props.isAccent ? "#273c75" : "transparent")};
  color: white;
  padding: 1vw 2vw;
  border: none;
  border-radius: 30px;
  font-size: 1.2vw;
  /* font-weight: 500; */
  transition: all 0.2s ease-in-out;
  @media screen and (max-width: 768px) {
    font-size: 10px;
    padding: 1vh 2vh;
  }
  &:hover {
    background-color: ${(props) => (props.isAccent ? "#273c75" : "white")};
    color: ${(props) => (props.isAccent ? "white" : "black")};
    cursor: pointer;
  }
`;
interface IProps {
  thumbnailUrl: string;
  firstPathName: string;
  lastPathName: string;
  listType: string;
  currentFocus: string;
}
interface AccentProps {
  isAccent: boolean;
}
const company = ["회사개요", "회사연혁", "조직도"];
const bussiness = ["사업분야"];
const perform = ["전체사업", "예정사업", "진행사업", "완료사업"];
const marketing = ["보도자료", "티아모소식"];
function ThumbnailGuide({
  thumbnailUrl,
  firstPathName,
  lastPathName,
  listType,
  currentFocus,
}: IProps) {
  const navigator = useNavigate();
  const handleCompanyClick = (path: string) => {
    if (path === "회사개요") {
      navigator("/company/overview");
      return;
    }
    if (path === "회사연혁") {
      navigator("/company/history");
      return;
    }
    navigator("/company/organization");
  };
  const handleBussinessClick = () => {
    navigator("/bussiness");
    return;
  };
  const handlePerformClick = (path: string) => {
    if (path === "전체사업") {
      navigator("/perform");
      return;
    }
    if (path === "예정사업") {
      navigator("/perform/intended");
      return;
    }
    if (path === "진행사업") {
      navigator("/perform/proceeding");
      return;
    }
    navigator("/perform/done");
  };
  const handleMarketingClick = (path: string) => {
    if (path === "보도자료") {
      navigator("/marketing");
      return;
    }
    navigator("/marketing/tiamo");
  };
  return (
    <ThumbnailContainer>
      <img src={process.env.PUBLIC_URL + `/${thumbnailUrl}`} alt="" />
      <Navigation>
        <AiFillHome />
        <MdArrowForwardIos />
        <span>{firstPathName}</span>
        {lastPathName === "" ? null : <MdArrowForwardIos />}
        {lastPathName === "" ? null : <span>{lastPathName}</span>}
      </Navigation>
      <Title>
        <h2>{lastPathName ? lastPathName : firstPathName}</h2>
      </Title>
      <NavBtnList>
        {listType === "company"
          ? company.map((item) => (
              <Button
                onClick={() => handleCompanyClick(item)}
                isAccent={item === currentFocus}
                key={item}
              >
                {item}
              </Button>
            ))
          : null}
        {listType === "bussiness"
          ? bussiness.map((item) => (
              <Button
                onClick={() => handleBussinessClick}
                isAccent={item === currentFocus}
                key={item}
              >
                {item}
              </Button>
            ))
          : null}
        {listType === "perform"
          ? perform.map((item) => (
              <Button
                onClick={() => handlePerformClick(item)}
                isAccent={item === currentFocus}
                key={item}
              >
                {item}
              </Button>
            ))
          : null}
        {listType === "marketing"
          ? marketing.map((item) => (
              <Button
                onClick={() => handleMarketingClick(item)}
                isAccent={item === currentFocus}
                key={item}
              >
                {item}
              </Button>
            ))
          : null}
      </NavBtnList>
    </ThumbnailContainer>
  );
}

export default ThumbnailGuide;
