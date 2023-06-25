import React from 'react'
import Carousal from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { bannerData } from '../../Constraints/Data';
import styled from '@emotion/styled';

const Banneriimg = styled('img')({
  width: "100%",
    height: 280,
})

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

const Banner = () => {
  return (
    <Carousal
    responsive={responsive}
    dotListClass="custom-dot-list-style"
  itemClass="carousel-item-padding-40-px"
  containerClass="carousel-container"
  swipeable={false}
  draggable={false}
  infinite={true}
  autoPlay={true}
  autoPlaySpeed={4000}
  slidesToSlide={1}
  showDots={false}
    >
    {
      bannerData.map(data=>{
        return(
          <Banneriimg src={data.url} alt="bannerimage" id={data.id}/>
        )
      })
    }
    </Carousal>
  )
}

export default Banner