import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import ContentsBox from './component/ContentsBox';

export const Nav = () => {
  return (
    <Navbar>
      <ContentsBox>
        <i class="fas fa-bars"></i>
        <p>프로젝트 둘러보기</p>
        <Link to="/upload">프로젝트 올리기</Link>
      </ContentsBox>
      <div className="logo">tumblbug</div>
      <ContentsBox>
        <i class="fas fa-search"></i>
        <p>로그인/회원가입</p>
        <i class="fas fa-user-circle"></i>
      </ContentsBox>
    </Navbar>
  );
};

const Navbar = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 70px;
  width: 1300px;
  margin: 0 auto;
  .logo {
    font-weight: 700;
    padding-right: 50px;
  }
`;

export default Nav;
