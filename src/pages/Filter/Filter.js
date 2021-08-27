import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import FILTER_CATEGORY from './filterCategory';
import { API } from '../../config.js';
import styled from 'styled-components';

export const Filter = () => {
  const [filterList, setFilterList] = useState([]);
  const [btnColor, setBtnColor] = useState(0);

  const history = useHistory();

  const handleClickFilter = listId => {
    fetch(`${API.FILTER_CATEGORY_GET}${listId}`)
      .then(response => response.json())
      .then(result => {
        setFilterList(result.project);
        setBtnColor(listId);
      });
  };

  useEffect(() => {
    fetch(`${API.FILTER_GET}`)
      .then(response => response.json())
      .then(result => {
        setFilterList(result.project);
      });
  }, []);

  return (
    <>
      <FilterCategoryBox>
        <FilterCategoryWrap>
          {FILTER_CATEGORY.map(category => (
            <FilterCategory
              key={category.id}
              onClick={() => handleClickFilter(category.id)}
              isActiveColor={btnColor === category.id}
            >
              {category.list}
            </FilterCategory>
          ))}
        </FilterCategoryWrap>
      </FilterCategoryBox>
      <FilterListTitle>현재 진행 중인 프로젝트</FilterListTitle>
      <FilterListWrap>
        {filterList &&
          filterList.map(list => (
            <FilterListInfo
              onClick={() => history.push(`/detail/${list.id}`)}
              key={list.id}
            >
              <FilterListImg src={list.main_image_url} />

              {list.tag &&
                list.tag.map(tagItem => (
                  <ProjectCategory key={tagItem.id}>
                    {tagItem.name}
                  </ProjectCategory>
                ))}
              <ProjectCreater>{list.user_name}</ProjectCreater>
              <ProjectDescription>{list.name}</ProjectDescription>

              <ProjectInfoWrap>
                <ProjectPrice>
                  {list.aim_amount.toLocaleString()}원
                </ProjectPrice>
                <ProjectTime>{list.time}일 남음</ProjectTime>
              </ProjectInfoWrap>
            </FilterListInfo>
          ))}
      </FilterListWrap>
    </>
  );
};

const FilterCategoryBox = styled.div`
  padding: 10px 0;
  border-top: 1px solid #ddd;
  border-bottom: 1px solid #ddd;
`;

const FilterCategoryWrap = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 1032px;
  margin: 0 auto;
`;

const FilterCategory = styled.div`
  background-color: ${props => (props.isActiveColor ? '#f0f0f0' : '#fff')};
  margin-right: 10px;
  padding: 10px 15px;
  border: 1px solid #ddd;
  border-radius: 5px;
  cursor: pointer;
`;

const FilterListWrap = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  max-width: 1032px;
  margin: 0 auto;
`;

const FilterListTitle = styled.div`
  margin: 50px 0;
  font-weight: bold;
  font-size: 20px;
  text-align: center;
`;

const FilterListInfo = styled.div`
  width: 32%;
  margin: 20px 0 60px 20px;
  background-color: white;
  border-radius: 7px;
  cursor: pointer;

  &:nth-of-type(3n + 1) {
    margin-left: 0;
  }
`;

const FilterListImg = styled.img`
  width: 100%;
  height: auto;
  margin-bottom: 10px;
  border-radius: 7px;
`;

const ProjectCategory = styled.span`
  padding-right: 10px;
  color: #9e9e9e;
  font-size: 13px;

  &:after {
    content: '';
    display: inline-block;
    width: 1px;
    height: 11px;
    margin-left: 10px;
    background-color: #9e9e9e;
  }
`;

const ProjectCreater = styled.span`
  color: #9e9e9e;
  font-size: 13px;
`;

const ProjectDescription = styled.div`
  margin: 20px 0;
  font-size: 1.3em;
  font-weight: bold;
  line-height: 28px;
  word-break: keep-all;
`;

const ProjectInfoWrap = styled.div`
  display: flex;
  justify-content: flex-start;
  align-itmes: flex-end;
  margin-top: 10px;
  padding-top: 10px;
  border-top: 3px solid #fa6462;
`;

const ProjectPrice = styled.div`
  font-size: 1.1em;
`;

const ProjectTime = styled.div`
  margin-left: auto;
  font-size: 0.9em;
  color: #a1a1a1;
  line-height: 20px;
`;

export default Filter;
