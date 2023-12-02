import styled from "styled-components";
import Home from "../assets/icons/Home.svg?react";
import Schedule from "../assets/icons/Discovery.svg?react";
import Record from "../assets/icons/Chart.svg?react";
import My from "../assets/icons/Profile.svg?react";
import { PAGE } from "../constants/Page";

const BottomNav = ({ page }) => {
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
        <Home fill={homeColor}></Home>
      </Nav>
      <Nav>
        <Schedule fill={scheduleColor} />
      </Nav>
      <Nav>
        <Record fill={recordColor} />
      </Nav>
      <Nav>
        <My fill={myColor}></My>
      </Nav>
    </FooterWrapper>
  );
};
export default BottomNav;

const FooterWrapper = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;

  display: flex;

  width: 100vw;
  height: 75px;

  background-color: ${({ theme }) => theme.colors.normalGrey};
`;
const Nav = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 25%;
`;
