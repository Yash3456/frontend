import styled from '@emotion/styled';
import { Box, Typography } from '@mui/material'
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import React, { useState } from 'react'
import {PowerSettingsNew} from "@mui/icons-material";

const Component = styled(Menu)`
margin-top:5px;
`

const Logout = styled(Typography)`
font-size:14px;
margin-left:10px;
`


const Profile = ({account,setaccount}) => {

   const[state,setmenu] = useState(false);
   
 const handleClick = (event) =>{
    setmenu(event.currentTarget);
 } 

 const handleClose = () => {
    setmenu(false);
 }

 const logout =()=>{
setaccount("");
 }

  return (
    <>
    <Box>
    <Typography onClick={handleClick} style={{marginTop:2, cursor:'pointer'}}>{account}</Typography>
    <Component
        anchorEl={state}
        open={Boolean(state)}
        onClose={handleClose}
      >
        <MenuItem onClick={()=> { handleClose(); logout();}}>
        <PowerSettingsNew color='primary' fontSize='small'/>
        <Logout>Logout</Logout>
        </MenuItem>
      </Component>
    </Box>
    </>
  )
}

export default Profile