import styled from "styled-components";

const Wrapper = styled.footer`
  width: 100%;
  height: 20vh;
  position: absolute;
  bottom: 0;
  background-color: ${(props) => props.theme.bgColor};
  display: flex;
  justify-content: space-between;
  padding: 0 1vw;
  box-sizing: border-box;
  margin-top: 0;
  @media screen and (max-width: 768px) {
    height: 15vh;
  }
`;
const Description = styled.div`
  height: 100%;
  width: 70%;
  padding-left: 4vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-sizing: border-box;
  @media screen and (max-width: 768px) {
    padding: 2vh;
    width: 80%;
  }
  p {
    font-size: 1vw;
    color: #353b48;
    margin-bottom: 0.5vw;
    @media screen and (max-width: 768px) {
      line-height: 1.3;
      font-size: 1vh;
    }
  }
  #copy_right {
    margin-top: 0.5vw;
    color: rgba(0, 0, 0, 0.6);
    font-size: 1vw;
    @media screen and (max-width: 768px) {
      font-size: 1vh;
    }
  }
`;
const FooterImg = styled.div`
  height: 100%;
  width: 30%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  padding: 0 1vh;
  @media screen and (max-width: 768px) {
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
`;
function Footer() {
  return (
    <Wrapper>
      <Description>
        <p>
          회사명 : 주식회사 티아모 | 대표자 : 전희만 | 전화 : 02-2068-0088 |
          팩스 : 02-539-0674
        </p>
        <p>주소 : 서울특별시 영등포구 선유동2로 57 이레빌딩 신관 3층</p>
        <p>
          온라인대행 : (주)아이엠플러스 | 사업자등록번호 : 275-81-00393 | 대표 :
          정상규
        </p>
        <p id="copy_right">
          COPYRIGHT &copy;2021 주식회사 티아모 ALL RIGHTS RESERVED.
        </p>
      </Description>
      <FooterImg>
        <img
          src={process.env.PUBLIC_URL + `/logo_on.png`}
          alt="footer logo image"
        />
      </FooterImg>
    </Wrapper>
  );
}

export default Footer;
