import React, { useState } from 'react';
import { API } from '../../config.js';
import styled from 'styled-components';

const DetailOptionCard = ({
  option_amount,
  option_name,
  projectId,
  isActive,
  changeActiveTab,
}) => {
  const [price, setPrice] = useState(0);

  const postData = () => {
    fetch(`${API.PROJECT}/${projectId}/option`, {
      method: 'POST',
      headers: {
        Authorization: localStorage.getItem('token'),
      },
      body: JSON.stringify({
        option_id: 8,
        total_amount: option_amount + price,
      }),
    })
      .then(response => response.json())
      .then(result => {
        console.log(result);
        alert('후원이 완료되었습니다!');
      });
  };

  return (
    <SelectBox onClick={changeActiveTab} isActive={isActive}>
      <DetailPrice>{option_amount.toLocaleString()}원 +</DetailPrice>
      <DetailList>{option_name}</DetailList>
      <DetailAdd>추가 후원금(선택)</DetailAdd>
      <DetailInput>
        <input type="text" value={price.toLocaleString()} readOnly />
        <button onClick={() => setPrice(0)}>x</button>
      </DetailInput>
      <PriceBtns>
        <PriceBtn onClick={() => setPrice(prev => prev + 5000)}>
          +5천원
        </PriceBtn>
        <PriceBtn onClick={() => setPrice(prev => prev + 10000)}>
          +1만원
        </PriceBtn>
        <PriceBtn onClick={() => setPrice(prev => prev + 50000)}>
          +5만원
        </PriceBtn>
        <PriceBtn onClick={() => setPrice(prev => prev + 100000)}>
          +10만원
        </PriceBtn>
      </PriceBtns>
      <FundBtn onClick={postData}>
        {(option_amount + price).toLocaleString()}원 후원하기
      </FundBtn>
    </SelectBox>
  );
};
export default DetailOptionCard;

const SelectBox = styled.div`
  transition: max-height 0.5s ease;
  max-height: ${props => (props.isActive ? '100%' : '130px')};
  margin-bottom: 15px;
  padding: 20px;
  border-radius: 5px;
  border: 1px solid #efefef;
  -moz-box-shadow: 1px 1px 1px 1px #e5e5e5;
  -webkit-box-shadow: 1px 1px 1px 1px #e5e5e5;
  box-shadow: 1px 1px 1px 1px #e5e5e5;
  overflow: hidden;
`;

const DetailList = styled.div`
  padding: 5px 0;
`;

const DetailText = styled.div`
  padding: 10px 0;
`;

const DetailAdd = styled(DetailText)`
  margin-top: 20px;
`;

const DetailInput = styled.div`
  position: relative;

  input {
    width: 100%;
    margin: 10px 0;
    padding: 10px;
    border: 1px solid #ddd;
  }

  button {
    position: absolute;
    top: 20px;
    right: 10px;
    background-color: #fff;
    border: none;
    cursor: pointer;
  }
`;

const DetailPrice = styled.div`
  padding: 10px 0 20px 0;
  font-size: 1.4em;
  font-weight: 600;
`;

const FundBtn = styled.button`
  width: 100%;
  margin: 10px 0;
  padding: 10px;
  background-color: #fa6462;
  border: none;
  border-radius: 5px;
  font-size: 1.2em;
  font-weight: 600;
  color: #fff;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: #fa3517;
  }
`;

const PriceBtns = styled.ul`
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
`;

const PriceBtn = styled.li`
  margin-right: 5px;
  padding: 10px;
  border: 1px solid #ddd;
  cursor: pointer;

  &:hover {
    border: 1px solid #333;
  }
`;
