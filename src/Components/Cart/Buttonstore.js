import {ButtonGroup, Box, Button,styled } from '@mui/material'
import React, { useState } from 'react'
import { UseSelector, useSelector } from 'react-redux/es/hooks/useSelector'

const Component = styled(ButtonGroup)`
    margin-top: 30px;
`;

const StyledButton = styled(Button)`
    border-radius: 50%;
`;

const Buttonstore = ({data}) => {

 const [counter,setcounter] = useState(data.quantity);

 const increamentel = () =>{
    setcounter(counter => counter+1);
 }

 const decremental = () =>{
    if(counter>0){
      setcounter(counter => counter-1);
    }
  }

  return (
    <Component>
    {/* <StyledButton disabled={counter===1}>-</StyledButton>
    <Button disabled>{counter}</Button>
    <StyledButton>+</StyledButton> */}
    </Component>
  )
}

export default Buttonstore