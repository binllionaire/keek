import styled from "styled-components";
import PlayerBox from "../PlayerBox";

const FavPlayer = () => {
  const favPlayerList = [
    {
      id: 4,
      korName: "손흥민",
      engName: "Son",
      number: 7,
      flagSrc: "/flag/Korea.svg",
      playerImgSrc: "/player/tottenham/Son.png",
    },
    {
      id: 6,
      korName: "히샬리송",
      engName: "Richarlison",
      number: 9,
      flagSrc: "/flag/Brazil.svg",
      playerImgSrc: "/player/tottenham/Richarlison.png",
    },
    {
      id: 7,
      korName: "매디슨",
      engName: "Maddison",
      number: 10,
      flagSrc: "/flag/England.svg",
      playerImgSrc: "/player/tottenham/Maddison.png",
    },
    {
      id: 9,
      korName: "에메르송",
      engName: "Royal",
      number: 12,
      flagSrc: "/flag/Brazil.svg",
      playerImgSrc: "/player/tottenham/Royal.png",
    },
  ];
  return (
    <Wrapper>
      <Title>최애선수</Title>
      <PlayerBoxContainer>
        {favPlayerList.map((player) => (
          <PlayerBox
            key={player.id}
            id={player.id}
            flagSrc={player.flagSrc}
            korName={player.korName}
            engName={player.engName}
            number={player.number}
            playerImgSrc={player.playerImgSrc}
          />
        ))}
      </PlayerBoxContainer>
    </Wrapper>
  );
};
export default FavPlayer;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  height: 220px;
`;
const Title = styled.p`
  font-family: "Pretendard-SemiBold";
  font-size: ${({ theme }) => theme.fontSize.m};
  font-weight: 600;
`;

const PlayerBoxContainer = styled.div`
  position: absolute;

  overflow-x: scroll;
  display: flex;
  gap: 10px;

  width: calc(100% - 20px);
  margin-top: 30px;
  padding-right: 20px;

  &::-webkit-scrollbar {
    display: none;
  }
`;
