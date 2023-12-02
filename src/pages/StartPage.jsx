import { useState } from "react";
import { styled } from "styled-components";
import thumbnailImg from "../assets/img/thumbnail.png";
import BottomSheet from "../components/BottomSheet";
import { ST } from "../styles/commonStyle";

const Header = styled.div``;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  justify-content: center;

  height: 70vh;

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

  background-color: ${({ theme }) => theme.colors.normalGrey};
  border-radius: 50px;
`;

const ThumbnailImg = styled.img`
  position: absolute;
  bottom: 0;
  overflow: hidden;
  width: 300px;
`;

const IntroBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;

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
  z-index: 1;
  top: 0;
  left: 0;

  display: ${({ $isopen }) => ($isopen === "true" ? "block" : "none")};

  width: 100%;
  height: 100%;

  background-color: rgba(0, 0, 0, 0.5);
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
        <ST.Logo>KEEK</ST.Logo>
      </Header>
      <Section>
        <ThumbnailBox>
          <BackgroundBox></BackgroundBox>
          <ThumbnailImg src={thumbnailImg} alt="썸네일 이미지" />
        </ThumbnailBox>
        <IntroBox>
          <Title>KEEK</Title>
          <ST.Intro>
            끽에서는 최애팀을 선택하고
            <br />
            최애 팀과 선수를 선택하여
            <br />
            자신이 원하는 정보를 제공받을 수 있어요
          </ST.Intro>
        </IntroBox>
        <ST.SignBox>
          <ST.GreenButton onClick={() => openBottomSheet(0)}>
            로그인
          </ST.GreenButton>
          <ST.SignUpBox>
            <ST.Intro>계정이 없으신가요?</ST.Intro>
            <ST.Sign onClick={() => openBottomSheet(1)}>회원가입</ST.Sign>
          </ST.SignUpBox>
        </ST.SignBox>
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
