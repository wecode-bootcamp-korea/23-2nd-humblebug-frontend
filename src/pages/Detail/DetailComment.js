import React from 'react';
import styled from 'styled-components';

const DetailComment = ({
  commentData,
  enterInsertValue,
  handleInput,
  handleClickInput,
}) => {
  return (
    <>
      <CommentInput
        onKeyPress={enterInsertValue}
        onChange={handleInput}
        placeholder="댓글 입력"
      />
      <CommentBtn onClick={handleClickInput}>댓글등록</CommentBtn>
      {commentData &&
        commentData.map((comment, index) => (
          <CommentBox key={index}>
            <div>
              <CommentUserImg src="/images/project_image.jpg" />
              <CommentUserNickname>{comment.nickname}</CommentUserNickname>
            </div>
            <CommentContent>{comment.description}</CommentContent>
          </CommentBox>
        ))}
    </>
  );
};
export default DetailComment;

const CommentBox = styled.div`
  height: auto;
  padding: 25px;
  border: 1px solid #ddd;
  border-radius: 7px;
  margin-bottom: 20px;
`;

const CommentUserImg = styled.img`
  width: 25px;
  height: 25px;
  margin-right: 10px;
  border-radius: 50%;
  vertical-align: sub;
`;

const CommentUserNickname = styled.span`
  font-size: 0.8em;
`;

const CommentContent = styled.div`
  margin: 30px 0 10px 0;
  font-size: 0.9em;
`;

const CommentInput = styled.input`
  width: 84%;
  padding: 20px;
  margin-right: 1%;
  border: 1px solid #ddd;
  border-radius: 7px;
  outline: none;
  font-size: 0.9em;
`;

const CommentBtn = styled.button`
  width: 15%;
  margin-bottom: 50px;
  padding: 20px 10px;
  background-color: #fa6462;
  border: none;
  border-radius: 7px;
  color: #fff;
  font-weight: 600;
  font-size: 0.8em;
  cursor: pointer;
`;
