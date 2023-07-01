import { Grid, Typography,Box,Button } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Cartitem from './Cartitem';
import Totalbalance from './Totalbalance';
import styled from '@emotion/styled';
import {useParams} from "react-router-dom";
import { Addtocart, IncreaseCount, Removefroomcart } from '../../redux/actions/cartaction';
import EmptyCart from './EmptyCart';
import "../../App.css";

const Header = styled(Box)`
padding:15px 24px;
`
const BottomWrapper = styled(Box)`
    padding: 16px 22px;
    background: #fff;
    box-shadow: 0 -2px 10px 0 rgb(0 0 0 / 10%);
    border-top: 1px solid #f0f0f0;
`;

const StyledButton = styled(Button)`
    display: flex;
    margin-left: auto;
    color: #fff;
    border-radius: 2px;
    width: 250px;
    height: 51px;
`;

const LeftComponent = styled(Grid)`
  paddingRight: 15px;
`

const Cart = () => {
  
const cart = useSelector(state=>state.cart); 
 const dispatch = useDispatch();
 const {id} = useParams();

 const removeItemFromCart = (id)  =>{
     dispatch(Removefroomcart(id));
 }

const [cartItems,setcartiem] = useState(cart.cartItems);

 let number = cartItems.length>0 ?cartItems.length:0;

 useEffect(()=>{
  setcartiem(cart.cartItems);
 },[cart.cartItems]);

    return (
    <>
    {
      cartItems.length ?
      <Grid container className='component'>
          <LeftComponent lg={9} md={9} sm={12} xs={12} className='leftcomponent'>
            <Header>
            <Typography>My Cart ({number})</Typography>
            </Header>
            {
              cartItems.map(item=>{
                return(
                  <Cartitem data={item} removefromcart = {removeItemFromCart} />
                )})
            }
            <BottomWrapper>
              <StyledButton variant="contained" style={{background:"#fb641b"}}>Place Order</StyledButton>
            </BottomWrapper>
           </LeftComponent>
          <Grid lg={3} md={3} sm={12} xs={12}>
          <Totalbalance number={number} cartdata={cartItems}/>
          </Grid> 
      </Grid>
      :
      <div>
        <EmptyCart/>
      </div>
    }
    </>
  )
}

export default Cart