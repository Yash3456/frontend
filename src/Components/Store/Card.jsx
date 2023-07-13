import React, { useEffect }  from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Getproducts } from '../../redux/actions/Productaction'
import { Link } from 'react-router-dom'
import { Box,styled,Typography } from '@mui/material'

const Image = styled('img')({
  width:"auto",
  height:150
});

const Text = styled(Typography)`
font-size:14px;
margin-top:5px;
`

const Card = () => {

  const {products} = useSelector(state => state.getproducts);
 const dispatch = useDispatch();

 useEffect(()=>{
  dispatch(Getproducts())
 },[dispatch])


  return (
    <div style={{display:"grid"}}>
       {
    products.map(entry=>(
    <Link to={`https://frontendcode-4umh.vercel.app/product/${entry.id}`}>
      <Box textAlign="center" style={{padding:"25px 15px"}}>
      <Image src={entry.url} alt="products"/>
      <Text style={{fontWeight:600, color:"#212121"}}>{entry.title.shortTitle}</Text>
      <Text style={{color:"green"}}>{entry.discount}</Text>
      <Text style={{color:"#e53935", opacity:"0.8"}}>{entry.tagline}</Text>
      </Box>
      </Link>   
  ))
  }
    </div>
  )
}

export default Card