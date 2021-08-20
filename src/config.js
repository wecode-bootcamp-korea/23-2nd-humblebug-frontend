const BASE_URL = 'http://10.58.3.43:8000';

export const API = {
  DETAIL_GET: `${BASE_URL}/project/4`, //상세페이지 데이터
  DETAIL_OPTION: `${BASE_URL}/project/4/option`, //상세페이지 옵션 데이터
  DETAIL_COMMENT_GET: `${BASE_URL}/project/4/comments`, //상세페이지 댓글 GET
  DETAIL_COMMENT_POST: `${BASE_URL}/project/4/comment`, //상세페이지 댓글 POST
  SIGNIN: `${BASE_URL}/users/signin`,
  PROJECT: `${BASE_URL}/project`,
};
// const BASE_URL = 'http://3.144.112.76:8000';
// const BASE_URL = 'http://10.58.3.43:8000';
const CLIENT_ID = 'd4e1f9d408876dd8623f2142a65475d7';
const REDIRECT_URI = 'http://localhost:3000/users/signin';
export const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`;
