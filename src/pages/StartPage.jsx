import { useState } from "react";
import { styled } from "styled-components";
import thumbnailImg from "../assets/img/thumbnail.png";
import BottomSheet from "../components/BottomSheet";
import {
  GreenButton,
  Intro,
  Logo,
  Sign,
  SignBox,
  SignUpBox,
} from "../styles/GlobalStyle";

const Header = styled.div``;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  height: 70vh;
  justify-content: center;
  @media screen and (max-height: 700px) {
    gap: 0;
  }
`;

const ThumbnailBox = styled.div`
  position: relative;

  display: flex;
  justify-content: center;

  width: 100vw;
  height: 300px;
`;

const BackgroundBox = styled.div`
  position: absolute;
  bottom: 0;

  width: 75%;
  max-width: 768px;
  height: 260px;

  border-radius: 50px;
  background-color: ${({ theme }) => theme.colors.normalGrey};
`;

const ThumbnailImg = styled.img`
  position: absolute;
  bottom: 0;

  width: 300px;
  overflow: hidden;
`;

const IntroBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  width: 100%;
  padding: 20px;
`;

const Title = styled.h2`
  font-family: "Pretendard-Black";
  font-size: ${({ theme }) => theme.fontSize.xxl};
  color: ${({ theme }) => theme.colors.mainGreen};
  text-align: start;
`;

const BackgroundOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;
  display: ${({ $isopen }) => ($isopen === "true" ? "block" : "none")};
`;
export default function StartPage() {
  const [isBottomSheetOpen, setBottomSheetOpen] = useState("false");
  const [signInOrUp, setSignInOrUp] = useState(0);

  const openBottomSheet = (option) => {
    setBottomSheetOpen("true");
    option === 0 ? setSignInOrUp(0) : setSignInOrUp(1);
  };

  const closeBottomSheet = () => {
    setBottomSheetOpen("false");
  };
  return (
    <>
      <Header>
        <Logo>KEEK</Logo>
      </Header>
      <Section>
        <ThumbnailBox>
          <BackgroundBox></BackgroundBox>
          <ThumbnailImg src={thumbnailImg} alt="썸네일 이미지" />
        </ThumbnailBox>
        <IntroBox>
          <Title>KEEK</Title>
          <Intro>
            끽에서는 최애팀을 선택하고
            <br />
            최애 팀과 선수를 선택하여
            <br />
            자신이 원하는 정보를 제공받을 수 있어요
          </Intro>
        </IntroBox>
        <SignBox>
          <GreenButton onClick={() => openBottomSheet(0)}>로그인</GreenButton>
          <SignUpBox>
            <Intro>계정이 없으신가요?</Intro>
            <Sign onClick={() => openBottomSheet(1)}>회원가입</Sign>
          </SignUpBox>
        </SignBox>
      </Section>
      <BackgroundOverlay
        $isopen={isBottomSheetOpen}
        onClick={closeBottomSheet}
      />
      <BottomSheet
        isBottomSheetOpen={isBottomSheetOpen}
        openBottomSheet={openBottomSheet}
        option={signInOrUp}
      />
    </>
  );
}
