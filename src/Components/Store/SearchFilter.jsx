import React from 'react'
import Search from '../Header/Search'
import { Box } from '@mui/material'
import styled from '@emotion/styled'

const Container = styled(Box)`
`

const SearchFilter = () => {
  return (
    <div style={{height:"55px"}}>
       <Container>
       <Search/> 
       </Container>
    </div>
  )
}

export default SearchFilter