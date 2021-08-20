import React from 'react';
import styled from 'styled-components';

const ContentsBox = ({ children }) => {
  return <Box>{children}</Box>;
};

const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  a {
    padding: 0 10px 0 20px;
  }
`;

export default ContentsBox;
