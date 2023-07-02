import { Box, Button } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { DetailURL } from '../../Constraints/Data'
import styled from '@emotion/styled'
import { ShoppingCart as Cart, FlashOn as Flash } from '@mui/icons-material';
// import { useNavigate } from 'react-router-dom';
import {useDispatch} from "react-redux";
import { Addtocart } from '../../redux/actions/cartaction';
import swal from "sweetalert";


const Container = styled(Box)`
min-width: 40%;
`

const Image = styled('img')({
    padding: '15px 2px',
    border: '1px solid #f0f0f0',
    width: '95%'
})

const Stylebutton = styled(Button)`
width:44%;
height:50px;
border-radius:4px;
`

const Actionicon = ({product}) => {

 const [detailUrl,seturl] = useState("");

   const findurl = () =>{
    DetailURL.map(data=>{
     if(data.id === product.id){
      seturl(data.detailUrl);
     return ; 
    }
    })
   }
   
 const [paddingvalue1,setvalue1] = useState(40);
 const [paddingvalue2,setvalue2] = useState(0);
 const [paddingvalue3,setvalue3] = useState(0);
 const [paddingvalue4,setvalue4] = useState(80);

useEffect(()=>{
 
const height = window.innerHeight;
const width = window.innerWidth;

 if(width<=900){
  setvalue1(20);
  setvalue2(40);
  setvalue3(20);
  setvalue4(40);
 } 

},[paddingvalue1,paddingvalue2,paddingvalue3,paddingvalue4]);

   useEffect(()=>{
      findurl();
   },[])

  // const navigate = useNavigate(); 
 const dispatch = useDispatch();

 const {id} = product;

 const [qunatity,setqunatity] = useState(1);

 const addtocart = ()=>{
  swal("","Item added Successfully","success");
  dispatch(Addtocart(id,qunatity));
  // navigate("/cart");
 }

  return (
   <Container style={{padding:`${paddingvalue1}px ${paddingvalue2}px ${paddingvalue3}px ${paddingvalue4}px`}}>
   <Image src={detailUrl} alt='imagesdisplay'/>
   <Stylebutton variant='contained' style={{marginRight:10,background:'#fdd835'}} onClick={()=> addtocart()} > <Cart/> ADD TO CART</Stylebutton>
   <Stylebutton variant='contained' style={{background:"#ffb300"}}><Flash/> BUY NOW</Stylebutton>
   </Container>
  )
}

export default Actionicon