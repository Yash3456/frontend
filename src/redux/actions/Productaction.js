import axios from "axios";
import * as actiontypes from "../constants/productconstants.js";

const URL = 'https://bakend-xi.vercel.app';

export const Getproducts =()=> async(dispatch)=>{
    try {
      const {data} = await axios.get(`${URL}/products`);
   
      dispatch({type:actiontypes.GET_PRODIUCTS_SUCESS,payload:data})
    } catch (error) {
        dispatch({type:actiontypes.GET_PRODUCT_FAIL,payload:error.message})
    }
}

export  const getproductDetails = (id) => async(dispatch)=>{
try {
   dispatch({type:actiontypes.GET_PRODUCT_DETAILS_REQUEST});

   const {data} = await axios.get(`${URL}/product/${id}`);

    dispatch({type:actiontypes.GET_PRODUCT_DETAILS_SUCESS,payload:data});
} catch (error) {
  dispatch({type:actiontypes.GET_PRODUCT_DETAILS_FAIL,payload:error.message});
}
}