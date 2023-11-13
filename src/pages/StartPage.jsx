import { styled } from "styled-components";
import thumbnailImg from "../assets/img/thumbnail.png";

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

const SignUp = styled(Intro)`
  color: ${({ theme }) => theme.colors.mainGreen};
`;
export default function StartPage() {
  return (
    <>
      <Header>
        <Logo>KEEK</Logo>
      </Header>
      <Section>
        <ThumbnailBox>
          <BackgroundBox></BackgroundBox>
          <ThumbnailImg src={thumbnailImg} alt="썸네일 이미지" />;
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
          <GreenButton>로그인</GreenButton>
          <SignUpBox>
            <Intro>계정이 없으신가요?</Intro>
            <SignUp>회원가입</SignUp>
          </SignUpBox>
        </SignBox>
      </Section>
    </>
  );
}
