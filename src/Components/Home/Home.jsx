import React, { useEffect } from 'react'
import Navbar from './Navbar'
import Banner from './Banner'
import { Box, Slide } from '@mui/material'
import styled from '@emotion/styled'
import { useDispatch, useSelector } from 'react-redux'
import { Getproducts } from '../../redux/actions/Productaction'
import Slider from './Slider'

const boxcomponent = styled(Box)`
padding:10px;
background:"#F2F2F2";
`

const Home = () => {

const {products} = useSelector(state => state.getproducts);
console.log(products);

 const dispatch = useDispatch();

 useEffect(()=>{
  dispatch(Getproducts())
 },[dispatch])

  return (
<> 
<Navbar/>
<Box>
<Banner/>
<Slider data={products} title="Deal of the Day" timer={true}/>
<Slider data={products} title="Discount for You" timer={false}/>
<Slider data={products} title="Suggested Items" timer={false}/>
<Slider data={products} title="Top Selected Items" timer={false}/>
<Slider data={products} title="Trending Offers" timer={false}/>
<Slider data={products} title="Season's Top Picks" timer={false}/>
<Slider data={products} title="Top Deals on Accessories" timer={false}/>
</Box>
</>
    )
}

export default Home