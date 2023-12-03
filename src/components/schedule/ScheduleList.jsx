import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import Schedule from "./Schedule";

const ScheduleList = () => {
  const [schedule, setSchedule] = useState([]);

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

  return (
    <ListWrapper>
      {schedule.map((dateSchedule, dateIndex) => (
        <Schedule key={dateIndex} schedule={dateSchedule} />
      ))}
    </ListWrapper>
  );
};

export default ScheduleList;

const ListWrapper = styled.div`
  overflow: scroll;
  display: flex;
  flex-direction: column;
  gap: 25px;

  height: 60vh;
  margin-top: 140px;
  padding-bottom: 68px;

  &::-webkit-scrollbar {
    display: none;
  }
`;
