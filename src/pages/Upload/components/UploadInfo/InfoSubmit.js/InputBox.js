import React from 'react';
import { Input } from '../styles/Input.style';
import { FlexContainer } from '../styles/Container.style';

const InputBox = () => {
  return (
    <FlexContainer marginTop="10px">
      <h3>프로젝트 이름</h3>
      <Input />
      <h3>목표 모금액</h3>
      <Input />
      <h3>종료 날짜</h3>
      <Input />
      <h3>이미지 업로드</h3>
      <Input />
    </FlexContainer>
  );
};

export default InputBox;
