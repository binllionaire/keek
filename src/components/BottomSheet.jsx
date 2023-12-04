import { styled } from "styled-components";
import loginIcon from "../assets/icons/User.svg";
import passwordIcon from "../assets/icons/Password.svg";
import hideIcon from "../assets/icons/Hide.svg";
import { ST } from "../styles/commonStyle";
import { useNavigate } from "react-router-dom";

export default function BottomSheet({ isBottomSheetOpen, openBottomSheet, option }) {
  const navigate = useNavigate();

  const navToSettingPage = () => {
    navigate("/team");
  };

  return (
    <Sheet $isopen={isBottomSheetOpen} option={option}>
      <SheetHeader />
      <SheetTitle>{option === 0 ? "로그인" : "회원가입"}</SheetTitle>
      <InputWrapper>
        <InputIcon src={loginIcon}></InputIcon>
        <Input placeholder="아이디" />
      </InputWrapper>
      <InputWrapper>
        <InputIcon src={passwordIcon}></InputIcon>
        <Input type="password" placeholder="비밀번호" />
        <InputIcon src={hideIcon}></InputIcon>
      </InputWrapper>
      {option === 0 ? (
        <></>
      ) : (
        <InputWrapper>
          <InputIcon src={passwordIcon}></InputIcon>
          <Input type="password" placeholder="비밀번호 확인" />
          <InputIcon src={hideIcon}></InputIcon>
        </InputWrapper>
      )}
      <ST.SignBox>
        {option === 0 ? (
          <ST.GreenButton onClick={navToSettingPage}>로그인</ST.GreenButton>
        ) : (
          <ST.GreenButton>회원가입</ST.GreenButton>
        )}
        <ST.SignUpBox>
          <ST.Intro>{option === 0 ? "계정이 없으신가요?" : "계정이 있으신가요?"}</ST.Intro>
          <ST.Sign
            onClick={() => {
              option === 0 ? openBottomSheet(1) : openBottomSheet(0);
            }}
          >
            {option === 0 ? "회원가입" : "로그인"}
          </ST.Sign>
        </ST.SignUpBox>
      </ST.SignBox>
    </Sheet>
  );
}

const Sheet = styled.div`
  position: fixed;
  z-index: 2;
  bottom: 0;
  left: 0;
  transform: translateY(${({ $isopen }) => ($isopen === "true" ? "0" : "100%")});

  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;

  width: 100vw;
  height: ${({ option }) => (option === 0 ? "50vh" : "60vh")};
  margin: 0 auto;
  padding: 10px 20px;

  background-color: ${({ theme }) => theme.colors.normalGrey};
  border-radius: 40px 40px 0 0;
  box-shadow: 0px -2px 10px rgba(0, 0, 0, 0.1);

  transition:
    transform 0.3s ease-in-out,
    height 0.3s;

  @media screen and (max-height: 700px) {
    height: ${({ option }) => (option === 0 ? "65vh" : "75vh")};
  }
`;

const SheetHeader = styled.div`
  width: 68px;
  height: 8px;
  background-color: ${({ theme }) => theme.colors.lightGrey};
  border-radius: 10px;
`;

const SheetTitle = styled.h2`
  margin: 16px 0;
  font-family: "Pretendard-SemiBold";
  font-size: ${({ theme }) => theme.fontSize.xl};
`;

const InputWrapper = styled.div`
  display: flex;
  gap: 10px;

  width: 100%;
  height: 60px;
  margin: 0 auto;
  padding: 0 20px;

  background-color: ${({ theme }) => theme.colors.darkGrey};
  border-radius: 16px;
`;

const InputIcon = styled.img`
  width: 24px;
`;

const Input = styled.input`
  flex-grow: 1;

  width: 100%;

  font-family: "Pretendard-SemiBold";
  font-size: ${({ theme }) => theme.fontSize.l};
  color: ${({ theme }) => theme.colors.white};

  background-color: ${({ theme }) => theme.colors.darkGrey};
  border-radius: 16px;
  outline: none;
`;
