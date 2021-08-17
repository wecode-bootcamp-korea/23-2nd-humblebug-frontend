import React from 'react';
import styled from 'styled-components';

const PageChangeBtn = ({ children, active, pageHandler }) => {
  return (
    <ChangeBtn active={active} onClick={pageHandler}>
      {children}
    </ChangeBtn>
  );
};

const ChangeBtn = styled.div`
  display: inline;
  float: right;
  margin: 10px 0 0 auto;
  padding: 10px 20px;
  background-color: ${({ active }) => (active ? 'rgb(255 87 87)' : '#e5e5e5')};
  color: ${({ active }) => (active ? 'white' : '#f2f2f2')};
  border: none;
  border-radius: 5px;
`;

export default PageChangeBtn;
