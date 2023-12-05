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
      <Left />
      {dateArray.map((date, index) => (
        <DateItem key={date} selected={index === 1} onClick={() => handleDateClick(date)}>
          <DateText>{formatDateString(date)[0]}</DateText>
          <Day>{formatDateString(date)[1]}</Day>
        </DateItem>
      ))}
      <Right />
    </DatePickerContainer>
  );
};

export default DatePicker;

const generateDateArray = (startDate) => {
  let dateArray = [];
  for (let i = -1; i < 30; i++) {
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
  position: fixed;
  left: 0;
  right: 0;

  overflow-x: auto;
  display: flex;

  max-width: 768px;
  margin: 20px auto 0;
  padding: 10px 0;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const Left = styled.div`
  position: fixed;
  top: 170px;
  left: 0px;

  width: 50px;
  height: 92px;

  background: linear-gradient(
    270deg,
    rgba(0, 0, 0, 0) 0%,
    #181829 70%,
    #181829 80%,
    #181829 85%,
    #181829 100%
  );
`;

const Right = styled(Left)`
  right: 0px;
  left: auto;
  background: linear-gradient(
    -270deg,
    rgba(0, 0, 0, 0) 0%,
    #181829 70%,
    #181829 80%,
    #181829 85%,
    #181829 100%
  );
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
  padding: 20px;

  color: #fff;
  text-align: center;

  background-color: ${({ theme, selected }) =>
    selected ? theme.colors.normalGreen : theme.colors.darkGrey};
  border-radius: 10px;
`;
