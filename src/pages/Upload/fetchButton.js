import { API } from '../../config';

export const postFetchButton = (data, historyFunction, id) => {
  const formData = new FormData();
  formData.append('image', data.image);
  formData.append('category_id', data.category_id);
  formData.append('aim_amount', data.aim_amount);
  formData.append('description', data.description);
  formData.append('end_date', data.end_date);
  formData.append('name', data.name);

  fetch(API.PROJECT, {
    method: 'POST',
    headers: { Authorization: localStorage.getItem('token') },
    body: formData,
  })
    .then(res => res.json())
    .then(res => {
      if (res.MESSAGE === 'SUCCESS') {
        alert('업로드 성공');
        historyFunction('/');
      } else {
        alert('업로드 실패... 입력을 확인해주세요');
      }
    });
};

export const updateFetchButton = (data, historyFunction, id) => {
  const formData = new FormData();
  // formData.append('image', data.image);
  formData.append('category_id', data.category_id);
  formData.append('aim_amount', data.aim_amount);
  formData.append('description', data.description);
  formData.append('end_date', data.end_date);
  formData.append('name', data.name);

  fetch(`${API.PROJECT}/${id}/update`, {
    method: 'POST',
    headers: { Authorization: localStorage.getItem('token') },
    body: formData,
  })
    .then(res => res.json())
    .then(res => {
      if (res.MESSAGE === 'SUCCESS') {
        alert('수정 성공!');
        historyFunction('/');
      } else {
        alert('수정 실패! (날짜와 이미지 값을 입력해주세요!)');
      }
    })
    .catch(error => console.log(error));
};

export const deleteFetchButton = (data, historyFuncion, id) => {
  fetch(`${API.PROJECT}/${id}/update`, {
    method: 'DELETE',
    headers: { Authorization: localStorage.getItem('token') },
  })
    .then(res => {
      if (res.ok) {
        alert('삭제 성공!');
        historyFuncion('/');
      } else {
        alert('삭제 실패.. 데이터를 확인해주세요');
      }
    })
    .then(data => data)
    .catch(error => error);
};
