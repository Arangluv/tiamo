import { Outlet } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  height: auto;
  border: 0.1px solid rgba(255, 255, 255, 0.1);
`;

function Company() {
  return (
    <Wrapper>
      <Outlet />
    </Wrapper>
  );
}

export default Company;
