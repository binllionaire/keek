import { ST } from "../styles/commonStyle";
import { tottenhamPlayer } from "../constants/player/Tottenham";
import PlayerBox from "../components/PlayerBox";
import Header from "../components/common/Header";
import { useNavigate } from "react-router-dom";

export default function PlayerSettingPage() {
  const navigate = useNavigate();
  return (
    <>
      <Header />
      <ST.PageIntroWrapper>
        <ST.Title>선수 선택</ST.Title>
        <ST.Intro>가장 좋아하는 선수를 선택하세요</ST.Intro>
      </ST.PageIntroWrapper>
      <ST.Section>
        {tottenhamPlayer.map((player) => (
          <PlayerBox
            key={player.id}
            id={player.id}
            korName={player.korName}
            engName={player.engName}
            number={player.number}
            flagSrc={player.flagSrc}
            playerImgSrc={player.playerImgSrc}
          />
        ))}
      </ST.Section>
      <ST.NavWrapper>
        <ST.GreenButton onClick={() => navigate("/home")}>다음</ST.GreenButton>
      </ST.NavWrapper>
    </>
  );
}
