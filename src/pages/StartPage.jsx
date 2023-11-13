import React, { useState } from "react";
import { styled, keyframes } from "styled-components";
import thumbnailImg from "../assets/img/thumbnail.png";
import loginIcon from "../assets/icons/User.svg";
import passwordIcon from "../assets/icons/Password.svg";
import hideIcon from "../assets/icons/Hide.svg";

const Header = styled.div``;

const Logo = styled.h1`
  font-family: "Pretendard-Black";
  font-size: ${({ theme }) => theme.fontSize.xl};
  color: ${({ theme }) => theme.colors.mainGreen};
`;

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

const Intro = styled.p`
  font-family: "Pretendard-Regular";
  font-size: ${({ theme }) => theme.fontSize.m};
  color: ${({ theme }) => theme.colors.lightText};
  text-align: start;
  line-height: 24px;
`;
const GreenButton = styled.button`
  width: 100%;
  max-width: 768px;
  height: 60px;

  margin: 0 auto;

  border-radius: 16px;
  background-color: ${({ theme }) => theme.colors.normalGreen};
  font-family: "Pretendard-SemiBold";
  font-size: ${({ theme }) => theme.fontSize.l};
  color: ${({ theme }) => theme.colors.normalText};
`;

const SignBox = styled.div`
  position: absolute;
  bottom: 0;

  display: flex;
  flex-direction: column;
  gap: 12px;

  width: 100%;

  padding: 28px;
`;

const SignUpBox = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
`;

const Sign = styled(Intro)`
  color: ${({ theme }) => theme.colors.mainGreen};
`;
const BackgroundOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
`;

const BottomSheet = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  width: 100%;
  height: 60vh;

  background-color: ${({ theme }) => theme.colors.normalGrey};
  border-radius: 40px 40px 0 0;
  padding: 10px 20px;
  box-shadow: 0px -2px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;
  transform: translateY(${({ isOpen }) => (isOpen ? "0" : "100%")});
  z-index: 2;
`;
const SheetHeader = styled.div`
  width: 68px;
  height: 8px;

  background-color: ${({ theme }) => theme.colors.lightGrey};
`;
const SheetTitle = styled.h2`
  font-family: "Pretendard-SemiBold";
  font-size: ${({ theme }) => theme.fontSize.xl};
`;

const InputWrapper = styled.div`
  width: 100%;
  height: 60px;

  display: flex;
  gap: 10px;
  padding: 0 20px;
  border-radius: 16px;

  background-color: ${({ theme }) => theme.colors.darkGrey};
`;
const InputIcon = styled.img``;
const Input = styled.input`
  flex-grow: 1;

  border-radius: 16px;

  background-color: ${({ theme }) => theme.colors.darkGrey};
  font-family: "Pretendard-SemiBold";
  font-size: ${({ theme }) => theme.fontSize.l};
  color: ${({ theme }) => theme.colors.normalText};

  outline: none;
`;
export default function StartPage() {
  const [isBottomSheetOpen, setBottomSheetOpen] = useState(true);

  const openBottomSheet = () => {
    setBottomSheetOpen(true);
  };

  const closeBottomSheet = () => {
    setBottomSheetOpen(false);
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
          <GreenButton onClick={openBottomSheet}>로그인</GreenButton>
          <SignUpBox>
            <Intro>계정이 없으신가요?</Intro>
            <Sign>회원가입</Sign>
          </SignUpBox>
        </SignBox>
      </Section>
      <BackgroundOverlay
        isOpen={isBottomSheetOpen}
        onClick={closeBottomSheet}
      />
      <BottomSheet isOpen={isBottomSheetOpen}>
        <SheetHeader />
        <SheetTitle>로그인</SheetTitle>
        <InputWrapper>
          <InputIcon src={loginIcon}></InputIcon>
          <Input placeholder="아이디" />
        </InputWrapper>
        <InputWrapper>
          <InputIcon src={passwordIcon}></InputIcon>
          <Input type="password" placeholder="비밀번호" />
          <InputIcon src={hideIcon}></InputIcon>
        </InputWrapper>
        <SignBox>
          <GreenButton onClick={openBottomSheet}>로그인</GreenButton>
          <SignUpBox>
            <Intro>계정이 없으신가요?</Intro>
            <Sign>회원가입</Sign>
          </SignUpBox>
        </SignBox>
      </BottomSheet>
    </>
  );
}
