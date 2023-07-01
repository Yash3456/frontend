import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getproductDetails } from '../../redux/actions/Productaction';
import { Box, Grid, Typography } from '@mui/material';
import Actionicon from './Actionicon';
import styled from '@emotion/styled';
import ProductDetail from './ProductDetail';

const Component = styled(Box)`
background:#f2f2f2 ;
margin-top:55px;
margin-left:17px;
`

const Wrapper = styled(Grid)`
background: #ffffff;
display:flex;
`

const RightWrapper =styled(Grid)`
margin-top:50px;
`

const Detailsview = () => {

const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png' 

 const {loading,product} = useSelector(state => state.getproductDetails); 

 const dispatch = useDispatch();
 const {id} = useParams();

 useEffect(()=>{
  if(product && id !== product.id){
 dispatch(getproductDetails(id));
  }
 },[dispatch,id,loading,product]);

  return (
    <Component>
      {
        loading && product && Object.keys(product).length && 
        <Wrapper container>
        <Grid item lg={4} md={4} sm={8} xs={12}>
        <Actionicon product={product}/>
        </Grid> 
        <RightWrapper ld={8} md={8} sm={8} xs={12}>
        
        <ProductDetail product={product}/>
        </RightWrapper> 

        </Wrapper>
      }
    </Component>
  )
}

export default Detailsview