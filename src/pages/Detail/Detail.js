import React, { useState, useEffect, useRef } from 'react';
import DetailCurrent from './DetailCurrent';
import DetailRightContents from './DetailRightContents';
import DetailProject from './DetailProject';
import DetailComment from './DetailComment';
import { API } from '../../config.js';
import styled from 'styled-components';

const Detail = () => {
  const [detailData, setDetailData] = useState([]);
  const [detailOption, setDetailOption] = useState([]);
  const [commentContent, setCommentContent] = useState('');
  const [commentData, setCommentData] = useState([]);
  const [currentId, setCurrentId] = useState(1);

  const optionRef = useRef(null);

  const scrollToRef = () =>
    window.scrollTo({ top: optionRef.current.offsetTop, behavior: 'smooth' });

  const handleClickTab = id => {
    setCurrentId(id);
  };
  const handleInput = e => {
    setCommentContent(e.target.value);
  };

  const handleClickInput = () => {
    fetch(`${API.DETAIL_COMMENT_POST}`, {
      method: 'POST',
      headers: {
        Authorization: localStorage.getItem('TOKEN'),
      },
      body: JSON.stringify({
        user_id: 5,
        description: commentContent,
      }),
    })
      .then(response => response.json())
      .then(result => {
        alert('댓글작성이 완료되었습니다!');
        window.location.reload();
      });
  };

  const enterInsertValue = e => {
    if (e.key === 'Enter') {
      handleClickInput();
    }
  };

  useEffect(() => {
    fetch(`${API.DETAIL_GET}`)
      .then(response => response.json())
      .then(result => {
        setDetailData(result.project_information);
      });

    fetch(`${API.DETAIL_OPTION}`)
      .then(response => response.json())
      .then(result => {
        setDetailOption(result.option);
      });

    fetch(`${API.DETAIL_COMMENT_GET}`)
      .then(response => response.json())
      .then(result => setCommentData(result.comments));
  }, []);

  const { name, main_image_url } = detailData;

  return (
    <>
      <DetailBox>
        <DetailTitleBox>
          <DetailCategory>제품 디자인</DetailCategory>
          <DetailTitle>{name}</DetailTitle>
          <DetailName>
            <DetailProfileImg
              alt="창작자 프로필 이미지"
              src="/images/project_image.jpg"
            />
            <span>unarc</span>
          </DetailName>
        </DetailTitleBox>
        <DetailMainImg alt="프로젝트 메인 이미지" src={main_image_url} />
        <DetailCurrent scrollClick={scrollToRef} detailData={detailData} />
      </DetailBox>

      <div>
        <DetailNavWrap>
          <DetailNav>
            <DetailNavList onClick={() => handleClickTab(1)}>
              프로젝트 계획
            </DetailNavList>
            <DetailNavList onClick={() => handleClickTab(2)}>
              커뮤니티
            </DetailNavList>
          </DetailNav>
        </DetailNavWrap>
        <DetailBox>
          <DetailLeftContents>
            {currentId === 1 && <DetailProject />}
            {currentId === 2 && (
              <DetailComment
                commentData={commentData}
                enterInsertValue={enterInsertValue}
                handleInput={handleInput}
                handleClickInput={handleClickInput}
              />
            )}
          </DetailLeftContents>
          <DetailRightContents
            propRef={optionRef}
            detailOption={detailOption}
          />
        </DetailBox>
      </div>
    </>
  );
};

export default Detail;

const DetailBox = styled.section`
  display: flex;
  flex-wrap: wrap;
  width: 1032px;
  margin: 50px auto;
`;

const DetailMainImg = styled.img`
  width: 650px;
`;

const DetailTitleBox = styled.div`
  flex-basis: 100%;
  padding: 60px 0;
  text-align: center;
`;

const DetailCategory = styled.span`
  padding: 5px 8px;
  font-weight: 600;
  color: #666;
  background-color: #fafafa;
  border: 1px solid #ddd;
`;

const DetailTitle = styled.div`
  padding: 40px 0 25px 0;
  font-size: 2em;
  font-weight: 600;
`;

const DetailName = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 10px;
  font-weight: 600;
`;

const DetailProfileImg = styled.img`
  width: 25px;
  height: 25px;
  margin-right: 6px;
  border-radius: 50%;
`;

const DetailNavWrap = styled.div`
  padding: 20px 0;
  border-top: 1px solid #e9e9e9;
  border-bottom: 1px solid #e9e9e9;
`;

const DetailNav = styled.ul`
  display: flex;
  justify-content: flex-start;
  width: 1032px;
  margin: 0 auto;
`;

const DetailNavList = styled.li`
  margin-right: 20px;
  font-weight: 500;
  cursor: pointer;
`;

const DetailLeftContents = styled.div`
  width: 650px;
  padding-right: 20px;
  font-size: 1.3em;
  line-height: 35px;
`;
