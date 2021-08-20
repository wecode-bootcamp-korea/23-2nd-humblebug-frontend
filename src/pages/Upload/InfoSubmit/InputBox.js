import React from 'react';
import { FlexContainer, Input } from '../../../styles/GlobalStyle';
import DayPickerComponent from './DayPickerComponent';
import PhotoUploadBox from './PhotoUploadBox';

const InputBox = ({ handleSetData }) => {
  return (
    <FlexContainer marginTop="10px">
      <h3>프로젝트 이름</h3>
      <Input
        type="text"
        onChange={e => handleSetData('name', e.target.value)}
      />
      <h3>목표 모금액</h3>
      <Input
        type="text"
        onChange={e => handleSetData('aim_amount', e.target.value)}
      />
      <h3>종료 날짜</h3>
      <DayPickerComponent handleSetData={handleSetData} />
      <h3>이미지 업로드</h3>
      <PhotoUploadBox handleSetData={handleSetData} />
    </FlexContainer>
  );
};

export default InputBox;
