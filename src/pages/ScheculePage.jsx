import BottomNav from "../components/BottomNav";
import Header from "../components/common/Header";
import DatePicker from "../components/DatePicker";
import { PAGE } from "../constants/Page";
import { ST } from "../styles/commonStyle";

const SchedulePage = () => {
  return (
    <>
      <Header />
      <ST.PageIntroWrapper>
        <ST.Title>경기 일정</ST.Title>
        <ST.Intro>모든 경기 일정을 확인해보세요</ST.Intro>
      </ST.PageIntroWrapper>
      <DatePicker />
      <BottomNav page={PAGE.SCHEDULE} />
    </>
  );
};
export default SchedulePage;
