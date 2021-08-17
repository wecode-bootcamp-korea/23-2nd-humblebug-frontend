import React from 'react';
import styled from 'styled-components';

const SubmitPage = ({ children, descPage, infoPage, firstPage }) => {
  return (
    <Submit descPage={descPage} infoPage={infoPage} firstPage={firstPage}>
      {children}
    </Submit>
  );
};
const Submit = styled.div`
  display: flex;
  position: relative;
  right: ${props => (props.infoPage ? '450px' : 0)};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: 1s ease all;
  padding-top: 30px;
  opacity: ${props =>
    (props.descPage === undefined && !props.infoPage) ||
    (props.descPage && !props.infoPage)
      ? 1
      : 0};
  cursor: ${props => props.infoPage && 'default'};

  h2 {
    margin: 20px auto;
  }

  p {
    margin-bottom: 30px;
    color: rgba(130, 130, 130, 1);
  }
`;

export default SubmitPage;
