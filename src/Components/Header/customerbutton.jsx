import React, { useContext, useState,useEffect } from 'react'
import { Badge, Box, Button, Typography } from '@mui/material'
import ShoppingcartIcon from "@mui/icons-material/ShoppingCart";
import styled from '@emotion/styled';
import LoginDialogue from '../Login/LoginDIalogue';
import { Datacontext } from '../../Context/Dataprovider';
import Profile from './Profile';
import { useSelector } from 'react-redux';
import "../../App.css";
import { Link } from 'react-router-dom';

const Wrapper = styled(Box)`
margin:0 3% 0 auto;
& > button, &>p, &>div{
    margin-right:20px;
    font-size:16px;
    align-items:center;
}
`

const Loginbutton = styled(Button)`
 color:#2874f0;
 text-transform:none;
 background:#fff;
 padding:5px 25px;
 border-radius:2px;
 box-shadow:none;
 font-weight:600;
 height:32px; 
 `

const Contain = styled(Box)`
display:flex;
`

const Customerbutton = () => {

  const [opened,setopen] = useState(false);
  const [account,setaccount] = useContext(Datacontext);

  const [direction,setdirection] = useState("row");

  const cartDetails = useSelector(state => state.cart);
  const { cartItems } = cartDetails;

  useEffect(()=>{
 
    const height = window.innerHeight;
    const width = window.innerWidth;
    
     if(width<=900){
      setdirection("column");
     } 
    
    },[]);

  return (
    <Wrapper className='drawerdesign'>
          {
                account ?
                (<Profile account={account} setaccount={setaccount}/>)
                : 
                (
                <Loginbutton variant="contained" onClick={() => setopen(true)}>Login</Loginbutton>
                )
            }
        <Typography style={{marginTop:3,width:135}}>Become a Seller</Typography>
        <Typography style={{marginTop:3,width:50}}>More</Typography>
          <Link to={"/cart"} style={{textDecoration:"none",color:"inherit"}}><Contain>
            <Badge badgeContent={cartItems?.length} color="secondary">
            <ShoppingcartIcon/>
            </Badge>
          Cart</Contain> </Link>
        <LoginDialogue open={opened} setopen={setopen}/>
    </Wrapper>
  )
}

export default Customerbutton