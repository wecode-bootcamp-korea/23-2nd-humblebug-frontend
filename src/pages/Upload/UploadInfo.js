import React, { useState } from 'react';
import { useHistory } from 'react-router';
import styled from 'styled-components';
import Description from './Description/Description';
import PageChangeBtn from './Description/PageChangeBtn';
import InfoSubmit from './InfoSubmit/InfoSubmit';
import InputBox from './InfoSubmit/InputBox';
import ButtonContainer from './UploadPage/ButtonContainer';
import SubmitPage from './UploadPage/SubmitPage';
import { postFetchButton } from './fetchButton';

const UploadInfo = () => {
  const [descPage, setDescPage] = useState(false);
  const [infoPage, setInfoPage] = useState(false);
  const [uploadData, setUploadData] = useState({
    name: '',
    category_id: '',
    aim_amount: '',
    description: '',
    end_date: '',
    image: '',
  });

  const history = useHistory();

  const historyFunction = location => {
    history.push(location);
  };

  const handleDescPageOpen = (target, id) => {
    setDescPage(true);
    setUploadData({ ...uploadData, [target]: id });
  };

  const toggleInfoPage = () => {
    setInfoPage(!infoPage);
  };

  const handleSetData = (key, value) => {
    setUploadData({ ...uploadData, [key]: value });
  };

  console.log(uploadData);
  return (
    <InfoTable>
      <SubmitPage firstPage={true} infoPage={infoPage}>
        <h2>어떤 프로젝트를 계획 중이신가요?</h2>
        <p>나중에 변경 가능하니 너무 걱정마세요.</p>
        <ButtonContainer handleId={handleDescPageOpen} />
      </SubmitPage>
      <SubmitPage descPage={descPage} infoPage={infoPage}>
        <h2>프로젝트를 간단하게 소개해주세요.</h2>
        <p>나중에 변경 가능하니 편하게 적어주세요.</p>
        <Description
          toggleInfoPage={toggleInfoPage}
          textHandler={handleSetData}
          textAmount={uploadData.description}
        />
      </SubmitPage>
      <InfoSubmit infoPage={infoPage}>
        <h2>마지막으로, 이런 준비가 필요해요.</h2>
        <p>프로젝트를 진행하시려면 아래 내용을 작성해주세요.</p>
        <InputBox handleSetData={handleSetData} />
        <PageChangeBtn
          onClickButton={postFetchButton}
          data={uploadData}
          active={
            uploadData.name &&
            uploadData.aim_amount &&
            uploadData.end_date &&
            uploadData.image
          }
          historyFunction={historyFunction}
          backgroundColor="rgb(255 87 87)"
        >
          시작하기
        </PageChangeBtn>
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
