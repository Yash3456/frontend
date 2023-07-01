import styled from '@emotion/styled';
import { Box, Typography } from '@mui/material'
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import React, { useState } from 'react'
import {PowerSettingsNew} from "@mui/icons-material";
import swal from 'sweetalert';

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

 const confirmation = ()=>{
  swal({
    title: "Are you sure?",
    text: "Are you sure that you want to leave this page?",
    icon: "warning",
    dangerMode: true,
  })
  .then(willDelete => {
    if (willDelete) {
      swal("Logged Out!", "You have Successfully logged out", "success");
      handleClose();
  logout();
    }
  });
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
        <MenuItem onClick={()=> confirmation()}>
        <PowerSettingsNew color='primary' fontSize='small'/>
        <Logout>Logout</Logout>
        </MenuItem>
      </Component>
    </Box>
    </>
  )
}

export default Profile

// rzp_test_ZuggJ8zHrbU3nW keyid

// rzp_test_ZuggJ8zHrbU3nW keysecret
