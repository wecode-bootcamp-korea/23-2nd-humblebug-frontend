import styled from 'styled-components';

export const Input = styled.input`
  width: 400px;
  height: 30px;
  margin: 10px 0;
  border: 1px solid #e5e5e5;
  border-radius: 5px;

  &:focus {
    outline: none;
    border: 1px solid black;
  }
`;
