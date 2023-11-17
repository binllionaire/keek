import { styled } from "styled-components";

const Logo = styled.h1`
  font-family: "Pretendard-Black";
  font-size: ${({ theme }) => theme.fontSize.xl};
  color: ${({ theme }) => theme.colors.mainGreen};
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

const Intro = styled.p`
  font-family: "Pretendard-Regular";
  font-size: ${({ theme }) => theme.fontSize.m};
  color: ${({ theme }) => theme.colors.lightText};
  text-align: start;
  line-height: 24px;
`;

const Sign = styled(Intro)`
  color: ${({ theme }) => theme.colors.mainGreen};
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;

const PageIntroWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 10px;

  margin-top: 40px;
`;

const Title = styled.h2`
  font-family: "Pretendard-Black";
  font-size: ${({ theme }) => theme.fontSize.xl};
  color: ${({ theme }) => theme.colors.normalText};
`;

const NavWrapper = styled(SignBox)`
  left: 0px;
`;

const Section = styled.div`
  overflow: scroll;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 10px;
  row-gap: 12px;

  margin-top: 40px;
  padding-bottom: 120px;

  &::-webkit-scrollbar {
    display: none;
  }
  @media screen and (max-height: 700px) {
    height: 500px;
  }
`;
export const ST = {
  Header,
  PageIntroWrapper,
  Title,
  Intro,
  NavWrapper,
  Section,
  Logo,
  GreenButton,
  Sign,
  SignBox,
  SignUpBox,
};
