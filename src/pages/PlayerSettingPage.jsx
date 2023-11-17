import { ST } from "../styles/commonStyle";
import searchIcon from "../assets/icons/Search.svg";
import { tottenhamPlayer } from "../constants/player/Tottenham";
import PlayerBox from "../components/PlayerBox";

export default function PlayerSettingPage() {
  return (
    <>
      <ST.Header>
        <ST.Logo>KEEK</ST.Logo>
        <img src={searchIcon} />
      </ST.Header>
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
        <ST.GreenButton>다음</ST.GreenButton>
      </ST.NavWrapper>
    </>
  );
}
