import styled from "styled-components";
import ScheduleBox from "./ScheduleBox";
import { format } from "date-fns";
import { PAGE } from "../../constants/Page";

const Schedule = ({ schedule }) => {
  const dateString = schedule["0"].startDate;
  const year = parseInt(dateString.substring(0, 4), 10);
  const month = parseInt(dateString.substring(4, 6), 10) - 1;
  const day = parseInt(dateString.substring(6, 8), 10);

  const matchDate = new Date(year, month, day);

  const matchDay = parseInt(dateString.substring(6, 8), 10);

  const date = foramtDate(matchDay);
  function foramtDate(matchDay) {
    const today = format(new Date(), "dd");
    const diff = matchDay - today;
    if (diff === 0) {
      return "오늘";
    }
    if (diff === 1) {
      return "내일";
    }
    return [format(matchDate, "MM월 dd일")];
  }

  return (
    <ScheduleBoxWrapper>
      <MatchDate>{date}</MatchDate>
      {schedule.map((scheduleItem, scheduleIndex) => (
        <ScheduleBox key={scheduleIndex} item={scheduleItem} date={date} page={PAGE.SCHEDULE} />
      ))}
    </ScheduleBoxWrapper>
  );
};

export default Schedule;

const MatchDate = styled.p`
  font-size: ${({ theme }) => theme.fontSize.m};
`;

const ScheduleBoxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;
