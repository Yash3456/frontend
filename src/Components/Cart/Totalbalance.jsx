import React, { useEffect, useState } from 'react'
import {Box, Typography,styled} from "@mui/material"

const Price = styled(Typography)`
    float: right;
`;

const Header = styled(Box)`
    padding: 15px 24px;
    background: #fff;
    borderBottom: 1px solid #f0f0f0;
`;

const Heading = styled(Typography)`
    color: #878787;
`;


const Container = styled(Box)`
    padding: 15px 24px;
    background: #fff;
    & > p {
        margin-bottom: 20px;
        font-size: 14px;
    }
`;

const Totalbalance = ({number,cartdata}) => {

 const [price,setPrice] = useState(0);
 const [discount,setDiscount] = useState(0);

 const totalAmount = () => {
  let price = 0, discount = 0;
  cartdata.map(item => {
  
    let factor = item.quantity;

      price += factor*item.price.mrp;
      discount += factor*(item.price.mrp - item.price.cost); 
  })
  setPrice(price);
  setDiscount(discount);
}


useEffect(()=>{
  totalAmount();
},[cartdata]);


  return (
    <Box>
      <Header>
       <Heading>PRICE DETAILS</Heading>
      </Header>
      <Container>
      <Typography>Price ({number} item)
          <Price component="span">₹{price}</Price>
      </Typography>
      <Typography>Discount
          <Price component="span" style={{color:"#00e676"}}>-₹{discount}</Price>
      </Typography>
      <Typography>Delivery Charges
          <Price component="span">₹80</Price>
      </Typography>
      <Typography variant='h6'>Total Price
          <Price component="span">₹{price-discount+80}</Price>
      </Typography>
      <Typography style={{color:"#00e676"}}>Amount you Saved ₹{discount}</Typography>
      </Container>
    </Box>
  )
}

export default Totalbalance