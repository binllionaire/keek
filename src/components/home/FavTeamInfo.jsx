import styled from "styled-components";

const FavTeamInfo = () => {
  return (
    <FavTeamWrapper>
      <PageIntroWrapper>
        <Title>토트넘 홋스퍼</Title>
        <Intro>현재 5위</Intro>
      </PageIntroWrapper>
      <TeamLogo src="/club/club_tottenham.png" />
    </FavTeamWrapper>
  );
};

export default FavTeamInfo;

const FavTeamWrapper = styled.div`
  position: relative;
  display: flex;
  height: 200px;
`;
const TeamLogo = styled.img`
  position: absolute;
  top: 50px;
  right: 0px;

  width: 100px;

  filter: brightness(0) invert(1);
`;

const PageIntroWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 40px;
`;

const Title = styled.h2`
  font-family: "Pretendard";
  font-size: ${({ theme }) => theme.fontSize.xl};
  color: ${({ theme }) => theme.colors.white};
`;

const Intro = styled.p`
  font-family: "Pretendard-Regular";
  font-size: ${({ theme }) => theme.fontSize.m};
  line-height: 24px;
  color: ${({ theme }) => theme.colors.lightText};
  text-align: start;
`;
