import styled from "styled-components";
import ThumbnailGuide from "./ThumbnailGuide";
import { Tree, TreeNode } from "react-organizational-chart";
const Wrapper = styled.div`
  width: 100%;
  height: 150vh;
  margin-top: 13vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (max-width: 768px) {
    margin-top: 13vh;
    height: auto;
    padding-bottom: 15vh;
  }
`;

const StyledNode = styled.div`
  border-radius: 8px;
  display: inline-block;
  font-size: 1.2vw;
  padding: 1.6vw 3vw;
  margin-top: 0;
  width: 120px;
  color: white;
  background-color: rgb(39, 60, 117);
  ul {
    padding-top: 0;
  }
  @media screen and (max-width: 768px) {
    width: 60px;
    font-size: 1.2vh;
    padding: 1.3vh 1vh;
  }
`;
const LastNode = styled(StyledNode)`
  display: flex;
  flex-direction: column;
  width: 150px;
  height: 120px;
  margin: 0 3vw;
  justify-content: center;
  align-items: center;
  border: 1px solid #273c75;
  background-color: white;
  color: #273c75;
  @media screen and (max-width: 768px) {
    width: 40px;
    height: 80px;
  }
  span {
    margin: 0.5vw 0;
  }
`;
const RootStyledNode = styled(StyledNode)`
  margin-top: 4vw;
  font-weight: 700;
  @media screen and (max-width: 768px) {
    margin-top: 4vh;
  }
`;
const SubRootNode = styled(StyledNode)`
  font-weight: 600;
`;
function Organization() {
  return (
    <Wrapper>
      <ThumbnailGuide
        thumbnailUrl="overview.jpg"
        firstPathName="회사소개"
        lastPathName="조직도"
        listType="company"
        currentFocus="조직도"
      />
      <Tree
        lineWidth={"1px"}
        lineHeight={"50px"}
        lineColor={"rgba(39, 60, 117,0.5)"}
        lineBorderRadius={"10px"}
        label={<RootStyledNode>대표이사</RootStyledNode>}
      >
        <TreeNode label={<SubRootNode>임원</SubRootNode>}>
          <TreeNode label={<StyledNode>개발사업부</StyledNode>}>
            <TreeNode
              label={
                <LastNode>
                  <span>PJ기획</span>
                  <span>PJ사업관리</span>
                  <span>인허가</span>
                  <span>기타</span>
                </LastNode>
              }
            />
          </TreeNode>
          <TreeNode label={<StyledNode>영업/마케팅부</StyledNode>}>
            <TreeNode
              label={
                <LastNode>
                  <span>PJ마케팅</span>
                  <span>PJ홍보</span>
                  <span>PJ영업</span>
                </LastNode>
              }
            />
          </TreeNode>
          <TreeNode label={<StyledNode>경영지원부</StyledNode>}>
            <TreeNode
              label={
                <LastNode>
                  <span>회계/자금</span>
                  <span>법무/인사/총무</span>
                  <span>외주/구매</span>
                  <span>기타관리</span>
                </LastNode>
              }
            />
          </TreeNode>
          <TreeNode label={<StyledNode>무역사업부</StyledNode>}>
            <TreeNode
              label={
                <LastNode>
                  <span>기획</span>
                  <span>국내총판</span>
                  <span>국외사업</span>
                </LastNode>
              }
            />
          </TreeNode>
        </TreeNode>
      </Tree>
    </Wrapper>
  );
}

export default Organization;
