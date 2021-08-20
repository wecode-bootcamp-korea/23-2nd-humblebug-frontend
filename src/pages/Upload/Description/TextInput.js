import React, { useState } from 'react';
import styled from 'styled-components';

const TextInput = ({ textHandler, placeholder }) => {
  const [activeInput, setActiveInput] = useState(false);

  const inputHandler = () => {
    setActiveInput(prev => !prev);
  };

  return (
    <Text
      onFocus={inputHandler}
      onBlur={inputHandler}
      placeholder={placeholder}
      name="description"
      onChange={e => textHandler(e.target.name, e.target.value)}
      borderOn={activeInput}
    />
  );
};

const Text = styled.textarea.attrs(props => ({
  type: 'text',
  placeholder: props.placeholder
    ? props.placeholder
    : '프로젝트 상세 설명을 입력해주세요',
}))`
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
