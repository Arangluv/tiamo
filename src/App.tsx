import styled from "styled-components";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";
const Wrapper = styled.div`
  background-color: white;
  width: 100%;
  height: auto;
  font-size: 3vw;
  position: relative;
  box-sizing: border-box;
  padding-bottom: 12vw;
`;
function App() {
  return (
    <Wrapper>
      <Header />
      <Outlet />
      <Footer />
    </Wrapper>
  );
}

export default App;
