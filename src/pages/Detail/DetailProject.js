import React from 'react';
import styled from 'styled-components';

const DetailProject = () => {
  return (
    <ProjectContent>
      'EPOQUE' 텀블벅 1차 이벤트
      <br /> 안녕하세요. 언아르크입니다.
      <br />
      에포크 프로젝트가 오픈 첫 주에
      <br /> 펀딩 금액 100%를 달성하였습니다.
      <br />
      감사한 마음을 담아, 성원에 보답하고자 <br />
      아래와 같이 이벤트를 진행하고자 합니다. <br />
      많은 참여와 관심 부탁드립니다.
    </ProjectContent>
  );
};
export default DetailProject;

const ProjectContent = styled.div`
  height: auto;
  text-align: center;
`;
