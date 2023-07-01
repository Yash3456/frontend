import styled from '@emotion/styled';
import { Box, Typography,Button } from '@mui/material';
import React from 'react'
import { addsubsills } from '../../utils/cponentutils';
import Buttonstore from './Buttonstore';

const Bordertop = styled(Box)`
border:1px solid #eeeeee;
display:flex;
`

const SmallText = styled(Typography)`
    color: #878787;
    font-size: 14px;
    margin-top: 10px;
`;

const Image = styled('img')({
  width:110
});

const Leftcomponent = styled(Box)`
margin:20px;
display:flex;
flex-direction:column;
`
const Cost = styled(Typography)`
    font-size: 18px;
    font-weight: 600;
`;

const MRP = styled(Typography)`
    color: #878787;
`;

const Remove = styled(Button)`
    margin-top: 20px;
    font-size: 16px;
    color:#212121;
`;


const Discount = styled(Typography)`
    color: #388E3C;
`;

const Cartitem = ({data,removefromcart,onincrease,ondecrease}) => { 
 const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png';

  return (
    <Bordertop>
      <Leftcomponent>
        <Image src={data.url} alt='product' />
        <Buttonstore data={data}/>
      </Leftcomponent>
      <Box style={{margin:20}}>
          <Typography>{addsubsills(data.title.longTitle)}</Typography>
          <SmallText>Seller:Tara Goyal
                    <span><img src={fassured} style={{ width: 50, marginLeft: 10 }} /></span>
          </SmallText>
          <Typography style={{margin: '20px 0'}}>
                    <Cost component="span" style={{fontWeight:"bold"}}>₹{data.price.cost}</Cost>&nbsp;&nbsp;&nbsp;
                    <MRP component="span"><strike>₹{data.price.mrp}</strike></MRP>&nbsp;&nbsp;&nbsp;
                    <Discount component="span">{data.price.discount} off</Discount>
          </Typography> 
          <Remove onClick={() => removefromcart(data.id)}>Remove</Remove>  
      </Box>
    </Bordertop>
  )
}

export default Cartitem