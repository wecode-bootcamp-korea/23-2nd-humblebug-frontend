const BASE_URL = 'http://10.58.0.158:8000';

export const API = {
  PROJECT: `${BASE_URL}/project`,
  SIGNIN: `${BASE_URL}/users/signin`,
  FILTER_GET: `${BASE_URL}`, // 메인, 필터페이지 데이터
  FILTER_CATEGORY_GET: `${BASE_URL}/?categoryId=`, // 필터페이지 카테고리별 데이터
};
const CLIENT_ID = 'd4e1f9d408876dd8623f2142a65475d7';
const REDIRECT_URI = 'http://localhost:3000/users/signin';
export const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`;
