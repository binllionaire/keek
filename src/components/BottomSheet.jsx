import { styled } from "styled-components";
import loginIcon from "../assets/icons/User.svg";
import passwordIcon from "../assets/icons/Password.svg";
import hideIcon from "../assets/icons/Hide.svg";
import {
  GreenButton,
  Intro,
  Sign,
  SignBox,
  SignUpBox,
} from "../styles/GlobalStyle";

const Sheet = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  width: 100%;
  height: ${({ option }) => (option === 0 ? "50vh" : "60vh")};

  background-color: ${({ theme }) => theme.colors.normalGrey};
  border-radius: 40px 40px 0 0;
  padding: 10px 20px;
  box-shadow: 0px -2px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out, height 0.3s;
  transform: translateY(
    ${({ $isopen }) => ($isopen === "true" ? "0" : "100%")}
  );
  z-index: 2;
  @media screen and (max-height: 700px) {
    height: ${({ option }) => (option === 0 ? "65vh" : "75vh")};
  }
`;
const SheetHeader = styled.div`
  width: 68px;
  height: 8px;

  background-color: ${({ theme }) => theme.colors.lightGrey};
`;
const SheetTitle = styled.h2`
  margin: 16px 0;
  font-family: "Pretendard-SemiBold";
  font-size: ${({ theme }) => theme.fontSize.xl};
`;

const InputWrapper = styled.div`
  width: 100%;
  height: 60px;

  display: flex;
  gap: 10px;
  padding: 0 20px;
  border-radius: 16px;

  background-color: ${({ theme }) => theme.colors.darkGrey};
`;
const InputIcon = styled.img``;
const Input = styled.input`
  flex-grow: 1;

  border-radius: 16px;

  background-color: ${({ theme }) => theme.colors.darkGrey};
  font-family: "Pretendard-SemiBold";
  font-size: ${({ theme }) => theme.fontSize.l};
  color: ${({ theme }) => theme.colors.normalText};

  outline: none;
`;
export default function BottomSheet({
  isBottomSheetOpen,
  openBottomSheet,
  option,
}) {
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
      <SignBox>
        <GreenButton>{option === 0 ? "로그인" : "회원가입"}</GreenButton>
        <SignUpBox>
          <Intro>
            {option === 0 ? "계정이 없으신가요?" : "계정이 있으신가요?"}
          </Intro>
          <Sign
            onClick={() => {
              option === 0 ? openBottomSheet(1) : openBottomSheet(0);
            }}
          >
            {option === 0 ? "회원가입" : "로그인"}
          </Sign>
        </SignUpBox>
      </SignBox>
    </Sheet>
  );
}
