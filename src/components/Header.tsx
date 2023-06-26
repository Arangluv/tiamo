import styled from "styled-components";
import {
  AnimatePresence,
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import { useEffect, useState } from "react";
import { Link, useMatch, useNavigate } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import { TiDelete } from "react-icons/ti";
const Wrapper = styled(motion.header)<ListProps>`
  height: 7vw;
  padding: 0vw 1vw;
  width: 100%;
  box-sizing: border-box;
  z-index: 997;
  transition: 0.2s ease-in-out;
  position: fixed;
  box-sizing: border-box;
  overflow: hidden;
  display: flex;
  background-color: ${(props) => (props.currentFocus ? "white" : "none")};
  @media screen and (max-width: 768px) {
    height: 10vh;
    padding: 0 2vh;
    width: 100vw;
    position: absolute;
    top: 0;
    left: 0;
    background-color: transparent;
  }
`;
const LogoImage = styled(motion.div)`
  width: 20%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    cursor: pointer;
  }
  @media screen and (max-width: 768px) {
    width: 30%;
  }
  img {
    width: auto;
    height: auto;
    object-fit: contain;
    @media screen and (max-width: 768px) {
      width: 100%;
      height: 100%;
    }
  }
`;
const ListBox = styled(motion.ul)<ListProps>`
  width: 60%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 768px) {
    display: none;
  }
  & > div {
    width: 15%;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    li {
      font-size: 16px;
      font-weight: 700;
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      transition: all 0.1s ease-in-out;
      a {
        text-decoration: none;
      }
      &:hover {
        cursor: pointer;
      }
    }
    #field {
      background-color: ${(props) =>
        props.currentFocus === "field" ? "f5f6fa" : "none"};
    }
    #top_point {
      width: 50%;
      height: 7px;
      margin-bottom: 0.3vw;
      display: flex;
      align-items: center;
      position: relative;
    }
    #bottom_point {
      width: 50%;
      height: 7px;
      margin-top: 0.3vw;
      display: flex;
      align-items: center;
      position: relative;
    }
    .pointer {
      width: 7px;
      height: 7px;
      border-radius: 100%;
    }
    #pointer_1 {
      background-color: #3498db;
      position: absolute;
      left: -0.5vw;
    }
    #pointer_2 {
      background-color: #3498db;
      position: absolute;
      left: 45%;
    }
    #pointer_3 {
      background-color: #e74c3c;
      position: absolute;
      left: 45%;
      color: white;
    }
    #pointer_4 {
      background-color: #e74c3c;
      position: absolute;
      right: -0.5vw;
    }
  }
`;
const MenuBox = styled(motion.div)<MatchProps>`
  display: none;
  right: 1vh;
  @media screen and (max-width: 768px) {
    position: absolute;
    width: 10%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    svg {
      width: 2.5vh;
      height: 2.5vh;
      color: ${(props) => (props.match ? "black" : "white")};
    }
  }
`;
const Overaly = styled(motion.div)`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  svg {
    color: white;
    width: 4vh;
    height: 4vh;
    position: absolute;
    top: 11vh;
    z-index: 999;
    right: 0;
  }
`;
const Drawer = styled(motion.ul)`
  @media screen and (max-width: 768px) {
    width: 150px;
    height: 93vh;
    position: absolute;
    top: 10vh;
    right: 0;
    z-index: 998;
    background-color: #353535;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    box-sizing: border-box;
    a {
      display: flex;
      justify-content: center;
      width: 100%;
      text-decoration: none;
      color: white;
      font-size: 2.5vh;
      font-weight: 600;
      li {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 3vh;
      }
    }
  }
`;
const SubListBox = styled(motion.div)<SubListProps>`
  width: 100%;
  height: 5vw;
  background-color: white;
  position: fixed;
  z-index: 999;
  top: 7vw;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  ul {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    li {
      height: 100%;
      width: 8vw;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 16px;
      font-weight: 400;
      margin-right: 2vw;
      &:hover {
        cursor: pointer;
        color: #2980b9;
        background-color: #f5f6fa;
      }
    }
  }
`;
const subList = {
  overview: ["회사 개요", "회사 연혁", "조직도"],
  marketing: ["보도자료", "Tiamo소식"],
  business: ["전체보기", "예정사업", "진행중", "완료사업"],
};
const subListUrl = {
  overview: ["/company/overview", "/company/history", "/company/organization"],
  marketing: ["/marketing", "/marketing/tiamo"],
  business: [
    "/perform",
    "/perform/intended",
    "/perform/proceeding",
    "/perform/done",
  ],
};
interface SubListProps {
  isSubListShow: string | null;
}
interface ListProps {
  currentFocus:
    | "overview"
    | "field"
    | "marketing"
    | "business"
    | "hover"
    | null;
}
interface MatchProps {
  match: boolean;
}
const variants = {
  start: {
    opacity: 0,
  },
  end: {
    opacity: 1,
    transition: {
      duration: 0.2,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.2,
    },
  },
};
const hdVarients = {
  start: {
    opacity: 0,
  },
  end: {
    opacity: 1,
    transition: {
      type: "linear",
      duration: 1,
    },
  },
};
const drawerOverlay = {
  start: {
    opacity: 0,
  },
  end: {
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.5,
    },
  },
};
const drawerBox = {
  start: {
    x: 350,
  },
  end: {
    x: 0,
    transition: {
      duration: 0.5,
    },
  },
  exit: {
    x: 350,
    transition: {
      duration: 0.5,
    },
  },
};
function Header() {
  const [currentFocus, setCurrentFocus] = useState<
    null | "overview" | "field" | "marketing" | "business" | "hover"
  >(null);
  const [isSubListShow, setIsSubListShow] = useState<
    null | "overview" | "marketing" | "business"
  >(null);
  const [visible, setVisible] = useState(true);
  const { scrollYProgress } = useScroll({
    offset: ["100vh", "150vh"],
  });
  const opacity = useTransform(scrollYProgress, [0.5, 0.51], [1, 0]);
  const color = useTransform(
    scrollYProgress,
    [0, 0.01],
    ["rgba(255,255,255,1)", "rgba(0,0,0,1)"]
  );
  const match = useMatch("/");
  const navigator = useNavigate();
  useEffect(() => {
    if (!currentFocus) {
      setIsSubListShow(null);
      if (scrollYProgress.get() > 0) {
        setLogoimageChange("logo_on.png");
        return;
      }
      setLogoimageChange("logo.png");
      return;
    }
    if (currentFocus) {
      setLogoimageChange("logo_on.png");
    }
    if (currentFocus === "field") {
      setIsSubListShow(null);
      return;
    }
    if (currentFocus === "hover") {
      setIsSubListShow(null);
      return;
    }
    setIsSubListShow(currentFocus);
  }, [currentFocus]);
  const [logoImageChange, setLogoimageChange] = useState("logo.png");
  useEffect(() => {
    scrollYProgress.on("change", () => {
      if (scrollYProgress.get() > 0.6) {
        setVisible(false);
      }
      if (scrollYProgress.get() <= 0.5) {
        setVisible(true);
      }
      if (scrollYProgress.get() > 0) {
        setLogoimageChange("logo_on.png");
        return;
      }
      setLogoimageChange("logo.png");
    });
  }, [scrollYProgress]);
  const handleMouseLeave = () => {
    if (isSubListShow) {
      return;
    }
    if (scrollYProgress.get() > 0) {
      setCurrentFocus(null);
      return;
    }
    setCurrentFocus(null);
  };
  // Mobile Part
  const [showDrawer, setShowDrawer] = useState(false);
  return (
    <>
      <Wrapper
        onMouseEnter={() => setCurrentFocus("hover")}
        onMouseLeave={handleMouseLeave}
        currentFocus={currentFocus}
        style={{ display: visible ? "flex" : "none", opacity }}
      >
        <LogoImage onClick={() => navigator("/")}>
          <img
            src={
              !match
                ? process.env.PUBLIC_URL + "/logo_on.png"
                : process.env.PUBLIC_URL + `/${logoImageChange}`
            }
            alt=""
          />
        </LogoImage>
        <ListBox
          currentFocus={currentFocus}
          variants={hdVarients}
          initial="start"
          animate="end"
        >
          <motion.div onMouseOver={() => setCurrentFocus("overview")}>
            <li>
              <motion.div id="top_point">
                {currentFocus === "overview" ? (
                  <motion.div
                    layoutId="pointer_top_1"
                    className="pointer"
                    id="pointer_1"
                  ></motion.div>
                ) : null}
                {currentFocus === "overview" ? null : (
                  <motion.div
                    layoutId="pointer_top_1"
                    className="pointer"
                    id="pointer_2"
                    layout
                    style={{ opacity: 0 }}
                  ></motion.div>
                )}
              </motion.div>
              <Link to="/company/overview">
                <motion.span
                  style={{
                    color: !match ? "black" : currentFocus ? "black" : color,
                  }}
                >
                  회사 소개
                </motion.span>
              </Link>
              <div id="bottom_point">
                {currentFocus === "overview" ? null : (
                  <motion.div
                    layoutId="pointer_bottom_1"
                    className="pointer"
                    id="pointer_3"
                    layout
                    style={{ opacity: 0 }}
                  ></motion.div>
                )}
                {currentFocus === "overview" ? (
                  <motion.div
                    layoutId="pointer_bottom_1"
                    className="pointer"
                    id="pointer_4"
                  ></motion.div>
                ) : null}
              </div>
            </li>
          </motion.div>
          <motion.div
            onMouseOver={() => setCurrentFocus("field")}
            onMouseLeave={() => setCurrentFocus(null)}
          >
            <li id="field">
              <motion.div id="top_point">
                {currentFocus === "field" ? (
                  <motion.div
                    layoutId="pointer_top_2"
                    className="pointer"
                    id="pointer_1"
                  ></motion.div>
                ) : null}
                {currentFocus === "field" ? null : (
                  <motion.div
                    layoutId="pointer_top_2"
                    className="pointer"
                    id="pointer_2"
                    layout
                    style={{ opacity: 0 }}
                  ></motion.div>
                )}
              </motion.div>
              <Link to="/bussiness">
                <motion.span
                  style={{
                    color: !match ? "black" : currentFocus ? "black" : color,
                  }}
                >
                  사업분야
                </motion.span>
              </Link>
              <div id="bottom_point">
                {currentFocus === "field" ? null : (
                  <motion.div
                    layoutId="pointer_bottom_2"
                    className="pointer"
                    id="pointer_3"
                    layout
                    style={{ opacity: 0 }}
                  ></motion.div>
                )}
                {currentFocus === "field" ? (
                  <motion.div
                    layoutId="pointer_bottom_2"
                    className="pointer"
                    id="pointer_4"
                  ></motion.div>
                ) : null}
              </div>
            </li>
          </motion.div>
          <motion.div onMouseOver={() => setCurrentFocus("marketing")}>
            <li>
              <motion.div id="top_point">
                {currentFocus === "marketing" ? (
                  <motion.div
                    layoutId="pointer_top_3"
                    className="pointer"
                    id="pointer_1"
                  ></motion.div>
                ) : null}
                {currentFocus === "marketing" ? null : (
                  <motion.div
                    layoutId="pointer_top_3"
                    className="pointer"
                    id="pointer_2"
                    layout
                    style={{ opacity: 0 }}
                  ></motion.div>
                )}
              </motion.div>
              <Link to="/marketing">
                <motion.span
                  style={{
                    color: !match ? "black" : currentFocus ? "black" : color,
                  }}
                >
                  홍보센터
                </motion.span>
              </Link>
              <div id="bottom_point">
                {currentFocus === "marketing" ? null : (
                  <motion.div
                    layoutId="pointer_bottom_3"
                    className="pointer"
                    id="pointer_3"
                    layout
                    style={{ opacity: 0 }}
                  ></motion.div>
                )}
                {currentFocus === "marketing" ? (
                  <motion.div
                    layoutId="pointer_bottom_3"
                    className="pointer"
                    id="pointer_4"
                  ></motion.div>
                ) : null}
              </div>
            </li>
          </motion.div>
          <motion.div onMouseOver={() => setCurrentFocus("business")}>
            <li>
              <motion.div id="top_point">
                {currentFocus === "business" ? (
                  <motion.div
                    layoutId="pointer_top_4"
                    className="pointer"
                    id="pointer_1"
                  ></motion.div>
                ) : null}
                {currentFocus === "business" ? null : (
                  <motion.div
                    layoutId="pointer_top_4"
                    className="pointer"
                    id="pointer_2"
                    layout
                    style={{ opacity: 0 }}
                  ></motion.div>
                )}
              </motion.div>
              <Link to="/perform">
                <motion.span
                  style={{
                    color: !match ? "black" : currentFocus ? "black" : color,
                  }}
                >
                  사업실적
                </motion.span>
              </Link>
              <div id="bottom_point">
                {currentFocus === "business" ? null : (
                  <motion.div
                    layoutId="pointer_bottom_4"
                    className="pointer"
                    id="pointer_3"
                    layout
                    style={{ opacity: 0 }}
                  ></motion.div>
                )}
                {currentFocus === "business" ? (
                  <motion.div
                    layoutId="pointer_bottom_4"
                    className="pointer"
                    id="pointer_4"
                  ></motion.div>
                ) : null}
              </div>
            </li>
          </motion.div>
        </ListBox>
        <MenuBox match={!match}>
          <AiOutlineMenu onClick={() => setShowDrawer((pre) => !pre)} />
        </MenuBox>
      </Wrapper>
      {isSubListShow ? (
        <AnimatePresence>
          <SubListBox
            isSubListShow={isSubListShow}
            onMouseLeave={() => setCurrentFocus(null)}
            key={isSubListShow}
            variants={variants}
            initial="start"
            animate="end"
            exit="exit"
          >
            <ul>
              {isSubListShow
                ? subList[isSubListShow].map((item, idx) => (
                    <li
                      onClick={() => navigator(subListUrl[isSubListShow][idx])}
                    >
                      {item}
                    </li>
                  ))
                : null}
            </ul>
          </SubListBox>
        </AnimatePresence>
      ) : null}
      {showDrawer ? (
        <AnimatePresence>
          <Overaly
            variants={drawerOverlay}
            initial="start"
            animate="end"
            exit="exit"
            onClick={() => setShowDrawer(false)}
          >
            <TiDelete onClick={() => setShowDrawer(false)} />
            <Drawer
              variants={drawerBox}
              initial="start"
              animate="end"
              exit="exit"
            >
              <Link to="/company/overview">
                <li>회사소개</li>
              </Link>
              <Link to="/bussiness">
                <li>사업분야</li>
              </Link>
              <Link to="/marketing">
                <li>홍보센터</li>
              </Link>
              <Link to="/perform">
                <li>사업실적</li>
              </Link>
            </Drawer>
          </Overaly>
        </AnimatePresence>
      ) : null}
    </>
  );
}

export default Header;
