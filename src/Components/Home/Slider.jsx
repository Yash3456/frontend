import React from 'react'
import Carousel from 'react-multi-carousel'
import "react-multi-carousel/lib/styles.css";
import {Box, Button, Divider, Typography} from "@mui/material";
import styled from '@emotion/styled';
import Countdown from 'react-countdown';
import { Link } from 'react-router-dom';

const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

const Component = styled(Box)`
margin-top:10px;
background:#ffffff;
margin-left:2px;
margin-right:2px;
box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
border-radius:3px;
`
const Deal = styled(Box)`
 padding:15px 20px;
 display : flex;
`
const Dealtext = styled(Typography)`
font-size:22px;
font-weight:600;
margin-right:25px;
line-height:32px;
`

const Timer = styled(Box)`
display:flex;
margin-left:10px;
align-items:center;
color:#7f7f7f;
`
const Viewbutton = styled(Button)`
margin-left:auto;
background-color:#2874f0;
border-radius:2px;
font-size:13px;
font-weight:600;
`

const Image = styled('img')({
  width:"auto",
  height:150
});

const Text = styled(Typography)`
font-size:14px;
margin-top:5px;
`

const Slider = ({data,title,timer}) => {

  const timerURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/timer_a73398.svg';

  return (
    <Component>   
  <Deal>
 <Dealtext>{title}</Dealtext>
 {
  timer && <Timer>
  <img src={timerURL} alt="timeerlogo"/>
   <Box variant="span">&nbsp;&nbsp;Deal is Live Now</Box>
 </Timer>
 }
<Viewbutton variant='contained' color='primary'>View all</Viewbutton>
  </Deal>
  <Divider/>    
    <Carousel
    responsive={responsive}
    swipeable={false}
    draggable={false}
    infinite={true}
    autoPlay={true}
    autoPlaySpeed={4000}
    slidesToSlide={1}
    showDots={false}
    centerMode={true}
    dotListClass="custom-dot-list-style"
    itemClass="carousel-item-padding-40-px"
    containerClass="carousel-container"
    >
   {
    data.map(entry=>(
      
      <Link to={`product/${entry.id}`} style={{textDecoration:"none"}}>
      <Box textAlign="center" style={{padding:"25px 15px"}}>
      <Image src={entry.url} alt="products"/>
      <Text style={{fontWeight:600, color:"#212121"}}>{entry.title.shortTitle}</Text>
      <Text style={{color:"green"}}>{entry.discount}</Text>
      <Text style={{color:"#e53935", opacity:"0.8"}}>{entry.tagline}</Text>
      </Box>  
      </Link>
  ))
  }
    </Carousel>
    </Component>   
  )
}

export default Slider