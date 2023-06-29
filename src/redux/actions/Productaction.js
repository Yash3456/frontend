import axios from "axios";
import * as actiontypes from "../constants/productconstants.js";

const URL = 'http://localhost:8000';

export const Getproducts =()=> async(dispatch)=>{
    try {
      const {data} = await axios.get(`${URL}/products`);
   
      dispatch({type:actiontypes.GET_PRODIUCTS_SUCESS,payload:data})
    } catch (error) {
        dispatch({type:actiontypes.GET_PRODUCT_FAIL,payload:error.message})
    }
}