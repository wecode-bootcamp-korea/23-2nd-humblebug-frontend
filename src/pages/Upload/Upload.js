import React from 'react';
import styled from 'styled-components';
import UploadInfo from './components/UploadInfo/UploadInfo';

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
  background-image: url(/images/project_upload.png);
  background-size: cover;
`;
export default Upload;
