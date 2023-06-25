import React from 'react'
import Navbar from './Navbar'
import Banner from './Banner'
import { Box } from '@mui/material'
import styled from '@emotion/styled'

const boxcomponent = styled(Box)`
padding:10px;
background:"#F2F2F2";
`

const Home = () => {
  return (
<> 
<Navbar/>
<Box>
<Banner/>
</Box>
</>
    )
}

export default Home