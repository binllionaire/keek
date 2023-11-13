import { GreenButton, Logo, SignBox } from "../styles/GlobalStyle";
import { styled } from "styled-components";
import searchIcon from "../assets/icons/Search.svg";
import { teamData } from "../constants/TeamData.js";
import TeamBox from "../components/TeamBox";

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
  padding-bottom: 120px;

  &::-webkit-scrollbar {
    display: none;
  }
  @media screen and (max-height: 700px) {
    height: 500px;
  }
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
        <Intro>가장 좋아하는 팀을 선택하세요</Intro>
      </PageIntroWrapper>
      <Section>
        {teamData.map((team) => (
          <TeamBox
            key={team.id}
            id={team.id}
            logoSrc={team.logoSrc}
            teamName={team.teamName}
          />
        ))}
      </Section>
      <NavWrapper>
        <GreenButton>다음</GreenButton>
      </NavWrapper>
    </>
  );
}
