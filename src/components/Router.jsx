import { BrowserRouter, Routes, Route } from "react-router-dom";
import StartPage from "../pages/StartPage";
import TeamSettingPage from "../pages/TeamSettingPage";
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/team" element={<TeamSettingPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
