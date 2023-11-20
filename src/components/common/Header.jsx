import { ST } from "../../styles/commonStyle";
import searchIcon from "../../assets/icons/Search.svg";
const Header = () => {
  return (
    <ST.Header>
      <ST.Logo>KEEK</ST.Logo>
      <img src={searchIcon} />
    </ST.Header>
  );
};
export default Header;
