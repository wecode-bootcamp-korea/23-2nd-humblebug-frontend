import React, { useState } from 'react';
import styled from 'styled-components';
import PageChangeBtn from './PageChangeBtn';
import TextInput from './TextInput';

const Description = ({ toggleInfoPage }) => {
  const [textAmount, setTextAmount] = useState('');

  const textHandler = value => {
    setTextAmount(value);
  };

  return (
    <form>
      <TextInput textHandler={textHandler} />
      <ConditionMsg>최소 10자 이상 입력해주세요.</ConditionMsg>
      <PageChangeBtn
        active={textAmount.length > 9}
        pageHandler={toggleInfoPage}
      >
        다음
      </PageChangeBtn>
    </form>
  );
};

const ConditionMsg = styled.p`
  margin-top: 13px;
  margin-bottom: 5px;
`;

export default Description;
