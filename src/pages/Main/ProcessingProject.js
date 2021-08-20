import React from 'react';
import styled from 'styled-components';

function ProcessingProject({ projectInfo }) {
  // console.log(projectInfo.image);
  return (
    <ProjectInfo>
      <ProjectImg src={projectInfo.image}></ProjectImg>
      <TextWrapper>
        <ProjectCategory>{projectInfo.category_name}</ProjectCategory>
        <ProjectCreater>{projectInfo.user_name}</ProjectCreater>
        <ProjectDescription>
          <p>{projectInfo.description}</p>
          <p>[{projectInfo.name}]</p>
        </ProjectDescription>
      </TextWrapper>
    </ProjectInfo>
  );
}

const ProjectInfo = styled.div`
  width: 300px;
  height: 320px;
  margin-top: 20px;
  background-color: white;
  border-radius: 7px;
`;

const TextWrapper = styled.div`
  padding: 10px;
`;

const ProjectImg = styled.img`
  width: 300px;
  height: 230px;
  background-origin: orange;
  border-radius: 7px;
`;

const ProjectCategory = styled.span`
  margin-right: 10px;
  padding-right: 10px;
  color: #9e9e9e;
  font-size: 13px;
  border-right: 1px solid #9e9e9e;
`;

const ProjectCreater = styled.span`
  color: #9e9e9e;
  font-size: 13px;
`;

const ProjectDescription = styled.div`
  font-size: 16px;
  margin-top: 10px;
  line-height: 1.4;
`;

export default ProcessingProject;
