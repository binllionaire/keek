import { styled } from "styled-components";
import { R } from "../styles/commonStyle";

const RecordBox = ({ rank, logo, name }) => {
  if (name === "크리스탈 팰리스") name = "팰리스";
  if (name === "노팅엄 포레스트") name = "노팅엄";
  return (
    <Record $rank={Number(rank.rank)}>
      <R.Rank>{rank.rank}</R.Rank>
      <R.Team>
        <TeamLogo src={logo}></TeamLogo>
        <TeamName>{name}</TeamName>
      </R.Team>
      <R.Game>{rank.game}</R.Game>
      <R.Win>{rank.win}</R.Win>
      <R.Draw>{rank.draw}</R.Draw>
      <R.Lose>{rank.loss}</R.Lose>
      <R.Point>{rank.pts}</R.Point>
    </Record>
  );
};
export default RecordBox;

const TeamLogo = styled.img`
  width: 16px;
  height: 16px;
`;
const TeamName = styled.div`
  margin-left: 10px;
`;
const Record = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  min-height: 46px;

  text-align: center;

  background-color: ${({ theme, $rank, $isMyTeam }) => {
    if ($isMyTeam === true) {
      return theme.colors.normalGreen;
    } else {
      return $rank < 5 ? theme.colors.darkGreen : theme.colors.darkGrey;
    }
  }};
  border-radius: 10px;
`;
