import React from 'react';
// import { KAKAO_AUTH_URL } from '../../config';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { API } from '../../config';

export const Login = () => {
  const kakaoLogin = () => {
    window.Kakao.init(process.env.REACT_APP_KAKAO_KEY);
    console.log(window.Kakao.isInitialized());

    window.Kakao.Auth.login({
      success: function (response) {
        console.log(response);
        fetch(API.SIGNIN, {
          method: 'GET',
          headers: { Authorization: response.access_token },
        })
          .then(response => response.json())
          .then(response => {
            if (response.message === 'SUCCESS') {
              history.push('/');
              alert('로그인 성공!');
              localStorage.setItem('token', response.access_token);
            } else {
              history.push('/login');
            }
          });
      },
      fail: function (error) {
        console.log(error);
      },
    });
  };

  const history = useHistory();

  return (
    <div>
      <Container>
        <LoginBoxWrapper>
          <LoginBox>
            <LoginText>로그인</LoginText>
            <LoginKakaotalk onClick={kakaoLogin}>
              <KakaoImage src="/images/talktalk.png" />
              카카오톡 아이디로 로그인
            </LoginKakaotalk>
            <Devider>또는</Devider>
            <ForgetPw>혹시 비밀번호를 잊으셨나요?</ForgetPw>
          </LoginBox>
          <Company>© 2021 Humblebug Inc.</Company>
        </LoginBoxWrapper>
      </Container>
    </div>
  );
};

const Container = styled.section`
  height: 100vh;
  background-color: white;
`;

const LoginBoxWrapper = styled.section`
  height: 85vh;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const LoginBox = styled.section`
  width: 400px;
  height: 400px;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid #e8e8e8;
`;

const LoginText = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
`;

const LoginKakaotalk = styled.button`
  width: 300px;
  height: 55px;
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  border: 1px solid #e8e8e8;
  border-radius: 8px;
  list-style: none;
  text-decoration: none;
  color: #3d3d3d;

  &:hover {
    background-color: #f3f3f3;
    cursor: pointer;
  }
`;

const KakaoImage = styled.img`
  width: 24px;
  margin-right: 10px;
`;

const Devider = styled.div`
  display: flex;
  align-items: center;
  color: rgba(0, 0, 0, 0.35);
  font-size: 12px;
  margin: 8px 0px;

  &::before,
  &::after {
    content: '';
    flex-grow: 1;
    background: #e8e8e8;
    width: 125px;
    height: 1px;
    margin: 0px 16px;
  }
`;

const ForgetPw = styled.div`
  margin-top: 20px;
  color: #2da5ff;
  font-size: 14px;
  text-decoration: underline;
  cursor: pointer;
`;

const Company = styled.div`
  margin-top: 10px;
  font-size: 14px;
  color: rgba(0, 0, 0, 0.35);
`;

export default Login;
