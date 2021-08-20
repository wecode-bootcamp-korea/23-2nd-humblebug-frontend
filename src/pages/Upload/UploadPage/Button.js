import React from 'react';
import styled from 'styled-components';

const Button = ({ children, categoryBtnHandler, isButtonActive, id }) => {
  return (
    <CategoryBtn
      name="category_id"
      onClick={e => {
        categoryBtnHandler(e.target.name, id);
      }}
      active={isButtonActive}
    >
      {children}
    </CategoryBtn>
  );
};

const CategoryBtn = styled.button`
  margin: 0 5px;
  padding: 10px 24px;
  background-color: ${({ active }) => (active ? 'rgb(248 100 83)' : 'white')};
  color: ${({ active }) =>
    active ? 'rgb(255 231 228);' : 'rgba(92, 92, 92, 1)'};
  border: 1px solid rgb(240, 240, 240);
  border-radius: 20px;
  cursor: pointer;
`;

export default Button;
