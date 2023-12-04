import styled from "styled-components";
import ScheduleBox from "../schedule/ScheduleBox";
import { useEffect, useState } from "react";
import axios from "axios";

const FavTeamSchedule = () => {
  const [schedule, setSchedule] = useState([]);
  const [list, setList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(import.meta.env.VITE_SCHEDULE_API_END_POINT);
        const data = response.data;
        const newSchedule = [];

        for (const date in data.schedule) {
          newSchedule.push(data.schedule[date]);
        }

        setSchedule((prevSchedule) => [...prevSchedule, ...newSchedule]);
      } catch (error) {
        console.error(error.message);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    schedule.map((schedule) => {
      setList((prev) => [...prev, ...schedule]);
    });
  }, [schedule]);

  useEffect(() => {
    setFilteredList(
      list.filter((schedule) => {
        console.log(schedule.homeTeamName);
        return schedule.homeTeamName === "토트넘" || schedule.awayTeamName === "토트넘";
      })
    );
  }, [list]);

  return (
    <Wrapper>
      <Title>경기일정</Title>
      <ListWrapper>
        {filteredList.map(
          (schedule, index) =>
            index < 5 && (
              <ScheduleBox
                key={index}
                item={schedule}
                date={
                  schedule.startDate.slice(4).slice(0, 2) +
                  "." +
                  schedule.startDate.slice(4).slice(2)
                }
              />
            )
        )}
      </ListWrapper>
    </Wrapper>
  );
};
export default FavTeamSchedule;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.p`
  margin-bottom: 20px;
  font-family: "Pretendard-SemiBold";
  font-size: ${({ theme }) => theme.fontSize.m};
  font-weight: 600;
`;

const ListWrapper = styled.div`
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  gap: 15px;

  height: 30vh;
  padding-bottom: 50px;
`;
