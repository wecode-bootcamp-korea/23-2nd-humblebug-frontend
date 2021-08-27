import React from 'react';
import { KAKAO_AUTH_URL } from '../../config';

const Spinner = props => {
  let code = new URL(window.location.href).searchParams.get('code');
  fetch('http://kauth.kakao.com/oauth/token')
    .then(res => res.json())
    .then(res => console.log('Success:', JSON.stringify(res)));
  return <div>기다리세요</div>;
};
export default Spinner;
