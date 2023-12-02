import { styled } from "styled-components";

const TeamBoxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;
  justify-content: center;
`;

const LogoWrapper = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 70px;
  height: 70px;

  background-color: ${({ theme }) => theme.colors.lightGrey};
  border-radius: 100%;
  box-shadow: 0;
`;

const TeamLogo = styled.img`
  width: 42px;
`;

const TeamName = styled.p`
  font-family: "Pretendard-Regular";
  font-size: ${({ theme }) => theme.fontSize.xs};
`;

const RadioInput = styled.input`
  display: none;

  &:checked + label {
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.mainGreen} inset;
    transition: box-shadow 0.3s;
  }
`;

export default function TeamBox({ id, logoSrc, teamName }) {
  return (
    <TeamBoxWrapper>
      <RadioInput type="radio" id={`team${id}`} name="team" />
      <LogoWrapper htmlFor={`team${id}`}>
        <TeamLogo src={logoSrc} alt={teamName} />
      </LogoWrapper>
      <TeamName>{teamName}</TeamName>
    </TeamBoxWrapper>
  );
}
("");
