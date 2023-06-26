import { AnimatePresence, motion } from "framer-motion";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MainSecondPart from "./MainSecondPart";
import MainLastPart from "./MainLastPart";
import { useEffect, useState } from "react";

const MainScreenContainer = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  box-sizing: border-box;
`;
// const MainImgContainer = styled(motion.div)`
//   width: 100%;
//   height: 100vh;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   img {
//     position: absolute;
//     object-fit: fill;
//     width: 100%;
//     height: 100%;
//     top: 0;
//   }
//   #main_title {
//     width: auto;
//     height: 20vw;
//     position: absolute;
//     left: 10vw;
//     top: 13vw;
//     display: flex;
//     align-items: center;
//     h1 {
//       display: flex;
//       flex-direction: column;
//       span {
//         color: white;
//         font-weight: 700;
//         font-size: 7vw;
//         text-shadow: 1px 1px 1px black;
//         &:first-child {
//           margin-bottom: 2vw;
//         }
//       }
//     }
//   }
//   #main_description {
//     position: absolute;
//     width: 40%;
//     height: 15vw;
//     border: 1px solid red;
//     right: 3vw;
//     top: 35vw;
//     display: flex;
//     flex-direction: column;
//     span {
//       display: block;
//       font-size: 3vw;
//       color: white;
//       text-shadow: 1px 1px 1px black;
//       margin-bottom: 1vw;
//     }
//     #first_description {
//       font-weight: 400;
//     }
//     #last_description {
//       font-weight: 500;
//     }
//   }
// `;
const StyledSlider = styled(Slider)`
  width: 100%;
  height: 100vh;
  position: absolute !important;
  img {
    /* position: absolute; */
    /* border: 0.1px solid rgba(255, 255, 255, 0); */
    width: 100vw !important;
    height: 100vh !important;
    object-fit: cover;
    filter: brightness(0.85);
  }
`;
const MainTitle = styled.div`
  width: auto;
  height: 20vw;
  position: absolute;
  left: 10vw;
  top: 13vw;
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    height: 20vh;
    top: 30vh;
  }
  h1 {
    display: flex;
    flex-direction: column;
    span {
      color: white;
      font-weight: 700;
      font-size: 7vw;
      text-shadow: rgba(149, 157, 165, 0.2) 0px 8px 15px;
      &:first-child {
        margin-bottom: 2vw;
      }
      @media screen and (max-width: 768px) {
        font-size: 5vh;
      }
    }
  }
`;
const MainDescription = styled.div`
  position: absolute;
  width: 40%;
  height: 15vw;
  right: 3vw;
  top: 35vw;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 768px) {
    top: 60vh;
    right: -1vh;
    width: 60%;
  }
  span {
    display: block;
    position: absolute;
    font-size: 2vw;
    color: white;
    text-shadow: rgba(149, 157, 165, 0.2) 0px 8px 15px;
    margin-bottom: 1vw;
    @media screen and (max-width: 768px) {
      font-size: 2vh;
    }
  }
  #first_description {
    font-weight: 400;
  }
  #last_description {
    font-weight: 500;
    top: 3vw;
    @media screen and (max-width: 768px) {
      top: 3vh;
    }
  }
`;
const content: string[] = [
  "2023년 창립 12주년을 맞은,부동산 개발 전문 기업",
  "고객의 이익,도시의 경관을 생각하는 기업",
  "첨단공법과 건축미학이,열어가는 공간을 창조합니다",
];
const firstVariant = {
  start: {
    opacity: 0,
    y: -20,
  },
  end: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      delay: 0.5,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      delay: 0.2,
      duration: 1,
    },
  },
};
const lastVariant = {
  start: {
    opacity: 0,
    y: -20,
  },
  end: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      delay: 1,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      delay: 0.2,
      duration: 1,
    },
  },
};
function Main() {
  const settings = {
    fade: true,
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
  };
  const [index, setIndex] = useState(0);
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  useEffect(() => {
    const timer = setTimeout(() => {
      index === 2 ? setIndex(0) : setIndex((pre) => pre + 1);
    }, 5000);
    return () => clearTimeout(timer);
  }, [index]);
  useEffect(() => {
    setFirst(content[index].split(",")[0]);
    setLast(content[index].split(",")[1]);
  }, [index]);
  return (
    <>
      <MainScreenContainer>
        <StyledSlider {...settings}>
          <img src={process.env.PUBLIC_URL + `/main1.jpg`} alt="메인 이미지" />
          <img src={process.env.PUBLIC_URL + `/main2.jpg`} alt="메인 이미지" />
          <img src={process.env.PUBLIC_URL + `/main3.jpg`} alt="메인 이미지" />
        </StyledSlider>
        <MainTitle>
          <h1>
            <span>TIAMO</span>
            <span>COPERATION</span>
          </h1>
        </MainTitle>
        <MainDescription>
          <AnimatePresence>
            <motion.span
              variants={firstVariant}
              initial="start"
              animate="end"
              exit="exit"
              key={first}
              id="first_description"
            >
              {first}
            </motion.span>
            <motion.span
              variants={lastVariant}
              initial="start"
              animate="end"
              exit="exit"
              key={last}
              id="last_description"
            >
              {last}
            </motion.span>
          </AnimatePresence>
        </MainDescription>
      </MainScreenContainer>
      <MainSecondPart />
      <MainLastPart />
    </>
  );
}

export default Main;
