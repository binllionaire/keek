import BottomNav from "../components/common/BottomNav";
import Header from "../components/common/Header";
import FavPlayer from "../components/home/FavPlayer";
import FavTeamInfo from "../components/home/FavTeamInfo";
import FavTeamSchedule from "../components/home/FavTeamSchedule";
import { PAGE } from "../constants/Page";

const HomePage = () => {
  return (
    <>
      <Header />
      <FavTeamInfo />
      <FavPlayer />
      <FavTeamSchedule />
      <BottomNav page={PAGE.HOME} />
    </>
  );
};

export default HomePage;
