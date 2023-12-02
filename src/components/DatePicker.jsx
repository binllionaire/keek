import { useState } from "react";
import styled from "styled-components";
import { addDays } from "date-fns";

const DatePicker = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const dateArray = generateDateArray(selectedDate);

  const handleDateClick = (date) => {
    setSelectedDate(date);
  };

  const generateDateArray = (startDate) => {
    for (let i = -5; i < 5; i++) {
      dateArray.push(addDays(startDate, i));
    }
    return dateArray;
  };

  function formatDateString(dateString) {
    const daysOfWeek = ["일", "월", "화", "수", "목", "금", "토"];
    const date = new Date(dateString);
    const formattedDate = `${date.getDate()}`;
    const formattedDay = `${daysOfWeek[date.getDay()]}`;
    return [formattedDate, formattedDay];
  }

  return (
    <DatePickerContainer>
      {dateArray.map((date, index) => (
        <DateItem key={date} selected={index === 5} onClick={() => handleDateClick(date)}>
          <DateText>{formatDateString(date)[0]}</DateText>
          <Day>{formatDateString(date)[1]}</Day>
        </DateItem>
      ))}
    </DatePickerContainer>
  );
};

export default DatePicker;

const DateText = styled.p`
  font-size: ${({ theme }) => theme.fontSize.l};
`;

const Day = styled.p`
  font-size: ${({ theme }) => theme.fontSize.s};
`;

const DatePickerContainer = styled.div`
  position: absolute;
  left: 0;

  overflow-x: auto;
  display: flex;

  width: 100vw;
  padding: 10px 0;
`;

const DateItem = styled.div`
  cursor: pointer;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 50px;
  height: 64px;
  margin: 5px;
  padding: 20px;

  line-height: 24px;
  color: #fff;
  text-align: center;

  background-color: ${({ theme, selected }) =>
    selected ? theme.colors.normalGreen : theme.colors.darkGrey};
  border-radius: 10px;
`;
