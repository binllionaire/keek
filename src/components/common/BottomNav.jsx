import styled from "styled-components";
import Home from "../../assets/icons/Home.svg?react";
import Schedule from "../../assets/icons/Discovery.svg?react";
import Record from "../../assets/icons/Chart.svg?react";
import My from "../../assets/icons/Profile.svg?react";
import { PAGE } from "../../constants/Page";
import { useNavigate } from "react-router-dom";

const BottomNav = ({ page }) => {
  const navigate = useNavigate();
  let homeColor = "#65656B";
  let scheduleColor = "#65656B";
  let recordColor = "#65656B";
  let myColor = "#65656B";

  switch (page) {
    case PAGE.HOME:
      homeColor = "#00FF29";
      break;
    case PAGE.SCHEDULE:
      scheduleColor = "#00FF29";
      break;
    case PAGE.RECORD:
      recordColor = "#00FF29";
      break;
    case PAGE.MY:
      myColor = "#00FF29";
      break;
    default:
      break;
  }
  return (
    <FooterWrapper>
      <Nav>
        <Home fill={homeColor} onClick={() => navigate("/home")}></Home>
      </Nav>
      <Nav>
        <Schedule fill={scheduleColor} onClick={() => navigate("/schedule")} />
      </Nav>
      <Nav>
        <Record fill={recordColor} onClick={() => navigate("/record")} />
      </Nav>
      <Nav>
        <My fill={myColor} onClick={() => navigate("/my")}></My>
      </Nav>
    </FooterWrapper>
  );
};
export default BottomNav;

const FooterWrapper = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;

  display: flex;

  max-width: 768px;
  height: 68px;
  margin: 0 auto;

  background-color: ${({ theme }) => theme.colors.normalGrey};
`;
const Nav = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 25%;
`;
