import { Box, Grid } from '@mui/material'
import React from 'react'
import { imageURL } from '../../Constraints/Data'
import styled from '@emotion/styled'
import { useState,useEffect } from 'react'

const Wrapper = styled(Grid)`
margin-top:10px;
justify-content:space-between;
`

const Midsection = () => {

    const [bannerheight,setheight] = useState(300);

    useEffect(()=>{
      const height = window.innerWidth;
      const width = window.innerHeight;
      if(height <= 900){
        setheight(80);
      }
    },[bannerheight]);  

const url = 'https://rukminim1.flixcart.com/flap/3006/433/image/4789bc3aefd54494.jpg?q=50';

  return (
    <>
   <Wrapper lg={12} sm={12} md={12} xs={12} container>
 {
    imageURL.map(image=>{
       return(
        <Grid item lg={4} md={4} sm={12} xs={12}>
        <img src={image} alt='bannerimage' style={{width:"100%"}}/>
        </Grid>
       ) 
    })
 }
   </Wrapper>
   <img src={url} alt="covid" style={{ display: 'flex',
    marginTop: 20,
    height:`${bannerheight}px`,
    justifyContent: 'space-between',
    width: '100%',
    objectFit:"cover"}}/>
   </>
  )
}

export default Midsection