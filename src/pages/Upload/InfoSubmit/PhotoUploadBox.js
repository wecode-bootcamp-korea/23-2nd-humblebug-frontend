import React, { useState } from 'react';
import axios from 'axios';
import { PhotoInput } from '../../../styles/GlobalStyle';
import styled from 'styled-components';

const PhotoUploadBox = ({ handleSetData, placeholder }) => {
  const [imageSelected, setImageSelected] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  return (
    <UploadBox>
      <PhotoInput
        id="inputFile"
        style={{ display: 'none' }}
        onChange={e => {
          setImageSelected(e.target.files[0]);
          handleSetData('image', e.target.files[0]);
        }}
      />
      <label for="inputFile">이미지 찾기</label>
      <input
        disabled="disabled"
        placeholder={placeholder}
        value={imageSelected.name}
      ></input>
    </UploadBox>
  );
};

const UploadBox = styled.div`
  width: 400px;
  display: flex;
  align-items: center;
  margin: 10px 0;
  label {
    background-color: white;
    color: #808081;
    border: 1px solid #e5e5e5;
    padding: 5px 10px;
    border-radius: 5px;
    cursor: pointer;
  }
  input {
    height: 100%;
    border: none;
    padding: 0px 5px;
    background-color: white;
  }
`;

export default PhotoUploadBox;
