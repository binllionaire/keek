import { styled } from "styled-components";

const TeamBoxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;
const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70px;
  height: 70px;
  border-radius: 100%;
  background-color: ${({ theme }) => theme.colors.lightGrey};
`;

const TeamLogo = styled.img`
  width: 42px;
`;

const TeamName = styled.p`
  font-family: "Pretendard-Regular";
  font-size: ${({ theme }) => theme.fontSize.xs};
`;

export default function TeamBox({ logoSrc, teamName }) {
  return (
    <TeamBoxWrapper>
      <LogoWrapper>
        <TeamLogo src={logoSrc} />
      </LogoWrapper>
      <TeamName>{teamName}</TeamName>
    </TeamBoxWrapper>
  );
}
("");
