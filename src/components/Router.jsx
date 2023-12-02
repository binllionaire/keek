import { BrowserRouter, Routes, Route } from "react-router-dom";
import PlayerSettingPage from "../pages/PlayerSettingPage";
import RecordPage from "../pages/RecordPage";
import StartPage from "../pages/StartPage";
import TeamSettingPage from "../pages/TeamSettingPage";
import SchedulePage from "../pages/ScheculePage";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/team" element={<TeamSettingPage />}></Route>
        <Route path="/player" element={<PlayerSettingPage />}></Route>
        <Route path="/record" element={<RecordPage />}></Route>
        <Route path="/schedule" element={<SchedulePage />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
