import { useState } from "react";
import styled from "styled-components";
import { addDays } from "date-fns";

const DatePicker = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const dateArray = generateDateArray(selectedDate);

  const handleDateClick = (date) => {
    setSelectedDate(date);
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
        <DateItem key={date} selected={index === 1} onClick={() => handleDateClick(date)}>
          <DateText>{formatDateString(date)[0]}</DateText>
          <Day>{formatDateString(date)[1]}</Day>
        </DateItem>
      ))}
    </DatePickerContainer>
  );
};

export default DatePicker;

const generateDateArray = (startDate) => {
  let dateArray = [];
  for (let i = -1; i < 10; i++) {
    dateArray.push(addDays(startDate, i));
  }
  return dateArray;
};
const DateText = styled.p`
  font-size: 22px;
`;

const Day = styled.p`
  font-size: ${({ theme }) => theme.fontSize.s};
`;

const DatePickerContainer = styled.div`
  position: absolute;
  right: 0;
  left: 0;

  overflow-x: auto;
  display: flex;

  width: 100vw;
  margin-top: 20px;
  padding: 10px 0;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const DateItem = styled.div`
  cursor: pointer;

  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  justify-content: center;

  width: 52px;
  height: 72px;
  margin: 5px;
  padding: 20px;

  color: #fff;
  text-align: center;

  background-color: ${({ theme, selected }) =>
    selected ? theme.colors.normalGreen : theme.colors.darkGrey};
  border-radius: 10px;
`;
