import React, { useState } from 'react'
import { AppBar,Box,Drawer,IconButton,List,Toolbar,Typography,styled } from '@mui/material'
import Search from './Search'
import Customerbutton from './customerbutton'
import { Link } from 'react-router-dom'
import { Menu } from '@mui/icons-material';
import Logotext from "../../assests/headingtext.png";
import Logoimage from "../../assests/logodesign.png";

const Styleheader = styled(AppBar)`
background:#2874f0;
height:55px;
`

const Boxcomponenet = styled(Link)`
margin-left:6%;
line-height:0;
`
const Plusimage = styled('img')({
  width:40,
  height:50,
})

const Conatinerbox =styled(Box)(({theme})=>({
  margin : '0 0 0 20px',
  [theme.breakpoints.down('md')]:{
    display:"none"
  }
}));

const MenuButton = styled(IconButton)(({ theme }) => ({
  display: 'none',
  [theme.breakpoints.down('md')]: {
      display: 'block'
  }
}));

const Header = () => {

  const logoURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';
  const subURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';
 
  const [open,setopen] = useState(false);

 const handleopen = ()=>{
       setopen(true);
 }

 const handleclose = () => {
       setopen(false);
 } 

 const list = () => (
  <Box style={{ width: 250 }} onClick={handleclose}>
      <List>
          <listItem button>
              <Customerbutton />
          </listItem>
      </List>
  </Box>
);

  return (
    <Styleheader>
      <Toolbar  style={{minHeight:55}}>
        <MenuButton color='inherit' onClick={handleopen}>
          <Menu/>
        </MenuButton>

        <Drawer open={open} onClose={handleclose}>
        {list()}
        </Drawer> 

        <Boxcomponenet to={"/"} style={{textDecoration:"none",color:"inherit",marginBottom:"10px"}}>
          <Plusimage src={Logoimage} alt="sub-logo"/>
          <img src={Logotext} alt="logo" style={{width:"65%"}}/>
        </Boxcomponenet>
        <Search/>
        <Conatinerbox>
          <Customerbutton/>
        </Conatinerbox>
      </Toolbar>
    </Styleheader>
  )
}

export default Header