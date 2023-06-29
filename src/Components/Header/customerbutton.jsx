import React, { useContext, useState } from 'react'
import { Box, Button, Typography } from '@mui/material'
import ShoppingcartIcon from "@mui/icons-material/ShoppingCart";
import styled from '@emotion/styled';
import LoginDialogue from '../Login/LoginDIalogue';
import { Datacontext } from '../../Context/Dataprovider';
import Profile from './Profile';

const Wrapper = styled(Box)`
display:flex;
margin:0 3% 0 auto;
& > button, &>p, &>div{
    margin-right:40px;
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
  return (
    <Wrapper>
          {
                account ?
                (<Profile account={account} setaccount={setaccount}/>)
                : 
                (
                <Loginbutton variant="contained" onClick={() => setopen(true)}>Login</Loginbutton>
                )
            }
        <Typography style={{marginTop:3,width:135}}>Become a Seller</Typography>
        <Typography style={{marginTop:3,width:135}}>More</Typography>
        <Contain>
           <ShoppingcartIcon/>
           <Typography>Cart</Typography> 
        </Contain>
        <LoginDialogue open={opened} setopen={setopen}/>
    </Wrapper>
  )
}

export default Customerbutton