import styled from '@emotion/styled'
import { Box, Button, Dialog, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { authenticateLogin} from '../../Service/api'

const Textlabel = styled(Box)`
 height:70vh;
 width:90vh; 
`

const Imagebox = styled(Box)`
background:#2874f0 url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png) center 85% no-repeat;
height:85.5%;
border-top-right-radius:10px;
width:30%;
padding: 45px 35px;
&>p,&>h5{
  color:#ffffff;
  font-weight:500;
}
`

const Wrapper = styled(Box)`
padding: 25px 35px;
    display: flex;
    flex: 1;
    overflow: auto;
    flex-direction: column;
    & > div, & > button, & > p {
        margin-top: 20px;
    }
`

const LoginButton = styled(Button)`
text-transform: none;
background:#FB641B;
color:#fff;
height: 48px;
border-radius: 2px;
`
const RequestOTP = styled(Button)`
    text-transform: none;
    background: #fff;
    color: #2874f0;
    height: 48px;
    border-radius: 2px;
    box-shadow: 0 2px 4px 0 rgb(0 0 0 / 20%);
`
const Text = styled(Typography)`
font-size:12px;
color: #878787;
`

const CreateAaccout = styled(Typography)`
margin: auto 0 5px 0;
text-align: center;
color: #2874f0;
font-weight: 600;
font-size: 14px;
cursor: pointer
`

const accountloginview = {
  login: {
    view: 'login',
    heading: 'Login',
    subHeading: 'Get access to your Orders, Wishlist and Recommendations'
},
signup: {
    view: 'signup',
    heading: "Looks like you're new here",
    subHeading: 'Signup with your mobile to get started'
}
}

const signupInitialValues = {
  firstname: '',
  lastname: '',
  username: '',
  email: '',
  password: '',
  phone: ''
};

const LoginDialogue = ({open,setopen}) => {

const [account,toggleacount] = useState(accountloginview.login)
const [signup,setsignp] = useState(signupInitialValues);

const handleclose = () =>{
 setopen(false);
 toggleacount(accountloginview.login);  
}

const inputchange = (e) =>{
  setsignp({...signup, [e.target.name]: e.target.value });
}

const signinfunc = async () =>{
  let response = await authenticateLogin(signup);
}

  return (
    <Dialog open={open} onClose={()=> handleclose()} PaperProps={{sx:{maxWidth:'unset'}}}>
     <Textlabel>
      <Box style={{display:"flex",height:"100%"}}>
      <Imagebox>
    <Typography variant='h5'>{account.heading}</Typography>
    <Typography style={{marginTop:20}}>{account.subHeading}</Typography>
      </Imagebox>
{
  account.view === 'login'?
  <Wrapper>
  <TextField variant="standard" label="Enter Email/Phone Number..."/>
  <TextField variant="standard" label="Enter Password..."/>
  <Text>by continuing, you agree with flipkart terms and conditions.</Text>
  <LoginButton>Login</LoginButton>
  <Typography style={{textAlign:'center'}}>OR</Typography>
  <RequestOTP>Request for OTP</RequestOTP>
  <CreateAaccout onClick={()=> toggleacount(accountloginview.signup)}>New to Flipkart? Create an Account.</CreateAaccout>
</Wrapper>
:
<Wrapper>
<TextField variant="standard" onChange={(e)=> inputchange(e)} name='firstname' label="Enter FirstName..."/>
<TextField variant="standard" onChange={(e)=> inputchange(e)} name='lastname' label="Enter LastName..."/>
<TextField variant="standard" onChange={(e)=> inputchange(e)} name='username' label="Enter UserName..."/>
<TextField variant="standard" onChange={(e)=> inputchange(e)} name='email' label="Enter Email..."/>
<TextField variant="standard" onChange={(e)=> inputchange(e)} name='password' label="Enter Password..."/>
<TextField variant="standard" onChange={(e)=> inputchange(e)} name='phone' label="Enter Phone Number..."/>
<LoginButton onClick={()=> signinfunc()}>Continue</LoginButton>

<CreateAaccout onClick={()=> toggleacount(accountloginview.login)}>Existing User? Login</CreateAaccout>
</Wrapper>
}
      </Box>
     </Textlabel>
    </Dialog>
  )
}

export default LoginDialogue