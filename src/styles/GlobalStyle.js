import { createGlobalStyle } from 'styled-components';
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

export default GlobalStyle;
