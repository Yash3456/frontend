import styled from '@emotion/styled'
import { InputBase,Box } from '@mui/material'
import React from 'react'
import SearchIcon from "@mui/icons-material/Search";


const Styledbox = styled(Box)`
width:38%;
background:#fff;
border-radius:2px;
margin-left:10px;
display:flex;
`
const Srachiconwrapper = styled(Box)`
color:blue;
padding:5px;
display:flex;
`

const Inputsearchbar = styled(InputBase)`
padding-left:20px;
width:100%;
font-size:unset;
`

const Search = () => {
  return (
    <Styledbox>
    <Inputsearchbar
    placeholder='Search for Products,Brands and more...'
    />
    <Srachiconwrapper>
        <SearchIcon/>
    </Srachiconwrapper>
    </Styledbox>
  )
}

export default Search