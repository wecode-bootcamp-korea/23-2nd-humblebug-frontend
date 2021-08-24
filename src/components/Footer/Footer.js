import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  return (
    <footer>
      {/* 푸터 윗부분 */}
      <FooterUpper>
        <SetWidth>
          <ContentsWrapper>
            <Mass>
              <FirstOne>텀블벅</FirstOne>
              <ContentEach>공지사항</ContentEach>
              <ContentEach>채용</ContentEach>
              <ContentEach>제휴∙협력</ContentEach>
            </Mass>
            <Mass>
              <FirstOne>이용안내</FirstOne>
              <ContentEach>헬프 센터</ContentEach>
              <ContentEach>창작자 가이드</ContentEach>
              <ContentEach>프로젝트 심사 기준</ContentEach>
              <ContentEach>수수료 정책</ContentEach>
            </Mass>
            <Mass>
              <FirstOne>정책</FirstOne>
              <ContentEach>이용약관</ContentEach>
              <ContentEach>개인정보 처리방침</ContentEach>
            </Mass>
            <Mass>
              <FirstOne>App</FirstOne>
              <ContentEach>
                <AndroidBtn>안드로이드</AndroidBtn>
              </ContentEach>
              <li>
                <IosBtn>iOS</IosBtn>
              </li>
            </Mass>
          </ContentsWrapper>
          <MarginLeft>
            <FirstOne>고객지원</FirstOne>
            <ContentEach>평일 10:00 ~ 17:00 (12:00 ~ 14:00 제외)</ContentEach>
            <Inquire>험블벅에 문의</Inquire>
          </MarginLeft>
        </SetWidth>
      </FooterUpper>
      {/* 푸터 아랫부분 */}
      <FooterBottom>
        <SetWidth>
          <div>
            <BottomContents>
              <BlackColor>회사명</BlackColor> 험블벅(주)
              <BlackColor> 주소</BlackColor> 서울시 강남구 삼성동 테헤란로427,
              위워크타워 10층
              <BlackColor> 대표</BlackColor> 험블벅
              <BlackColor> 사업자등록번호</BlackColor> 2021-08-17
              <br />
              <BlackColor> 통신판매업 신고번호</BlackColor> 2021-08-17
              <BlackColor> 대표번호</BlackColor> 2021-08-17
              <br />© 2021 Humblbug Inc.
            </BottomContents>
          </div>
          <IconsWrapper>
            <Images alt="talk" src="/images/talk.png" />
            <Images alt="facebook" src="/images/facebook.png" />
            <Images alt="twitter" src="/images/twitter.png" />
            <Images alt="instagram" src="/images/instagram.png" />
            <Images alt="naver" src="/images/naver.png" />
          </IconsWrapper>
        </SetWidth>
      </FooterBottom>
    </footer>
  );
};

const FooterUpper = styled.div`
  padding: 30px;
  border-top: 1px solid #e6e6e6;
  border-bottom: 1px solid #e6e6e6;
  justify-content: space-between;
`;

const ContentsWrapper = styled.div`
  display: flex;
`;

const SetWidth = styled.div`
  margin: 0 auto;
  display: flex;
  width: 1070px;
`;

const Mass = styled.ul`
  margin-right: 50px;
`;

const MarginLeft = styled.div`
  margin-left: auto;
`;

const FirstOne = styled.li`
  list-style: none;
  font-size: 1.05rem;
  font-weight: bolder;
`;

const ContentEach = styled.li`
  list-style: none;
  margin-top: 18px;
  font-size: 0.9rem;
  color: #848484;
  cursor: pointer;
`;

const AndroidBtn = styled.button`
  width: 130px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  color: #848484;
`;

const IosBtn = styled.button`
  width: 130px;
  margin-top: 10px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  color: #848484;
`;

const FooterBottom = styled.div`
  display: flex;
  padding: 25px;
  background-color: #f0f0f0;
  justify-content: space-between;
`;

const Inquire = styled.button`
  width: 170px;
  margin-top: 15px;
  padding: 10px;
  border: 1px solid #e6e6e6;
  border-radius: 5px;
  background-color: white;
  cursor: pointer;
`;

const BottomContents = styled.span`
  font-size: 0.8rem;
  line-height: 1.6;
  color: #848484;
`;

const BlackColor = styled.span`
  color: black;
`;

const IconsWrapper = styled.div`
  margin-left: auto;
  color: black;
`;

const Images = styled.img`
  width: 30px;
  margin-right: 15px;
  justify-content: space-between;
  padding: 5px;
  border: 1px solid #848484;
  border-radius: 50%;
`;

export default Footer;
