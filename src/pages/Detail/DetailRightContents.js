import React, { useState } from 'react';
import DetailOptionCard from './DetailOptionCard';
import styled from 'styled-components';

const DetailRightContents = ({ detailOption, propRef, user }) => {
  const [activeTab, setActiveTab] = useState(0);
  const changeActiveTab = index => {
    setActiveTab(index);
  };
  return (
    <DetailRightBox>
      <CreatorInfo>
        <CreatorTitle>창작자 소개</CreatorTitle>
        <CreatorName>
          <CreatorProfileImg
            alt="창작자 프로필 이미지"
            src="/images/project_image.jpg"
          />
          <span>{user}</span>
        </CreatorName>
        <p>
          언아르크는 아크릴 소재를 기반으로 한 홈퍼니싱 굿즈를 만듭니다. 'an
          arc'는 '호선'을 뜻하는 말로, 유연한 디자인으로 익숙한 것에 새로움을
          부여하고자 함을 나타냅니다.
        </p>
        <CreatorBtns>
          <CreatorFollow>팔로우</CreatorFollow>
          <CreatorInquiry>창작자에게 문의</CreatorInquiry>
        </CreatorBtns>
      </CreatorInfo>

      <SelectTitle ref={propRef}>선물 선택</SelectTitle>
      {detailOption &&
        detailOption.map(option => (
          <DetailOptionCard
            key={option.id}
            option_amount={option.option_amount}
            option_name={option.option_name}
            isActive={activeTab === option.id}
            changeActiveTab={() => changeActiveTab(option.id)}
          />
        ))}
    </DetailRightBox>
  );
};
export default DetailRightContents;

const DetailRightBox = styled.div`
  width: 354px;
`;

const SelectTitle = styled.div`
  margin-top: 30px;
  margin-bottom: 10px;
  font-weight: 600;
`;

const CreatorInfo = styled.div`
  padding: 20px;
  border-radius: 5px;
  border: 1px solid #efefef;
  -moz-box-shadow: 1px 1px 1px 1px #e5e5e5;
  -webkit-box-shadow: 1px 1px 1px 1px #e5e5e5;
  box-shadow: 1px 1px 1px 1px #e5e5e5;

  p {
    color: #757576;
    font-size: 0.9em;
    line-height: 20px;
  }
`;

const CreatorTitle = styled.div`
  margin-bottom: 10px;
  font-weight: 600;
`;

const CreatorName = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 15px 0;
  font-weight: 600;
`;

const CreatorProfileImg = styled.img`
  width: 25px;
  height: 25px;
  margin-right: 6px;
  border-radius: 50%;
`;

const CreatorBtns = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 20px;
`;

const CreatorFollow = styled.div`
  width: 50%;
  padding: 12px 0;
  background-color: #f0f0f0;
  border-radius: 5px;
  font-size: 0.8em;
  text-align: center;
`;

const CreatorInquiry = styled(CreatorFollow)`
  margin-left: 2%;
  background-color: #fff;
  border: 1px solid #efefef;
`;
