import styled from "styled-components";
import { R } from "../styles/commonStyle";

const BoardHeader = () => {
  return (
    <Header>
      <R.Rank>순위</R.Rank>
      <R.Team>팀</R.Team>
      <R.Game>경기</R.Game>
      <R.Win>승</R.Win>
      <R.Draw>무</R.Draw>
      <R.Lose>패</R.Lose>
      <R.Point>승점</R.Point>
    </Header>
  );
};
export default BoardHeader;

const Header = styled.div`
  display: flex;
  justify-content: space-between;

  margin-bottom: 14px;
  padding-bottom: 14px;

  text-align: center;

  border-bottom: ${({ theme }) => theme.colors.lightGrey} 1px solid;
`;
