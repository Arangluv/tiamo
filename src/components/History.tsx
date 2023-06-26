import styled from "styled-components";
import ThumbnailGuide from "./ThumbnailGuide";
import { motion } from "framer-motion";

const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  height: auto;
  margin-top: 13vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (max-width: 768px) {
    margin-top: 13vh;
  }
`;
const Title = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-top: 4vw;
  @media screen and (max-width: 768px) {
    margin-top: 4vh;
  }
  span {
    color: #34495e;
    font-size: 1.5vw;
    font-weight: 600;
    @media screen and (max-width: 768px) {
      font-size: 2vh;
    }
    &:first-child {
      margin-bottom: 0.5vw;
      @media screen and (max-width: 768px) {
        margin-bottom: 1vh;
      }
    }
  }
`;
const HistoryBox = styled.div`
  width: 90%;
  height: 220vh;
  margin-top: 2vw;
  position: relative;
  display: flex;
  flex-direction: column;
  padding-bottom: 3vw;
  @media screen and (max-width: 768px) {
    margin-top: 4vh;
    height: auto;
    padding-bottom: 10vh;
  }
`;
// Right Part
const SubHistoryRightBox = styled.dl`
  position: relative;
  right: -50%;
  display: flex;
  flex-direction: row;
  width: 50%;
  border-left: 1px solid #273c75;
  align-items: center;
  padding-bottom: 3vw;
  @media screen and (max-width: 768px) {
    height: 30vh;
    border-left: none;
    margin-bottom: 4vh;
  }
`;
const RightHistoryImage = styled.div`
  width: 15vw;
  height: 15vw;
  border-radius: 100%;
  position: relative;
  left: -7.5vw;
  box-shadow: 1px 1px 5px gray;
  @media screen and (max-width: 768px) {
    width: 20vh;
    height: 20vh;
    left: -22vh;
  }
  img {
    object-fit: cover;
    width: 15vw;
    height: 15vw;
    border-radius: 100%;
    @media screen and (max-width: 768px) {
      width: 20vh;
      height: 20vh;
    }
  }
  div {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: white;
    width: 6vw;
    height: 6vw;
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    @media screen and (max-width: 768px) {
      width: 8vh;
      height: 8vh;
    }
    dt {
      font-size: 1.3vw;
      font-weight: 600;
      color: #273c75;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      @media screen and (max-width: 768px) {
        font-size: 1.8vh;
      }
      span {
        font-size: 1.1vw;
        @media screen and (max-width: 768px) {
          font-size: 1.8vh;
        }
      }
    }
  }
`;
const RightHistoryDescriptionContainer = styled(motion.div)`
  display: flex;
  opacity: 0;
  flex-direction: column;
  position: relative;
  left: -4vw;
  padding-top: 2vw;
  padding-bottom: 1vw;
  @media screen and (max-width: 768px) {
    width: 20vh;
    position: absolute;
    left: 3vh;
  }
`;
const RightHistoryDescription = styled.div`
  display: flex;
  height: auto;
  margin-bottom: 1vw;
  #main_time {
    display: flex;
    margin-right: 1vw;
    width: 20%;
    @media screen and (max-width: 768px) {
      margin-right: 1vh;
      width: 30%;
    }
    #main_sub_time {
      color: #273c75;
    }
    dd {
      font-size: 1.1vw;
      font-weight: 600;
      margin-top: 0;
      line-height: 1.5vw;
      @media screen and (max-width: 768px) {
        font-size: 1.3vh;
        line-height: 1.6;
      }
    }
  }
  #doing_list {
    display: flex;
    color: #353b48;
    flex-direction: column;
    width: 100%;
    @media screen and (max-width: 768px) {
      width: 80%;
    }
    dd {
      font-size: 1.1vw;
      margin-bottom: 1.5vw;
      line-height: 1.5vw;
      @media screen and (max-width: 768px) {
        font-size: 1.2vh;
        line-height: 1.6;
      }
    }
  }
`;
// Left Part
const SubHistoryLeftBox = styled.dl`
  position: relative;
  right: 0;
  display: flex;
  flex-direction: row;
  width: 50%;
  border-right: 1px solid #273c75;
  align-items: center;
  @media screen and (max-width: 768px) {
    height: 30vh;
    border-right: none;
    margin-bottom: 4vh;
  }
`;
const LeftHistoryImage = styled.div`
  width: 15vw;
  height: 15vw;
  border-radius: 100%;
  position: relative;
  right: -7.5vw;
  box-shadow: 1px 1px 5px gray;
  @media screen and (max-width: 768px) {
    width: 20vh;
    height: 20vh;
    right: -24.5vh;
  }
  img {
    object-fit: cover;
    width: 15vw;
    height: 15vw;
    border-radius: 100%;
    @media screen and (max-width: 768px) {
      width: 20vh;
      height: 20vh;
    }
  }
  div {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: white;
    width: 6vw;
    height: 6vw;
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    @media screen and (max-width: 768px) {
      width: 8vh;
      height: 8vh;
    }
    dt {
      font-size: 1.3vw;
      font-weight: 600;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      color: #273c75;
      @media screen and (max-width: 768px) {
        font-size: 1.8vh;
      }
      span {
        font-size: 1.1vw;
        @media screen and (max-width: 768px) {
          font-size: 1.8vh;
        }
      }
    }
  }
`;
const LeftHistoryDescriptionContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  position: relative;
  right: -4vw;
  padding-top: 2vw;
  padding-bottom: 1vw;
  opacity: 0;
  @media screen and (max-width: 768px) {
    width: 20vh;
    position: absolute;
    right: 4vh;
  }
`;
const LeftHistoryDescription = styled.div`
  display: flex;
  height: auto;
  margin-bottom: 1vw;
  #main_time {
    display: flex;
    flex-direction: row-reverse;
    margin-left: 1vw;
    width: 30%;
    @media screen and (max-width: 768px) {
      margin-left: 1vh;
      width: 30%;
    }
    #main_sub_time {
      color: #273c75;
    }
    dd {
      font-size: 1.1vw;
      font-weight: 600;
      margin-top: 0;
      line-height: 1.5vw;
      @media screen and (max-width: 768px) {
        font-size: 1.3vh;
        line-height: 1.6;
      }
    }
  }
  #doing_list {
    display: flex;
    width: 100%;
    color: #353b48;
    flex-direction: column;
    dd {
      font-size: 1.1vw;
      margin-bottom: 1.5vw;
      line-height: 1.5vw;
      @media screen and (max-width: 768px) {
        font-size: 1.2vh;
        line-height: 1.6;
      }
    }
  }
`;

function History() {
  return (
    <Wrapper>
      <ThumbnailGuide
        thumbnailUrl="overview.jpg"
        firstPathName="회사소개"
        lastPathName="회사연혁"
        listType="company"
        currentFocus="회사연혁"
      />
      <Title>
        <span>20년 이상 개발경험을 가진</span>
        <span>믿을 수 있는 기업</span>
      </Title>
      <HistoryBox>
        <SubHistoryRightBox>
          <RightHistoryImage>
            <img src={process.env.PUBLIC_URL + "/history_2023.jpg"} alt="" />
            <div>
              <dt>2022~</dt>
            </div>
          </RightHistoryImage>
          <RightHistoryDescriptionContainer
            whileInView={{ opacity: 1, x: -20, transition: { duration: 1 } }}
            viewport={{ once: true }}
          >
            <RightHistoryDescription>
              <div id="main_time">
                <dd id="main_sub_time">상반기</dd>
              </div>
              <div id="doing_list">
                <dd>인덕원역 더리브 디하우트 지식산업센터 착공 및 분양 예정</dd>
                <dd>청라플러스 주거용 오피스텔(가칭) 착공 및 분양 예정</dd>
                <dd>고양 향동동 479 업무시설(가칭) 착공 및 분양 예정</dd>
                <dd>파주 금촌동 도시형생활주택(가칭) 착공 및 분양 예정</dd>
              </div>
            </RightHistoryDescription>
            <RightHistoryDescription>
              <div id="main_time">
                <dd id="main_sub_time">하반기</dd>
              </div>
              <div id="doing_list">
                <dd>
                  의정부 고산 점포겸용 단독주택(가칭) 5 필지 착공 및 분양 예정
                </dd>
              </div>
            </RightHistoryDescription>
          </RightHistoryDescriptionContainer>
        </SubHistoryRightBox>

        <SubHistoryLeftBox>
          <LeftHistoryDescriptionContainer
            whileInView={{ opacity: 1, x: 20, transition: { duration: 1 } }}
            viewport={{ once: true }}
          >
            <LeftHistoryDescription>
              <div id="doing_list">
                <dd>천안아산역더리브 오피스텔 준공 및 입주</dd>
              </div>
              <div id="main_time">
                <dd id="main_sub_time">2월</dd>
              </div>
            </LeftHistoryDescription>
            <LeftHistoryDescription>
              <div id="doing_list">
                <dd>청라 더리브티아모 지식산업센터 착공 및 분양</dd>
                <dd>광명 티아모 IT 타워 지식산업센터 착공 및 분양</dd>
              </div>
              <div id="main_time">
                <dd id="main_sub_time">3월</dd>
              </div>
            </LeftHistoryDescription>
            <LeftHistoryDescription>
              <div id="doing_list">
                <dd>서울 논현동으로 본점이전</dd>
              </div>
              <div id="main_time">
                <dd id="main_sub_time">6월</dd>
              </div>
            </LeftHistoryDescription>
            <LeftHistoryDescription>
              <div id="doing_list">
                <dd>
                  가산동 G밸리 더리브 스마트타워 지식산업센터 준공 및 입주
                </dd>
              </div>
              <div id="main_time">
                <dd id="main_sub_time">7월</dd>
              </div>
            </LeftHistoryDescription>
            <LeftHistoryDescription>
              <div id="doing_list">
                <dd>
                  서울시 영등포구 선유동2로 57, 이레빌딩 신관 3층 본점이전
                </dd>
              </div>
              <div id="main_time">
                <dd id="main_sub_time">11월</dd>
              </div>
            </LeftHistoryDescription>
          </LeftHistoryDescriptionContainer>
          <LeftHistoryImage>
            <img src={process.env.PUBLIC_URL + "/history_2022.png"} alt="" />
            <div>
              <dt>2021</dt>
            </div>
          </LeftHistoryImage>
        </SubHistoryLeftBox>

        <SubHistoryRightBox>
          <RightHistoryImage>
            <img src={process.env.PUBLIC_URL + "/history_2016.png"} alt="" />
            <div>
              <dt>
                <span>2016</span>
                <span>~</span>
                <span>2020</span>
              </dt>
            </div>
          </RightHistoryImage>
          <RightHistoryDescriptionContainer
            whileInView={{ opacity: 1, x: -20, transition: { duration: 1 } }}
            viewport={{ once: true }}
          >
            <RightHistoryDescription>
              <div id="main_time">
                <dd id="main_sub_time">2020 - 12</dd>
              </div>
              <div id="doing_list">
                <dd>사명변경 및 티아모 브랜드 런칭</dd>
              </div>
            </RightHistoryDescription>
            <RightHistoryDescription>
              <div id="main_time">
                <dd id="main_sub_time">2017 - 09</dd>
              </div>
              <div id="doing_list">
                <dd>서울시 영등포구 선유로3길 10, 203호 본점이전</dd>
              </div>
            </RightHistoryDescription>
            <RightHistoryDescription>
              <div id="main_time">
                <dd id="main_sub_time">2016 - 05</dd>
              </div>
              <div id="doing_list">
                <dd>
                  서울시 영등포구 문래동 하우스디비즈 지식산업센터 준공 및 입주
                </dd>
              </div>
            </RightHistoryDescription>
          </RightHistoryDescriptionContainer>
        </SubHistoryRightBox>

        <SubHistoryLeftBox>
          <LeftHistoryDescriptionContainer
            whileInView={{ opacity: 1, x: 20, transition: { duration: 1 } }}
            viewport={{ once: true }}
          >
            <LeftHistoryDescription>
              <div id="doing_list">
                <dd>
                  서울 영등포구 경인로71길 70, 1동 804호(문래동5가,
                  벽산디지털밸리) 본점이전
                </dd>
              </div>
              <div id="main_time">
                <dd id="main_sub_time">2014 - 09</dd>
              </div>
            </LeftHistoryDescription>
            <LeftHistoryDescription>
              <div id="doing_list">
                <dd>
                  서울시 금천구 벚꽃로 226, 3관 2층(가산동 마리오아울렛)
                  본점이전
                </dd>
              </div>
              <div id="main_time">
                <dd id="main_sub_time">2013 - 03</dd>
              </div>
            </LeftHistoryDescription>
            <LeftHistoryDescription>
              <div id="doing_list">
                <dd>서울시 마포구 신촌로 116, 1층(노고산동) 본점이전</dd>
              </div>
              <div id="main_time">
                <dd id="main_sub_time">2012 - 08</dd>
              </div>
            </LeftHistoryDescription>
            <LeftHistoryDescription>
              <div id="doing_list">
                <dd>전희만 대표이사 취임</dd>
              </div>
              <div id="main_time">
                <dd id="main_sub_time">2012 - 07</dd>
              </div>
            </LeftHistoryDescription>

            <LeftHistoryDescription>
              <div id="doing_list">
                <dd>주식회사 브이피트레이딩 설립</dd>
              </div>
              <div id="main_time">
                <dd id="main_sub_time">2011 - 08</dd>
              </div>
            </LeftHistoryDescription>
          </LeftHistoryDescriptionContainer>
          <LeftHistoryImage>
            <img src={process.env.PUBLIC_URL + "/history_2014.png"} alt="" />
            <div>
              <dt>
                <span>2014</span>
                <span>~</span>
                <span>2011</span>
              </dt>
            </div>
          </LeftHistoryImage>
        </SubHistoryLeftBox>
      </HistoryBox>
    </Wrapper>
  );
}

export default History;
