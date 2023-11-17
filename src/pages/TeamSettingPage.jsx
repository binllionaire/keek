import { ST } from "../styles/commonStyle";
import searchIcon from "../assets/icons/Search.svg";
import { teamData } from "../constants/TeamData.js";
import TeamBox from "../components/TeamBox";

export default function TeamSettingPage() {
  return (
    <>
      <ST.Header>
        <ST.Logo>KEEK</ST.Logo>
        <img src={searchIcon} />
      </ST.Header>
      <ST.PageIntroWrapper>
        <ST.Title>전체 팀</ST.Title>
        <ST.Intro>가장 좋아하는 팀을 선택하세요</ST.Intro>
      </ST.PageIntroWrapper>
      <ST.Section>
        {teamData.map((team) => (
          <TeamBox
            key={team.id}
            id={team.id}
            logoSrc={team.logoSrc}
            teamName={team.teamName}
          />
        ))}
      </ST.Section>
      <ST.NavWrapper>
        <ST.GreenButton>다음</ST.GreenButton>
      </ST.NavWrapper>
    </>
  );
}
