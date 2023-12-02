import BottomNav from "../components/BottomNav";
import Header from "../components/common/Header";
import { PAGE } from "../constants/Page";
import { ST } from "../styles/commonStyle";

const HomePage = () => {
  return (
    <>
      <Header />
      <ST.PageIntroWrapper>
        <ST.Title>토트넘 홋스퍼</ST.Title>
        <ST.Intro>현재 1위</ST.Intro>
      </ST.PageIntroWrapper>
      <BottomNav page={PAGE.HOME} />
    </>
  );
};

export default HomePage;
