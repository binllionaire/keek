import { styled } from "styled-components";

const Logo = styled.h1`
  font-family: "Pretendard";
  font-size: ${({ theme }) => theme.fontSize.xl};
  font-weight: 900;
  color: ${({ theme }) => theme.colors.mainGreen};
`;

const GreenButton = styled.button`
  z-index: 2;

  width: 100%;
  max-width: 768px;
  height: 52px;
  margin: 0 auto;

  font-family: "Pretendard-SemiBold";
  font-size: ${({ theme }) => theme.fontSize.l};
  color: ${({ theme }) => theme.colors.white};

  background-color: ${({ theme }) => theme.colors.normalGreen};
  border-radius: 15px;
`;

const SignBox = styled.div`
  position: absolute;
  bottom: 0;

  display: flex;
  flex-direction: column;
  gap: 12px;

  width: 100%;
  padding: 20px;
`;

const SignUpBox = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
`;

const Intro = styled.p`
  font-family: "Pretendard-Regular";
  font-size: ${({ theme }) => theme.fontSize.m};
  line-height: 24px;
  color: ${({ theme }) => theme.colors.lightText};
  text-align: start;
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
  gap: 10px;
  justify-content: space-between;

  margin-top: 40px;
`;

const Title = styled.h2`
  font-family: "Pretendard";
  font-size: ${({ theme }) => theme.fontSize.xl};
  font-size: ${({ theme }) => theme.fontSize.xl};
  font-weight: 900;
  color: ${({ theme }) => theme.colors.white};
`;

const NavWrapper = styled(SignBox)`
  left: 0px;
`;

const Section = styled.div`
  overflow: scroll;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  row-gap: 12px;
  justify-content: space-between;

  height: 75vh;
  margin-top: 30px;
  padding-bottom: 60px;

  &::-webkit-scrollbar {
    display: none;
  }

  @media screen and (max-height: 650px) {
    height: 60vh;
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

const Rank = styled.div`
  flex-basis: 10%;
`;
const Team = styled.div`
  display: flex;
  flex-basis: 30%;
`;
const Game = styled.div`
  flex-basis: 10%;
`;
const Win = styled.div`
  flex-basis: 10%;
`;
const Draw = styled.div`
  flex-basis: 10%;
`;
const Lose = styled.div`
  flex-basis: 10%;
`;
const Point = styled.div`
  flex-basis: 10%;
`;

export const R = {
  Rank,
  Team,
  Game,
  Win,
  Draw,
  Lose,
  Point,
};
