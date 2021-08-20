import React from 'react';
import styled from 'styled-components';
import UploadInfo from './UploadInfo';

const Upload = () => {
  return (
    <UploadContainer>
      <BackgroundImg />
      <UploadInfo />
    </UploadContainer>
  );
};

const UploadContainer = styled.div`
  display: grid;
  grid-template-columns: 2fr 8fr;
  height: 100vh;
`;

const BackgroundImg = styled.div`
  background-color: black;
  height: 100vh;
  background: url(/images/project_upload.png) 0% 0% / cover no-repeat;
`;
export default Upload;
