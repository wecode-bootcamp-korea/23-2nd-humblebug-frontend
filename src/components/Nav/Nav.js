import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import ContentsBox from './component/ContentsBox';

export const Nav = () => {
  return (
    <Navbar>
      <ContentsBox>
        <i className="fas fa-bars"></i>
        <p>프로젝트 둘러보기</p>
        <Link to="/upload">프로젝트 올리기</Link>
      </ContentsBox>
      <div className="logo">tumblbug</div>
      <ContentsBox>
        <i class="fas fa-search"></i>
        <Link to="/login">로그인/회원가입</Link>
        <Link to="/update">
          <i class="fas fa-user-circle"></i>
        </Link>
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
