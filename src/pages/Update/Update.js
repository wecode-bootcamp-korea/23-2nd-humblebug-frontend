import React, { useState, useEffect } from 'react';
import { Input, FlexContainer, GridContainer } from '../../styles/GlobalStyle';
import ButtonContainer from '../Upload/UploadPage/ButtonContainer';
import TextInput from '../Upload/Description/TextInput';
import DayPickerComponent from '../Upload/InfoSubmit/DayPickerComponent';
import PhotoUploadBox from '../Upload/InfoSubmit/PhotoUploadBox';
import PageChangeBtn from '../Upload/Description/PageChangeBtn';
import { postFetchButton, deleteFetchButton } from '../Upload/fetchButton';
import { API } from '../../config';

const Update = () => {
  const [displayData, setDisplayData] = useState({});
  const [updateData, setUpdateData] = useState({});

  useEffect(
    () =>
      fetch(API.PROJECT, {
        method: 'GET',
        headers: { Authorization: localStorage.getItem('TOKEN') },
      })
        .then(res => res.json())
        .then(res => {
          setDisplayData(res.project[0]);
          setUpdateData(res.project[0]);
        }),
    []
  );

  const setUpdate = (name, value) => {
    setUpdateData({ ...updateData, [name]: value });
  };

  console.log('updateData:', updateData, 'displayData:', displayData);
  return (
    <GridContainer marginTop="100px" marginBottom="100px">
      <h2>프로젝트 카테고리 변경</h2>
      <ButtonContainer
        handleId={setUpdate}
        placeholder={displayData.category_id}
      />
      <h2>상세 설명</h2>
      <TextInput
        textHandler={setUpdate}
        placeholder={displayData.description}
      />
      <h2>프로젝트 이름</h2>
      <Input
        name="name"
        onChange={e => setUpdate(e.target.name, e.target.value)}
        placeholder={displayData.name}
      />
      <h2>목표 금액</h2>
      <Input
        name="aim_amount"
        onChange={e => setUpdate(e.target.name, e.target.value)}
        placeholder={displayData.aim_amount}
      />
      <h2>종료일</h2>
      <DayPickerComponent
        handleSetData={setUpdate}
        placeholder={displayData.end_date}
      />
      <h2>업로드 이미지</h2>
      <PhotoUploadBox
        handleSetData={setUpdate}
        placeholder={displayData.image}
      />
      <FlexContainer>
        <PageChangeBtn
          active={true}
          onClickButton={postFetchButton}
          data={updateData}
          id={displayData.id}
          backgroundColor="rgb(255 87 87)"
        >
          수정하기
        </PageChangeBtn>
        <PageChangeBtn
          active={true}
          onClickButton={deleteFetchButton}
          id={displayData.id}
          data={updateData}
          backgroundColor="black"
        >
          프로젝트 삭제
        </PageChangeBtn>
      </FlexContainer>
    </GridContainer>
  );
};

export default Update;
