import React from 'react'
import Storecarousal from './Storecarousal'
import { Box,Grid } from '@mui/material'
import Card from './Card'
import SearchFilter from './SearchFilter'
import styled from '@emotion/styled'

const Container1 = styled(Grid)`
display:flex;
flex-direction:row;
margin-top: 2%;
`

const Searcghcontainer = styled(Box)`
width:30%;
height:auto;
border:2px solid orange;
display:flex;
aling-items:center;
justify-content:center;
`

const Rightcomponent = styled(Box)`
display:flex;
aling-items:center;
justify-content:center;
width:70%;
`


const Store = () => {
  return (
    <div>
      <Storecarousal/>
    <Container1>
     <Searcghcontainer>
    <SearchFilter/>  
    </Searcghcontainer> 
    <Rightcomponent>
    <Card/>  
    </Rightcomponent> 
     </Container1>
    </div>    
  )
}

export default Store