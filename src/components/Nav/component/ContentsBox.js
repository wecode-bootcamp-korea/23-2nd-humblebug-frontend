import React from 'react';
import styled from 'styled-components';

const ContentsBox = ({ children }) => {
  return <Box>{children}</Box>;
};

const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  p {
    padding: 0 20px;
  }
`;

export default ContentsBox;
