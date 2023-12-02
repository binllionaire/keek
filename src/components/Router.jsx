import { BrowserRouter, Routes, Route } from "react-router-dom";
import PlayerSettingPage from "../pages/PlayerSettingPage";
import RecordPage from "../pages/RecordPage";
import StartPage from "../pages/StartPage";
import TeamSettingPage from "../pages/TeamSettingPage";
import SchedulePage from "../pages/ScheculePage";
import HomePage from "../pages/HomePage";
import MyPage from "../pages/MyPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/team" element={<TeamSettingPage />}></Route>
        <Route path="/player" element={<PlayerSettingPage />}></Route>
        <Route path="/home" element={<HomePage />}></Route>
        <Route path="/record" element={<RecordPage />}></Route>
        <Route path="/schedule" element={<SchedulePage />}></Route>
        <Route path="/my" element={<MyPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
