import React, { useState } from 'react'
import { AppBar,Box,Drawer,IconButton,List,Toolbar,Typography,styled } from '@mui/material'
import Search from './Search'
import Customerbutton from './customerbutton'
import { Link } from 'react-router-dom'
import { Menu } from '@mui/icons-material';

const Styleheader = styled(AppBar)`
background:#2874f0;
height:55px;
`

const Boxcomponenet = styled(Link)`
margin-left:12%;
line-height:0;
`
const Subheading = styled(Typography)`
font-size:10px;
font-style:italic;
`
const Plusimage = styled('img')({
  width:10,
  height:10,
  marginLeft:4
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

        <Boxcomponenet to={"/"} style={{textDecoration:"none",color:"inherit"}}>
         <img src={logoURL} alt="logo" style={{width:"35%"}}/>
         <Box style={{display:'flex'}}>
          <Subheading>
            Explore&nbsp; 
            <Box component="span" style={{color:"#FFE500"}}>Plus</Box>
          </Subheading>
          <Plusimage src={subURL} alt="sub-logo"/>
         </Box>
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