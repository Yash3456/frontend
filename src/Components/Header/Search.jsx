import styled from '@emotion/styled'
import { InputBase,Box, List, ListItem } from '@mui/material'
import React, { useEffect, useState } from 'react'
import SearchIcon from "@mui/icons-material/Search";
import {useDispatch,useSelector} from "react-redux";
import {Getproducts} from "../../redux/actions/Productaction";
import { Link } from 'react-router-dom';


const Styledbox = styled(Box)`
border-radius: 2px;
margin-left: 10px;
width: 38%;
height:60%;
background-color: #fff;
`

const Srachiconwrapper = styled(Box)`
margin-left: auto;

`

const ListWrapper = styled(List)`
color: #000;
background: #FFFFFF;
margin-top: 18px;
margin-right:12px;
border-radius:12px;
`;


const Inputsearchbar = styled(InputBase)`
padding-left:20px;
width:100%;
font-size:unset;
`

const Search = () => {

  const [text,settext] = useState("");
  const [open,setOpen] = useState(true);
  
  const {products} = useSelector(state => state.getproducts);
  const dispatch = useDispatch();
 
  useEffect(()=>{
   dispatch(Getproducts())
  },[dispatch])
  
 const getText = (text)=>{
  settext(text);
  setOpen(false);
 }

  return (
    <Styledbox>
    <Inputsearchbar
    placeholder='Search for Products,Brands and more...'
    onChange={(e)=>getText(e.target.value)}
    />
    <Srachiconwrapper>
         <div >
        {
              text && 
              <ListWrapper hidden={open}>
                {
                  products.filter(product => product.title.longTitle.toLowerCase().includes(text.toLowerCase())).map(product => (
                    <ListItem style={{position:"relative",paddingRight:"12px"}}>
                      <Link 
                        to={`product/${product.id}`}
                        style={{ textDecoration:"none", color:'inherit',cursor:"pointer"}}
                        onClick={() => setOpen(true)}  
                      >
                        {product.title.longTitle}
                      </Link>
                    </ListItem>
                  ))
                }  
              </ListWrapper>
            }
           </div>
    </Srachiconwrapper>
    </Styledbox>
  )
}

export default Search