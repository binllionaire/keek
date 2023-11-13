import { GreenButton, Logo, SignBox } from "../styles/GlobalStyle";
import { styled } from "styled-components";
import tottenham from "../assets/img/club/club_tottenham.png";
import searchIcon from "../assets/icons/Search.svg";

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

const Intro = styled.h3`
  font-family: "Pretendard-Bold";
  font-size: ${({ theme }) => theme.fontSize.m};
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
  padding-bottom: 150px;

  &::-webkit-scrollbar {
    display: none;
  }
  @media screen and (max-height: 700px) {
    height: 500px;
  }
`;

const TeamBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;
const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70px;
  height: 70px;
  border-radius: 100%;
  background-color: ${({ theme }) => theme.colors.lightGrey};
`;

const TeamLogo = styled.img`
  width: 42px;
`;

const TeamName = styled.p`
  font-family: "Pretendard-Regular";
  font-size: ${({ theme }) => theme.fontSize.xs};
`;
export default function TeamSettingPage() {
  return (
    <>
      <Header>
        <Logo>KEEK</Logo>
        <img src={searchIcon} />
      </Header>
      <PageIntroWrapper>
        <Title>전체 팀</Title>
        <Intro>꾹 누르면 최애로 등록해요</Intro>
      </PageIntroWrapper>
      <Section>
        <TeamBox>
          <LogoWrapper>
            <TeamLogo src={tottenham} />
          </LogoWrapper>
          <TeamName>토트넘</TeamName>
        </TeamBox>
      </Section>
      <NavWrapper>
        <GreenButton>다음</GreenButton>
      </NavWrapper>
    </>
  );
}
