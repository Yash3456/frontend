import React from 'react'
import { AppBar,Box,Toolbar,Typography,styled } from '@mui/material'
import Search from './Search'
import Customerbutton from './customerbutton'

const Styleheader = styled(AppBar)`
background:#2874f0;
height:55px;
`

const Boxcomponenet = styled(Box)`
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

const Conatinerbox =styled(Box)`
margin : 0 0 0 auto;
` 

const Header = () => {

  const logoURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';
  const subURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';

  return (
    <Styleheader>
      <Toolbar  style={{minHeight:55}}>
        <Boxcomponenet>
         <img src={logoURL} alt="logo" style={{width:75}}/>
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