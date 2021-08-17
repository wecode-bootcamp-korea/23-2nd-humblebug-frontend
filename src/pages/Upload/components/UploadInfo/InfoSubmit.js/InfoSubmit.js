import React from 'react';
import styled from 'styled-components';

const InfoSubmit = ({ children, infoPage }) => {
  return <Submit infoPage={infoPage}>{children}</Submit>;
};

const Submit = styled.div`
  display: flex;
  position: absolute;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: 1s ease all;
  padding-top: 30px;
  top: 70px;
  right: ${props => (props.infoPage ? '250px' : '0px')};
  opacity: ${props => (props.infoPage ? 1 : 0)};
  h2 {
    margin: 20px auto;
  }

  p {
    margin-bottom: 30px;
    color: rgba(130, 130, 130, 1);
  }
`;

export default InfoSubmit;
