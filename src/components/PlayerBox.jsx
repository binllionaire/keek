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
  position: relative;

  overflow: hidden;
  display: flex;
  flex-direction: column;
  flex-grow: 0;
  flex-shrink: 0;

  width: 102px;
  height: 150px;
  padding: 10px;

  color: ${({ theme }) => theme.colors.white};

  background-color: ${({ theme }) => theme.colors.lightGrey};
  border-radius: 12px;
  box-shadow: 0;
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

  background-image: ${({ $flagSrc }) => `url(${$flagSrc})`};
  background-position: center;
  background-size: cover;
  border-radius: 100%;
`;

const PlayerImg = styled.img`
  position: absolute;
  right: -30px;
  bottom: 0;
  width: 100px;
`;

const KorName = styled.p`
  z-index: 1;

  margin-bottom: 4px;

  font-family: "Pretendard-Bold";
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: 700;
`;

const EngName = styled.p`
  z-index: 1;

  margin-bottom: 50px;

  font-family: "Pretendard-Bold";
  font-size: ${({ theme }) => theme.fontSize.xxs};
  font-weight: 700;
`;

const Number = styled.p`
  z-index: 1;
  font-family: "Pretendard-Bold";
  font-size: ${({ theme }) => theme.fontSize.xl};
  font-weight: 700;
`;
