import styled from "styled-components";

const ScheduleBox = ({ item, date }) => {
  const homeTeamName =
    item.homeTeamName === "노팅엄 포레스트"
      ? "노팅엄"
      : item.homeTeamName === "크리스탈 팰리스"
        ? "팰리스"
        : item.homeTeamName;
  const awayTeamName =
    item.awayTeamName === "노팅엄 포레스트"
      ? "노팅엄"
      : item.awayTeamName === "크리스탈 팰리스"
        ? "팰리스"
        : item.awayTeamName;

  return (
    <Box $isFavTeam={homeTeamName === "토트넘" || awayTeamName === "토트넘"}>
      <HomeTeam>
        <Name>{homeTeamName}</Name>
        <Logo src={item.homeTeamImageUrl} />
      </HomeTeam>
      <DateWrapper>
        <Date>{date}</Date>
        <Time>{`${item.startTime.slice(0, 2)}:${item.startTime.slice(2)}`}</Time>
      </DateWrapper>
      <AwayTeam>
        <Logo src={item.awayTeamImageUrl} />
        <Name>{awayTeamName}</Name>
      </AwayTeam>
    </Box>
  );
};

export default ScheduleBox;

const Box = styled.div`
  display: flex;
  flex-grow: 0;
  flex-shrink: 0;

  width: 100%;
  height: 78px;

  background-color: ${({ theme, $isFavTeam }) =>
    $isFavTeam ? theme.colors.normalGreen : theme.colors.lightGrey};
  border-radius: 10px;
`;

const HomeTeam = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: end;

  width: 37.5%;
`;

const AwayTeam = styled(HomeTeam)`
  justify-content: start;
`;

const Name = styled.p`
  font-size: ${({ theme }) => theme.fontSize.m};
  font-weight: 700;
`;

const DateWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;
  justify-content: center;

  width: 25%;
`;

const Date = styled.p`
  font-size: ${({ theme }) => theme.fontSize.s};
`;

const Time = styled.p`
  font-family: "Pretendard-Bold";
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: 600;
`;

const Logo = styled.img`
  width: 28px;
  height: 28px;
`;
