import React, { useState } from 'react';
import styled from 'styled-components';

const TextInput = ({ textHandler }) => {
  const [activeInput, setActiveInput] = useState(false);

  const inputHandler = () => {
    setActiveInput(prev => !prev);
  };

  return (
    <Text
      onFocus={inputHandler}
      onBlur={inputHandler}
      onChange={e => textHandler(e.target.value)}
      borderOn={activeInput}
    />
  );
};

const Text = styled.textarea.attrs({
  type: 'text',
  placeholder: '프로젝트 요약을 입력해주세요',
})`
  width: 400px;
  height: 100px;
  border: ${({ borderOn }) =>
    borderOn ? '1px solid black' : '1px solid #e5e5e5'};
  resize: none;
  border-radius: 5px;
  padding: 10px 10px;

  &::placeholder {
    color: #ababab;
  }

  &:focus {
    outline: none;
  }
`;

export default TextInput;
