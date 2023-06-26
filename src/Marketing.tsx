import { Outlet } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  height: auto;
  border: 0.1vw solid rgba(255, 255, 255, 0);
`;

function Marketing() {
  return (
    <Wrapper>
      <Outlet />
    </Wrapper>
  );
}

export default Marketing;
