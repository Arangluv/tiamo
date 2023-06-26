import styled from "styled-components";
import ThumbnailGuide from "./ThumbnailGuide";
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
const NewsContainer = styled.article`
  width: 100%;
  min-height: 100vh;
  height: auto;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 768px) {
    padding-top: 2vh;
  }
`;
const NewsSubContainer = styled.div`
  width: 100%;
  height: 60vw;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1vw 0;
  &.top_container {
    margin-top: 5vw;
  }
  @media screen and (max-width: 768px) {
    flex-direction: column;
    min-height: 100vh;
    height: auto;
  }
`;
const NewComponents = styled.a`
  width: 40%;
  height: 100%;
  margin: 0 1vw;
  border-radius: 20px;
  text-decoration: none;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
  transition: all 0.2s ease-in-out;
  &:hover {
    cursor: pointer;
    box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 7px, rgba(0, 0, 0, 0.24) 0px 1px 5px;
  }
  @media screen and (max-width: 768px) {
    width: 80%;
    margin-bottom: 2vh;
  }
`;
const EmptyNewsComponent = styled.div`
  width: 40%;
  height: 100%;
  margin: 0 1vw;
`;
const NewsThumbnail = styled.div`
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  width: 100%;
  height: 60%;
  img {
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
const NewsMetaIntoContainer = styled.div`
  width: 100%;
  height: 40%;
  display: flex;
  flex-direction: column;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  padding: 1vw;
  box-sizing: border-box;
  @media screen and (max-width: 768px) {
    padding: 1vh;
  }
`;
const NewsTitle = styled.div`
  width: 100%;
  h4 {
    color: black;
    font-size: 1.4vw;
    font-weight: 600;
    line-height: 1.5;
    padding-bottom: 1vw;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    @media screen and (max-width: 768px) {
      font-size: 1.4vh;
      padding-bottom: 1vh;
      margin-bottom: 0.5vh;
    }
  }
`;
const NewIssueInfo = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 0.5vw;
  span {
    display: flex;
    align-items: center;
    font-size: 1.2vw;
    font-weight: 600;
    color: white;
    padding: 10px 15px;
    border-radius: 10px;
    background-color: #192a56;
    @media screen and (max-width: 768px) {
      font-size: 1.2vh;
    }
  }
  small {
    font-size: 1.2vw;
    color: gray;
    @media screen and (max-width: 768px) {
      font-size: 1.2vh;
    }
  }
`;
const NewsContent = styled.p`
  width: 100%;
  height: 100%;
  font-size: 1.1vw;
  color: #2f3640;
  margin-top: 1vw;
  white-space: pre-wrap;
  line-height: 1.6;
  overflow: hidden;
  padding: 1vw;
  background-color: rgba(245, 246, 250, 0.5);
  box-sizing: border-box;
  border-radius: 5px;
  @media screen and (max-width: 768px) {
    font-size: 1.3vh;
  }
`;
interface NewsData {
  thumbnailUrl: string;
  title: string;
  publisher: string;
  createdAt: string;
  content: string;
  link: string;
}
function chunk(data: NewsData[], size = 1) {
  const arr: NewsData[][] = [];

  for (let i = 0; i < data.length; i += size) {
    arr.push(data.slice(i, i + size));
  }
  if (arr[arr.length - 1].length === 1) {
    for (let i = 0; i < 1; i++) {
      arr[arr.length - 1].push({
        thumbnailUrl: "",
        title: "",
        publisher: "",
        createdAt: "",
        content: "",
        link: "",
      });
    }
  }
  // if (arr[arr.length - 1].length === 2) {
  //   arr[arr.length - 1].push({
  //     thumbnailUrl: "",
  //     title: "",
  //     publisher: "",
  //     createdAt: "",
  //     content: "",
  //     link: "",
  //   });
  // }
  return arr;
}
function News() {
  const news: NewsData[] = [
    {
      thumbnailUrl:
        "http://www.ti-a-mo.com/upload/news/2022071913055655397_1658203556.jpg",
      title: "역세권·공세권 다 누리는 다(多)세권 오피스 '티아모 오피스 향동'",
      publisher: "아시아경제",
      createdAt: "2022.07.19",
      content: `최근 수익형 부동산시장에서 다(多)세권 오피스가 주목을 받고 있다.
  
다세권 오피스는 역세권, 공세권 등 2가지 이상의 입지를 갖춘 업무시설로 지하철역이 가까이에 위치해 있고 주변으로 대형 공원, 대형마트 등 다양한 인프라가 형성되어 있는 곳을 말한다.
      
역세권 입지에 위치한 오피스의 경우 출퇴근 환경이 우수하고, 역을 중심으로 형성된 각종`,
      link: "https://view.asiae.co.kr/article/2022071913080435414",
    },
    {
      thumbnailUrl: "http://www.ti-a-mo.com/upload/news/268CQ5OGZS_1.jpg",
      title: "굳건한 입지의 힘… 지역 중심입지 프리미엄 고공행진",
      publisher: "서울경제",
      createdAt: "2022.07.01",
      content: `지역 주요 인프라 몰린 ‘중심 입지’, 우수한 문화 ·생활 · 교통여건 갖춰 지역 대장주 발돋움
  
부동산 시장에서 지역 내 중심입지의 가치가 더욱 높아지고 있다. 보유세 등 세부담이 늘며 ‘똘똘한 한 채’가 주목받는 트렌드에 따라 지역 대장주로써 해당지역 시세를 견인하는 메인 입지에 들어선 단지들이 실수요와 투자수요, 세대를 가리지 않고 `,
      link: "https://www.sedaily.com/NewsView/268CQ5OGZS",
    },
    {
      thumbnailUrl: "http://www.ti-a-mo.com/upload/news/268CQ5OGZS_1.jpg",
      title: "'입지·상품 만족'… 청라 더리브 티아모 까사, 관람객 호평",
      publisher: "서울경제",
      createdAt: "2022.07.11",
      content: `7호선 커낼웨이역(가칭) 초역세권, 커낼웨이 바로 앞 청라 마지막 명품입지
  
청라 커낼웨이를 바로 앞에서 누리는 청라국제도시에서 마지막 남은 골든입지에 들어서는 최고 46층 초고층 랜드마크 단지인 ‘청라 더리브 티아모 까사’가 견본주택을 개관하고 본격 청약일정에 돌입했다`,
      link: "https://www.sedaily.com/NewsView/268HBPWAXC",
    },
    {
      thumbnailUrl:
        "http://www.ti-a-mo.com/upload/news/%EC%9B%B9%EC%9A%A9%EC%A1%B0%EA%B0%90%EB%8F%84.jpg",
      title: "올 2분기 오피스텔 분양 20%대 감소…청약 경쟁률도 3배 쑥",
      publisher: "아주경제",
      createdAt: "2022.05.13",
      content: `올 1~2분기 수도권 오피스텔 분양물량 감소세…소형 아파트 대체 중대형도 급감
희소성 부각에 몸값 오르고 청약 경쟁률도 상승…세제 혜택 기대감도 커져
      
소형 아파트를 대체할 수 있는 주거용 오피스텔의 청약 경쟁률이 심화되고 있는 가운데, 수도권 오피스텔 분양물량은 평년`,
      link: "https://www.ajunews.com/view/20220512093610681",
    },
    {
      thumbnailUrl: "http://www.ti-a-mo.com/upload/news/254164_104441_2514.jpg",
      title: "원빈, '청라 더리브 티아모 까사' 광고모델 발탁",
      publisher: "국토일보",
      createdAt: "2022.05.18",
      content: `청라국제도시에 들어서는 초고층 랜드마크 오피스텔 '청라 더리브 티아모 까사'의 광고모델로 배우 원빈이 발탁됐다. 

배우 원빈의 고급스럽고 도시적인 이미지가 차별화된 고급 상품성에 높은 상징성까지 갖춘 단지의 이미지를 힌층 부각시킬 것으로 기대를 모은다.`,
      link: "http://www.ikld.kr/news/articleView.html?idxno=254164",
    },
    {
      thumbnailUrl: "http://www.ti-a-mo.com/upload/news/B20220509102928610.jpg",
      title:
        "교통호재 가시화 청라국제도시, `청라 더리브 티아모 까사` 공급 예정",
      publisher: "한국경제TV",
      createdAt: "2022.05.09",
      content: `청라국제도시의 서울 접근성이 개선될 전망이다. 지하철 7호선 청라 연장선 착공과 함께 서울 2호선, 9호선, 제3연륙교 등 청라개발 초기부터 계획됐던 다양한 교통 호재가 하나둘씩 가시화되고 있기 때문이다.
  
 국토교통부 대도시권광역교통위원회에 따르면 지난 3월 22일 서울도시철도 7호선 청라국제도시 연장사업의 사업계획을`,
      link: "https://www.wowtv.co.kr/NewsCenter/News/Read?articleId=A202205090106&t=NN",
    },
    {
      thumbnailUrl:
        "http://www.ti-a-mo.com/upload/news/202104020959015076_l.jpg",
      title: "노후산단 수요 흡수 기대받는 ‘광명 티아모 IT타워’에 쏠리는 이목",
      publisher: "파이낸셜뉴스",
      createdAt: "2021.04.02",
      content: `저금리 시대 맞아 규제 자유롭고 세제혜택 다양한 지식산업센터 매력 ↑
서울디지털산업단지 이전 수요 흡수 기대…안정적 수요 ‘광명 티아모 IT타워’
      
0%대 저금리 기조의 여파로 부동산 시장에서 새로운 선택지로 지식산업센터가 주목받는 추세다. 특히 노후화를 향해 가는`,
      link: "https://www.fnnews.com/news/202104020958065468",
    },
    {
      thumbnailUrl: "http://www.ti-a-mo.com/upload/news/794039_460408_2621.jpg",
      title: "규제 피한 지식산업센터도 몸값 오른다. ‘청라 더리브 티아모’ 분양",
      publisher: "경상일보",
      createdAt: "2021.04.11",
      content: `지식산업센터의 가격 상승세가 심상치 않다. 집값이 가파르게 오르며, 수익형 부동산인 지식산업센터도 일부 지역에서 매매가가 2배 이상 올랐기 때문이다.
  
2일 부동산 정보 제공업체 경제만랩이 지식산업센터114 자료를 분석한 결과, 서울에 한 지식산업센터는 5년 전인 2016년 1`,
      link: "https://www.ksilbo.co.kr/news/articleView.html?idxno=794039",
    },
    {
      thumbnailUrl:
        "http://www.ti-a-mo.com/upload/news/0002474216_001_20210309110019722.jpeg",
      title: "’청라 더리브 티아모’ 견본주택 성황리 오픈! 방문객들 ‘호평’이어져",
      publisher: "데일리안",
      createdAt: "2021.03.09",
      content: `지난 5일(금) 견본주택 문을 열고 본격적인 분양에 들어간 ‘청라 더리브 티아모’가 방문객들의 호평을 받으며 조기 완판 기대감을 높이고 있다.
  
청라국제도시 IHP 내에 최대 규모로 조성되는 ‘청라 더리브 티아모’는 오픈 첫날부터 방문객들의 발길이 이어지는 등 반응이 뜨겁다.`,
      link: "https://n.news.naver.com/mnews/article/119/0002474216",
    },
  ];
  const newsChunkArry = chunk(news, 2);
  return (
    <Wrapper>
      <ThumbnailGuide
        thumbnailUrl="marketing.jpg"
        firstPathName="홍보센터"
        lastPathName="보도자료"
        listType="marketing"
        currentFocus="보도자료"
      />
      <NewsContainer>
        {newsChunkArry.map((news, idx) => {
          return (
            <NewsSubContainer key={idx}>
              {news.map((item) => {
                return item.content === "" ? (
                  <EmptyNewsComponent key={item.createdAt}></EmptyNewsComponent>
                ) : (
                  <NewComponents
                    href={item.link}
                    target="_blank"
                    key={item.createdAt}
                  >
                    <NewsThumbnail>
                      <img src={item.thumbnailUrl} />
                    </NewsThumbnail>
                    <NewsMetaIntoContainer>
                      <NewsTitle>
                        <h4>{item.title}</h4>
                      </NewsTitle>
                      <NewIssueInfo>
                        <span>{item.publisher}</span>
                        <small>{item.createdAt}</small>
                      </NewIssueInfo>
                      <NewsContent>
                        {item.content.length > 200
                          ? item.content.slice(0, 200) + "..."
                          : item.content + "..."}
                      </NewsContent>
                    </NewsMetaIntoContainer>
                  </NewComponents>
                );
              })}
            </NewsSubContainer>
          );
        })}
        {/* <NewsSubContainer>
          <NewComponents>
            <NewsThumbnail>
              <img src="http://www.ti-a-mo.com/upload/news/254164_104441_2514.jpg" />
            </NewsThumbnail>
            <NewsMetaIntoContainer>
              <NewsTitle>
                <h4>
                  역세권·공세권 다 누리는 다(多)세권 오피스 '티아모 오피스 향동'
                </h4>
              </NewsTitle>
              <NewIssueInfo>
                <span>동아일보</span>
                <small>2022.07.19</small>
              </NewIssueInfo>
              <NewsContent>
                {`지역 주요 인프라 몰린 ‘중심 입지’, 우수한 문화 ·생활 · 교통여건 갖춰 지역 대장주 발돋움

부동산 시장에서 지역 내 중심입지의 가치가 더욱 높아지고 있다. 보유세 등 세부담이 늘며 ‘똘똘한 한 채’가 주목받는 트렌드에 따라 지역 대장주로써 해당지역 시세를 견인하는 메인 입지에 들어선 단지들이 실수요와 투자수요, 세대를 가리지 않고 관`}
              </NewsContent>
            </NewsMetaIntoContainer>
          </NewComponents>
          <NewComponents></NewComponents>
        </NewsSubContainer> */}
      </NewsContainer>
    </Wrapper>
  );
}

export default News;
