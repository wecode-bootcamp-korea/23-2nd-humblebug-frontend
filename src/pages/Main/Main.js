import { React, useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styled from 'styled-components';
import ProcessingProject from './ProcessingProject';

export const Main = () => {
  const [projectList, setProjectList] = useState([]);

  useEffect(() => {
    fetch('http://10.58.5.250:8000')
      .then(res => res.json())
      .then(res => {
        setProjectList(res.project);
      });
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 900,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  console.log(projectList);
  return (
    <div>
      {/* 캐러셀 라이브러리 */}
      <CarouselAll>
        <Slider {...settings}>
          <CarouselWrapper>
            <Carousel src="/images/Fcarousel.png"></Carousel>
          </CarouselWrapper>
          <CarouselWrapper>
            <Carousel2 src="/images/Scarousel.png"></Carousel2>
          </CarouselWrapper>
          <CarouselWrapper>
            <Carousel3 src="/images/Tcarousel.png"></Carousel3>
          </CarouselWrapper>
        </Slider>
      </CarouselAll>

      <MainText>현재 진행 중인 프로젝트</MainText>
      <ProjectListWrapper>
        {projectList.map((item, index) => (
          <div>
            <ProcessingProject projectInfo={item} />
          </div>
        ))}
      </ProjectListWrapper>
    </div>
  );
};

const CarouselAll = styled.div`
  margin: 0px auto 70px auto;
  width: 100%;

  .slick-arrow {
    z-index: 999;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    transition: background 0.5s;
    color: black;
    &:hover {
      background: rgba($pt, 0.9);
      &::before {
        color: black;
        opacity: 0.5;
      }
    }
    &::before {
      font-family: slick;
      font-size: 30px;
      transition: all 0.1s;
    }
  }
  .slick-prev {
    left: 140px;
    &::before {
      color: black;
    }
  }
  .slick-next {
    right: 140px;
    &::before {
      color: black;
    }
  }
`;
const CarouselWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Carousel = styled.img`
  margin: 0 auto;
  width: 1000px;
  height: 380px;
  margin-top: 7px;
  background-color: lightpink;
  border-radius: 7px;
  border-style: none;
  outline: none;
`;

const Carousel2 = styled.img`
  margin: 0 auto;
  width: 1000px;
  height: 380px;
  margin-top: 7px;
  background-color: lightskyblue;
  border-radius: 7px;
  border-style: none;
  outline: none;
`;

const Carousel3 = styled.img`
  margin: 0 auto;
  width: 1000px;
  height: 380px;
  margin-top: 7px;
  background-color: lightsalmon;
  border-radius: 7px;
  border-style: none;
  outline: none;
`;

const MainText = styled.div`
  width: 1000px;
  margin: 0 auto;
  margin-top: 25px;
  text-align: left;
  font-weight: bolder;
  font-size: 20px;
`;

const ProjectListWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 1000px;
  margin: 0 auto;
  margin-bottom: 100px;
  flex-wrap: wrap;
`;

export default Main;
