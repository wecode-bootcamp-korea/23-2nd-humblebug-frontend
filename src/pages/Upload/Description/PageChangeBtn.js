import React from 'react';
import styled from 'styled-components';

const PageChangeBtn = ({
  children,
  active,
  onClickButton,
  data,
  backgroundColor,
  id,
  historyFunction,
}) => {
  return (
    <ChangeBtn
      active={active}
      onClick={() => onClickButton(data, historyFunction, id && id)}
      backgroundColor={backgroundColor}
    >
      {children}
    </ChangeBtn>
  );
};

const ChangeBtn = styled.button`
  display: inline;
  float: right;
  margin: 10px 0 0 auto;
  padding: 10px 20px;
  background-color: ${({ active, backgroundColor }) =>
    active ? backgroundColor : '#e5e5e5'};
  color: ${({ active }) => (active ? 'white' : '#f2f2f2')};
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

export default PageChangeBtn;
