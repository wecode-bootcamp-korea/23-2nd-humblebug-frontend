import React from 'react';
import styled from 'styled-components';

const DetailCurrent = ({ detailData, scrollClick }) => {
  const {
    collected_amount,
    remaining_time,
    number_of_sponsors,
    aim_amount,
    payment_date,
    percentage,
  } = detailData;

  return (
    <CurrentBox>
      <CurrentTitle>모인금액</CurrentTitle>
      <CurrentContent>
        {collected_amount && collected_amount.toLocaleString()}
        <span> 원</span>
        <span>{percentage}</span>
      </CurrentContent>
      <CurrentTitle>남은시간</CurrentTitle>
      <CurrentContent>
        {remaining_time}
        <span> 일</span>
      </CurrentContent>
      <CurrentTitle>후원자</CurrentTitle>
      <CurrentContent>
        {number_of_sponsors}
        <span> 명</span>
      </CurrentContent>

      <FundingInfo>
        <div>펀딩 진행중</div>
        목표 금액인 {aim_amount && aim_amount.toLocaleString()}원이 모여야만
        결제됩니다. 결제는 {payment_date}에 다함께 진행됩니다.
      </FundingInfo>
      <FundingBtn onClick={scrollClick}>이 프로젝트 후원하기</FundingBtn>
    </CurrentBox>
  );
};
export default DetailCurrent;

const CurrentBox = styled.div`
  max-width: 354px;
  padding-left: 30px;
  text-align: left;
`;

const CurrentTitle = styled.div`
  font-size: 0.9em;
`;
const CurrentContent = styled.div`
  padding: 10px 0 30px 0;
  font-size: 2.3em;
  font-weight: 400;

  span:nth-child(1) {
    font-size: 0.4em;
    font-weight: 300;
  }

  span:nth-child(2) {
    padding-left: 10px;
    font-size: 0.6em;
    font-weight: 500;
  }
`;

const FundingInfo = styled.div`
  padding: 15px;
  background-color: #fafafa;
  border: 1px solid #efefef;
  font-size: 0.88em;
  line-height: 20px;

  div {
    margin-bottom: 15px;
    font-weight: 600;
  }
`;

const FundingBtn = styled.button`
  width: 100%;
  margin-top: 40px;
  padding: 17px 0;
  background-color: #fa6462;
  border: none;
  border-radius: 5px;
  font-size: 1.3em;
  font-weight: 500;
  color: #fff;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: #fa3517;
  }
`;
