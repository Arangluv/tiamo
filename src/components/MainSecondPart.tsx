import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { MdDone } from "react-icons/md";
import { GiProgression } from "react-icons/gi";
import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Wrapper = styled(motion.div)`
  width: 100%;
  height: 100vh;
  background-color: white;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (max-width: 768px) {
    height: 70vh;
    overflow: hidden;
  }
`;
const Title = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-top: 12vw;
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
    @media screen and (max-width: 768px) {
      font-size: 1.5vh;
    }
    color: #7f8c8d;
  }
`;
const GuideBox = styled.div`
  width: 100%;
  margin-top: 2vw;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 768px) {
    margin-top: 4vh;
  }
  div {
    &:first-child {
      border-top-left-radius: 30px;
      border-bottom-left-radius: 30px;
    }
    &:last-child {
      border-top-right-radius: 30px;
      border-bottom-right-radius: 30px;
    }
    box-shadow: 1px 1px 1px black;
    width: 25%;
    margin-right: 20px;
    display: flex;
    align-items: center;
    background-color: #273c75;
    padding: 1vw 1vw;
    justify-content: space-between;
    transition: all 0.1s ease-in-out;
    @media screen and (max-width: 768px) {
      width: 30%;
      padding: 1vh;
    }
    &:hover {
      cursor: pointer;
      box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
    }
    a {
      text-decoration: none;
      font-size: 1.1vw;
      font-weight: 500;
      color: white;
      @media screen and (max-width: 768px) {
        font-size: 1.3vh;
      }
    }
    svg {
      color: white;
      margin-right: 1vw;
      width: 2vw;
      height: 2vw;
      @media screen and (max-width: 768px) {
        width: 2vh;
        height: 2vh;
      }
    }
  }
`;
const StyledSlider = styled(Slider)`
  width: 1200px;
  height: 350px;
  margin-top: 4vw;
  display: flex !important;
  @media screen and (max-width: 768px) {
    margin-top: 4vh;
  }
  img {
    width: 350px !important;
    border-radius: 30px;
    box-shadow: 1px 1px 5px gray;
    margin-right: 50px !important;
  }
  .slick-slide.slick-active.slick-current {
    margin-left: 25px;
  }
  .slick-slide.slick-active {
    width: 350px !important;
    margin-right: 50px;
  }
`;
const imgArray = [
  "processing_1.png",
  "processing_2.jpg",
  "processing_3.jpg",
  "processing_4.jpg",
  "processing_5.jpg",
];
function MainSecondPart() {
  const [imgList, setImgList] = useState<string[]>(imgArray);
  const navigator = useNavigate();
  const settings = {
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    pauseOnHover: false,
  };
  return (
    <Wrapper>
      <Title>
        <h2>BUSINESS</h2>
        <h3>Tiamo Business Perfomance</h3>
        <span>첨단공법과 건축 미학이 열어가는 공간을 창조합니다</span>
      </Title>
      <GuideBox>
        <div onClick={() => navigator("/perform/proceeding")}>
          <Link to="/perform/proceeding">진행중인 사업</Link>
          <MdDone />
        </div>
        <div onClick={() => navigator("/perform/done")}>
          <Link to="/perform/done">완료된 사업</Link>
          <GiProgression />
        </div>
      </GuideBox>
      <StyledSlider {...settings}>
        {imgList.map((item) => {
          return (
            <img
              key={item}
              style={{ width: "350px" }}
              src={process.env.PUBLIC_URL + "/processing/" + `${item}`}
            />
          );
        })}
      </StyledSlider>
    </Wrapper>
  );
}

export default MainSecondPart;
