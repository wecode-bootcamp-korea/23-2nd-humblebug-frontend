import React from 'react';
import styled from 'styled-components';

export const Footer = () => {
  return (
    <FooterStyle>
      <footer className="footer">
        {/* 푸터 윗부분 */}
        <div className="footerUpper">
          <div className="contentsWrapper">
            <ul className="mass">
              <li className="firstOne">텀블벅</li>
              <li className="contentEach">공지사항</li>
              <li className="contentEach">채용</li>
              <li className="contentEach">제휴∙협력</li>
            </ul>
            <ul className="mass">
              <li className="firstOne">이용안내</li>
              <li className="contentEach">헬프 센터</li>
              <li className="contentEach">창작자 가이드</li>
              <li className="contentEach">프로젝트 심사 기준</li>
              <li className="contentEach">수수료 정책</li>
            </ul>
            <ul className="mass">
              <li className="firstOne">정책</li>
              <li className="contentEach">이용약관</li>
              <li className="contentEach">개인정보 처리방침</li>
            </ul>
            <ul className="mass">
              <li className="firstOne">App</li>
              <li className="contentEach">
                <button className="appDownBtn">안드로이드</button>
              </li>
              <li>
                <button className="appDownBtn ios">iOS</button>
              </li>
            </ul>
          </div>
          <div className="customerService">
            <p className="firstOne customerFirst">고객지원</p>
            <p className="contentEach spaceTop">
              평일 10:00 ~ 17:00 (12:00 ~ 14:00 제외)
            </p>
            <p className="contentEach spaceTop">
              <button className="inquire">험블벅에 문의</button>
            </p>
          </div>
        </div>
        {/* 푸터 아랫부분 */}
        <div className="footerBottom">
          <div>
            <span className="bottomContents">
              회사명 험블벅(주) 주소 서울시 강남구 삼성동 테헤란로427,
              위워크타워 10층 대표 험블벅 사업자등록번호 2021-08-17
              <br />
              통신판매업 신고번호 2021-08-17 대표번호 2021-08-17
              <br />© 2021 Humblbug Inc.
            </span>
          </div>
          <div>
            <span>
              <img className="image talk" alt="talk" src="/images/talk.png" />
              <img
                className="image facebook"
                alt="facebook"
                src="/images/facebook.png"
              />
              <img
                className="image twitter"
                alt="twitter"
                src="/images/twitter.png"
              />
              <img
                className="image instagram"
                alt="instagram"
                src="/images/instagram.png"
              />
              <img
                className="image naver"
                alt="naver"
                src="/images/naver.png"
              />
            </span>
          </div>
        </div>
      </footer>
    </FooterStyle>
  );
};

const FooterStyle = styled.div`
  .appDownBtn {
    width: 130px;
    padding: 10px;
    border: none;
    border-radius: 5px;
  }

  .ios {
    margin-top: 10px;
  }

  .inquire {
    width: 170px;
    padding: 10px;
    border: 1px solid #e6e6e6;
    border-radius: 5px;
    background-color: white;
  }

  .customerFirst {
    font-weight: bolder;
  }

  .footer {
    .footerUpper {
      display: flex;
      padding: 30px;
      border-top: 1px solid #e6e6e6;
      border-bottom: 1px solid #e6e6e6;
      justify-content: space-between;

      .contentsWrapper {
        display: flex;
        .mass {
          margin-right: 50px;
          .firstOne {
            font-size: 1.05rem;
            font-weight: bolder;
          }
          .contentEach {
            margin-top: 18px;
            font-size: 0.9rem;
            color: #959595;
          }
        }
      }
      .customerService {
        .spaceTop {
          font-size: 0.8rem;
          margin-top: 15px;
          color: #959595;
        }
      }
    }

    .footerBottom {
      display: flex;
      padding: 30px;
      background-color: #f0f0f0;
      .image {
        width: 20px;
      }
      .bottomContents {
        font-size: 0.8rem;
        line-height: 1.5;
        color: #959595;
      }
    }
  }
`;

export default Footer;
