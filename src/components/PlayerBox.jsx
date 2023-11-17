import { styled } from "styled-components";

const PlayerBox = ({ id, flagSrc, korName, engName, number, playerImgSrc }) => {
  return (
    <>
      <RadioInput type="radio" id={`player${id}`} name="player" />
      <PlayerBoxWrapper htmlFor={`player${id}`}>
        <Flag $flagSrc={flagSrc} />
        <KorName>{korName}</KorName>
        <EngName>{engName}</EngName>
        <Number>{number}</Number>
        <PlayerImg src={playerImgSrc} />
      </PlayerBoxWrapper>
    </>
  );
};

export default PlayerBox;

const PlayerBoxWrapper = styled.label`
  overflow: hidden;
  position: relative;
  display: flex;
  flex-direction: column;

  width: 98px;
  height: 150px;

  padding: 10px;

  border-radius: 12px;
  background-color: ${({ theme }) => theme.colors.lightGrey};
  box-shadow: 0;

  color: ${({ theme }) => theme.colors.white};
`;

const RadioInput = styled.input`
  display: none;

  &:checked + label {
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.mainGreen} inset;
    transition: box-shadow 0.3s;
  }
`;

const Flag = styled.div`
  overflow: hidden;

  width: 20px;
  height: 20px;

  margin-bottom: 10px;
  border-radius: 100%;

  background-image: ${({ $flagSrc }) => `url(${$flagSrc})`};
  background-size: cover;
  background-position: center;
`;

const PlayerImg = styled.img`
  position: absolute;
  bottom: 0;
  right: -30px;

  width: 100px;
`;

const KorName = styled.p`
  z-index: 1;
  margin-bottom: 4px;

  font-size: ${({ theme }) => theme.fontSize.s};
  font-family: "Pretendard-Bold";
  font-weight: 700;
`;

const EngName = styled.p`
  z-index: 1;

  margin-bottom: 50px;

  font-size: ${({ theme }) => theme.fontSize.xxs};
  font-family: "Pretendard-Bold";
  font-weight: 700;
`;

const Number = styled.p`
  z-index: 1;

  font-size: ${({ theme }) => theme.fontSize.xl};
  font-family: "Pretendard-Bold";
  font-weight: 700;
`;
