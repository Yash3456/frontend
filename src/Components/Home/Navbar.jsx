import { Box,Typography,styled } from '@mui/material'
import React from 'react'
import { navData } from '../../Constraints/Data'

const Container1 = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  margin: '55px 130px 0 130px !important',
  overflowX: 'overlay',
  background:"#fff",
  [theme.breakpoints.down('lg')]: {
      margin: '0px !important'
  }
}))
const Container2 = styled(Box)`
padding:12px 8px;
text-align:center;
`
const Texted = styled(Typography)`
font-size: 16px;
font-weight:600;
font-family:inherit;
`

const Navbar = () => {
  return (
    <Container1>
        {
            navData.map(data=>{
            return (
            <Container2 >
            <img src={data.url} alt="nav" style={{width:64}}/>
            <Texted>{data.text}</Texted>
            </Container2>
            )})
        }
    </Container1>
  )
}

export default Navbar