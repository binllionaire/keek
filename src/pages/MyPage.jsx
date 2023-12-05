import BottomNav from "../components/common/BottomNav";
import Header from "../components/common/Header";
import { PAGE } from "../constants/Page";
import { ST } from "../styles/commonStyle";

const MyPage = () => {
  return (
    <>
      <Header />
      <ST.PageIntroWrapper>
        <ST.Title>마이페이지</ST.Title>
        <ST.Intro>최애팀 최애선수를 선택하세요!</ST.Intro>
      </ST.PageIntroWrapper>
      <BottomNav page={PAGE.MY} />
    </>
  );
};

export default MyPage;
