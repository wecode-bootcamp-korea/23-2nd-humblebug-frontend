import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
${reset}

  *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html, body{
    font-family: 'Noto Sans KR', sans-serif;
    height: 100%;
  }

	a{
    text-decoration: none;
    color: inherit;
  }

  
	 
	
`;

export const FlexContainer = styled.div`
  display: flex;
  flex-direction: ${({ direction }) => (direction ? direction : 'column')};
  align-items: center;
  justify-content: center;
  margin-top: ${({ marginTop }) => marginTop};
  margin-bottom: ${({ marginBottom }) => marginBottom};
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(1fr);
  justify-content: center;
  grid-gap: 30px;
  margin-top: ${({ marginTop }) => marginTop};
  margin-bottom: ${({ marginBottom }) => marginBottom};
`;

export const Input = styled.input.attrs({
  //멘토님께 질문 type: ${({type}) => type},
})`
  width: 400px;
  height: 30px;
  margin: 10px 0 30px 0;
  border: 1px solid #e5e5e5;
  color: #808081;
  border-radius: 5px;
  text-align: center;

  &:focus {
    outline: none;
    border: 1px solid black;
  }
`;

export const PhotoInput = styled.input.attrs({
  type: 'file',
})``;

export default GlobalStyle;
