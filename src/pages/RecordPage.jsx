import { useEffect } from "react";
import axios from "axios";
import { ST } from "../styles/commonStyle";
import styled from "styled-components";
import RecordBox from "../components/RecordBox";
import { useState } from "react";
import BoardHeader from "../components/BoardHeader";
import { PAGE } from "../constants/Page";
import BottomNav from "../components/BottomNav";
import Header from "../components/common/Header";
const RecordPage = () => {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await axios.get(import.meta.env.VITE_RECORD_API_END_POINT);
        setTeams(data.data.list);
      } catch (error) {
        console.error(error.message);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <Header />
      <ST.PageIntroWrapper>
        <ST.Title>전체 순위</ST.Title>
        <ST.Intro>모든 팀의 순위를 확인하세요</ST.Intro>
      </ST.PageIntroWrapper>
      <BoardWrapper>
        <BoardHeader />
        <BoardBody>
          {teams.map((team) => (
            <RecordBox
              key={team.rank.rank}
              rank={team.rank}
              logo={team.imageUrl}
              name={team.shortNameKo}
            />
          ))}
        </BoardBody>
      </BoardWrapper>
      <BottomNav page={PAGE.RECORD} />
    </>
  );
};

export default RecordPage;

const BoardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  margin-top: 30px;

  font-size: ${({ theme }) => theme.fontSize.s};
`;

const BoardBody = styled.div`
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  gap: 8px;

  max-height: 65vh;
  padding-bottom: 75px;

  &::-webkit-scrollbar {
    display: none;
  }

  @media screen and (max-height: 650px) {
    max-height: 60vh;
  }
`;
