import { BrowserRouter, Routes, Route } from "react-router-dom";
import PlayerSettingPage from "../pages/PlayerSettingPage";
import RecordPage from "../pages/RecordPage";
import StartPage from "../pages/StartPage";
import TeamSettingPage from "../pages/TeamSettingPage";
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/team" element={<TeamSettingPage />}></Route>
        <Route path="/player" element={<PlayerSettingPage />}></Route>
        <Route path="/record" element={<RecordPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
