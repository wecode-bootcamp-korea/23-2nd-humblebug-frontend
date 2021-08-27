import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import ContentsBox from './component/ContentsBox';

export const Nav = () => {
  return (
    <Navbar>
      <ContentsBox>
<<<<<<< HEAD
        <ProjectView>
          <i className="fas fa-bars"></i>
          <Link to="/filter">프로젝트 둘러보기</Link>
        </ProjectView>
=======
        <i className="fas fa-bars"></i>
        <Link to="/filter">프로젝트 둘러보기</Link>
>>>>>>> c1b6cb0 (final merge)
        <Link to="/upload">프로젝트 올리기</Link>
      </ContentsBox>
      <Link to="/" className="logo">
        Humblebug
      </Link>
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

const LoginWarpper = styled.div`
  display: flex;
  width: 200px;
  justify-content: space-between;
`;

const ProjectView = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-right: 20px;
  i {
    margin-right: 10px;
  }
`;

export default Nav;
