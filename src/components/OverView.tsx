import { useEffect, useState } from "react";
import styled from "styled-components";
import ThumbnailGuide from "./ThumbnailGuide";
import { motion } from "framer-motion";
import { BiTime, BiPhoneCall } from "react-icons/bi";
import { HiLocationMarker } from "react-icons/hi";
import { FaFax } from "react-icons/fa";
const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  height: 130vh;
  margin-top: 13vw;
  @media screen and (max-width: 768px) {
    margin-top: 13vh;
    min-height: 40vh;
    height: 80vh;
  }
`;
const DescriptionBox = styled.div`
  margin-top: 6vw;
  width: 100%;
  min-height: 10vh;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  span {
    &:first-child {
      margin-bottom: 1vw;
      @media screen and (max-width: 768px) {
        margin-bottom: 1vh;
        margin-top: 2vh;
      }
    }
    font-size: 1.3vw;
    font-weight: 600;
    @media screen and (max-width: 768px) {
      font-size: 1.3vh;
    }
  }
`;
const InformationBox = styled.div`
  width: 100%;
  height: 20vw;
  margin-top: 5vw;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 768px) {
    display: grid;
    height: 40vh;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 10px;
    justify-items: center;
    align-content: center;
  }
  div {
    position: relative;
    width: 20%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 1vw;
    justify-content: center;
    box-shadow: 1px 1px 3px gray;
    border-radius: 20px;
    @media screen and (max-width: 768px) {
      width: 20vh;
      height: 18vh;
    }
    svg {
      position: absolute;
      top: 3vw;
      color: #273c75;
      @media screen and (max-width: 768px) {
        top: 3vh;
        width: 3vh;
        height: 3vh;
      }
    }
    #main_title {
      position: absolute;
      top: 50%;
      color: #273c75;
      @media screen and (max-width: 768px) {
        font-size: 2vh;
      }
    }
    #sub_item {
      position: absolute;
      top: 70%;
      font-weight: 500;
      font-size: 1.2vw;
      @media screen and (max-width: 768px) {
        font-size: 1.2vh;
      }
    }
  }
`;
const variant = {
  start: {
    y: 20,
    opacity: 0,
  },
  end: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
};
function Overview() {
  useEffect(() => {});
  return (
    <Wrapper>
      <ThumbnailGuide
        thumbnailUrl="overview.jpg"
        firstPathName="회사소개"
        lastPathName="회사개요"
        listType="company"
        currentFocus="회사개요"
      />
      <DescriptionBox>
        <motion.span
          whileInView={{
            opacity: 1,
            y: -10,
            transition: { duration: 1 },
          }}
        >
          티아모 설립 이전부터 20년간 개발경험을 축적해 왔습니다.
        </motion.span>
        <motion.span
          whileInView={{
            opacity: 1,
            y: -10,
            transition: { duration: 1 },
          }}
        >
          지식산업센터, 오피스텔, 주거시설 등 다양한 개발사업 역량을
          보유중입니다.
        </motion.span>
        <InformationBox>
          <motion.div variants={variant} initial="start" animate="end">
            <BiTime />
            <span id="main_title">설립일</span>
            <span id="sub_item">2011년 08월 31일</span>
          </motion.div>
          <motion.div variants={variant} initial="start" animate="end">
            <HiLocationMarker />
            <span id="main_title">주소</span>
            <span id="sub_item">
              서울특별시 영등포구 선유동2로 57 <br />
              이레빌딩 신관 3층
            </span>
          </motion.div>
          <motion.div variants={variant} initial="start" animate="end">
            <BiPhoneCall />
            <span id="main_title">대표전화</span>
            <span id="sub_item">02-2068-0088</span>
          </motion.div>
          <motion.div variants={variant} initial="start" animate="end">
            <FaFax />
            <span id="main_title">대표팩스</span>
            <span id="sub_item">02-539-0674</span>
          </motion.div>
        </InformationBox>
      </DescriptionBox>
    </Wrapper>
  );
}

export default Overview;
