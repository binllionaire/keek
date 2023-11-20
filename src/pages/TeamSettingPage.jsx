import { ST } from "../styles/commonStyle";
import { teamData } from "../constants/TeamData.js";
import TeamBox from "../components/TeamBox";
import { useNavigate } from "react-router-dom";
import Header from "../components/common/Header";

export default function TeamSettingPage() {
  const navigate = useNavigate();

  const navToPlayerSettingPage = () => {
    navigate("/player");
  };
  return (
    <>
      <Header />
      <ST.PageIntroWrapper>
        <ST.Title>팀 선택</ST.Title>
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
        <ST.GreenButton onClick={navToPlayerSettingPage}>다음</ST.GreenButton>
      </ST.NavWrapper>
    </>
  );
}
