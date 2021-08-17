import React, { useState } from 'react';
import styled from 'styled-components';
import Description from './Description/Description';
import PageChangeBtn from './Description/PageChangeBtn';
import InfoSubmit from './InfoSubmit.js/InfoSubmit';
import InputBox from './InfoSubmit.js/InputBox';
import ButtonContainer from './UploadPage/CategoryPage/ButtonContainer';
import SubmitPage from './UploadPage/CategoryPage/SubmitPage';

const UploadInfo = () => {
  const [descPage, setDescPage] = useState(false);
  const [infoPage, setInfoPage] = useState(false);

  const handleDescPageOpen = () => {
    setDescPage(true);
  };

  const toggleInfoPage = () => {
    setInfoPage(!infoPage);
  };

  return (
    <InfoTable>
      <SubmitPage firstPage={true} infoPage={infoPage}>
        <h2>어떤 프로젝트를 계획 중이신가요?</h2>
        <p>나중에 변경 가능하니 너무 걱정마세요.</p>
        <ButtonContainer pageHandler={handleDescPageOpen} />
      </SubmitPage>
      <SubmitPage descPage={descPage} infoPage={infoPage}>
        <h2>프로젝트를 간단하게 소개해주세요.</h2>
        <p>나중에 변경 가능하니 편하게 적어주세요.</p>
        <Description toggleInfoPage={toggleInfoPage} />
      </SubmitPage>
      <InfoSubmit infoPage={infoPage}>
        <h2>마지막으로, 이런 준비가 필요해요.</h2>
        <p>프로젝트를 진행하시려면 아래 내용을 작성해주세요.</p>
        <InputBox />
        <PageChangeBtn>시작하기</PageChangeBtn>
      </InfoSubmit>
    </InfoTable>
  );
};

const InfoTable = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export default UploadInfo;
