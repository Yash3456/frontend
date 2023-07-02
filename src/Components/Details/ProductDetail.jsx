import React from 'react'
import { Box,Table,TableBody,TableCell,TableRow,Typography } from '@mui/material'
import { LocalOffer as Badge} from '@mui/icons-material';
import styled from '@emotion/styled';
import SecurityIcon from '@mui/icons-material/Security';
import AssuredWorkloadIcon from '@mui/icons-material/AssuredWorkload';

const Smalltext = styled(Box)`
vertical-align:baseline;
& > p{
  font-size:12px;
  margin-top:2px;
}
`

const Styledbadge = styled(Badge)`
margin-right:10px;
margin-top:4px;
color:#00c853;
font-size:15px;
`

const SecurityBadge = styled(SecurityIcon)`
font-size:15px;
color:#fb8c00;
`
const Assurencce = styled(AssuredWorkloadIcon)`
font-size:15px;
margin-right:3px;
color:#00cc00;
`

const ColumnText = styled(TableRow)`
    font-size: 14px;
    vertical-align: baseline;
    align-items:center;
    display:flex;
    justify-content:left;
    & > td {
        font-size: 14px;
        margin-top: 10px;
        border:none;
    }
`


const ProductDetail = ({product}) => {

  const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png' 

  const adURL = 'https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50';

 const date = new Date(new Date().getTime()+(5*24*60*60*1000));

  return (
    <>
    <Typography>{product.title.longTitle}</Typography>
        <Typography style={{marginTop:5,color:'#676767',fontSize:14}}>8 Ratings & 1 Review
        <Box component="span"><img src={fassured} style={{width:77,marginLeft:20}} alt="FlipkartAssured"/></Box>
        </Typography>  
        <Typography>
          <Box component="span" style={{fontSize:28}}>₹{product.price.cost}</Box>&nbsp;&nbsp;&nbsp;
          <Box component="span" style={{color:"#878787"}}><strike>₹{product.price.mrp}</strike></Box>&nbsp;&nbsp;&nbsp;
          <Box component="span" style={{color:"#388E3C"}}>{product.price.discount} off</Box>
        </Typography>
        <Typography>Available Offers</Typography>
        <Smalltext>
          <Typography><Styledbadge/>Get Extra 20% off upto ₹50 on 1 item(s) T&C</Typography>
          <Typography><Styledbadge/> Get Extra 13% off (Price inclusive of discount) T&C</Typography>
          <Typography><Styledbadge/> Sign up for Flipkart Pay Later and get Flipkart Gift Card worth up to ₹500 Know More</Typography>
          <Typography><Styledbadge/> Flat ₹4,000 Off on HDFC Bank Credit Card EMI Transactions on orders of ₹50,000 and above T&C</Typography>
        </Smalltext>
     <Table style={{marginTop:10}}>
      <TableBody>
         <ColumnText>
          <TableCell style={{color:"#878787"}}>Delivery</TableCell>
          <TableCell style={{fontWeight:600}}>Delivery by {date.toDateString()} | ₹40</TableCell>
          </ColumnText>
          <ColumnText>
          <TableCell style={{color:"#878787"}}>Warranty</TableCell>
          <TableCell style={{fontWeight:600,color:"#616161"}}><Assurencce/> 7 days of Warranty</TableCell>
          </ColumnText>
          <ColumnText>
          <TableCell style={{color:"#878787"}}>Seller</TableCell>
          <TableCell ><Box variant="span" style={{fontWeight:600,color:"#2874f0"}}>Tara Goyal</Box>
          <ul type='bullets'>
            <li style={{color:"#616161"}}><SecurityBadge/> 10 Days Return Policy</li>
            <li style={{marginTop:"8px",color:"#616161"}}><Assurencce/>100% refund Policy in Case of Defective Product</li>
          </ul>
          </TableCell>
          </ColumnText>
          <ColumnText>
          <img src={adURL} alt="SuperCoin" style={{width:390}}/>
          </ColumnText>
          <ColumnText>
          <TableCell style={{color:"#878787"}}>Description</TableCell>
          <TableCell style={{color:"#616161",fontWeight:500}}>{product.description}</TableCell>
          </ColumnText>
      </TableBody>
     </Table>
    </>
  )
}

export default ProductDetail