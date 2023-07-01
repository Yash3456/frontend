import React from 'react';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home.jsx';
import { Box } from '@mui/material';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Detailsview from './Components/Details/Detailsview';
import Cart from './Components/Cart/Cart';

function App() {
  return (
    <div>
     <BrowserRouter> 
     <Header/>
     <Box style={{marginTop: 55}}>
     <Routes>
     <Route path='/' element={<Home/>} />
     <Route path='/cart' element={<Cart/>} />
     <Route path='/product/:id' element={<Detailsview/>} />
     </Routes>
     </Box>
     </BrowserRouter>
    </div>
  );
}

export default App;
