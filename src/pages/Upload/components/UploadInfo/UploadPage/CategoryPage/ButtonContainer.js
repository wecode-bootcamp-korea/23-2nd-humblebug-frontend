import React, { useState } from 'react';
import styled from 'styled-components';
import Button from './Button';

const BtnInfo = [
  { id: 1, name: '커머스' },
  { id: 2, name: '예약' },
  { id: 3, name: '리뷰' },
  { id: 4, name: '커뮤니티' },
  { id: 5, name: '기타' },
];

const ButtonContainer = ({ pageHandler }) => {
  const [btnOn, setBtnOn] = useState('');

  const categoryBtnHandler = id => {
    setBtnOn(id);
    pageHandler();
  };
  return (
    <BtnContainer>
      {BtnInfo.map(category => {
        return (
          <Button
            categoryBtnHandler={categoryBtnHandler}
            isButtonActive={btnOn === category.id}
            id={category.id}
            key={category.id}
          >
            {category.name}
          </Button>
        );
      })}
    </BtnContainer>
  );
};

const BtnContainer = styled.div`
  margin: 5px 0;
`;

export default ButtonContainer;
